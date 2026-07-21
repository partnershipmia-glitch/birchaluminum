const stages = [
  {
    n: "Stage 1",
    title: "Establish production",
    points: [
      "Reach stable production",
      "Maintain specification consistency",
      "Build delivery history",
      "Generate operating profit during the first three years",
    ],
  },
  {
    n: "Stage 2",
    title: "Improve supply control",
    points: [
      "Acquire or build a scrap yard",
      "Secure more direct scrap volume",
      "Reduce dependence on intermediaries",
      "Improve purchasing control and protect material margins",
    ],
  },
  {
    n: "Stage 3",
    title: "Increase production",
    points: [
      "Expand to four furnaces",
      "Increase monthly capacity",
      "Use the same facility, suppliers, team, and buyer network",
    ],
  },
  {
    n: "Stage 4",
    title: "Add higher-margin alloys",
    points: [
      "Expand the production line",
      "Produce additional alloy specifications",
      "Serve more buyers",
      "Improve product mix and average margin",
    ],
  },
  {
    n: "Stage 5",
    title: "Enter adjacent metals",
    points: [
      "Evaluate copper production",
      "Only after aluminum operation is stable and economics justify separate equipment and processes",
    ],
  },
];

const Compounds = () => {
  return (
    <section id="compounds" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Section 05 · What Compounds Over Time</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-6">
          Each Operating Step Creates the Next Expansion Option
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-14 leading-relaxed">
          Value is built through operating history rather than projections alone. Each stage relies
          on the assets, relationships, and margins established by the prior stage.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-10">
            {stages.map((s, i) => (
              <div
                key={s.n}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="pl-12 md:pl-0 md:pr-8 md:text-right relative">
                  <span className="absolute left-2 md:left-auto md:right-[-33px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-background md:right-auto md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="pl-12 md:pl-8 border border-border bg-secondary/40 p-6">
                  <p className="text-minimal text-yellow-600 mb-2">{s.n}</p>
                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">·</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compounds;
