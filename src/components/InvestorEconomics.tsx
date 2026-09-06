const cards = [
  { title: "$135.0M", body: "Stabilized annual Stage 1 revenue" },
  { title: "$12.2M", body: "Stabilized annual Stage 1 EBITDA" },
  { title: "9.0%", body: "Stabilized EBITDA margin" },
  { title: "1.4 years", body: "Projected payback" },
];

const InvestorEconomics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Aluminum Production Case</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          High Volume. Disciplined Margin.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {cards.map((c) => (
            <div key={c.title} className="bg-background p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-brand mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Management planning case subject to feedstock pricing, customer contracts, recovery and final quotations.
        </p>
      </div>
    </section>
  );
};

export default InvestorEconomics;
