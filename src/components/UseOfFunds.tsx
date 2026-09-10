

const headline = [
  { value: "Stage 1", label: "Secondary alloy production platform" },
  { value: "Stage 2", label: "Start die casting line to keep more margin from our product. End of 2029" },
];

const diligenceItems = [
  "Facility and site requirements",
  "Equipment quotations and installation scope",
  "Permitting and environmental controls",
  "Working-capital and inventory assumptions",
  "Feedstock qualification and supplier discussions",
  "Customer demand, specifications and awards",
  "Startup liquidity and contingency planning",
];

const UseOfFunds = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Investment + Use of Funds</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          A Diligence-First Capital Plan.
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

          <div>
            <p className="text-minimal text-brand mb-4">Use-of-Funds Review Areas</p>
            <div className="border border-primary-foreground/15">
              {diligenceItems.map((label) => (
                <div key={label} className="p-3 sm:p-4 border-b last:border-b-0 border-primary-foreground/15">
                  <p className="text-sm sm:text-base text-primary-foreground/75">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">
              Specific capital amounts, schedule assumptions, equipment specifications and financing terms
              are not published on the public website and should be reviewed in approved investor materials.
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-primary-foreground/55 max-w-4xl">
          Management planning estimates remain subject to diligence, final quotations, site requirements, contracts and financing terms.
        </p>
      </div>
    </section>
  );
};

export default UseOfFunds;
