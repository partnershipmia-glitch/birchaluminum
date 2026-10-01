import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useCommodities, usePrices, latestByCommodity, fmtChange, fmtPrice, timeAgo } from "./useMonitorData";

const RANGES = { "1D": 1, "1W": 7, "1M": 30, "3M": 90, "1Y": 365 } as const;
type Range = keyof typeof RANGES;

const PricePanel = () => {
  const { data: commodities = [] } = useCommodities();
  const { data: points = [] } = usePrices(400);
  const [range, setRange] = useState<Range>("1M");
  const [selId, setSelId] = useState<string | null>(null);
  const sel = commodities.find((c) => c.id === selId) ?? commodities[0];
  const latest = latestByCommodity(points);

  const series = useMemo(() => {
    if (!sel) return [];
    const since = Date.now() - RANGES[range] * 864e5;
    return points.filter((p) => p.commodity_id === sel.id && new Date(p.recorded_at).getTime() >= since)
      .map((p) => ({ t: new Date(p.recorded_at).getTime(), price: p.price }));
  }, [points, sel, range]);

  const first = series[0]?.price, last = series[series.length - 1]?.price;

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-4">
        <h2 className="text-sm font-bold uppercase tracking-wider">Market Prices</h2>
      </div>
      {sel && (
        <div className="p-4">
          <p className="font-bold">{sel.name}</p>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{sel.unit} · {sel.basis} · {sel.source}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold">{last != null ? fmtPrice(last, sel.unit) : "—"}</span>
            {first != null && last != null && series.length > 1 && (
              <span className="font-mono text-xs font-bold">{fmtChange(last - first, sel.unit)} ({(((last - first) / first) * 100).toFixed(2)}%) {range}</span>
            )}
          </div>
          <div className="mt-3 flex gap-1">
            {(Object.keys(RANGES) as Range[]).map((r) => (
              <button key={r} onClick={() => setRange(r)} className={`px-2 py-1 text-[11px] font-bold border ${range === r ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{r}</button>
            ))}
          </div>
          <div className="mt-3 h-44">
            {series.length > 1 ? (
              <ResponsiveContainer>
                <LineChart data={series}>
                  <CartesianGrid stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="t" type="number" domain={["dataMin", "dataMax"]} scale="time" tickFormatter={(t) => new Date(t).toLocaleDateString(undefined, { month: "short", day: "numeric" })} tick={{ fontSize: 10 }} />
                  <YAxis domain={["auto", "auto"]} tick={{ fontSize: 10 }} width={44} />
                  <Tooltip labelFormatter={(t) => new Date(t as number).toLocaleString()} formatter={(v: number) => fmtPrice(v, sel.unit)} />
                  <Line dataKey="price" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="flex h-full items-center justify-center text-center text-xs text-muted-foreground">Not enough entries in this range yet.</p>
            )}
          </div>
        </div>
      )}
      <ul className="border-t border-border text-sm">
        {commodities.map((c) => {
          const l = latest.get(c.id);
          const diff = l?.prev ? l.last.price - l.prev.price : 0;
          return (
            <li key={c.id}>
              <button onClick={() => setSelId(c.id)} className={`flex w-full items-center gap-2 border-b border-border/60 px-4 py-2 text-left hover:bg-secondary ${sel?.id === c.id ? "bg-secondary" : ""}`}>
                <span className="flex-1 truncate">
                  <span className="block font-bold">{c.name}</span>
                  <span className="block text-[10px] uppercase text-muted-foreground">{l ? `updated ${timeAgo(l.last.recorded_at)}` : "awaiting entry"}</span>
                </span>
                <span className="text-right font-mono text-xs">
                  <span className="block font-bold">{l ? fmtPrice(l.last.price, c.unit) : "—"}</span>
                  {l?.prev && <span className="block">{diff > 0 ? "▲" : diff < 0 ? "▼" : "■"} {fmtChange(diff, c.unit)}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PricePanel;
