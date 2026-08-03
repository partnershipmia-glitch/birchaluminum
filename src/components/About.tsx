const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-minimal text-brand mb-5">About Birch Aluminum</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Building the Next Generation Domestic Aluminum Producer
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Birch Aluminum is developing a purpose-built secondary aluminum production facility
              designed around automation, efficient metal flow, disciplined capital allocation, and
              scalable long-term growth.
            </p>
            <p>
              The project combines experienced leadership, regional supply advantages, and a
              debt-free capital structure to deliver reliable production with predictable operating
              cash flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
