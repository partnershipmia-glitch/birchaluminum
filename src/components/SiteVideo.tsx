const reelUrl = "https://www.instagram.com/reel/Dcub5qER03u/";

const SiteVideo = () => {
  return (
    <section id="site-video" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-minimal text-brand mb-4">On The Ground</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5">
              See the operation, not just the numbers.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl">
              A short walkthrough from the field — scrap handling, furnace operation and
              ingot output. Published publicly so anyone can verify it.
            </p>
            <a
              href={reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-background/70 transition-colors"
            >
              Watch on Instagram
            </a>
          </div>

          <div className="mx-auto w-full max-w-[420px]">
            <div className="border border-border bg-background overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/Dcub5qER03u/embed"
                title="Birch Aluminum facility walkthrough video"
                className="w-full h-[560px] block"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteVideo;
