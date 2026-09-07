const cards = [
  { title: "Feedstock", body: "Qualified scrap streams, including automotive wheels and cast aluminum, are central to the planning case." },
  { title: "Products", body: "Target products include 356/A356 and A380 secondary aluminum alloys and ingot formats." },
  { title: "Markets", body: "Target buyers include foundries, die casters, automotive suppliers and industrial manufacturers." },
  { title: "Diligence", body: "Capacity, economics, customer materials and financing assumptions are shared only through the qualified investor process." },
];

const InvestorEconomics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Investor Planning Case</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Industrial logic first. Detailed economics through diligence.
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
          This website provides general project information only and does not publish securities offering terms, projected returns or guarantees.
        </p>
      </div>
    </section>
  );
};

export default InvestorEconomics;
