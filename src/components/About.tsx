const advantages = [
  {
    title: "Strategic Location",
    detail: "Central access to Southeast automotive manufacturers. 10 targeted customers within 2 hours of the facility.",
  },
  {
    title: "Lower Operating Costs",
    detail: "Reduced labor and overhead. No worker unions.",
  },
  {
    title: "Industrial Infrastructure",
    detail: "Existing heavy industrial base and a manufacturing-friendly environment.",
  },
  {
    title: "Growing Domestic Demand",
    detail: "U.S. aluminum demand is rising as manufacturers reshore production.",
  },
  {
    title: "Tariff-Driven Supply Chain",
    detail: "Reliable domestic aluminum supply chain reinforced by import tariffs.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-minimal text-muted-foreground mb-4">About the Project</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Birch Aluminum
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Birch Aluminum is a developing secondary aluminum facility based in{" "}
              <span className="text-foreground font-medium">Decatur, Alabama</span>.
            </p>
            <p>
              We source aluminum scrap{" "}
              <span className="text-foreground font-medium">356 alloys</span> aligned with{" "}
              <span className="text-foreground font-medium">U.S. autopart makers standards</span>{" "}
              and focus on efficient, scalable production systems.
            </p>
          </div>
        </div>

        <p className="text-minimal text-muted-foreground mb-6">Why Alabama</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {advantages.map((a) => (
            <div key={a.title} className="bg-background p-8">
              <h3 className="text-xl font-bold tracking-tight mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
