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

      <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mt-8">
        <p className="bg-background p-6 text-2xl sm:text-3xl font-bold">U.S. scrap exports <span className="text-brand">≈ 3.2×</span> Canada</p>
        <p className="bg-background p-6 text-2xl sm:text-3xl font-bold">U.S. scrap exports <span className="text-brand">≈ 5×</span> Mexico</p>
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wider mt-16 mb-6">North American Scrap Flows</h3>
      <svg viewBox="0 0 900 420" className="w-full h-auto" aria-label="North American aluminum scrap flows 2024">
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--metallic))" />
          </marker>
          <marker id="ahb" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2" markerHeight="2" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--brand))" />
          </marker>
        </defs>
        {/* Nodes */}
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
        {/* Canada <-> USA */}
        <path d="M200,70 C280,70 300,150 340,170" stroke="hsl(var(--metallic))" strokeWidth={w(flows.canUsa)} fill="none" markerEnd="url(#ah)" />
        <text x="250" y="60" fontSize="13" fontWeight="700" fill="hsl(var(--foreground))">CAN → USA {Math.round(flows.canUsa)}K MT</text>
        <path d="M360,170 C330,120 280,110 210,110" stroke="hsl(var(--metallic))" strokeWidth={w(flows.usaCan)} fill="none" markerEnd="url(#ah)" opacity="0.7" />
        <text x="215" y="140" fontSize="13" fontWeight="700" fill="hsl(var(--muted-foreground))">USA → CAN {Math.round(flows.usaCan)}K MT</text>
        {/* Mexico <-> USA */}
        <path d="M200,330 C280,330 300,270 340,250" stroke="hsl(var(--metallic))" strokeWidth={w(flows.mexUsa)} fill="none" markerEnd="url(#ah)" />
        <text x="250" y="365" fontSize="13" fontWeight="700" fill="hsl(var(--foreground))">MEX → USA {Math.round(flows.mexUsa)}K MT</text>
        <path d="M360,250 C330,300 280,300 210,300" stroke="hsl(var(--metallic))" strokeWidth={w(flows.usaMex)} fill="none" markerEnd="url(#ah)" opacity="0.7" />
        <text x="215" y="285" fontSize="13" fontWeight="700" fill="hsl(var(--muted-foreground))">USA → MEX {Math.round(flows.usaMex)}K MT</text>
        {/* USA -> Global */}
        <path d="M490,210 L760,210" stroke="hsl(var(--brand))" strokeWidth={w(flows.usaWorld)} fill="none" markerEnd="url(#ahb)" />
        <text x="625" y="140" textAnchor="middle" fontSize="18" fontWeight="800" fill="hsl(var(--foreground))">USA → GLOBAL MARKETS</text>
        <text x="625" y="300" textAnchor="middle" fontSize="26" fontWeight="800" fill="hsl(var(--foreground))">~2.05M MT</text>
      </svg>
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
