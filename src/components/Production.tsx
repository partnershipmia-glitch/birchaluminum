import { useState } from "react";

const stats = [
  { label: "Furnace", value: "MAX-4000", detail: "Gas-fired sweat furnace with afterburner" },
  { label: "Monthly Output", value: "~2,000,000", detail: "lbs of finished aluminum" },
  { label: "Recovery Rate", value: "96%", detail: "From scrap to finished metal" },
  { label: "Target Launch", value: "Fall 2026", detail: "Inventory ready" },
];

const MAX_CAPACITY_LBS = 4_000_000; // 2 furnaces
const SCRAP_COST_PER_LB = 0.85; // assumed avg scrap cost
const SOW_PRICE_PER_LB = 1.05; // assumed avg sow sale price
const EBITDA_LOW = 0.08;
const EBITDA_HIGH = 0.15;

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Production = () => {
  const [amount, setAmount] = useState<number>(1_000_000);

  // lbs of scrap an investor's $ can buy this cycle
  const lbs = Math.min(amount / SCRAP_COST_PER_LB, MAX_CAPACITY_LBS);
  const revenue = lbs * SOW_PRICE_PER_LB;
  const ebitdaLow = lbs * EBITDA_LOW;
  const ebitdaHigh = lbs * EBITDA_HIGH;
  const capped = amount / SCRAP_COST_PER_LB > MAX_CAPACITY_LBS;

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

        {/* Unit Economics — bold & bigger */}
        <div className="bg-background border-2 border-primary p-8 md:p-12 mb-12">
          <p className="text-minimal text-muted-foreground mb-4">Unit Economics</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
            <span className="text-2xl md:text-3xl font-bold">EBITDA / lb</span>
            <span className="font-extrabold text-5xl md:text-7xl tracking-tight text-primary">
              $0.08 – $0.15
            </span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            Price is commodity-driven and not always stable.
          </p>
        </div>

        {/* Investor Calculator */}
        <div className="bg-primary text-primary-foreground p-8 md:p-12">
          <p className="text-minimal text-primary-foreground/60 mb-4">Investor Calculator</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            See your monthly return on a full melt cycle
          </h3>
          <p className="text-primary-foreground/70 mb-8 max-w-3xl">
            One full cycle (buy scrap → deliver → clean → melt → tap into sow → sell) takes
            roughly a month. Two-furnace capacity caps at <strong>4,000,000 lbs / month</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="text-minimal text-primary-foreground/60 mb-3 block">
                Investment Amount (USD)
              </label>
              <div className="flex items-center bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 mb-6">
                <span className="text-2xl font-bold mr-2">$</span>
                <input
                  type="number"
                  min={0}
                  step={50000}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                  className="bg-transparent w-full text-2xl md:text-3xl font-bold outline-none"
                />
              </div>
              <input
                type="range"
                min={100000}
                max={3500000}
                step={50000}
                value={Math.min(amount, 3500000)}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-primary-foreground"
              />
              <div className="flex justify-between text-xs text-primary-foreground/50 mt-2">
                <span>$100K</span>
                <span>$3.5M</span>
              </div>

              <div className="mt-6 text-sm text-primary-foreground/60 space-y-1">
                <p>Assumed scrap cost: ${SCRAP_COST_PER_LB.toFixed(2)} / lb</p>
                <p>Assumed sow sale price: ${SOW_PRICE_PER_LB.toFixed(2)} / lb</p>
                {capped && (
                  <p className="text-yellow-300 font-medium">
                    Capped at 4M lbs/month (max 2-furnace capacity).
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-primary-foreground/15 p-5">
                <p className="text-minimal text-primary-foreground/60 mb-1">Scrap Processed</p>
                <p className="text-3xl font-bold">
                  {Math.round(lbs).toLocaleString()} <span className="text-base font-normal text-primary-foreground/60">lbs / month</span>
                </p>
              </div>
              <div className="border border-primary-foreground/15 p-5">
                <p className="text-minimal text-primary-foreground/60 mb-1">Projected Revenue</p>
                <p className="text-3xl font-bold">{formatUSD(revenue)}</p>
              </div>
              <div className="border-2 border-yellow-400 bg-yellow-400/10 p-5">
                <p className="text-minimal text-yellow-300 mb-1">Monthly EBITDA Range</p>
                <p className="text-3xl md:text-4xl font-extrabold text-yellow-300">
                  {formatUSD(ebitdaLow)} – {formatUSD(ebitdaHigh)}
                </p>
                <p className="text-sm text-primary-foreground/70 mt-2">
                  Based on $0.08 – $0.15 EBITDA / lb after a complete melt-and-sell cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
