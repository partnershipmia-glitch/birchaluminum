
const highlights = [
  { value: "$58 Millions", label: "Project valuation" },
  { value: "3 year", label: "Payback period" },
  { value: "$1 Million/month", label: "Projected EBITDA" },
  { value: "near 1 year", label: "Ramp up period to hit max throughput" },
  { value: "Dec 2026", label: "Site construction start" },
  { value: "15 month", label: "To build site & install production line" },
];

const OpportunityHighlights = () => {
  return (
    <section id="opportunity" className="section-padding bg-secondary border-y border-border">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Investment Opportunity</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Stage 1 capital plan and project economics.
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-10">
          Key metrics for the first automated alloy facility in Decatur, Alabama.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-10">
          {highlights.map((h) => (
            <div key={h.label} className="bg-background p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                {h.value}
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {h.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OpportunityHighlights;
