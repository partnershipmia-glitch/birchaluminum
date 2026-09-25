const steps = [
  "U.S. Aluminum Scrap",
  "Sorting",
  "Shredding + Metal Separation",
  "Furnace-Ready Feedstock",
  "Melting",
  "Chemistry Control",
  "356 / 380 Alloy",
  "Casting",
  "Finished Aluminum Ingot",
  "U.S. Customer",
];

const ValueChain = () => (
  <section className="section-padding bg-primary text-primary-foreground border-b border-border">
    <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
      <p className="text-minimal text-brand mb-3">Business Model</p>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
        FROM SCRAP TO SPECIFICATION-GRADE ALUMINUM
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-6">
        <div className="border-l-4 border-primary-foreground/40 pl-4">
          <p className="text-brand text-sm font-bold tracking-wider mb-2">INPUT</p>
          <p className="font-bold leading-snug">Wheels<br />Cast aluminum scrap<br />Qualified clean aluminum scrap</p>
        </div>
        <div className="border-l-4 sm:border-l-0 sm:border-r-4 border-brand pl-4 sm:pl-0 sm:pr-4 sm:text-right">
          <p className="text-brand text-sm font-bold tracking-wider mb-2">OUTPUT</p>
          <p className="font-bold leading-snug">Specification-grade secondary aluminum<br /><span className="text-brand text-2xl">356 · 380</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-10 gap-1">
        {steps.map((s, i) => {
          const t = i / (steps.length - 1);
          return (
            <div
              key={s}
              className="relative p-3 min-h-[92px] flex flex-col justify-between animate-fade-in opacity-0 [animation-fill-mode:forwards]"
              style={{
                animationDelay: `${i * 120}ms`,
                background: `hsl(var(--brand) / ${0.08 + t * 0.92})`,
                color: t > 0.55 ? "hsl(var(--brand-foreground))" : "hsl(var(--primary-foreground))",
              }}
            >
              <span className="text-xs font-bold opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xs sm:text-[13px] font-bold uppercase leading-tight">{s}</span>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-brand font-bold">▸</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 h-2" style={{ background: "linear-gradient(90deg, hsl(var(--metallic) / 0.4), hsl(var(--brand)))" }} />
      <div className="flex justify-between mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
        <span className="text-primary-foreground/60">Scrap value</span>
        <span className="text-brand">Manufactured metal value</span>
      </div>

      <h3 className="mt-14 text-3xl sm:text-5xl font-bold">Birch Moves Aluminum Up the Value Chain.</h3>
      <p className="mt-6 text-lg sm:text-xl font-semibold text-primary-foreground/80 border-l-4 border-brand pl-4 max-w-4xl">
        The business model is not scrap collection — it is converting qualified recycled feedstock into specification-controlled aluminum products for industrial customers.
      </p>
    </div>
  </section>
);

export default ValueChain;
