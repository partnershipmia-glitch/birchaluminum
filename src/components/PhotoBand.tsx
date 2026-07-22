import sows from "@/assets/sows-stacked.png.asset.json";
import warehouse from "@/assets/sows-warehouse.png.asset.json";
import casting from "@/assets/casting-line.png.asset.json";
import workers from "@/assets/plant-workers.png.asset.json";

const shots = [
  { src: sows.url, label: "Half Stack Ingots, Strapped" },
  { src: casting.url, label: "Casting Line" },
  { src: workers.url, label: "Plant Operations" },
  { src: warehouse.url, label: "Ingot Inventory" },
];

const PhotoBand = () => {
  return (
    <section className="bg-primary">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {shots.map((s) => (
          <div key={s.label} className="relative aspect-[4/5] overflow-hidden group">
            <img
              src={s.src}
              alt={s.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <p className="absolute bottom-4 left-4 text-primary-foreground text-minimal">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoBand;
