const highlights = [
  { value: "$58M", label: "project valuation" },
  { value: "3 year", label: "payback period" },
  { value: "$1M/month", label: "projected EBITDA" },
  { value: "Dec 2026", label: "site construction start" },
  { value: "15 month", label: "to build site & install line" },
];

const OpportunityHighlights = () => {
  return (
    <section id="opportunity" className="section-padding bg-secondary border-y border-border">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-minimal text-brand mb-4 text-center">Opportunity highlights</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center">
            Investment at a glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-background border border-border p-5 sm:p-6 text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                  {h.value}
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm sm:text-base mt-8 max-w-3xl mx-auto">
            Birch Aluminum is building a vertically integrated U.S. secondary aluminum recycling
            supply chain in Decatur, Alabama. Stage 1 establishes melting and casting capacity;
            Stage 2 adds die casting to capture more margin by end of 2029.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunityHighlights;
