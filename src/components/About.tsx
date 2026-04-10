const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
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
              We source aluminum scrap aligned with{" "}
              <span className="text-foreground font-medium">U.S. standards</span> and
              focus on efficient, scalable production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
