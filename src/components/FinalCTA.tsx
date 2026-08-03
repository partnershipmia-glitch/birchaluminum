import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/furnace-charging.png.asset.json";

const materials = [
  "Business plan",
  "Financial model",
  "Supplier and buyer documentation",
  "Management biographies",
  "Facility and permitting information",
];

const mailBase =
  "https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com";
const callUrl = `${mailBase}&su=${encodeURIComponent(
  "Investor Enquiry - Birch Aluminum"
)}&body=${encodeURIComponent(
  "Hello Birch Aluminum Team,\n\nI would like to discuss the investment opportunity.\n\nName:\nCompany:\nPhone:\nProposed times:\n\nThank you.\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052"
)}`;

const FinalCTA = () => {
  return (
    <section id="contact" className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ctaBg.url})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <p className="text-minimal text-brand mb-5">Investor Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Review the Facility Plan, Financial Model, and Investment Terms
          </h2>

          <a
            href={callUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-9 py-4 font-semibold hover:opacity-90 transition-opacity mb-12"
          >
            Contact Investor Relations <ArrowRight className="w-4 h-4" />
          </a>

          <div className="border-t border-primary-foreground/15 pt-8">
            <p className="text-minimal text-primary-foreground/60 mb-4">Included in the package</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {materials.map((m) => (
                <li key={m} className="flex gap-3 text-primary-foreground/80">
                  <span className="text-brand">·</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
