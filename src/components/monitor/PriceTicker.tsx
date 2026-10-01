import { useCommodities, usePrices, latestByCommodity, fmtChange, fmtPrice, timeAgo } from "./useMonitorData";

const PriceTicker = () => {
  const { data: commodities = [] } = useCommodities();
  const { data: points = [] } = usePrices(30);
  const latest = latestByCommodity(points);

  const items = commodities.map((c) => {
    const l = latest.get(c.id);
    if (!l) return { c, text: "awaiting entry", diff: 0, pct: 0, when: null as string | null, has: false };
    const diff = l.prev ? l.last.price - l.prev.price : 0;
    const pct = l.prev && l.prev.price ? (diff / l.prev.price) * 100 : 0;
    return { c, text: fmtPrice(l.last.price, c.unit), diff, pct, when: l.last.recorded_at, has: true };
  });

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map(({ c, text, diff, pct, when, has }) => (
        <div key={c.id + key} className="flex items-center gap-3 border-r border-primary-foreground/15 px-6 py-3 whitespace-nowrap">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">{c.name}</span>
          <span className="font-mono text-sm font-bold text-brand">{text}</span>
          {has && (
            <span className="font-mono text-xs text-primary-foreground/80">
              {diff > 0 ? "▲" : diff < 0 ? "▼" : "■"} {fmtChange(diff, c.unit)} ({pct >= 0 ? "+" : ""}
              {pct.toFixed(2)}%)
            </span>
          )}
          <span className="text-[10px] uppercase tracking-wider text-primary-foreground/50">
            {c.unit} · {c.basis}
            {when ? ` · updated ${timeAgo(when)}` : ""}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="group relative overflow-hidden bg-primary">
      <style>{`@keyframes bm-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div className="flex w-max group-hover:[animation-play-state:paused]" style={{ animation: "bm-ticker 90s linear infinite" }}>
        {row("a")}
        {row("b")}
      </div>
      <p className="border-t border-primary-foreground/15 px-5 py-1.5 text-[10px] uppercase tracking-wider text-primary-foreground/50">
        Prices are entered manually by the Birch Aluminum desk — not a live exchange feed. Hover to pause.
      </p>
    </div>
  );
};

export default PriceTicker;
