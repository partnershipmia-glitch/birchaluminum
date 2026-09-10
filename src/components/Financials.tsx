import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const Financials = () => {
  return (
    <section id="financials" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Financial Snapshot</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          Built for industrial diligence.
          <br />
          <span className="text-brand">Designed for disciplined scale.</span>
        </h2>

        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
        >
          Request Financial Outlook <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-muted-foreground">
          This is general project information only and should not be interpreted as an offer, guarantee or promise of investment returns.
        </p>
      </div>
    </section>
  );
};

export default Financials;
