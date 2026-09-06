import { ArrowRight } from "lucide-react";
import founderAsset from "@/assets/founder-portrait.png.asset.json";
import { callUrl } from "@/lib/links";

const leaders = [
  {
    years: "10+ years",
    name: "Alexander Bereza",
    role: "CEO & Founder",
    items: [
      "Environmental requirements and compliance",
      "Customer relationships and sales exposure",
      "Hands-on production and process-control exposure",
      "Supplier relationships and project development",
    ],
  },
  {
    years: "18 years",
    name: "Iryna Baranova",
    role: "Chief Financial Officer",
    items: ["Financial planning and analysis", "Cash-flow management and forecasting", "Investor reporting", "Accounting, compliance and controls"],
  },
  {
    years: "25+ years",
    name: "Francis Conklin",
    role: "Plant Manager",
    items: ["Secondary aluminum melting and casting", "Plant construction, commissioning and startup", "Process optimization and scaling", "OSHA, environmental and safety compliance"],
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Founder Story</p>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-start">
          <div className="aspect-[4/5] bg-background border border-border overflow-hidden">
            <img
              src={founderAsset.url}
              alt="Alexander Bereza, Founder and CEO of Birch Aluminum"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              The experience to build, finance
              <br />
              <span className="text-brand">and operate the platform.</span>
            </h2>
            <p className="text-minimal text-muted-foreground mb-8">
              Alexander Bereza · Founder & CEO
            </p>

            <div className="grid sm:grid-cols-3 gap-px bg-border border border-border mb-8">
              {leaders.map((leader) => (
                <div key={leader.name} className="bg-background p-6">
                  <p className="text-3xl font-bold text-brand mb-2">{leader.years}</p>
                  <h3 className="font-bold">{leader.name}</h3>
                  <p className="text-minimal text-muted-foreground mt-1 mb-4">{leader.role}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {leader.items.map((i) => (
                      <li key={i} className="flex gap-2 leading-relaxed">
                        <span className="text-brand">·</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Meet the Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
