import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSessionUser, displayName, signInWithGoogle } from "./useSession";
import { timeAgo } from "./useMonitorData";

type C = { id: string; parent_id: string | null; user_id: string; author_name: string; body: string; hidden: boolean; created_at: string };

const Comments = ({ articleId }: { articleId: string }) => {
  const { user, isAdmin } = useSessionUser();
  const qc = useQueryClient();
  const key = ["comments", articleId];
  const { data = [] } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase.from("comments").select("*").eq("article_id", articleId).order("created_at");
      if (error) throw error;
      return data as C[];
    },
  });
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const post = async (body: string, parent: string | null) => {
    if (!user || !body.trim()) return;
    const { error } = await supabase.from("comments").insert({ article_id: articleId, parent_id: parent, user_id: user.id, author_name: displayName(user), body: body.trim().slice(0, 2000) });
    if (error) return toast.error(error.message);
    parent ? (setReplyText(""), setReplyTo(null)) : setText("");
    qc.invalidateQueries({ queryKey: key });
  };
  const report = async (id: string) => {
    if (!user) return signInWithGoogle();
    const { error } = await supabase.from("comment_reports").insert({ comment_id: id, user_id: user.id });
    toast[error ? "error" : "success"](error ? "Already reported." : "Reported. Thank you.");
  };
  const remove = async (id: string) => { await supabase.from("comments").delete().eq("id", id); qc.invalidateQueries({ queryKey: key }); };
  const toggleHide = async (c: C) => { await supabase.from("comments").update({ hidden: !c.hidden }).eq("id", c.id); qc.invalidateQueries({ queryKey: key }); };

  const render = (c: C, depth = 0) => (
    <div key={c.id} className={depth ? "ml-5 border-l border-border pl-3" : ""}>
      <div className={`py-2 ${c.hidden ? "opacity-50" : ""}`}>
        <p className="text-xs"><span className="font-bold">{c.author_name}</span> <span className="text-muted-foreground">· {timeAgo(c.created_at)}{c.hidden ? " · hidden" : ""}</span></p>
        <p className="whitespace-pre-wrap text-sm">{c.body}</p>
        <div className="mt-1 flex gap-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {depth < 2 && <button className="hover:text-foreground" onClick={() => (user ? setReplyTo(c.id) : signInWithGoogle())}>Reply</button>}
          {user?.id !== c.user_id && <button className="hover:text-foreground" onClick={() => report(c.id)}>Report</button>}
          {(user?.id === c.user_id || isAdmin) && <button className="hover:text-foreground" onClick={() => remove(c.id)}>Delete</button>}
          {isAdmin && <button className="hover:text-foreground" onClick={() => toggleHide(c)}>{c.hidden ? "Unhide" : "Hide"}</button>}
        </div>
        {replyTo === c.id && (
          <div className="mt-2 flex gap-2">
            <input value={replyText} onChange={(e) => setReplyText(e.target.value)} maxLength={2000} placeholder="Write a reply…" className="flex-1 border border-border bg-background px-2 py-1.5 text-sm outline-none focus:border-foreground" />
            <button onClick={() => post(replyText, c.id)} className="bg-foreground px-3 text-xs font-bold uppercase text-background">Post</button>
          </div>
        )}
      </div>
      {data.filter((r) => r.parent_id === c.id).map((r) => render(r, depth + 1))}
    </div>
  );

  return (
    <div className="mt-3 border-t border-border pt-3">
      <p className="mb-1 text-[11px] font-bold uppercase tracking-wider">Discussion ({data.filter((c) => !c.hidden).length})</p>
      {data.filter((c) => !c.parent_id).map((c) => render(c))}
      {user ? (
        <div className="mt-2 flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} maxLength={2000} placeholder={`Comment as ${displayName(user)}…`} className="flex-1 border border-border bg-background px-2 py-1.5 text-sm outline-none focus:border-foreground" />
          <button onClick={() => post(text, null)} className="bg-foreground px-3 text-xs font-bold uppercase text-background">Post</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="mt-2 border border-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background">Sign in with Google to comment</button>
      )}
    </div>
  );
};

export default Comments;
