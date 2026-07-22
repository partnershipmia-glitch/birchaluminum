import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const conditions = [
  {
    title: "Import dependence",
    body: "A significant portion of U.S. aluminum demand is still supplied through imports, exposing manufacturers to tariff, freight, and lead-time volatility.",
  },
  {
    title: "Existing domestic scrap supply",
    body: "Used aluminum wheels are already collected and traded throughout the United States, providing an established, recurring feedstock base.",
  },
  {
    title: "Established industrial demand",
    body: "Automotive, casting, manufacturing, and metal-distribution companies regularly purchase secondary aluminum alloys under standing programs.",
  },
];

// Data from pitch deck — U.S. aluminum market
const marketData = [
  { label: "U.S. Demand", value: 5.4, unit: "M tons" },
  { label: "Imports", value: 3.4, unit: "M tons" },
  { label: "Domestic Primary", value: 0.75, unit: "M tons" },
  { label: "Secondary Supply Gap", value: 1.25, unit: "M tons" },
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Section 01 · Why This Market</p>
        <p className="text-lg md:text-xl text-muted-foreground mb-2">U.S. Buyers Seeking</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-2">
          Reliable Domestic Aluminum Supply
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Built Around Proven Demand</p>
        <p className="text-lg text-muted-foreground max-w-3xl mb-14 leading-relaxed">
          The United States continues to depend on imported aluminum — now under tariffs of up to 50% —
          while manufacturers require dependable domestic supply, consistent specifications, and shorter
          delivery routes. Birch Aluminum will produce secondary alloys from domestically available
          aluminum scrap, beginning with wheel scrap.
        </p>

        <div className="mb-14 border border-border p-6 md:p-10 bg-background">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-2">
            <div>
              <p className="text-minimal text-muted-foreground mb-2">U.S. Aluminum Market</p>
              <h3 className="text-2xl md:text-3xl font-bold">Supply vs. Demand (Annual)</h3>
            </div>
            <p className="text-sm text-muted-foreground">Source: Birch Aluminum Pitch Deck</p>
          </div>
          <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData} margin={{ top: 30, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  label={{ value: "Million tons / year", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "hsl(var(--muted) / 0.3)" }}
                  contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", fontSize: 13 }}
                  formatter={(v: number) => [`${v}M tons`, "Volume"]}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}>
                  <LabelList
                    dataKey="value"
                    position="top"
                    formatter={(v: number) => `${v}M`}
                    style={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 700 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            The U.S. consumes ~5.4M tons of aluminum annually, but imports over 60% of that supply.
            Domestic primary production is limited — leaving a persistent gap that secondary smelters
            like Birch Aluminum are positioned to fill.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {conditions.map((c, i) => (
            <div key={c.title} className="bg-background p-8">
              <p className="text-minimal text-muted-foreground mb-4">0{i + 1}</p>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMarket;
