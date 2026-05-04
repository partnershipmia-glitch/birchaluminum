const stats = [
  { label: "Furnace", value: "MAX-4000", detail: "Gas-fired sweat furnace with afterburner" },
  { label: "Monthly Output", value: "~2,000,000", detail: "lbs of finished aluminum" },
  { label: "Recovery Rate", value: "96%", detail: "From scrap to finished metal" },
  { label: "Target Launch", value: "Fall 2026", detail: "Inventory ready" },
];

const schedule = [
  { label: "Shifts", value: "2 shifts per day" },
  { label: "Hours", value: "20 hours / day" },
  { label: "Days", value: "6 days / week" },
  { label: "Melt Cycle", value: "1,500 lbs every 20–25 min" },
];

const Production = () => {
  return (
    <section id="production" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Production</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Capacity & Output
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          One US Furnaces MAX-4000 aluminum sweat furnace with integrated afterburner system.
          Scalable to two furnaces within 18–24 months.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8">
              <p className="text-minimal text-muted-foreground mb-3">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-minimal text-muted-foreground mb-4">Operating Schedule</p>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-minimal text-muted-foreground mb-4">Unit Economics</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">EBITDA / lb</span>
                <span className="font-bold text-lg">$0.08 – $0.15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
