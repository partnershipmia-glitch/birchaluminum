import { ArrowRight } from "lucide-react";
import sowsBg from "@/assets/sows-warehouse.png.asset.json";

const facts = [
  { value: "36M", unit: "lbs / year", label: "Annual capacity" },
  { value: "$73.8M", unit: "Year 3 revenue", label: "At full capacity" },
  { value: "$6.03M", unit: "capital raise", label: "100% equity funded" },
  { value: "30%", unit: "investor ownership", label: "Debt-free structure" },
];

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 md:py-36 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${sowsBg.url})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl">
          <p className="text-minimal text-brand mb-8">Birch Aluminum · Decatur, Alabama</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Reliable Domestic Aluminum.
            <br />
            Efficient Operations.
            <br />
            <span className="text-brand">Predictable Cash Flow.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-12">
            Birch Aluminum is building a modern secondary aluminum smelter in Alabama capable of
            producing approximately 36 million pounds annually through a fully equity-funded
            operating model.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#investment"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-9 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Investors <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#why-birch"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-9 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Project Overview
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {facts.map((f) => (
              <div key={f.label} className="bg-primary p-6">
                <p className="text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                  {f.value}
                </p>
                <p className="text-sm text-primary-foreground/90 font-medium">{f.unit}</p>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mt-2">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
