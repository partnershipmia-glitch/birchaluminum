import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const stats = [
  { value: "36M lbs", label: "Full annual capacity" },
  {
    value: (
      <>
        Months
        <br />
        10–12
      </>
    ),
    label: "First production",
  },
  {
    value: (
      <>
        Months
        <br />
        18–20
      </>
    ),
    label: "Target full capacity",
  },
  { value: "5-Year", label: "Growth plan" },
];

const Financials = () => {
  return (
    <section id="financials" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Financial Snapshot</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          Built for cash flow.
          <br />
          <span className="text-brand">Designed for scale.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-5 sm:p-8">
              <p className="text-2xl sm:text-4xl font-bold text-brand leading-tight mb-2">
                {s.value}
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground max-w-2xl mb-8">
          See revenue, EBITDA, capacity ramp and expansion assumptions in the investor presentation.
        </p>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          View 5-Year Financial Outlook <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Financials;
