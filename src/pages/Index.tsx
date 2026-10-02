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


const alloys = [
  {
    name: "356",
    note: "Primary use: sand and permanent mold castings, automotive and structural components.",
    rowHeader: "Element",
    rows: [
      ["Si", "6.5 – 7.5"],
      ["Fe", "0.15 max"],
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
    body: "22 lb (10 kg) each. Stacked. Strapped in bundles.",
  },
  {
    name: "Sow",
    body: "2,000 lb (907 kg) for remelt operations with high consumption. Delivered and sold by truck.",
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

const TYPES = [
  "Future aluminum supply",
  "Sell aluminum scrap",
  "Investor / strategic partner",
  "Equipment / technology partner",
  "Other",
] as const;

const BUYER_MATERIALS = ["A356 ingot", "A356 sow", "A380 ingot", "A380 sow", "Secondary aluminum ingot", "Secondary aluminum sow", "Custom chemistry", "Other"];
const SCRAP_MATERIALS = ["Aluminum wheels", "Cast aluminum scrap", "Clean aluminum scrap", "Extrusion (6063)", "Old sheet", "UBC / cans", "Zorba", "Other"];
const GENERAL_MATERIALS = ["Not applicable", ...BUYER_MATERIALS.slice(0, 6), "Aluminum scrap", "Other"];

const schema = z.object({
  company: z.string().trim().min(1, "Company is required").max(120),
  name: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40),
  website: z.string().trim().max(200),
  type: z.string(),
  material: z.string(),
  volume: z.string().trim().max(60),
  region: z.string().trim().max(120),
  contactTime: z.string().trim().max(80),
  message: z.string().trim().min(1, "Please add details or specification").max(2000),
});

const InquirySection = ({ initialType }: { initialType: string }) => {
  const [form, setForm] = useState({
    company: "", name: "", email: "", phone: "", website: "",
    type: initialType, material: "", volume: "", region: "", contactTime: "", message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => setForm((f) => ({ ...f, type: initialType, material: "" })), [initialType]);

  const isBuyer = form.type === TYPES[0];
  const isScrap = form.type === TYPES[1];
  const materials = isBuyer ? BUYER_MATERIALS : isScrap ? SCRAP_MATERIALS : GENERAL_MATERIALS;
  const material = form.material || materials[0];

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value, ...(k === "type" ? { material: "" } : {}) }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse({ ...form, material });
    if (!r.success) return setError(r.error.issues[0].message);
    if ((isBuyer || isScrap) && !form.volume.trim()) return setError("Monthly volume is required");
    setError("");
    window.open(commercialInquiryUrl(r.data as Record<string, string>), "_blank", "noopener");
    setSent(true);
  };

  const inputCls =
    "w-full bg-background border-0 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-inset focus:ring-brand transition";
  const labelCls = "bg-background px-3 pt-3 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block";

  const Field = ({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) => (
    <label className={`bg-background flex flex-col ${wide ? "sm:col-span-2" : ""}`}>
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );

  return (
    <section id="inquiry" className="section-padding bg-secondary scroll-mt-20">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-foreground !font-bold mb-4">Commercial Inquiry</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Buyers, scrap suppliers <span className="text-brand">and partners.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Choose your inquiry type. For special orders, include the target chemistry; for scrap, describe
          material, condition and available volume.
        </p>

        {sent ? (
          <div className="max-w-3xl border border-border bg-background p-8 sm:p-10">
            <span className="block h-2.5 w-10 bg-brand mb-5" />
            <p className="text-xl sm:text-2xl font-bold mb-3">
              Thank you. Birch Aluminum will review your inquiry and follow up if there is a qualified fit.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Your email draft opened in a new tab — please press Send there to deliver it.
            </p>
            <button onClick={() => setSent(false)} className="text-sm font-bold underline underline-offset-4">
              Send another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-px bg-border border border-border max-w-3xl">
            <Field label="Inquiry type *" wide>
              <select className={inputCls} value={form.type} onChange={set("type")}>
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Company name *"><input className={inputCls} value={form.company} onChange={set("company")} maxLength={120} /></Field>
            <Field label="Contact name *"><input className={inputCls} value={form.name} onChange={set("name")} maxLength={100} /></Field>
            <Field label="Email *"><input type="email" className={inputCls} value={form.email} onChange={set("email")} maxLength={255} /></Field>
            <Field label="Phone"><input className={inputCls} value={form.phone} onChange={set("phone")} maxLength={40} /></Field>
            <Field label="Company website"><input className={inputCls} value={form.website} onChange={set("website")} maxLength={200} placeholder="https://" /></Field>
            <Field label={isScrap ? "Scrap category *" : "Material or product interest *"}>
              <select className={inputCls} value={material} onChange={set("material")}>
                {materials.map((m) => <option key={m}>{m}</option>)}
              </select>
            </Field>
            <Field label={`Monthly volume, lb/month${isBuyer || isScrap ? " *" : ""}`}>
              <input className={inputCls} value={form.volume} onChange={set("volume")} maxLength={60} />
            </Field>
            <Field label={isScrap ? "Shipping location" : "Delivery region / location"}>
              <input className={inputCls} value={form.region} onChange={set("region")} maxLength={120} />
            </Field>
            <Field label={isBuyer ? "Specification / chemistry and requirements *" : isScrap ? "Material description, condition, current buyers *" : "Message *"} wide>
              <textarea rows={5} className={`${inputCls} resize-y`} value={form.message} onChange={set("message")} maxLength={2000} />
            </Field>
            <Field label="Best time to contact" wide>
              <input className={inputCls} value={form.contactTime} onChange={set("contactTime")} maxLength={80} />
            </Field>
            <div className="sm:col-span-2 bg-background px-3 py-3 text-xs text-muted-foreground">
              Birch Aluminum uses submitted information only to evaluate qualified commercial, supplier, and investor inquiries.
              {error && <p className="mt-2 text-sm text-foreground font-bold">⚠ {error}</p>}
            </div>
            <button type="submit" className="sm:col-span-2 bg-brand text-primary font-bold uppercase tracking-wider text-sm py-4 hover:opacity-90 transition-opacity">
              Send Inquiry
            </button>
          </form>
        )}
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
                Aluminum
                <br className="hidden sm:block" />{" "}
                <span className="text-brand">Ingot & Sow.</span>
              </h1>

            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section-padding bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <p className="text-minimal text-foreground !font-bold mb-4">Products</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10">
              <span className="text-brand">356 and 380 alloys.</span> Ready for shipping at the end of 2028.
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
                          <td className="py-2 pr-4 font-bold text-foreground !font-bold">{el}</td>
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
            <p className="text-minimal text-foreground !font-bold mb-4">Quality Control</p>
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
            <p className="text-minimal text-foreground !font-bold mb-4">Supply & Logistics</p>
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
