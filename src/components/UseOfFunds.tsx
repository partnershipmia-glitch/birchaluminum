import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const headline = [
  { value: "$8.5M", label: "Total capital raise" },
  { value: "30%", label: "Investor equity" },
  { value: "100%", label: "Equity funded / no debt" },
];

const timeline = [
  { when: "Months 1–3", what: "Land + Permits + Engineering" },
  { when: "Months 3–6", what: "Construction" },
  { when: "Months 7–9", what: "Equipment Installation" },
  { when: "Months 10–12", what: "Commissioning + Production Start" },
  { when: "Months 13–14", what: "Commercial Sales" },
  { when: "~6 months after start", what: "Full Production Capacity" },
];

const UseOfFunds = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Capital + Timeline</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          $8.5M to Build and Launch.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-px bg-primary-foreground/15 border border-primary-foreground/15">
            {headline.map((h) => (
              <div key={h.label} className="bg-primary p-6 sm:p-8">
                <p className="text-4xl sm:text-6xl font-bold text-brand leading-none mb-2">
                  {h.value}
                </p>
                <p className="text-minimal text-primary-foreground/60">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="relative border-l-2 border-primary-foreground/20 ml-2">
            {timeline.map((t) => (
              <div key={t.when} className="relative pl-8 pb-8 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand border-4 border-primary" />
                <p className="text-minimal text-brand mb-1">{t.when}</p>
                <p className="text-lg sm:text-xl font-bold">{t.what}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          View Full Use of Funds <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default UseOfFunds;
