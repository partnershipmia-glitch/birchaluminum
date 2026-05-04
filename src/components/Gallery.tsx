import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import furnaceMax4000 from "@/assets/gallery-furnace-max4000.jpg";
import furnaceOperation from "@/assets/gallery-furnace-operation.jpg";
import scrapWheels from "@/assets/gallery-scrap-wheels.jpg";
import charging from "@/assets/gallery-charging.jpg";
import pouring from "@/assets/gallery-pouring.jpg";
import sowOutput from "@/assets/gallery-sow-output.jpg";

const images = [
  {
    src: furnaceMax4000,
    alt: "US Furnaces MAX-4000 Aluminum Sweat Furnace",
    caption: "MAX-4000 Sweat Furnace — Our primary production unit",
  },
  {
    src: furnaceOperation,
    alt: "Aluminum recycling furnace in operation",
    caption: "Furnace operation — 1,500 lb loads melted in 20–25 minutes",
  },
  {
    src: scrapWheels,
    alt: "Aluminum scrap wheels — input material",
    caption: "Input — Aluminum scrap wheels sourced from U.S. suppliers",
  },
  {
    src: charging,
    alt: "Furnace charging and melting process",
    caption: "Charging — Material loaded and pushed into the primary chamber",
  },
  {
    src: pouring,
    alt: "Pouring molten aluminum into sow molds",
    caption: "Pouring — Molten aluminum tapped into 2,000 lb sow molds",
  },
  {
    src: sowOutput,
    alt: "Finished aluminum sow product",
    caption: "Output — Finished aluminum sows ready for sale",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">
          Equipment & Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          From Scrap to Sow
        </h2>
        <p className="text-primary-foreground/70 mb-10 max-w-2xl">
          Our facility uses the US Furnaces MAX-4000 gas-fired sweat furnace with integrated
          afterburner — the industry standard for secondary aluminum smelting.
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((image) => (
              <CarouselItem
                key={image.src}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-primary-foreground/10 mb-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-primary-foreground/70">{image.caption}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
            <CarouselNext className="static translate-y-0 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
