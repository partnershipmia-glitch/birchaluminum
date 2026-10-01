import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Comments from "./Comments";
import { timeAgo } from "./useMonitorData";

export const CATEGORIES = ["All", "Aluminum", "Scrap & Recycling", "Rare Earths", "Automotive", "Technology", "Regulation", "M&A"];

type Article = { id: string; title: string; summary: string | null; category: string | null; source_name: string; url: string; published_at: string };

const NewsFeed = ({ category }: { category: string }) => {
  const [open, setOpen] = useState<string | null>(null);
  const { data = [], isLoading } = useQuery({
    queryKey: ["news", category],
    queryFn: async () => {
      let q = supabase.from("news_articles").select("id,title,summary,category,source_name,url,published_at").order("published_at", { ascending: false }).limit(60);
      if (category !== "All") q = q.eq("category", category);
      const { data, error } = await q;
      if (error) throw error;
      return data as Article[];
    },
    refetchInterval: 5 * 60000,
  });

  return (
    <section className="border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 className="text-sm font-bold uppercase tracking-wider">Industry News</h2>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Refreshed every 6 hours</span>
      </div>
      {isLoading && <p className="p-4 text-sm text-muted-foreground">Loading…</p>}
      {!isLoading && !data.length && <p className="p-4 text-sm text-muted-foreground">No articles in this category yet.</p>}
      <ul>
        {data.map((a) => (
          <li key={a.id} className="border-b border-border p-4">
            <div className="mb-1 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
              {a.category && <span className="bg-brand px-1.5 py-0.5 text-primary">{a.category}</span>}
              <span>{a.source_name}</span>
              <span className="text-muted-foreground">· {timeAgo(a.published_at)}</span>
            </div>
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="block font-bold leading-snug hover:underline">{a.title} ↗</a>
            {a.summary && <p className="mt-1 text-sm text-muted-foreground"><span className="text-[10px] font-bold uppercase">AI summary · </span>{a.summary}</p>}
            <button onClick={() => setOpen(open === a.id ? null : a.id)} className="mt-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground">
              {open === a.id ? "Hide discussion" : "Discuss"}
            </button>
            {open === a.id && <Comments articleId={a.id} />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsFeed;
