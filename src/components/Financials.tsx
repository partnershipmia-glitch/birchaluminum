import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const stats = [
  { value: "Model", label: "Available to qualified investors" },
  { value: "Assumptions", label: "Subject to diligence and market conditions" },
  { value: "Customers", label: "Specifications and awards under development" },
  { value: "Capital", label: "Final terms not published publicly" },
];

const outlook = [
  { title: "Development", body: "Finalize diligence materials, site requirements, equipment assumptions and approval path." },
  { title: "Alloy platform", body: "Advance planned secondary aluminum alloy production around qualified scrap streams and target product specifications." },
  { title: "Customer qualification", body: "Work toward buyer specifications, sampling expectations and commercial discussions." },
  { title: "Potential expansion", body: "Evaluate downstream or specialty alloy opportunities when the base platform is validated." },
];

const Financials = () => {
  return (
    <section id="financials" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Financial Snapshot</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          Built for industrial diligence.
          <br />
          <span className="text-brand">Designed for disciplined scale.</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-px bg-border border border-border mb-8">
          {outlook.map((item) => (
            <div key={item.title} className="bg-background p-5">
              <p className="text-minimal text-brand mb-3">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground max-w-2xl mb-8">
          Public materials describe the business logic and target markets. Revenue, margin, return, timing
          and capital assumptions are shared only through the qualified investor process.
        </p>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          Request Financial Outlook <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-muted-foreground">
          This is general project information only and should not be interpreted as an offer, guarantee or promise of investment returns.
        </p>
      </div>
    </section>
  );
};

export default Financials;
