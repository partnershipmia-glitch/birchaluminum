import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const stats = [
  { value: "$589.5M", label: "Five-year revenue" },
  { value: "$60.1M", label: "Five-year EBITDA" },
  { value: "$171.0M", label: "Stabilized annual revenue" },
  { value: "$18.2M", label: "Stabilized annual EBITDA" },
];

const outlook = [
  { year: "2027", revenue: "$0", ebitda: "$0", stage: "Development" },
  { year: "2028", revenue: "$94.5M", ebitda: "$8.5M", stage: "Production ramp" },
  { year: "2029", revenue: "$153.0M", ebitda: "$15.2M", stage: "Die-casting ramp" },
  { year: "2030", revenue: "$171.0M", ebitda: "$18.2M", stage: "Combined platform" },
  { year: "2031", revenue: "$171.0M", ebitda: "$18.2M", stage: "Stabilized operations" },
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

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-border border border-border mb-8">
          {outlook.map((item) => (
            <div key={item.year} className="bg-background p-5">
              <p className="text-minimal text-brand mb-3">{item.year}</p>
              <p className="font-bold">{item.revenue} revenue</p>
              <p className="font-bold text-brand">{item.ebitda} EBITDA</p>
              <p className="text-xs text-muted-foreground mt-2">{item.stage}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground max-w-2xl mb-8">
          Stage 1 alloy production begins the ramp in 2028. Stage 2 die-casting growth begins in 2029.
        </p>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          View 5-Year Financial Outlook <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-muted-foreground">
          Management planning case subject to production ramp, feedstock pricing, customer awards, recovery rates and final equipment quotations.
        </p>
      </div>
    </section>
  );
};

export default Financials;
