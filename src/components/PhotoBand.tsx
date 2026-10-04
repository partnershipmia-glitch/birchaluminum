import sows from "@/assets/photo-stacked-ingots.jpg";
import warehouse from "@/assets/photo-ingot-inventory.jpg";
import casting from "@/assets/photo-casting-line.jpg";
import workers from "@/assets/photo-inventory-weighing.jpg";

const shots = [
  { src: sows, label: "Stacked & Strapped Ingots" },
  { src: casting, label: "Casting Line" },
  { src: workers, label: "Inventory Weighing, Count" },
  { src: warehouse, label: "Ingot Inventory" },
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
