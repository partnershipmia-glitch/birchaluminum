const stats = [
  { value: "Domestic", label: "U.S. recycled aluminum supply focus" },
  { value: "Southeast U.S.", label: "Dense automotive customer ecosystem" },
  { value: "356, 380 alloys", label: "Target secondary alloy products" },
  { value: "Qualified scrap", label: "Automotive wheels and cast aluminum feedstock focus" },
];

const WhyMarket = () => {
  return (
    <section id="market" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Why Now</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The Regional Supply Gap Is Already Here.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 sm:p-10">
              <p className="text-4xl sm:text-5xl font-bold text-brand leading-none mb-3">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
          Buyers need regional.
          <br />
          Reliable.
          <br />
          <span className="text-brand">Competitive supply.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyMarket;
