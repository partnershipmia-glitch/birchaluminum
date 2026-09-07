const REEL_URL = "https://www.instagram.com/reel/Dcef-OFJIRD/";
const EMBED_URL = "https://www.instagram.com/reel/Dcef-OFJIRD/embed/";

const FacilityReel = () => {
  return (
    <section className="bg-background border-t border-border">
      <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-minimal text-brand mb-3">Founder story</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See the operation, not just the numbers
          </h2>
          <p className="text-muted-foreground mb-6">
            Real footage from the aluminum recovery process — scrap in, furnace,
            tapped metal, finished ingots. Published on our public Instagram so you
            can verify it yourself.
          </p>
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-bold hover:bg-muted transition-colors"
          >
            View on Instagram
          </a>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-black">
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src={EMBED_URL}
            title="Birch Aluminum facility reel on Instagram"
            className="absolute left-0 w-full -translate-y-1/2"
            style={{ top: "50%", height: "316%" }}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilityReel;
