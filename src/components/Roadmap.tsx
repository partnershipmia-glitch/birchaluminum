const steps = [
  { title: "Land Acquisition", when: "Weeks 1–4" },
  { title: "Permits & Engineering", when: "Months 1–3" },
  { title: "Construction & Procurement", when: "Months 3–6" },
  { title: "Equipment Installation", when: "Months 6–7" },
  { title: "Commissioning & Ramp-Up", when: "Months 7–10" },
  { title: "Stabilized Operations", when: "Months 11–12" },
];

const focus = [
  "Build safely.",
  "Commission correctly.",
  "Ramp methodically.",
  "Protect working capital.",
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Execution Roadmap</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14">
          A Twelve-Month Path to Stabilized Operations
        </h2>

        <div className="relative border-l-2 border-border ml-3 mb-14">
          {steps.map((s, i) => (
            <div key={s.title} className="relative pl-10 pb-10 last:pb-0">
              <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand border-4 border-secondary" />
              <p className="text-minimal text-muted-foreground mb-2">
                {String(i + 1).padStart(2, "0")} · {s.when}
              </p>
              <h3 className="text-xl md:text-2xl font-bold">{s.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground p-10">
          <p className="text-minimal text-primary-foreground/60 mb-6">Execution Focus</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focus.map((f) => (
              <p key={f} className="text-xl md:text-2xl font-bold text-brand">
                {f}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
