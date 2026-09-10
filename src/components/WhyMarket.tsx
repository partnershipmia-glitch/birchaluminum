const stats = [
  { value: "13 billion pound/year", label: "U.S. market size" },
  {
    value: "Alabama",
    label: "Growing industrial state",
    description: "Regional production cuts freight, lead times and import dependence for customers.",
  },
  { value: "Signed LOI", label: "from BUYERS, brokers" },
  { value: "Signed LOI", label: "from scrap suppliers" },
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">US market already exists; tariffs support the US market</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The US Supply Gap Is Already Here.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 sm:p-10">
              <p className="text-4xl sm:text-5xl font-bold text-brand leading-none mb-3">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
              {s.description && (
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
          Customers bagging for local.
          <br />
          Reliable.
          <br />
          <span className="text-brand">Competitive supply.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyMarket;
