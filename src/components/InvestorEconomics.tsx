const headline = [
  { label: "Capital Raise", value: "$6.03M" },
  { label: "Investor Ownership", value: "30%" },
  { label: "Capital Structure", value: "100% Equity Funded" },
];

const rights = [
  "30% ownership",
  "Monthly reporting",
  "Production reporting",
  "Budget vs Actual",
  "Environmental reporting",
  "Governance rights",
];

const discipline = [
  "Working capital protected",
  "Demand-based scrap purchasing",
  "Cash reserves before distributions",
  "Expansion based on ROIC",
  "No mandatory debt service",
];

const InvestorEconomics = () => {
  return (
    <section id="investment" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Investment Structure</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14">
          Investment Structure
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-12">
          {headline.map((h) => (
            <div key={h.label} className="bg-background p-10">
              <p className="text-minimal text-muted-foreground mb-4">{h.label}</p>
              <p className="text-4xl md:text-5xl font-bold text-brand leading-tight">{h.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-border p-10">
            <h3 className="text-2xl font-bold mb-6">Investor Rights</h3>
            <ul className="space-y-3">
              {rights.map((r) => (
                <li key={r} className="flex gap-3 text-muted-foreground">
                  <span className="text-brand font-bold">·</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-10">
            <h3 className="text-2xl font-bold mb-6">Capital Discipline</h3>
            <ul className="space-y-3">
              {discipline.map((r) => (
                <li key={r} className="flex gap-3 text-muted-foreground">
                  <span className="text-brand font-bold">·</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-12 text-center">
          <p className="text-2xl md:text-4xl font-bold leading-snug">
            Fully Funded. <span className="text-brand">Debt-Free.</span> Aligned for Long-Term Value
            Creation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorEconomics;
