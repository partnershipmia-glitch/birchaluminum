import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CATEGORIES = ["Aluminum", "Scrap & Recycling", "Rare Earths", "Automotive", "Technology", "Regulation", "M&A"];
const MAX_NEW_PER_SOURCE = 8;
const MAX_SUMMARIZE = 15;

const decode = (s: string) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&#39;|&#8217;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#8211;/g, "–").trim();
const tag = (x: string, t: string) => { const m = x.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`)); return m ? decode(m[1]) : ""; };

async function summarize(items: { id: string; title: string; source: string }[]) {
  const apiKey = Deno.env.get("LOVABLE_API_KEY")!;
  const prompt = `You classify and summarize metals-industry news headlines. For each item return a one-sentence neutral summary (max 30 words, based only on the headline; do not invent numbers) and one category from: ${CATEGORIES.join(", ")}.
Return ONLY JSON: {"items":[{"id":"...","summary":"...","category":"..."}]}
Items:
${items.map((i) => `${i.id} | ${i.source} | ${i.title}`).join("\n")}`;
  const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "fetch" },
    body: JSON.stringify({ model: "openai/gpt-6-astra", input: prompt, stream: true, store: false, reasoning: { effort: "low", summary: "auto" }, include: ["reasoning.encrypted_content"] }),
  });
  if (!res.ok) return { status: res.status, error: await res.text() };
  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "", text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split("\n"); buf = lines.pop() ?? "";
    for (const l of lines) {
      if (!l.startsWith("data:")) continue;
      try { const e = JSON.parse(l.slice(5)); if (e.type === "response.output_text.delta") text += e.delta; } catch { /* skip */ }
    }
  }
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) return { status: 200, error: "empty" };
  return { status: 200, items: JSON.parse(m[0]).items as { id: string; summary: string; category: string }[] };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const now = new Date();
  const { data: st } = await db.from("job_state").select("*").eq("job", "fetch-news").maybeSingle();
  if (st?.locked_until && new Date(st.locked_until) > now) return new Response("locked", { headers: corsHeaders });
  // Public endpoint: at most one run every ~5.5 hours regardless of caller.
  if (st?.last_run && now.getTime() - new Date(st.last_run).getTime() < 5.5 * 3600000) return new Response("recent", { headers: corsHeaders });
  await db.from("job_state").upsert({ job: "fetch-news", locked_until: new Date(now.getTime() + 5 * 60000).toISOString() });

  let inserted = 0, summarized = 0, pause: string | null = st?.paused_reason ?? null;
  try {
    const { data: sources } = await db.from("news_sources").select("*").eq("active", true).not("feed_url", "is", null);
    for (const s of sources ?? []) {
      try {
        const xml = await (await fetch(s.feed_url!, { headers: { "User-Agent": "BirchAluminumMonitor/1.0" } })).text();
        const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, MAX_NEW_PER_SOURCE).map((m) => {
          const x = m[1];
          let title = tag(x, "title"); let source = s.name;
          const src = tag(x, "source");
          if (src && s.feed_url!.includes("news.google.com")) { source = src; title = title.replace(new RegExp(`\\s+-\\s+${src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`), ""); }
          const pd = tag(x, "pubDate");
          return { source_id: s.id, source_name: source, url: tag(x, "link"), title, published_at: pd ? new Date(pd).toISOString() : now.toISOString() };
        }).filter((i) => i.url && i.title);
        if (items.length) {
          const { data } = await db.from("news_articles").upsert(items, { onConflict: "url", ignoreDuplicates: true }).select("id");
          inserted += data?.length ?? 0;
        }
      } catch (e) { console.error("feed failed", s.name, e); }
    }

    // Summaries (paused on 402/403 until a later run's single probe succeeds)
    const limit = pause ? 1 : MAX_SUMMARIZE;
    const { data: todo } = await db.from("news_articles").select("id,title,source_name").eq("summarized", false).order("published_at", { ascending: false }).limit(limit);
    if (todo?.length) {
      const r = await summarize(todo.map((t) => ({ id: t.id, title: t.title, source: t.source_name })));
      if (r.status === 402 || r.status === 403) pause = `AI paused (${r.status})`;
      else if (r.items) {
        pause = null;
        for (const it of r.items) {
          const cat = CATEGORIES.includes(it.category) ? it.category : "Aluminum";
          await db.from("news_articles").update({ summary: it.summary, category: cat, summarized: true }).eq("id", it.id);
          summarized++;
        }
      } else console.error("summarize", r);
    }
  } finally {
    await db.from("job_state").upsert({ job: "fetch-news", locked_until: null, paused_reason: pause, last_run: new Date().toISOString() });
  }
  return new Response(JSON.stringify({ inserted, summarized, pause }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
