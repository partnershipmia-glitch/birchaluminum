import ctaBg from "@/assets/furnace-charging.png.asset.json";

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
              Future stages are reviewed through diligence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-primary-foreground/80 mb-10">
            Birch Aluminum shares the current development plan, capital requirements, operating assumptions
            and investor materials only with qualified investors and strategic partners. This public website
            is not an offer to sell securities and does not guarantee future performance.
          </p>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
