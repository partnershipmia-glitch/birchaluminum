const cards = [
  { t: "Domestic Feedstock", d: "Existing U.S. aluminum scrap market" },
  { t: "Domestic Demand", d: "Automotive + industrial customers" },
  { t: "Value Creation", d: "Scrap → specification-grade alloy" },
  { t: "Scalability", d: "Adding die casting machines and keeping more margin from our metal" },
];

const metrics = [
  { v: "$17.5M", l: "Capital Raise", note: "Target" },
  { v: "15 Months", l: "Target to Production", note: "Projected" },
];

const InvestorClosing = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1] mb-4">ONE PLANT IS THE START.</h2>
      <p className="text-2xl sm:text-4xl font-bold text-brand leading-tight mb-14">
        VERTICAL INTEGRATION IS THE BUSINESS.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
        {cards.map((c) => (
          <div key={c.t} className="bg-primary p-6">
            <p className="text-brand font-bold tracking-wider mb-3">{c.t}</p>
            <p className="text-primary-foreground/80">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {metrics.map((m) => (
          <div key={m.l}>
            <p className="break-words text-4xl sm:text-5xl font-bold text-brand leading-none">{m.v}</p>
            <p className="mt-2 text-sm uppercase tracking-wider">{m.l}</p>
            {m.note && <p className="text-[11px] uppercase tracking-wider text-primary-foreground/50 mt-1">{m.note}</p>}
          </div>
        ))}
      </div>
      <p className="mt-6 text-[11px] uppercase tracking-wider text-primary-foreground/50">
        Birch Aluminum management data. Targets and projections are forward-looking and not guaranteed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-14">
        <a
          href="mailto:birchfamilyllcfl@gmail.com?subject=Data%20Room%20Access%20Request"
          className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-bold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
        >
          Request Data Room Access
        </a>
      </div>
    </div>
  </section>
);

export default InvestorClosing;
