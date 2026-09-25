import { useEffect, useRef, useState } from "react";

// Bilateral flows, HS 7602, 2024 (thousand MT) — UN Comtrade / WITS
const TOTAL = 2053.1;
const w = (kt: number) => Math.max(4, (kt / TOTAL) * 90);

const FLOWS = [
  { id: "canUsa", label: "CAN → USA", kt: 401.1, d: "M200,70 C280,70 300,150 340,170", lx: 250, ly: 60 },
  { id: "usaCan", label: "USA → CAN", kt: 114.1, d: "M360,170 C330,120 280,110 210,110", lx: 215, ly: 140 },
  { id: "mexUsa", label: "MEX → USA", kt: 234.1, d: "M200,330 C280,330 300,270 340,250", lx: 250, ly: 365 },
  { id: "usaMex", label: "USA → MEX", kt: 119.6, d: "M360,250 C330,300 280,300 210,300", lx: 215, ly: 285 },
  { id: "usaWorld", label: "USA → GLOBAL MARKETS", kt: TOTAL, d: "M490,210 L770,210", lx: 630, ly: 140, big: true },
];

const useInView = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
};

const CountUp = ({ to, start, decimals = 0 }: { to: number; start: boolean; decimals?: number }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <>{v.toFixed(decimals)}</>;
};

export const RatioCards = () => {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="grid sm:grid-cols-2 gap-px bg-border border border-border mt-8">
      <p className="bg-background p-6 text-2xl sm:text-3xl font-bold">
        U.S. scrap exports <span className="text-brand">≈ <CountUp to={3.2} start={seen} decimals={1} />×</span> Canada
      </p>
      <p className="bg-background p-6 text-2xl sm:text-3xl font-bold">
        U.S. scrap exports <span className="text-brand">≈ <CountUp to={5} start={seen} />×</span> Mexico
      </p>
    </div>
  );
};

const NorthAmericaFlows = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [ref, seen] = useInView<SVGSVGElement>();
  const active = FLOWS.find((f) => f.id === hover);

  return (
    <>
      <h3 className="text-xl font-bold uppercase tracking-wider mt-16 mb-2">North American Scrap Flows</h3>
      <p className="text-sm text-muted-foreground mb-4 h-5">
        {active ? `${active.label}: ${Math.round(active.kt).toLocaleString()}K MT (2024)` : "Hover a flow to see its tonnage."}
      </p>
      <svg ref={ref} viewBox="0 0 900 420" className="w-full h-auto" aria-label="North American aluminum scrap flows 2024">
        {[
          { x: 40, y: 40, t: "CANADA" },
          { x: 40, y: 300, t: "MEXICO" },
          { x: 330, y: 170, t: "USA", hl: true },
        ].map((n) => (
          <g key={n.t}>
            <rect x={n.x} y={n.y} width="160" height="80" fill={n.hl ? "hsl(var(--foreground))" : "hsl(var(--secondary))"} />
            <text x={n.x + 80} y={n.y + 48} textAnchor="middle" fontSize="20" fontWeight="800" fill={n.hl ? "hsl(var(--background))" : "hsl(var(--foreground))"}>{n.t}</text>
          </g>
        ))}
        {FLOWS.map((f) => {
          const dim = hover && hover !== f.id;
          const color = f.big ? "hsl(var(--brand))" : "hsl(var(--metallic))";
          const dots = Math.max(2, Math.round((f.kt / TOTAL) * 10));
          return (
            <g
              key={f.id}
              onMouseEnter={() => setHover(f.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer", opacity: dim ? 0.2 : 1, transition: "opacity .25s" }}
            >
              <path
                d={f.d}
                stroke={color}
                strokeWidth={w(f.kt)}
                fill="none"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={seen ? 0 : 1}
                style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
              />
              <path d={f.d} stroke="transparent" strokeWidth={Math.max(24, w(f.kt))} fill="none" />
              {seen &&
                Array.from({ length: dots }).map((_, i) => (
                  <circle key={i} r={f.big ? 5 : 3} fill="hsl(var(--background))">
                    <animateMotion dur={f.big ? "2.4s" : "3s"} begin={`${(i * (f.big ? 2.4 : 3)) / dots}s`} repeatCount="indefinite" path={f.d} />
                  </circle>
                ))}
              <text x={f.lx} y={f.ly} textAnchor={f.big ? "middle" : "start"} fontSize={f.big ? 18 : 13} fontWeight={f.big ? 800 : 700} fill="hsl(var(--foreground))">
                {f.big ? f.label : `${f.label} ${Math.round(f.kt)}K MT`}
              </text>
            </g>
          );
        })}
        <text x="630" y="300" textAnchor="middle" fontSize="26" fontWeight="800" fill="hsl(var(--foreground))">~2.05M MT</text>
      </svg>
    </>
  );
};

export default NorthAmericaFlows;
