import sowsBg from "@/assets/sows-warehouse.png.asset.json";


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
            Invest in a U.S.
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">Secondary Aluminum Alloy Platform</span>
          </h1>



        </div>
      </div>
    </section>
  );
};


export default Hero;
