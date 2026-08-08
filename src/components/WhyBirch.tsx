import { Factory, Recycle, MapPin } from "lucide-react";

const cards = [
  {
    icon: Factory,
    title: "Domestic Demand",
    body: "U.S. manufacturers need reliable regional aluminum supply.",
  },
  {
    icon: Recycle,
    title: "Scrap → Alloy",
    body: "Convert available secondary aluminum scrap into specification-grade alloys.",
  },
  {
    icon: MapPin,
    title: "Local Advantage",
    body: "Regional production cuts freight, lead times and import dependence.",
  },
];

const WhyBirch = () => {
  return (
    <section id="why-birch" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Why This Business</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Why Aluminum. Why Birch.
        </h2>

        <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
          {cards.map((c) => (
            <div key={c.title} className="bg-background p-6 sm:p-8">
              <c.icon className="w-7 h-7 text-brand mb-5" />
              <h3 className="text-lg sm:text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-primary text-primary-foreground p-8 sm:p-10 text-center">
          <p className="text-4xl sm:text-6xl font-bold text-brand leading-none mb-3">8M+ lbs / mo</p>
          <p className="text-minimal text-primary-foreground/60">Identified customer demand</p>
        </div>
      </div>
    </section>
  );
};

export default WhyBirch;
