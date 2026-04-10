import { ArrowRight } from "lucide-react";

const Partnership = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-minimal text-muted-foreground mb-4">
            Partnership & Supply
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Building Relationships
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We are actively building relationships with:
          </p>
          <ul className="space-y-4 mb-10">
            {["Scrap suppliers", "Aluminum buyers", "Strategic partners"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          <a
            href="mailto:birchfamilyllcfl@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:opacity-90 transition-opacity"
          >
            Send Your Offer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
