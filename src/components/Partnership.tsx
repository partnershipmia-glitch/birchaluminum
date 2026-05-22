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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com&su=Supplier%20%2F%20Buyer%20Offer%20-%20Birch%20Aluminum&body=Hello%20Birch%20Aluminum%20Team%2C%0A%0AI%20would%20like%20to%20submit%20an%20offer%20regarding%3A%0A%5B%20%5D%20Scrap%20supply%0A%5B%20%5D%20Aluminum%20purchase%0A%5B%20%5D%20Strategic%20partnership%0A%0ADetails%3A%0A%0A%0AMy%20contact%20info%3A%0AName%3A%20%0ACompany%3A%20%0APhone%3A%20%0A%0A--%0AReply%20to%3A%20BirchFamilyLLCFL%40gmail.com%20%7C%20%2B1%20754-610-1052"
            target="_blank"
            rel="noopener noreferrer"
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
