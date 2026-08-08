import facilityLayout from "@/assets/facility-layout-2026.png.asset.json";
import facilitySiteView from "@/assets/facility-site-view.png.asset.json";

const flow = ["Scrap", "Melting", "Alloy Production", "Casting", "Customer"];

const specs = [
  { value: "3M+ lbs", label: "Monthly capacity" },
  { value: "2 × MAX-4000", label: "Sweat furnaces" },
  { value: "Purpose-Built", label: "Production facility" },
  { value: "Alabama", label: "Strategic southeast location" },
];

const WhyAlabama = () => {
  return (
    <section id="facility" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">The First Facility</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
          The First Facility: Alabama
        </h2>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="border border-border bg-secondary px-3 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {step}
              </span>
              {i < flow.length - 1 && <span className="text-brand font-bold">→</span>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-10">
          {specs.map((s) => (
            <div key={s.label} className="bg-background p-5 sm:p-8">
              <p className="text-xl sm:text-3xl font-bold text-brand leading-tight mb-2">
                {s.value}
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-border bg-secondary p-4 sm:p-8 mb-4">
          <img
            src={facilityLayout.url}
            alt="Birch Aluminum interior floor plan in Decatur, Alabama with two MAX-4000 sweat furnaces, holding furnace and ingot casting line"
            className="w-full h-auto max-w-4xl mx-auto"
            loading="lazy"
          />
          <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground text-center mt-3">
            Interior floor plan — 200' × 60'
          </p>
        </div>

        <div className="border border-border bg-secondary p-4 sm:p-8 mb-6">
          <img
            src={facilitySiteView.url}
            alt="Full site view of the Birch Aluminum industrial metal building with truck circulation, three loading docks and employee parking"
            className="w-full h-auto max-w-4xl mx-auto"
            loading="lazy"
          />
          <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground text-center mt-3">
            Full site view — 200' × 60' × 45', 3 truck docks, full drive-around
          </p>
        </div>


        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          Built around the production process — not the production process around an existing
          building.
        </p>
      </div>
    </section>
  );
};

export default WhyAlabama;
