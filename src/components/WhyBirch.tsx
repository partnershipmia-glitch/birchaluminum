import { Factory, Recycle, MapPin } from "lucide-react";

const cards = [
  {
    icon: Factory,
    title: "Domestic Demand",
    body: "13 billion lb/year — U.S. manufacturers need reliable regional aluminum supply.",
  },
  {
    icon: Recycle,
    title: "Scrap → Alloy",
    body: "Convert suitable secondary aluminum scrap into specification-grade target alloys.",
  },
  {
    icon: MapPin,
    title: "Local Advantage",
    body: "Regional production cuts freight, lead times and import dependence for customers.",
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

      </div>
    </section>
  );
};

export default WhyBirch;
