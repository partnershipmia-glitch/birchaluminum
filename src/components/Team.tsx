import { ArrowRight } from "lucide-react";
import founderAsset from "@/assets/founder-portrait.png.asset.json";
import { callUrl } from "@/lib/links";

const columns = [
  {
    title: "Experience",
    items: [
      "Hands-on knowledge gained inside an operating smelter, alongside an engineer with 40 years building plants across North America.",
    ],
  },
  {
    title: "I Understand",
    items: ["Operations", "Suppliers", "Buyers", "Permits", "Equipment", "Plant finance"],
  },
  {
    title: "Execution",
    items: [
      "Built supplier relationships",
      "Identified customer demand",
      "Understand permitting",
      "Built the operating model from the ground up",
    ],
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
              I do not want to build one aluminum plant.
              <br />
              <span className="text-brand">I want to build a vertically integrated metals company.</span>
            </h2>
            <p className="text-minimal text-muted-foreground mb-8">
              Alexander Bereza · Founder & CEO
            </p>

            <div className="grid sm:grid-cols-3 gap-px bg-border border border-border mb-8">
              {columns.map((c) => (
                <div key={c.title} className="bg-background p-6">
                  <p className="text-minimal text-brand mb-4">{c.title}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {c.items.map((i) => (
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
