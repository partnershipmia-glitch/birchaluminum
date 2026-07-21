const InvestorEconomics = () => {
  return (
    <section id="investor-economics" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">Investor Participation</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14">
          Investor Participation
        </h2>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="bg-yellow-400 text-primary p-10 md:p-14">
            <p className="text-minimal mb-4">Equity Available</p>
            <p className="text-7xl md:text-8xl font-black leading-none mb-4">15%</p>
            <p className="text-lg font-medium">
              Offered to the investor funding this deal.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Base-case Year 3 EBITDA", value: "$4M" },
              { label: "Operating margin target", value: "5 – 8%" },
              { label: "Enterprise value at 3–4× EBITDA", value: "$12M – $16M" },
            ].map((r) => (
              <div key={r.label} className="border border-primary-foreground/20 p-6 flex justify-between items-center">
                <span className="text-primary-foreground/80">{r.label}</span>
                <span className="text-2xl font-black text-yellow-400">{r.value}</span>
              </div>
            ))}
            <p className="text-primary-foreground/70 leading-relaxed pt-2">
              The company is expected to generate operating profit during the three-year growth
              period.
            </p>
            <p className="text-xs text-primary-foreground/50 leading-relaxed pt-2 border-t border-primary-foreground/10">
              Valuation is shown as an illustrative range based on Year 3 base-case EBITDA and a
              3–4× EBITDA multiple. Actual results may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorEconomics;
