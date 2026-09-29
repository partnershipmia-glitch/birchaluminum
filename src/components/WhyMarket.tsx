const stats = [
  { lines: ["13 billion", "pounds/year"], label: "U.S. market size", compact: true },
  {
    value: "Alabama",
    label: "Growing industrial state",
    bullets: [
      "Regional production cuts freight, lead times and import dependence for customers.",
      "40% cheaper utilities.",
      "Lower pay rate.",
      "NO UNIONS.",
    ],
  },
  { value: "Buyers secured", label: "Signed LOI — buyers, brokers", dark: true },
  { value: "Offtake secured", label: "Signed LOI — scrap suppliers", dark: true },
];

const takeaways = [
  "Customers begging for local.",
  "Reliable.",
  "Competitive supply.",
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="inline-block bg-foreground text-brand text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">US market already exists; tariffs support the US market</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The US Supply Gap Is Already Here.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className={`bg-background p-6 sm:p-8 ${s.bullets ? "" : "text-center"}`}>
              <p className={`font-bold leading-none mb-3 ${s.compact ? "text-3xl sm:text-4xl whitespace-nowrap" : "text-4xl sm:text-5xl"} ${s.dark ? "text-foreground" : "text-brand"}`}>
                {s.lines
                  ? s.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : s.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
              {s.bullets && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-brand mt-px">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <ul className="mt-10 space-y-2 text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
          {takeaways.map((t, i) => (
            <li key={t} className={`flex items-start gap-3 ${i === takeaways.length - 1 ? "text-brand" : ""}`}>
              <span className={`mt-2 sm:mt-3 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 flex-shrink-0 ${i === takeaways.length - 1 ? "bg-brand" : "bg-foreground"}`} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyMarket;
