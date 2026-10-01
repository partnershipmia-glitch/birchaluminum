import { useState } from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { useCommodities, usePrices, latestByCommodity, fmtPrice, timeAgo } from "@/components/monitor/useMonitorData";
import { useSessionUser, signInWithGoogle } from "@/components/monitor/useSession";

const MonitorAdmin = () => {
  const { user, isAdmin } = useSessionUser();
  const { data: commodities = [] } = useCommodities();
  const { data: points = [] } = usePrices(30);
  const latest = latestByCommodity(points);
  const [vals, setVals] = useState<Record<string, string>>({});
  const qc = useQueryClient();

  const save = async () => {
    const rows = Object.entries(vals).filter(([, v]) => v.trim() !== "" && !isNaN(Number(v))).map(([commodity_id, v]) => ({ commodity_id, price: Number(v) }));
    if (!rows.length) return toast.error("Enter at least one price.");
    const { error } = await supabase.from("price_points").insert(rows);
    if (error) return toast.error(error.message);
    toast.success(`Saved ${rows.length} price(s).`);
    setVals({});
    qc.invalidateQueries({ queryKey: ["prices"] });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto max-w-3xl px-5 py-10">
        <Link to="/industry-monitor" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground">← Industry Monitor</Link>
        <h1 className="mb-6 mt-2 text-3xl font-bold">Enter prices</h1>
        {!user && <button onClick={signInWithGoogle} className="border border-foreground px-4 py-2 text-sm font-bold uppercase">Sign in with Google</button>}
        {user && !isAdmin && <p className="text-muted-foreground">Your account does not have price-entry access.</p>}
        {isAdmin && (
          <>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border text-left text-xs uppercase text-muted-foreground"><th className="py-2">Item</th><th>Last</th><th>New price</th></tr></thead>
              <tbody>
                {commodities.map((c) => {
                  const l = latest.get(c.id);
                  return (
                    <tr key={c.id} className="border-b border-border/60">
                      <td className="py-2"><b>{c.name}</b><span className="block text-[10px] uppercase text-muted-foreground">{c.unit} · {c.basis}</span></td>
                      <td className="font-mono text-xs">{l ? `${fmtPrice(l.last.price, c.unit)} · ${timeAgo(l.last.recorded_at)}` : "—"}</td>
                      <td><input inputMode="decimal" value={vals[c.id] ?? ""} onChange={(e) => setVals((v) => ({ ...v, [c.id]: e.target.value }))} placeholder={c.unit} className="w-28 border border-border px-2 py-1 font-mono" /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button onClick={save} className="mt-6 bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary">Save prices</button>
          </>
        )}
      </main>
    </div>
  );
};

export default MonitorAdmin;
