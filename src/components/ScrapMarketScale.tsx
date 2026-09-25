import NorthAmericaFlows, { RatioCards } from "./NorthAmericaFlows";

// UN Comtrade via World Bank WITS, HS 760200 exports, 2024, thousand metric tons
const exporters = [
  { name: "United States", kt: 2053.1 },
  { name: "Germany", kt: 1215.0 },
  { name: "Canada", kt: 632.5 },
  { name: "Mexico", kt: 404.4 },
  { name: "Brazil", kt: 52.7 },
];
const MAX = exporters[0].kt;

const fmt = (kt: number) => (kt >= 1000 ? `${(kt / 1000).toFixed(2)}M MT` : `${Math.round(kt)}K MT`);

// Bilateral flows, HS 7602, 2024 (thousand MT)
const flows = { canUsa: 401.1, mexUsa: 234.1, usaCan: 114.1, usaMex: 119.6, usaWorld: 2053.1 };
const w = (kt: number) => Math.max(4, (kt / flows.usaWorld) * 90);

const ScrapMarketScale = () => (
  <section className="section-padding bg-background border-b border-border">
    <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
      <p className="text-minimal text-brand mb-3">The Scale of the U.S. Scrap Market</p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10 max-w-4xl">
        The United States Is One of the World's Largest Aluminum Scrap Markets.
      </h2>

      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-5">
        Aluminum scrap exports, metric tons — HS 7602, 2024
      </h3>
      <div className="space-y-4">
        {exporters.map((e) => {
          const us = e.name === "United States";
          return (
            <div key={e.name} className="grid grid-cols-[110px_1fr] sm:grid-cols-[160px_1fr] items-center gap-4">
              <span className={`uppercase font-bold ${us ? "text-lg" : "text-sm text-muted-foreground"}`}>{e.name}</span>
              <div className="flex items-center gap-3">
                <div className={`${us ? "h-12 bg-brand" : "h-8 bg-metallic"}`} style={{ width: `${(e.kt / MAX) * 80}%` }} />
                <span className={`font-bold whitespace-nowrap ${us ? "text-2xl" : ""}`}>{fmt(e.kt)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
        Source: UN Comtrade / World Bank WITS, HS 7602 — Aluminum Waste and Scrap, 2024 exports. Export volume only, not total market size.
      </p>

      <RatioCards />

      <NorthAmericaFlows />
      <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
        Source: UN Comtrade / World Bank WITS; USITC — HS 7602 bilateral exports by tonnage, 2024. Line width proportional to tonnage. USA → Global includes Canada and Mexico.
      </p>

      <p className="mt-10 text-xl sm:text-2xl font-bold border-l-4 border-brand pl-4">
        This is not a feedstock market that needs to be created. A large physical scrap market already exists.
      </p>
    </div>
  </section>
);

export default ScrapMarketScale;
