import { ArrowRight } from "lucide-react";

const stats = [
  { lines: ["13 billion", "pounds/year"], label: "U.S. market size", compact: true },
  {
    value: "Alabama",
    label: "",
    bullets: [
      "40% cheaper utilities.",
      "Lower pay rate.",
      "NO UNIONS.",
    ],
  },
];

const takeaways = [
  "Customers need local, reliable supply.",
  "Tariffs support US production.",
  "Investing in reshoring production.",
];


const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="inline-block bg-foreground text-brand text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">Tariffs support US production</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The US Supply Gap Is Already Here.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className={`bg-background p-6 sm:p-8 ${s.bullets ? "" : "text-center"}`}>
              <p className={`font-bold leading-none mb-3 ${s.compact ? "text-3xl sm:text-4xl whitespace-nowrap" : "text-4xl sm:text-5xl"} text-brand`}>
                {s.lines
                  ? s.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : s.value}
              </p>
              {s.label && <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>}
              {s.bullets && (
                <ul className="mt-3 space-y-1.5 text-sm font-bold text-foreground leading-relaxed">
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

        <div className="mt-10 space-y-4">
          {takeaways.map((t, i) => (
            <div
              key={t}
              className={`group relative flex items-center gap-6 border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                i === takeaways.length - 1
                  ? "border-brand bg-brand"
                  : "border-border bg-background hover:border-brand"
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-2 ${
                  i === takeaways.length - 1 ? "bg-foreground" : "bg-border group-hover:bg-brand"
                }`}
              />
              <span
                className={`shrink-0 text-4xl sm:text-5xl font-black leading-none transition-colors duration-300 ${
                  i === takeaways.length - 1 ? "text-foreground" : "text-muted-foreground/40 group-hover:text-brand"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`flex-grow text-xl sm:text-3xl font-bold leading-tight ${i === takeaways.length - 1 ? "text-foreground" : "text-foreground"}`}>
                {t}
              </p>
              <ArrowRight
                className={`shrink-0 h-6 w-6 transition-opacity duration-500 ${
                  i === takeaways.length - 1 ? "text-foreground" : "text-brand opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMarket;
