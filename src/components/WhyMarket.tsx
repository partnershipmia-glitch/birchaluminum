const cards = [
  {
    title: "Growing demand",
    body: "U.S. manufacturers continue to increase consumption of secondary aluminum alloys as production reshores.",
  },
  {
    title: "Import dependence",
    body: "A significant portion of domestic supply still arrives from abroad, exposing buyers to tariff, freight, and lead-time volatility.",
  },
  {
    title: "Buyer pain",
    body: "Manufacturers need consistent specifications, reliable delivery windows, and shorter transportation routes.",
  },
  {
    title: "Regional opportunity",
    body: "The Southeast concentrates automotive and casting demand with limited nearby secondary smelting capacity.",
  },
];

const highlights = [
  { value: "3M lbs / month", label: "Production capacity" },
  { value: "Strong cash generation", label: "Debt-free operating model" },
  { value: "Attractive returns", label: "Equity-aligned economics" },
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Market</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-14">
          Why the Market Needs Another Domestic Smelter
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-12">
          {cards.map((c, i) => (
            <div key={c.title} className="bg-background p-8">
              <p className="text-minimal text-muted-foreground mb-4">0{i + 1}</p>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground grid md:grid-cols-3 gap-px">
          {highlights.map((h) => (
            <div key={h.label} className="p-8">
              <p className="text-2xl md:text-3xl font-bold text-brand mb-2">{h.value}</p>
              <p className="text-sm text-primary-foreground/70">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMarket;
