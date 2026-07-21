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

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Section 01 · Why This Market</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-6">
          U.S. Buyers Need More Reliable Domestic Aluminum Supply
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-14 leading-relaxed">
          The United States continues to depend on imported aluminum while manufacturers require
          dependable domestic supply, consistent specifications, and shorter delivery routes. Birch
          Aluminum will produce secondary alloys from domestically available aluminum scrap,
          beginning with wheel scrap.
        </p>

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
