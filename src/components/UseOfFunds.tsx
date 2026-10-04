
const headline = [
  { value: "Stage 1", label: "Secondary alloy production platform" },
  { value: "Stage 2", label: "Start die casting line to keep more margin from our product. End of 2029" },
];


const UseOfFunds = () => {
  return (
    <section id="capital-plan" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Vision</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          A Diligence-First Capital Plan.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-8">
            {headline.map((h) => (
              <div key={h.label}>
                <p className="text-4xl sm:text-6xl font-bold text-brand leading-none mb-2">
                  {h.value}
                </p>
                <p className="text-minimal text-primary-foreground/60">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseOfFunds;
