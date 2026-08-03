const cards = [
  {
    title: "Diverse Scrap Suppliers",
    body: "Multiple regional suppliers reduce dependence on any single source of wheel scrap.",
  },
  {
    title: "First Load Premium",
    body: "A small premium on initial loads opens new supplier accounts and proves payment reliability.",
  },
  {
    title: "Broker-First Sales",
    body: "Broker channels absorb early volume immediately, delivering speed and liquidity from day one.",
  },
  {
    title: "Direct Buyer Transition",
    body: "As delivery history builds, volume shifts toward direct industrial buyers at improved pricing.",
  },
  {
    title: "Trust-Based Procurement",
    body: "Consistent grading, fast payment, and clear communication secure priority on supplier volume.",
  },
  {
    title: "Cash Conversion",
    body: "Fast inventory turns convert scrap into finished ingots and back into cash within weeks.",
  },
];

const SupplyStrategy = () => {
  return (
    <section id="supply" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Supply Strategy</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14 max-w-3xl">
          Secure the Feedstock. Move the Metal. Turn the Cash.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-12">
          {cards.map((c) => (
            <div key={c.title} className="bg-background p-8">
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-brand bg-secondary p-8">
            <p className="text-minimal text-brand mb-3">First Year</p>
            <p className="text-lg font-medium">Broker channels for speed and liquidity.</p>
          </div>
          <div className="border-l-4 border-brand bg-secondary p-8">
            <p className="text-minimal text-brand mb-3">Long Term</p>
            <p className="text-lg font-medium">
              Direct buyers with stable supplier relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyStrategy;
