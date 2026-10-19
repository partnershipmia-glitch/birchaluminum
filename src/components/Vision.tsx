const phases = [

  {
    phase: "Stage 1",
    title: "Secondary Alloy Production",
    body: "Develop and validate a U.S. secondary aluminum alloy platform with disciplined scrap qualification, chemistry control and customer diligence.",
  },
  {
    phase: "Stage 2",
    title: "Expanded Melting & Casting",
    body: "Scale to 6 million finished lb/month with expanded melting and casting, integrated scrap preparation, and A356 and other higher-margin alloys. Die casting follows as a downstream expansion.",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="inline-block bg-foreground text-brand text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">The Bigger Vision</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          Vertical integration gives Birch greater control over feedstock, alloy quality, production planning, and margin.
        </h2>


        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {phases.map((p) => (
            <div key={p.phase} className="bg-background p-6 sm:p-8">
              <p className="text-minimal text-foreground !font-bold mb-3">{p.phase}</p>
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
