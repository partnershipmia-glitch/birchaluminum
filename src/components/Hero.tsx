import { ArrowRight } from "lucide-react";
import sowsBg from "@/assets/sows-warehouse.png.asset.json";

const facts = [
  { value: "3.0M", unit: "lbs / month", label: "Planned production" },
  { value: "$73.8M", unit: "annual revenue", label: "At full production" },
  { value: "$4M", unit: "Year 3 EBITDA", label: "Base case" },
  { value: "15%", unit: "equity offered", label: "For funding this deal" },
];

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground section-padding overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${sowsBg.url})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" aria-hidden />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-yellow-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-3xl" />


      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl">
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Now Raising · Decatur, Alabama
          </span>

          <h1 className="tracking-tight leading-[1.05] mb-6">
            <span className="block text-2xl md:text-4xl lg:text-5xl font-medium text-primary-foreground/90 mb-1">
              Domestic Secondary
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground">
              Aluminum Production
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl font-medium text-yellow-400 mt-2">
              Built Around Proven Demand
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-12">
            I'm developing a recovery production facility focused on converting
            scrap into aluminum alloys for U.S. industrial buyers.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 mb-10 border border-yellow-400/30">
            {facts.map((f) => (
              <div key={f.label} className="bg-primary p-6">
                <p className="text-3xl md:text-4xl font-black text-yellow-400 leading-none mb-2">
                  {f.value}
                </p>
                <p className="text-sm text-primary-foreground/90 font-medium">{f.unit}</p>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mt-2">
                  {f.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#investor-economics"
              className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-8 py-4 font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
            >
              Review the Investment Opportunity <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docsend.com/view/74m7bpgj3pqjkmqd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 px-8 py-4 font-bold hover:bg-yellow-400 hover:text-primary transition-colors"
            >
              View Pitch Deck <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
