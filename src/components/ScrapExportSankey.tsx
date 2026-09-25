import { useState } from "react";

// UN Comtrade via World Bank WITS, HS 760200, U.S. exports 2024
const TOTAL = { t: 2053.05, v: 3982.0 }; // thousand MT, $M
const rows = [
  { name: "India", t: 407.7, v: 726.0 },
  { name: "Thailand", t: 351.6, v: 698.6 },
  { name: "Malaysia", t: 348.9, v: 667.0 },
  { name: "South Korea", t: 232.3, v: 486.3 },
  { name: "Hong Kong", t: 163.5, v: 317.1 },
  { name: "Mexico", t: 119.6, v: 252.3 },
  { name: "Canada", t: 114.1, v: 227.1 },
];
const other = {
  name: "Other",
  t: +(TOTAL.t - rows.reduce((a, r) => a + r.t, 0)).toFixed(1),
  v: +(TOTAL.v - rows.reduce((a, r) => a + r.v, 0)).toFixed(1),
};
const data = [...rows, other];

const W = 1000, H = 560, SRC_X = 170, DST_X = 700, GAP = 10, TOP = 20;

const ScrapExportSankey = () => {
  const [mode, setMode] = useState<"t" | "v">("t");
  const total = TOTAL[mode];
  const usable = H - TOP * 2 - GAP * (data.length - 1);
  const scale = usable / total;

  let srcY = TOP + (GAP * (data.length - 1)) / 2;
  let dstY = TOP;
  const links = data.map((d, i) => {
    const h = d[mode] * scale;
    const s = srcY, t = dstY;
    srcY += h;
    dstY += h + GAP;
    const mid = (SRC_X + DST_X) / 2;
    const path = `M${SRC_X},${s} C${mid},${s} ${mid},${t} ${DST_X},${t} L${DST_X},${t + h} C${mid},${t + h} ${mid},${s + h} ${SRC_X},${s + h} Z`;
    return { ...d, h, t, path, i };
  });

  const fmt = (d: { t: number; v: number }) =>
    mode === "t" ? `${Math.round(d.t)}K MT` : `$${d.v >= 1000 ? (d.v / 1000).toFixed(2) + "B" : Math.round(d.v) + "M"}`;

  return (
    <section className="section-padding bg-primary text-primary-foreground border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <p className="text-minimal text-brand mb-3">Scrap Flows</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">WHERE DOES AMERICA'S ALUMINUM SCRAP GO?</h2>

        <div className="inline-flex border border-primary-foreground/30 mb-8" role="tablist">
          {(["t", "v"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${mode === m ? "bg-brand text-brand-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
            >
              {m === "t" ? "Tonnage" : "$ Value"}
            </button>
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[640px] h-auto" aria-label="U.S. aluminum scrap exports by destination, 2024">
            <rect x={SRC_X - 16} y={TOP + (GAP * (data.length - 1)) / 2} width={16} height={usable} fill="hsl(var(--brand))" />
            <text x={SRC_X - 26} y={H / 2 - 14} textAnchor="end" fill="currentColor" fontSize="22" fontWeight="800">UNITED STATES</text>
            <text x={SRC_X - 26} y={H / 2 + 10} textAnchor="end" fill="hsl(var(--brand))" fontSize="14" fontWeight="700">~2.05M MT · 2024</text>
            {links.map((l) => (
              <g key={l.name}>
                <path
                  d={l.path}
                  fill={l.name === "Other" ? "hsl(var(--metallic))" : "hsl(var(--brand))"}
                  opacity={l.name === "Other" ? 0.35 : 0.85 - l.i * 0.07}
                  className="transition-all duration-700 hover:opacity-100"
                  style={{ transition: "d 0.7s ease" }}
                >
                  <title>{`${l.name}: ${fmt(l)}`}</title>
                </path>
                <rect x={DST_X} y={l.t} width={10} height={l.h} fill="currentColor" style={{ transition: "all 0.7s ease" }} />
                <text x={DST_X + 20} y={l.t + l.h / 2 + 6} fill="currentColor" fontSize="18" fontWeight="700" style={{ transition: "all 0.7s ease" }}>
                  {l.name}
                  <tspan fill="hsl(var(--brand))" dx="10">{fmt(l)}</tspan>
                  <tspan fill="currentColor" opacity="0.5" dx="8" fontSize="14">{Math.round((l[mode] / total) * 100)}%</tspan>
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/15 border border-primary-foreground/15 mt-8">
          <div className="bg-primary p-8">
            <p className="text-5xl sm:text-7xl font-bold text-brand leading-none">~2.05 MILLION MT</p>
            <p className="mt-3 uppercase tracking-wider text-sm text-primary-foreground/70">exported</p>
          </div>
          <div className="bg-primary p-8">
            <p className="text-5xl sm:text-7xl font-bold text-brand leading-none">~$4 BILLION</p>
            <p className="mt-3 uppercase tracking-wider text-sm text-primary-foreground/70">export value</p>
          </div>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-primary-foreground/60">
          Source: UN Comtrade / World Bank WITS · HS 7602 — Aluminum Waste and Scrap · 2024
        </p>

        <p className="mt-10 text-xl sm:text-2xl font-bold border-l-4 border-brand pl-4">
          Millions of tons of aluminum scrap already move through the U.S. supply chain every year. The opportunity is to capture more processing and manufacturing value domestically.
        </p>
      </div>
    </section>
  );
};

export default ScrapExportSankey;
