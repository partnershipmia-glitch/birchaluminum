const chain = [
  "Scrap Yards",
  "Regional Feedstock",
  "Birch Smelters",
  "Alloy Production",
  "U.S. Industrial Buyers",
];

const phases = [
  {
    phase: "Phase 1",
    title: "Alabama Smelter",
    body: "Build and stabilize the first 96M+ lb facility.",
  },
  {
    phase: "Phase 2",
    title: "Scrap Yards",
    body: "Secure feedstock. Lower input costs. Increase margins.",
  },
  {
    phase: "Phase 3",
    title: "Additional Production",
    body: "Replicate the operating model in strategic U.S. markets.",
  },
  {
    phase: "Phase 4",
    title: "Vertically Integrated Network",
    body: "Scrap collection, processing, alloy production, trading and recycling.",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">The Bigger Vision</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          One plant is the start.
          <br />
          <span className="text-brand">The network is the business.</span>
        </h2>

        <div className="bg-primary text-primary-foreground p-6 sm:p-10 mb-10">
          <div className="flex flex-col items-center gap-3">
            {chain.map((node, i) => (
              <div key={node} className="w-full flex flex-col items-center gap-3">
                <div className="w-full max-w-md text-center border border-primary-foreground/20 px-4 py-3 text-sm sm:text-base font-bold uppercase tracking-wider">
                  {node}
                </div>
                {i < chain.length - 1 && <span className="text-brand text-xl leading-none">↓</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {phases.map((p) => (
            <div key={p.phase} className="bg-background p-6 sm:p-8">
              <p className="text-minimal text-brand mb-3">{p.phase}</p>
              <h3 className="text-lg sm:text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
