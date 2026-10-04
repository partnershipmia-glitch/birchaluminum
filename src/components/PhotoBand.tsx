import furnaceA from "@/assets/band-furnace.jpg.asset.json";
import sowsA from "@/assets/band-sows.webp.asset.json";
import yardA from "@/assets/band-yard.webp.asset.json";
import castingA from "@/assets/band-casting.webp.asset.json";

const shots = [
  { src: furnaceA.url, label: "Melting Furnace" },
  { src: castingA.url, label: "Casting Line" },
  { src: sowsA.url, label: "Aluminum Sows" },
  { src: yardA.url, label: "Stacked & Strapped Ingots" },
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
