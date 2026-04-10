import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-minimal text-primary-foreground/60 mb-6">
            Decatur, Alabama
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Secondary Aluminum Production
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 leading-relaxed">
            Building a scalable aluminum smelting operation focused on scrap wheel
            processing and fast cash conversion.
          </p>
          <p className="text-base text-primary-foreground/60 mb-10 leading-relaxed max-w-2xl">
            I'm currently building a secondary aluminum smelting facility in Alabama,
            starting with one furnace at ~3 million pounds per month, with a clear
            path to scale to two furnaces within 18–24 months. The model is based on
            strong local demand, fast inventory turnover, and established supply and
            buyer relationships.
          </p>
          <a
            href="mailto:birchfamilyllcfl@gmail.com"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-medium hover:opacity-90 transition-opacity"
          >
            Send Proposal <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
