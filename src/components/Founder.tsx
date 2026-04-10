const Founder = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-minimal text-muted-foreground mb-4">Founder</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Experienced Operator
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Led by an experienced operator with a strong background in:
          </p>
          <div className="flex flex-wrap gap-3">
            {["Manufacturing", "Operations", "Scaling Businesses"].map((item) => (
              <span
                key={item}
                className="border border-border px-5 py-2.5 text-sm font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
