import sitePlanAsset from "@/assets/site-plan.png.asset.json";
import warehouseAsset from "@/assets/warehouse-layout.png.asset.json";
import meltingShopAsset from "@/assets/melting-shop-layout.png.asset.json";

const flow = ["Qualified Scrap", "Controlled Process", "Specification-Grade Alloy", "U.S. Customers"];

const specs = [
  { value: "Decatur", label: "Alabama target region" },
  { value: "356, 380 alloys", label: "Target secondary alloy products" },
  { value: "Ingot / sow", label: "Planned product formats" },
  { value: "Diligence", label: "Capacity and equipment details under review" },
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

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border border-border bg-secondary overflow-hidden">
            <img
              src={sitePlanAsset.url}
              alt="Birch Aluminum facility site planning image for Decatur, Alabama"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
              Site Planning Image — Decatur, AL
            </p>
          </div>
          <div className="border border-border bg-secondary overflow-hidden">
            <img
              src={warehouseAsset.url}
              alt="Warehouse and flex space planning layout with office and loading details"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
              Warehouse / Flex Space Planning Layout
            </p>
          </div>
        </div>

        <div className="border border-border bg-secondary overflow-hidden mb-10">
          <img
            src={meltingShopAsset.url}
            alt="Main production building and melting shop layout with furnace, casting line, and warehouse"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <p className="px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
            Main Production Building / Melting Shop Layout
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          Planned ingot production is focused on 356, 380 alloys, with ingot and sow formats
          intended for U.S. foundries and die-casting manufacturers. Final site, capacity, equipment
          and permitting details remain subject to diligence.
        </p>
      </div>
    </section>
  );
};

export default WhyAlabama;
