import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { customerInquiryUrl } from "@/lib/links";
import sowsBg from "@/assets/sows-warehouse.png.asset.json";

const title = "Birch Aluminum | Secondary Aluminum Ingot & Sow — 356 / 380 Alloys";
const description =
  "Birch Aluminum supplies specification-grade secondary aluminum ingot and sow in 356 and 380 alloys to U.S. die casters and foundries. Chemistry-controlled, certified per heat. Product ready for shipping end of 2028.";

const heroFacts = [
  { value: "356 / 380", label: "Specification alloys" },
  { value: "Ingot & Sow", label: "Product forms" },
  { value: "End of 2028", label: "Product ready for shipping" },
];

const alloys = [
  {
    name: "356",
    note: "Primary use: sand and permanent mold castings, automotive and structural components.",
    rowHeader: "Element",
    rows: [
      ["Si", "6.5 – 7.5"],
      ["Fe", "0.18 max"],
      ["Cu", "0.25 max"],
      ["Mn", "0.35 max"],
      ["Mg", "0.25 – 0.45"],
      ["Zn", "0.35 max"],
      ["Ti", "0.25 max"],
    ],
  },
  {
    name: "380",
    note: "Primary use: high-pressure die casting, thin-wall and complex automotive components.",
    rowHeader: "Element",
    rows: [
      ["Si", "7.5 – 9.5"],
      ["Fe", "1.0 max"],
      ["Cu", "3.0 – 4.0"],
      ["Mn", "0.50 max"],
      ["Mg", "0.10 max"],
      ["Zn", "2.9 max"],
      ["Ni", "0.50 max"],
    ],
  },
];

const forms = [
  {
    name: "Ingot",
    body: "Trapezoidal ingots, approx. 22 lb (10 kg) each. Delivered stacked and strapped in bundles, palletized or bulk.",
  },
  {
    name: "Sow",
    body: "Approx. 1,000 lb (455 kg) sows for remelt operations with high consumption. Delivered loose or custom-banded.",
  },
];

const quality = [
  {
    title: "Chemistry control",
    body: "Spectrochemical analysis at the furnace and before casting. Chemistry corrected in the melt, not after.",
  },
  {
    title: "Melt quality",
    body: "Density index monitored by reduced pressure test. Degassing and filtration as standard practice.",
  },
  {
    title: "Certification",
    body: "Certificate of Analysis issued with every shipment, reported per heat.",
  },
  {
    title: "Traceability",
    body: "Each heat is numbered and traceable from scrap qualification through casting and loading.",
  },
];

const logistics = [
  { label: "Location", value: "Decatur, Alabama" },
  { label: "Delivery", value: "Truck (FTL / LTL), export on request" },
  { label: "Packaging", value: "Bundled, palletized or bulk" },
  { label: "Terms", value: "Confirmed per order" },
];

const InquirySection = () => {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    alloy: "356",
    form: "Ingot",
    monthly: "",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(customerInquiryUrl(form), "_blank", "noopener");
  };

  const inputCls =
    "w-full bg-background border border-border px-3 py-2.5 text-sm outline-none focus:border-brand transition-colors";

  return (
    <section id="inquiry" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">Supply Inquiry</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Send your inquiry with your specification
          <br className="hidden sm:block" /> and monthly consumption.
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Include the alloy, product form and expected monthly volume. We will
          confirm chemistry, packaging, terms and delivery schedule.
        </p>

        <form
          onSubmit={submit}
          className="grid sm:grid-cols-2 gap-px bg-border border border-border max-w-3xl"
        >
          <input required className={inputCls} placeholder="Company" value={form.company} onChange={set("company")} />
          <input required className={inputCls} placeholder="Contact name" value={form.contact} onChange={set("contact")} />
          <input required type="email" className={inputCls} placeholder="Email" value={form.email} onChange={set("email")} />
          <input className={inputCls} placeholder="Phone" value={form.phone} onChange={set("phone")} />
          <select className={inputCls} value={form.alloy} onChange={set("alloy")} aria-label="Alloy">
            <option value="356">Alloy 356</option>
            <option value="380">Alloy 380</option>
            <option value="Other">Other / custom chemistry</option>
          </select>
          <select className={inputCls} value={form.form} onChange={set("form")} aria-label="Product form">
            <option value="Ingot">Ingot</option>
            <option value="Sow">Sow</option>
            <option value="Ingot & Sow">Ingot & Sow</option>
          </select>
          <input required className={`${inputCls} sm:col-span-2`} placeholder="Monthly consumption (lb per month)" value={form.monthly} onChange={set("monthly")} />
          <textarea
            className={`${inputCls} sm:col-span-2 min-h-28`}
            placeholder="Specification, chemistry limits, packaging or delivery notes"
            value={form.notes}
            onChange={set("notes")}
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-brand text-primary font-bold uppercase tracking-wider text-sm py-4 hover:opacity-90 transition-opacity"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://birchaluminum.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://birchaluminum.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-32 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-25 bg-cover bg-center"
            style={{ backgroundImage: `url(${sowsBg.url})` }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden />

          <div className="container mx-auto px-5 sm:px-6 relative">
            <div className="max-w-5xl">
              <p className="text-minimal text-brand mb-6">Birch Aluminum · Decatur, Alabama</p>

              <h1 className="text-[2rem] leading-[1.08] sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Secondary Aluminum
                <br className="hidden sm:block" />{" "}
                <span className="text-brand">Ingot & Sow.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
                Specification-grade 356 and 380 alloys produced from qualified
                scrap. Chemistry-controlled, certified per heat. Product ready
                for shipping end of 2028.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
                {heroFacts.map((f) => (
                  <div key={f.label} className="bg-primary p-4 sm:p-6">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                      {f.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60">
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section-padding bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <p className="text-minimal text-brand mb-4">Products</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Ingot & Sow. <span className="text-brand">356 and 380 alloys.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mb-10">
              {forms.map((f) => (
                <div key={f.name} className="bg-background p-6 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand mb-3">{f.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
              {alloys.map((a) => (
                <div key={a.name} className="bg-background p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-1">
                    Alloy <span className="text-brand">{a.name}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">{a.note}</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="py-2 pr-4 font-semibold uppercase tracking-wider text-xs text-muted-foreground">{a.rowHeader}</th>
                        <th className="py-2 font-semibold uppercase tracking-wider text-xs text-muted-foreground">Composition, %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {a.rows.map(([el, val]) => (
                        <tr key={el} className="border-b border-border/60">
                          <td className="py-2 pr-4 font-bold text-brand">{el}</td>
                          <td className="py-2 text-muted-foreground">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-4">
                    Standard composition limits. Custom chemistry on request.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="section-padding bg-secondary">
          <div className="container mx-auto px-5 sm:px-6">
            <p className="text-minimal text-brand mb-4">Quality Control</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Certified per heat. <span className="text-brand">Traceable end to end.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {quality.map((q) => (
                <div key={q.title} className="bg-background p-6 sm:p-8">
                  <h3 className="font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-brand flex-shrink-0" />
                    {q.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{q.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <p className="text-minimal text-brand mb-4">Supply & Logistics</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Produced in Alabama. <span className="text-brand">Delivered to your dock.</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {logistics.map((l) => (
                <div key={l.label} className="bg-background p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{l.label}</p>
                  <p className="text-lg font-bold leading-snug">{l.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InquirySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
