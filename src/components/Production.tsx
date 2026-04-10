const stats = [
  { label: "Product", value: "Aluminum Sows", detail: "2,000 lb each" },
  { label: "Monthly Capacity", value: "~3,000,000", detail: "lbs per month" },
  { label: "Status", value: "Under Development", detail: "Project phase" },
  { label: "Target", value: "Fall 2026", detail: "Inventory ready" },
];

const Production = () => {
  return (
    <section id="production" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Production</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Capacity & Output
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
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
      </div>
    </section>
  );
};

export default Production;
