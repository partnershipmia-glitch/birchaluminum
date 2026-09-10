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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
            Ready to discuss the opportunity?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
