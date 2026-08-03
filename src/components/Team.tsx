import founderAsset from "@/assets/founder-portrait.png.asset.json";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Leadership</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mb-14">
          Operating Experience, Financial Control, and Plant Leadership
        </h2>

        <div className="grid md:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="aspect-[4/5] bg-secondary border border-border overflow-hidden">
            <img
              src={founderAsset.url}
              alt="Alexander Bereza, Founder and Chief Executive Officer of Birch Aluminum"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-minimal text-muted-foreground mb-3">Founder & Chief Executive Officer</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Alexander Bereza</h3>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Alexander Bereza leads Birch Aluminum's strategy, capital allocation, commercial
                relationships, and plant execution. He has ten years of business ownership and
                management experience and has founded three operating companies.
              </p>
              <p>
                He previously held a senior operating role at a comparable Alabama secondary
                aluminum producer, where he worked directly on melting operations, supplier
                procurement, and customer delivery programs — the same disciplines the Birch
                facility is built around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
