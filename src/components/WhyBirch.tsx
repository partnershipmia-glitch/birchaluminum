import { Factory, Cog, Workflow, Gauge, ShieldCheck } from "lucide-react";
import facilityLayout from "@/assets/facility-layout.png";

const cards = [
  {
    icon: Factory,
    title: "Purpose-Built Facility",
    body: "Facility designed specifically for aluminum melting, safe material flow, automated casting, and future expansion.",
  },
  {
    icon: Cog,
    title: "Automated Ingot Production",
    body: "Fully automated $1M ingot line improves consistency, reduces manual handling, and supports scalable production.",
  },
  {
    icon: Workflow,
    title: "Integrated Process System",
    body: "Holding furnace, molten metal pump, degasser, filter box and launders create controlled metal flow and improved quality.",
  },
  {
    icon: Gauge,
    title: "High-Throughput Platform",
    body: "Two MAX-4000 furnaces supporting approximately 3 million pounds per month.",
  },
  {
    icon: ShieldCheck,
    title: "Debt-Free Capital Structure",
    body: "100% equity funded with no mandatory bank debt.",
  },
];

const WhyBirch = () => {
  return (
    <section id="why-birch" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Why Birch</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mb-14">
          An Operating Platform Engineered for Throughput and Control
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {cards.map((c) => (
            <div key={c.title} className="bg-background p-8 flex flex-col">
              <c.icon className="w-7 h-7 text-brand mb-6" />
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-center">
            <p className="text-4xl font-bold text-brand mb-2">3M lbs</p>
            <p className="text-primary-foreground/80">
              Monthly production capacity at stabilized operations.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-minimal text-muted-foreground mb-4">
            Facility Layout · Decatur, Alabama · 173 ft × 75 ft
          </p>
          <div className="border border-border bg-background p-4 md:p-8">
            <img
              src={facilityLayout}
              alt="Birch Aluminum facility floor plan with two MAX-4000 furnaces, holding furnace, automated ingot casting line, degasser and filter box"
              className="w-full h-auto max-w-4xl mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBirch;
