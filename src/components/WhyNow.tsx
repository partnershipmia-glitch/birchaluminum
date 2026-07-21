import { CheckCircle2 } from "lucide-react";

const readiness = [
  {
    title: "Property identified",
    body: "A site technically suitable for secondary aluminum production has been identified and evaluated.",
  },
  {
    title: "Environmental consultant engaged",
    body: "Consultant hired and paid. Estimated three months for the air-permit process.",
  },
  {
    title: "ADEM permitting active",
    body: "Birch Aluminum held an ADEM permit last year and remains in the Alabama Department of Environmental Management system. Environmental consultants have been paid and have already started the process to secure the new air permit — expected within approximately three months.",
  },
  {
    title: "Supplier and buyer relationships",
    body: "Supported by written correspondence and letters of intent from scrap suppliers and sow buyers.",
  },
];

const WhyNow = () => {
  return (
    <section id="why-now" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Section 02 · Why Now</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-6">
          Domestic Production Has Become More Valuable
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-14 leading-relaxed">
          Higher import costs, supply uncertainty, transportation risk, and demand for U.S.-based
          suppliers have increased the value of domestic secondary aluminum production. At the same
          time, Birch Aluminum has already completed important early-stage work required to move
          toward operations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {readiness.map((r) => (
            <div key={r.title} className="bg-background border border-border p-6 flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
