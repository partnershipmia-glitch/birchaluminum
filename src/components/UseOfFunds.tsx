const allocation = [
  { label: "Property", value: "$1.34M", note: "Land & building — Decatur, AL" },
  { label: "Equipment", value: "$1.50M", note: "MAX-4000 furnaces & casting line" },
  { label: "Working Capital", value: "$2.00M", note: "Scrap inventory & operating cash" },
];

const UseOfFunds = () => {
  return (
    <section id="use-of-funds" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">Use of Funds</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
          Where the <span className="text-yellow-400">$4.84M</span> Goes
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 border border-yellow-400/30 mb-10">
          {allocation.map((a) => (
            <div key={a.label} className="bg-primary p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
                {a.label}
              </p>
              <p className="text-5xl md:text-6xl font-black text-yellow-400 leading-none mb-4">
                {a.value}
              </p>
              <p className="text-sm md:text-base text-primary-foreground/80">{a.note}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-2 border-yellow-400 bg-primary-foreground/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold mb-2">
              100% Collateralized
            </p>
            <p className="text-base text-primary-foreground/85">
              Investor capital is secured by property, equipment, and inventory — real industrial
              assets, not paper.
            </p>
          </div>
          <div className="border-l-2 border-yellow-400 bg-primary-foreground/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold mb-2">
              Tax-Deductible
            </p>
            <p className="text-base text-primary-foreground/85">
              Industrial CapEx qualifies for depreciation and deductions, improving the after-tax
              return on invested capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseOfFunds;
