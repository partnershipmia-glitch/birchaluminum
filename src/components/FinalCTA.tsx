import { ArrowRight, Calendar } from "lucide-react";

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
    <section id="cta" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-4">Next Step</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Review the Facility Plan, Financial Model, and Investment Terms
          </h2>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={requestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-bold hover:opacity-90 transition-opacity"
            >
              Request Investor Materials <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 font-bold hover:bg-secondary transition-colors"
            >
              <Calendar className="w-4 h-4" /> Schedule a Management Call
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-minimal text-muted-foreground mb-4">Included in the package</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {materials.map((m) => (
                <li key={m} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">·</span>
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
