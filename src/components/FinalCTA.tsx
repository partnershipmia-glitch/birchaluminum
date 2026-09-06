import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/furnace-charging.png.asset.json";
import { deckUrl, callUrl } from "@/lib/links";

const FinalCTA = () => {
  return (
    <section
      id="contact"
      className="relative section-padding bg-primary text-primary-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ctaBg.url})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary via-primary/90 to-primary/50" aria-hidden />
      <div className="container mx-auto px-5 sm:px-6 relative">
        <div className="max-w-4xl">
          <p className="text-minimal text-brand mb-5">Investor Contact</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Stage 1 builds the alloy supply platform.
            <br />
            <span className="text-brand">
              Stage 2 captures downstream margin.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-primary-foreground/80 mb-10">
            $17.5M permanent capital plus a $10M inventory credit line, available after trial melts
            and signed customer contracts, for Stage 1. A planned $19M expansion moves Birch into
            higher-value die-cast components.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              View Investor Deck <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Request Investor Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
