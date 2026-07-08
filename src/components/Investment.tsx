import { ShieldCheck, Users } from "lucide-react";

const capitalBreakdown = [
  { item: "Industrial Property Acquisition", amount: "$1.34M" },
  { item: "Equipment & Infrastructure", amount: "$1.49M" },
  { item: "Working Capital Facility", amount: "$2.00M" },
];


const timeline = [
  { phase: "Month 1", label: "Building Acquisition", detail: "Pre-screened sites ready for closing" },
  { phase: "Month 1–2", label: "Furnace Delivery", detail: "Producer lined up, 2-month lead time" },
  { phase: "Month 3", label: "Installation", detail: "1 month install & commissioning" },
  { phase: "Month 4", label: "Production Start", detail: "Inventory ready, first sows shipped" },
];

const collateral = [
  {
    title: "Inventory & Material",
    items: ["Aluminum scrap", "Work-in-process material", "Finished aluminum sows"],
  },
  {
    title: "Receivables & Cash Flow",
    items: ["All accounts receivable", "Proceeds from aluminum sales", "Contractual buyer payments"],
  },
  {
    title: "Equipment & Infrastructure",
    items: ["MAX-4000 furnace system", "Handling equipment", "Production infrastructure"],
  },
];

const Investment = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">
          Investment Opportunity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Raising $4,840,000 to build a secondary aluminum smelting facility
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-12 max-w-3xl">
          When production is in place we will need a credit line on inventory.
        </p>

        {/* Full Equity Partner */}
        <div className="bg-primary border border-primary-foreground/15 p-8 md:p-10 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary-foreground/70" />
            <p className="text-minimal text-primary-foreground/60">Partnership Structure</p>
          </div>
          <h3 className="text-2xl font-bold mb-3">Credit Line on Inventory</h3>
          <p className="text-primary-foreground/70 max-w-3xl">
            Once production is in place, we will need a credit line secured against inventory
            to support working capital and scale throughput.
          </p>
        </div>

        {/* Capital Breakdown */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-minimal text-primary-foreground/60 mb-6">Capital Allocation</p>
            <div className="space-y-3">
              {capitalBreakdown.map((item) => (
                <div key={item.item} className="flex justify-between items-start gap-6 border-b border-primary-foreground/10 pb-3">
                  <span className="text-primary-foreground/80">{item.item}</span>
                  <span className="font-semibold whitespace-nowrap">{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold">Total Capital Required</span>
                <span className="font-bold text-lg">$4.84M</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-minimal text-primary-foreground/60 mb-6">Project Timeline</p>
            <div className="space-y-5">
              {timeline.map((t) => (
                <div key={t.phase} className="border-l-2 border-primary-foreground/30 pl-4">
                  <p className="text-minimal text-primary-foreground/50">{t.phase}</p>
                  <p className="font-semibold">{t.label}</p>
                  <p className="text-sm text-primary-foreground/60">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collateral Package */}
        <div className="border border-primary-foreground/15 p-8 md:p-10 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-5 h-5 text-primary-foreground/70" />
            <p className="text-minimal text-primary-foreground/60">Collateral Package</p>
          </div>
          <h3 className="text-2xl font-bold mb-2">First-Position UCC Security Interest</h3>
          <p className="text-primary-foreground/70 mb-8 max-w-3xl">
            The lender receives a first-position UCC lien on all business assets — fully
            securing the financing.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {collateral.map((c) => (
              <div key={c.title}>
                <p className="font-semibold mb-3">{c.title}</p>
                <ul className="space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Scenario Range */}
        <p className="text-minimal text-primary-foreground/60 mb-6">Financial Snapshot</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 mb-16">
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Annual Revenue</p>
            <p className="text-2xl md:text-3xl font-bold">~$74M</p>
            <p className="text-sm text-primary-foreground/50">at full capacity</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Base Case EBITDA</p>
            <p className="text-2xl md:text-3xl font-bold">$3.6M–$4.3M</p>
            <p className="text-sm text-primary-foreground/50">/ year</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Strong Market</p>
            <p className="text-2xl md:text-3xl font-bold">Up to $5.4M</p>
            <p className="text-sm text-primary-foreground/50">/ year EBITDA</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">2-Year Enterprise Value</p>
            <p className="text-2xl md:text-3xl font-bold">~$16M</p>
            <p className="text-sm text-primary-foreground/50">4× EBITDA multiple</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 mb-16">
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Monthly Break-even</p>
            <p className="text-2xl md:text-3xl font-bold">~82%</p>
            <p className="text-sm text-primary-foreground/50">utilization at $0.10/lb EBITDA</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">DSCR</p>
            <p className="text-2xl md:text-3xl font-bold">4.3x–8.1x</p>
            <p className="text-sm text-primary-foreground/50">Debt Service Coverage Ratio</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Investment;
