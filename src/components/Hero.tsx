import sowsBg from "@/assets/sows-warehouse.png.asset.json";

const facts = [
  { value: "50% import tariffs", label: "support local producers" },
  { value: "97% recovery", label: "Highly productive, Tight utility use production line from top world supplier!" },
  { value: "6 million pounds", label: "throughput\n356, 380 alloys\nTarget products" },
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

          <div className="border border-brand/40 bg-brand/10 p-5 sm:p-6 mb-8 max-w-2xl">
            <p className="text-minimal text-brand mb-2">For future customers</p>
            <p className="text-base sm:text-lg font-semibold leading-snug mb-1">
              Ingots &amp; sows — 356 and 380 alloys.
            </p>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-4">
              Product available end of 2028. Send your inquiry with spec and monthly
              consumption — for signing an LOI.
            </p>
            <a
              href="mailto:birchfamilyllcfl@gmail.com?subject=LOI%20Inquiry%20%E2%80%94%20356%2F380%20Ingots%20%26%20Sows&body=Alloy%20spec%3A%0AMonthly%20consumption%3A%0ACompany%3A%0AContact%3A"
              className="inline-block bg-brand text-primary font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Send Inquiry
            </a>
          </div>




          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {facts.map((f) => (
              <div key={f.label} className="bg-primary p-4 sm:p-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                  {f.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60 whitespace-pre-line">
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
