const allocation = [
  { label: "Land & Site Development", value: "$554K", amount: 554 },
  { label: "Building & Infrastructure", value: "$812K", amount: 812 },
  { label: "Production Equipment", value: "$2.055M", amount: 2055 },
  { label: "Lab, Startup & Compliance", value: "$244K", amount: 244 },
  { label: "Contingency", value: "$366.5K", amount: 366.5 },
  { label: "Working Capital & Inventory", value: "$2.0M", amount: 2000 },
];

const max = Math.max(...allocation.map((a) => a.amount));

const UseOfFunds = () => {
  return (
    <section id="project-capital" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Project Capital</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14">Use of Funds</h2>

        <div className="space-y-6 mb-14">
          {allocation.map((a) => (
            <div key={a.label}>
              <div className="flex items-baseline justify-between mb-2 gap-4">
                <span className="text-base md:text-lg font-medium text-primary-foreground/90">
                  {a.label}
                </span>
                <span className="text-xl md:text-2xl font-bold text-brand">{a.value}</span>
              </div>
              <div className="h-4 bg-primary-foreground/10">
                <div
                  className="h-full bg-brand"
                  style={{ width: `${(a.amount / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-brand text-brand-foreground p-10">
            <p className="text-minimal mb-4">Total Capital Requirement</p>
            <p className="text-6xl md:text-7xl font-bold leading-none">$6.03M</p>
          </div>
          <div className="border border-primary-foreground/20 p-10">
            <p className="text-minimal text-primary-foreground/60 mb-4">Working Capital</p>
            <p className="text-primary-foreground/80 leading-relaxed">
              $2.0M of the raise is reserved for working capital and scrap inventory. Metal is
              purchased against confirmed demand, inventory turns quickly, and cash reserves are
              rebuilt before any distributions — protecting the operation from commodity price
              swings without relying on external credit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseOfFunds;
