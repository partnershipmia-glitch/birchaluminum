import sowsBg from "@/assets/sows-warehouse.png.asset.json";

const facts = [
  { value: "Decatur, AL", label: "Target U.S. industrial region" },
  { value: "97% recovery", label: "Highly productive, Tight utility use production line from top world supplier!" },
  { value: "356, 380 alloys", label: "Target secondary alloy products" },
  { value: "50% import tariffs", label: "support local producers" },
];

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${sowsBg.url})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden />

      <div className="container mx-auto px-5 sm:px-6 relative">
        <div className="max-w-5xl">
          <p className="text-minimal text-brand mb-6">Birch Aluminum · Decatur, Alabama</p>

          <h1 className="text-[2rem] leading-[1.08] sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Building a Vertically Integrated
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">U.S. Aluminum Platform.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-8">
            I'm building a highly productive secondary aluminum recycling supply chain.
            Designed to supply U.S. automotive customers.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-10">
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              View Investor Deck <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Let's schedule a quick 15 min call and I'll cover all your questions
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {facts.map((f) => (
              <div key={f.label} className="bg-primary p-4 sm:p-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                  {f.value}
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-primary-foreground/60">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
