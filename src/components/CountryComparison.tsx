import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type Row = {
  country: string;
  can: number | null; // beverage can recycling rate, %
  recovered: number | null; // scrap recovered/recycled, thousand MT
  exp: number; // HS 7602 exports, $M 2024
  imp: number; // HS 7602 imports, $M 2024
};

// Trade: UN Comtrade via World Bank WITS, HS 760200, 2024 (USD)
// Beverage can: Metal Packaging Europe & European Aluminium 2023 report; ABAL (Brazil); The Aluminum Association 2023 (USA)
// Recovered: USGS MCS 2025 (U.S. secondary production from new + old scrap, 2024e)
const rows: Row[] = [
  { country: "USA", can: 43, recovered: 3600, exp: 3982, imp: 1334 },
  { country: "Canada", can: null, recovered: null, exp: 1272, imp: 227 },
  { country: "Mexico", can: null, recovered: null, exp: 754, imp: 265 },
  { country: "Brazil", can: 97, recovered: null, exp: 88, imp: 311 },
  { country: "Germany", can: 99, recovered: null, exp: 2213, imp: 1869 },
  { country: "Finland", can: 99, recovered: null, exp: 136, imp: 11 },
  { country: "Norway", can: 96, recovered: null, exp: 175, imp: 102 },
  { country: "Belgium", can: 95, recovered: null, exp: 439, imp: 324 },
  { country: "Italy", can: 94, recovered: null, exp: 400, imp: 1050 },
];

const cols: { key: keyof Row; label: string; fmt: (v: number) => string }[] = [
  { key: "can", label: "Beverage Can Recycling Rate", fmt: (v) => `${v}%` },
  { key: "recovered", label: "Scrap Recovered / Recycled", fmt: (v) => `${(v / 1000).toFixed(1)}M MT` },
  { key: "exp", label: "Scrap Exports ($, HS 7602)", fmt: (v) => (v >= 1000 ? `$${(v / 1000).toFixed(2)}B` : `$${v}M`) },
  { key: "imp", label: "Scrap Imports ($, HS 7602)", fmt: (v) => (v >= 1000 ? `$${(v / 1000).toFixed(2)}B` : `$${v}M`) },
];

const CountryComparison = () => {
  const [sort, setSort] = useState<{ key: keyof Row; dir: 1 | -1 }>({ key: "can", dir: -1 });

  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      const av = a[sort.key], bv = b[sort.key];
      if (av === null) return 1;
      if (bv === null) return -1;
      if (typeof av === "string") return (av as string).localeCompare(bv as string) * sort.dir;
      return ((av as number) - (bv as number)) * sort.dir;
    });
  }, [sort]);

  const cans = rows.filter((r) => r.can !== null).sort((a, b) => (b.can as number) - (a.can as number));

  const toggle = (key: keyof Row) =>
    setSort((s) => (s.key === key ? { key, dir: (s.dir * -1) as 1 | -1 } : { key, dir: -1 }));

  const Icon = ({ k }: { k: keyof Row }) =>
    sort.key !== k ? <ArrowUpDown className="w-3 h-3 opacity-40" /> : sort.dir === -1 ? <ArrowDown className="w-3 h-3 text-brand" /> : <ArrowUp className="w-3 h-3 text-brand" />;

  return (
    <section className="section-padding bg-background border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <p className="text-minimal text-brand mb-3">Global Benchmarks</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">HOW DOES THE U.S. COMPARE?</h2>
        <p className="text-lg sm:text-xl text-muted-foreground font-semibold max-w-3xl mb-12">
          Different markets show how much aluminum can remain inside a circular manufacturing system.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Bar chart */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Beverage Can Recycling</h3>
            <div className="space-y-3">
              {cans.map((r) => {
                const us = r.country === "USA";
                return (
                  <div key={r.country} className="grid grid-cols-[80px_1fr_48px] items-center gap-3">
                    <span className={`text-sm font-bold ${us ? "" : "text-muted-foreground"}`}>{r.country}</span>
                    <div className="h-7 bg-secondary">
                      <div
                        className={`h-full ${us ? "bg-foreground" : "bg-brand"} transition-all duration-1000`}
                        style={{ width: `${r.can}%` }}
                      />
                    </div>
                    <span className="text-right font-bold">{r.can}%</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
              Source: Metal Packaging Europe & European Aluminium, 2023 data (Germany, Finland, Norway, Belgium, Italy); ABAL, Brazil; The Aluminum Association, 2023 (USA). Beverage cans only — not total aluminum recycling.
            </p>
          </div>

          {/* Table */}
          <div className="lg:col-span-3 overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3">
                    <button onClick={() => toggle("country")} className="flex items-center gap-1 font-bold uppercase text-xs tracking-wider">
                      Country <Icon k="country" />
                    </button>
                  </th>
                  {cols.map((c) => (
                    <th key={c.key} className="text-right p-3 align-bottom">
                      <button onClick={() => toggle(c.key)} className="inline-flex items-center gap-1 font-bold uppercase text-[10px] tracking-wider text-right leading-tight">
                        {c.label} <Icon k={c.key} />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((r) => (
                  <tr key={r.country} className={`border-t border-border ${r.country === "USA" ? "bg-brand/15 font-bold" : ""}`}>
                    <td className="p-3 font-bold">{r.country}</td>
                    {cols.map((c) => {
                      const v = r[c.key] as number | null;
                      return (
                        <td key={c.key} className={`p-3 text-right tabular-nums ${v === null ? "text-muted-foreground" : ""}`}>
                          {v === null ? "N/A" : c.fmt(v)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
              Sources: Trade — UN Comtrade / World Bank WITS, HS 7602 Aluminum Waste and Scrap, 2024 (USD). Scrap recovered — USGS Mineral Commodity Summaries 2025 (U.S., 2024e). N/A = no directly comparable verified figure.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xl sm:text-2xl font-bold border-l-4 border-brand pl-4">
          High aluminum recovery rates are achievable when collection, sorting and domestic recycling infrastructure work together.
        </p>
      </div>
    </section>
  );
};

export default CountryComparison;
