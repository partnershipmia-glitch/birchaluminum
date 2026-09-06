import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const headline = [
  { value: "$17.5M", label: "Stage 1 permanent capital" },
  { value: "$10.0M", label: "Inventory + receivables facility" },
  { value: "$19.0M", label: "Stage 2 expansion capital" },
];

const allocations = [
  ["Facility & site development", "$3.0M"],
  ["Land", "$0.4M"],
  ["High-productivity Ecomelt system", "$4.0M"],
  ["Emissions-control system", "$1.2M"],
  ["Metal treatment & holding", "$0.8M"],
  ["Automated ingot line", "$1.2M"],
  ["Electrical, gas & utilities", "$0.7M"],
  ["Installation & engineering", "$0.9M"],
  ["Material handling & lab", "$0.4M"],
  ["Contingency", "$0.9M"],
  ["Startup liquidity", "$4.0M"],
];

const UseOfFunds = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Investment + Use of Funds</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          A Two-Stage Capital Plan.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-px bg-primary-foreground/15 border border-primary-foreground/15">
            {headline.map((h) => (
              <div key={h.label} className="bg-primary p-6 sm:p-8">
                <p className="text-4xl sm:text-6xl font-bold text-brand leading-none mb-2">
                  {h.value}
                </p>
                <p className="text-minimal text-primary-foreground/60">{h.label}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-minimal text-brand mb-4">Stage 1 Use of Funds</p>
            <div className="border border-primary-foreground/15">
              {allocations.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 p-3 sm:p-4 border-b last:border-b-0 border-primary-foreground/15">
                  <p className="text-sm sm:text-base text-primary-foreground/75">{label}</p>
                  <p className="font-bold text-brand whitespace-nowrap">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-px bg-primary-foreground/15 mt-6">
              <div className="bg-primary p-5">
                <p className="text-2xl font-bold text-brand">12 months</p>
                <p className="text-minimal text-primary-foreground/60 mt-2">Site build</p>
              </div>
              <div className="bg-primary p-5">
                <p className="text-2xl font-bold text-brand">4 months</p>
                <p className="text-minimal text-primary-foreground/60 mt-2">Production line installation</p>
              </div>
              <div className="bg-primary p-5">
                <p className="text-2xl font-bold text-brand">Main building</p>
                <p className="text-minimal text-primary-foreground/60 mt-2">Production can start once installed</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">
              The production line can be commissioned as soon as the main building is in place.
            </p>
          </div>
        </div>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          View Full Use of Funds <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-primary-foreground/55 max-w-4xl">
          Management planning estimates subject to final equipment quotations, site requirements and financing terms.
        </p>
      </div>
    </section>
  );
};

export default UseOfFunds;
