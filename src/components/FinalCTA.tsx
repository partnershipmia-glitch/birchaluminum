import { Calendar } from "lucide-react";
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
const requestUrl = `${mailBase}&su=${encodeURIComponent(
  "Investor Materials Request - Birch Aluminum"
)}&body=${encodeURIComponent(
  "Hello Birch Aluminum Team,\n\nPlease send the investor materials package (business plan, financial model, supplier/buyer documentation, management biographies, facility & permitting information).\n\nName:\nCompany:\nPhone:\n\nThank you.\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052"
)}`;
const callUrl = `${mailBase}&su=${encodeURIComponent(
  "Schedule Management Call - Birch Aluminum"
)}&body=${encodeURIComponent(
  "Hello Birch Aluminum Team,\n\nI would like to schedule a management call.\n\nName:\nCompany:\nPhone:\nProposed times:\n\nThank you.\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052"
)}`;

const FinalCTA = () => {
  return (
    <section id="cta" className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${ctaBg.url})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" aria-hidden />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <p className="text-minimal text-primary-foreground/60 mb-4">Next Step</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Review the Facility Plan, Financial Model, and Investment Terms
          </h2>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Schedule a Management Call
            </a>
          </div>

          <div className="border-t border-primary-foreground/15 pt-8">
            <p className="text-minimal text-primary-foreground/60 mb-4">Included in the package</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {materials.map((m) => (
                <li key={m} className="flex gap-3 text-primary-foreground/80">
                  <span className="text-yellow-400">·</span>
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
