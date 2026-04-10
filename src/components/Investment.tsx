import { ArrowRight } from "lucide-react";

const highlights = [
  "Target 4x return in 4 years",
  "Exposure to a U.S.-based industrial asset",
  "Revenue-generating business model",
];

const idealInvestor = [
  "Interested in U.S. manufacturing",
  "Scrap / commodities sector",
  "Cash-flow industrial assets",
];

const Investment = () => {
  return (
    <section id="investment" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-minimal text-primary-foreground/60 mb-4">
              Investment Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Partner With Us
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-6">
              We are currently seeking:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full shrink-0" />
                Equity partner / investor
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full shrink-0" />
                SBA-backed structure (approval in place)
              </li>
            </ul>
            <a
              href="mailto:birchfamilyllcfl@gmail.com"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-medium hover:opacity-90 transition-opacity"
            >
              Send Proposal <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-minimal text-primary-foreground/60 mb-4">
                Highlights
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-minimal text-primary-foreground/60 mb-4">
                Ideal Investor
              </p>
              <ul className="space-y-3">
                {idealInvestor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
