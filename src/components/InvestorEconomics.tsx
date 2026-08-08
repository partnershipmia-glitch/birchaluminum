const cards = [
  { title: "Lower Input Cost", body: "Control more of the scrap supply chain." },
  { title: "Higher EBITDA", body: "Improve purchasing, yield, labor and energy efficiency." },
  { title: "More Capacity", body: "Replicate production in additional markets." },
  {
    title: "Higher Enterprise Value",
    body: "Build a multi-location aluminum platform instead of a single plant.",
  },
];

const InvestorEconomics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Why the Model Gets Stronger</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Scale Should Improve the Economics.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {cards.map((c) => (
            <div key={c.title} className="bg-background p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-brand mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorEconomics;
