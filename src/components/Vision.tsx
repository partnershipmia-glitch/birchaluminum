const phases = [

  {
    phase: "Stage 1",
    title: "Secondary Alloy Production",
    body: "Develop and validate a U.S. secondary aluminum alloy platform with disciplined scrap qualification, chemistry control and customer diligence.",
  },
  {
    phase: "Stage 2",
    title: "Increase Throughput & Die Casting",
    body: "Increase throughput. Expand to die casting.",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="inline-block bg-foreground text-brand text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">The Bigger Vision</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          Vertical integration is:
        </h2>
        <ul className="mb-10 -mt-4 space-y-2 text-xl sm:text-2xl font-bold">
          {["Control feedstock", "Alloy quality", "Production planning", "Higher margin"].map((t) => (
            <li key={t} className="flex items-center gap-3"><span className="h-2 w-2 bg-foreground" aria-hidden />{t}</li>
          ))}
        </ul>


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
