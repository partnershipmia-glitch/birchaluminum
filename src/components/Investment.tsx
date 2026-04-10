import { ArrowRight } from "lucide-react";

const capex = [
  { item: "Industrial Building", amount: "$1,000,000" },
  { item: "MAX-4000 Sweat Furnace", amount: "$535,000" },
  { item: "Furnace Additions & Equipment", amount: "$157,000" },
  { item: "Spectrometers & Lab", amount: "$70,000" },
  { item: "Utilities, Legal, Environmental", amount: "$120,000" },
  { item: "Installation & Contingency", amount: "$450,000" },
];

const financials = [
  { label: "Total CapEx", value: "~$2.25M" },
  { label: "Working Capital", value: "~$3.8M" },
  { label: "Total Capital Required", value: "$7.5M" },
  { label: "Monthly Revenue", value: "$3.4M" },
  { label: "Monthly EBITDA", value: "~$531K" },
  { label: "Annual EBITDA", value: "~$6.37M" },
];

const Investment = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">
          Investment Opportunity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Capital Structure & Returns
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl">
          SBA-backed structure with approval in place. Seeking equity partner for a
          cash-flow positive U.S. industrial asset.
        </p>

        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* CapEx Breakdown */}
          <div className="md:col-span-2">
            <p className="text-minimal text-primary-foreground/60 mb-6">Capital Expenditures</p>
            <div className="space-y-3">
              {capex.map((item) => (
                <div key={item.item} className="flex justify-between items-center border-b border-primary-foreground/10 pb-3">
                  <span className="text-primary-foreground/80">{item.item}</span>
                  <span className="font-semibold">{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold">Total Project CapEx</span>
                <span className="font-bold text-lg">~$2.25M</span>
              </div>
            </div>
          </div>

          {/* Financial Highlights */}
          <div>
            <p className="text-minimal text-primary-foreground/60 mb-6">Projected Financials</p>
            <div className="space-y-4">
              {financials.map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-primary-foreground/50">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scenario Range */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/10 mb-16">
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Conservative</p>
            <p className="text-2xl md:text-3xl font-bold">~$440K</p>
            <p className="text-sm text-primary-foreground/50">/ month EBITDA</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Base Case</p>
            <p className="text-2xl md:text-3xl font-bold">~$550K</p>
            <p className="text-sm text-primary-foreground/50">/ month EBITDA</p>
          </div>
          <div className="bg-primary p-8 text-center">
            <p className="text-minimal text-primary-foreground/50 mb-2">Optimistic</p>
            <p className="text-2xl md:text-3xl font-bold">$600K+</p>
            <p className="text-sm text-primary-foreground/50">/ month EBITDA</p>
          </div>
        </div>

        {/* Ideal Investor & CTA */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-minimal text-primary-foreground/60 mb-4">Ideal Investor</p>
            <ul className="space-y-3 mb-8">
              {[
                "Interested in U.S. manufacturing & reshoring",
                "Scrap / commodities sector experience",
                "Cash-flow industrial assets",
                "Target 4x return in 4 years",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                  <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-minimal text-primary-foreground/60 mb-4">Cash Conversion</p>
            <ul className="space-y-3 mb-8">
              {[
                "Scrap purchases: Net 2–5 days",
                "Product sales: Net 0–3 days (wire transfer)",
                "Near-neutral cash conversion cycle",
                "Rapid daily inventory turnover",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                  <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:birchfamilyllcfl@gmail.com"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-medium hover:opacity-90 transition-opacity"
            >
              Send Proposal <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
