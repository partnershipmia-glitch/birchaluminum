import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const stats = [
  { label: "Furnace", value: "MAX-4000", detail: "Gas-fired sweat furnace with afterburner" },
  { label: "Monthly Output", value: "~3,000,000", detail: "lbs of finished aluminum" },
  { label: "Recovery Rate", value: "95%", detail: "From scrap to finished metal" },
  { label: "Target Launch", value: "Fall 2026", detail: "Inventory ready" },
];

const MAX_CAPACITY_LBS = 6_000_000; // 4 furnaces
const AVG_MARGIN_PER_LB = 0.10; // average EBITDA / lb
const DEFAULT_SCRAP_PRICE = 1.70; // current avg $/lb

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Production = () => {
  const [lbs, setLbs] = useState<number>(3_000_000);
  const [scrapPrice, setScrapPrice] = useState<number>(DEFAULT_SCRAP_PRICE);

  const safePrice = scrapPrice > 0 ? scrapPrice : DEFAULT_SCRAP_PRICE;
  const cappedLbs = Math.min(Math.max(lbs, 0), MAX_CAPACITY_LBS);
  const SECOND_FURNACE_THRESHOLD = 1_500_000;
  const baseLbs = Math.min(cappedLbs, SECOND_FURNACE_THRESHOLD);
  const extraLbs = Math.max(0, cappedLbs - SECOND_FURNACE_THRESHOLD);
  // After 2M lb (2nd furnace online), per-lb margin is 65% larger
  const ebitda = baseLbs * AVG_MARGIN_PER_LB + extraLbs * AVG_MARGIN_PER_LB * 1.65;
  const investment = cappedLbs * safePrice;


  return (
    <section id="production" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Production</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Capacity & Output
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Two US Furnaces MAX-4000 aluminum sweat furnaces with integrated afterburner systems.
          Scalable to four furnaces within 18–24 months.
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

        {/* Tabs: Calculator + Scrap Price */}
        <Tabs defaultValue="calc" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="calc">Investor Calculator</TabsTrigger>
            <TabsTrigger value="scrap">Scrap Price</TabsTrigger>
          </TabsList>

          <TabsContent value="calc">
            <div className="bg-primary text-primary-foreground p-8 md:p-12">
              <p className="text-minimal text-primary-foreground/60 mb-4">Investor Calculator</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                See your monthly margin on a full melt cycle
              </h3>
              <p className="text-primary-foreground/70 mb-8 max-w-3xl">
                One full cycle (buy scrap → deliver → clean → melt → tap into sow → sell) takes
                roughly a month. Four-furnace capacity at <strong>6,000,000 lbs / month</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="text-minimal text-primary-foreground/60 mb-3 block">
                    Pounds Processed (lb / month)
                  </label>
                  <div className="flex items-center bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 mb-6">
                    <input
                      type="number"
                      min={0}
                      max={MAX_CAPACITY_LBS}
                      step={50000}
                      value={lbs}
                      onChange={(e) =>
                        setLbs(Math.min(MAX_CAPACITY_LBS, Math.max(0, Number(e.target.value) || 0)))
                      }
                      className="bg-transparent w-full text-2xl md:text-3xl font-bold outline-none"
                    />
                    <span className="text-base text-primary-foreground/60 ml-2">lb</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={MAX_CAPACITY_LBS}
                    step={50000}
                    value={cappedLbs}
                    onChange={(e) => setLbs(Number(e.target.value))}
                    className="w-full accent-primary-foreground"
                  />
                  <div className="relative mt-2 h-8 text-xs text-primary-foreground/50">
                    <span className="absolute left-0">0 lb</span>
                    <div className="absolute flex flex-col items-center" style={{ left: '25%', transform: 'translateX(-50%)' }}>
                      <span className="h-2 w-px bg-primary-foreground/40 -mt-1" />
                      <span className="mt-1 whitespace-nowrap text-yellow-300 font-semibold">1.5M · +2nd</span>
                    </div>
                    <div className="absolute flex flex-col items-center" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                      <span className="h-2 w-px bg-primary-foreground/40 -mt-1" />
                      <span className="mt-1 whitespace-nowrap text-primary-foreground/60">3M · +3rd</span>
                    </div>
                    <div className="absolute flex flex-col items-center" style={{ left: '75%', transform: 'translateX(-50%)' }}>
                      <span className="h-2 w-px bg-primary-foreground/40 -mt-1" />
                      <span className="mt-1 whitespace-nowrap text-primary-foreground/60">4.5M · +4th</span>
                    </div>
                    <span className="absolute right-0">6M lb (max)</span>
                  </div>


                  <div className="mt-6 text-sm text-primary-foreground/60 space-y-1">
                    <p>Average margin: <strong>${AVG_MARGIN_PER_LB.toFixed(2)} / lb</strong></p>
                    <p>
                      Scrap price: <strong>${safePrice.toFixed(2)} / lb</strong>{" "}
                      <span className="text-primary-foreground/50">(commodity driven price)</span>
                    </p>
                    <p>
                      Approx. inventory capital required: <strong>{formatUSD(investment)}</strong>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-primary-foreground/15 p-5">
                    <p className="text-minimal text-primary-foreground/60 mb-1">Scrap Processed</p>
                    <p className="text-3xl font-bold">
                      {Math.round(cappedLbs).toLocaleString()}{" "}
                      <span className="text-base font-normal text-primary-foreground/60">lbs / month</span>
                    </p>
                  </div>
                  <div className="border-2 border-yellow-400 bg-yellow-400/10 p-5">
                    <p className="text-minimal text-yellow-300 mb-1">Monthly Margin Earned (avg $0.10/lb)</p>
                    <p className="text-6xl md:text-8xl font-extrabold text-yellow-300 leading-none">
                      {formatUSD(ebitda)}
                    </p>

                    <p className="text-sm text-primary-foreground/70 mt-2">
                      $0.10 / lb up to 1.5M lb. Above 1.5M lb (2nd furnace online), margin per lb is
                      <strong> 65% larger</strong> — expenses scale sub-linearly as capacity expands to 4 furnaces at 6M lb/month.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </TabsContent>


          <TabsContent value="scrap">
            <div className="bg-background border-2 border-primary p-8 md:p-12">
              <p className="text-minimal text-muted-foreground mb-4">Scrap Price</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Current average scrap wheel price
              </h3>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Aluminum scrap wheel pricing fluctuates with the commodity market. Adjust below to
                model the calculator against current or projected market conditions. Today's
                average is approximately <strong>$1.70 / lb</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <label className="text-minimal text-muted-foreground mb-3 block">
                    Scrap Price (USD / lb)
                  </label>
                  <div className="flex items-center bg-secondary border border-border px-4 py-3 mb-6">
                    <span className="text-2xl font-bold mr-2">$</span>
                    <input
                      type="number"
                      min={0}
                      step={0.05}
                      value={scrapPrice}
                      onChange={(e) => setScrapPrice(Math.max(0, Number(e.target.value) || 0))}
                      className="bg-transparent w-full text-2xl md:text-3xl font-bold outline-none"
                    />
                    <span className="text-base text-muted-foreground ml-2">/ lb</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={3}
                    step={0.05}
                    value={Math.min(Math.max(scrapPrice, 0.5), 3)}
                    onChange={(e) => setScrapPrice(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>$0.50</span>
                    <span>$3.00</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScrapPrice(DEFAULT_SCRAP_PRICE)}
                    className="mt-6 text-sm underline text-muted-foreground hover:text-foreground"
                  >
                    Reset to current average ($1.70/lb)
                  </button>
                </div>

                <div className="bg-secondary border border-border p-6">
                  <p className="text-minimal text-muted-foreground mb-2">Today's Average</p>
                  <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-4">
                    ${safePrice.toFixed(2)}
                    <span className="text-xl font-normal text-muted-foreground"> / lb</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Used by the Investor Calculator to convert your investment into lbs of scrap
                    processed per month.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Production;
