import founderImg from "@/assets/founder.jpg";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Section 03 · Why This Team</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-14">
          Operating Experience, Financial Control, and Plant Leadership
        </h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start max-w-5xl">
          <div className="aspect-[4/5] bg-secondary border border-border overflow-hidden">
            <img src={founderImg} alt="Alexander Bereza, Founder & CEO of Birch Aluminum" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-minimal text-muted-foreground mb-2">Founder & CEO</p>
            <h3 className="text-3xl font-bold mb-6">Alexander Bereza</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-1">·</span>
                <span>10 years of business ownership and management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-1">·</span>
                <span>Three-time founder across operating businesses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-1">·</span>
                <span>Senior operating role at a comparable Alabama secondary aluminum producer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-1">·</span>
                <span>Responsible for strategy, capital, commercial relationships, and execution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
