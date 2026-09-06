const stats = [
  { value: "$12.9B", label: "U.S. secondary aluminum alloy market" },
  { value: "1.3M", label: "Vehicles of annual production capacity in Alabama" },
  { value: "356 + A380", label: "Core secondary alloy products" },
  { value: "Southeast U.S.", label: "Dense automotive customer ecosystem" },
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Why Now</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The Market Gap Is Already Here.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 sm:p-10">
              <p className="text-4xl sm:text-5xl font-bold text-brand leading-none mb-3">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
          Buyers need regional.
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
