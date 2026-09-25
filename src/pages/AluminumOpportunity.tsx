import { Helmet } from "react-helmet-async";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList } from "recharts";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BRAND = "hsl(var(--brand))";
const MUTED = "hsl(var(--metallic))";
const FG = "hsl(var(--foreground))";

const Source = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">Source: {children}</p>
);

const Section = ({
  n, eyebrow, title, takeaway, dark, children,
}: { n: number; eyebrow: string; title: string; takeaway: string; dark?: boolean; children: React.ReactNode }) => (
  <section className={`section-padding border-b border-border ${dark ? "bg-primary text-primary-foreground" : "bg-background"}`}>
    <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
      <p className="text-minimal text-brand mb-3">{String(n).padStart(2, "0")} · {eyebrow}</p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10 max-w-4xl">{title}</h2>
      {children}
      <p className="mt-10 text-xl sm:text-2xl font-bold border-l-4 border-brand pl-4">{takeaway}</p>
    </div>
  </section>
);

// 1. U.S. supply (USGS MCS 2025, 2024 data, approx. million metric tons)
const supply = [
  { name: "Primary smelting", value: 0.67 },
  { name: "Recycled (secondary)", value: 3.3 },
  { name: "Net imports", value: 4.4 },
];

// 3. Scrap export destinations (Census/USITC DataWeb, 2023, approx share)
const exportsData = [
  { name: "Canada", value: 26 },
  { name: "Mexico", value: 15 },
  { name: "South Korea", value: 12 },
  { name: "India", value: 10 },
  { name: "Malaysia", value: 9 },
  { name: "Other", value: 28 },
];

// 4. Can recycling rates
const recycling = [
  { name: "Brazil", value: 97 },
  { name: "Europe", value: 73 },
  { name: "United States", value: 43 },
];

const flow = [
  { step: "Scrap", sub: "Wheels · cast scrap" },
  { step: "Sort & qualify", sub: "Chemistry screen" },
  { step: "Melt", sub: "97% target recovery" },
  { step: "Alloy", sub: "356 · 380 spec" },
  { step: "Cast", sub: "Ingot · sow" },
  { step: "U.S. buyers", sub: "Auto · die casters · Tier 1" },
];

const AluminumOpportunity = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>The Aluminum Opportunity | Birch Aluminum</title>
      <meta name="description" content="Why U.S. scrap-to-alloy capacity matters: aluminum demand, scrap exports, recycling benchmarks and how Birch converts domestic scrap into 356 and 380 alloys." />
      <link rel="canonical" href="https://birchaluminum.com/aluminum-opportunity" />
      <meta property="og:title" content="The Aluminum Opportunity | Birch Aluminum" />
      <meta property="og:description" content="U.S. aluminum demand, scrap exports and the case for domestic secondary alloy capacity." />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <TopBar />
    <Navigation />
    <main>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <p className="text-minimal text-brand mb-5">The Aluminum Opportunity</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1] mb-4">AMERICA HAS THE ALUMINUM.</h1>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand mb-8">IT NEEDS THE CAPACITY TO PROCESS IT.</p>
          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-3xl mb-12">
            Birch Aluminum is building domestic capacity to convert recycled aluminum scrap into specification-grade alloys for U.S. manufacturing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-9 items-center gap-2 md:gap-0">
            {["U.S. Aluminum Scrap", "Sort + Process", "Melt + Control Chemistry", "356 / 380 Aluminum", "U.S. Manufacturing"].map((s, i, arr) => (
              <div key={s} className="contents">
                <div
                  className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] border p-4 text-center text-sm font-bold uppercase tracking-wider ${i === 3 ? "bg-brand text-brand-foreground border-brand" : "border-primary-foreground/25"}`}
                  style={{ animationDelay: `${i * 350}ms` }}
                >
                  {s}
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] text-brand text-2xl font-bold text-center md:rotate-0 rotate-90"
                    style={{ animationDelay: `${i * 350 + 175}ms` }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-b border-border">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <p className="text-minimal text-brand mb-3">The Market Problem</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10 max-w-4xl">A Large Domestic Resource Is Leaving the U.S.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { v: "~3.6M MT", l: "Aluminum recovered from purchased scrap in the U.S.", src: "USGS Mineral Commodity Summaries 2025 — secondary production from new + old scrap, 2024e (recovered-scrap statistic)" },
              { v: "~2.05M MT", l: "Aluminum waste and scrap exported from the U.S. in 2024", src: "U.S. Census Bureau / USITC DataWeb, HS 7602 exports, 2024 (international trade statistic)" },
              { v: "~$4.0B", l: "Value of U.S. aluminum scrap exports in 2024", src: "U.S. Census Bureau / USITC DataWeb, HS 7602 export value, 2024" },
            ].map((c) => (
              <div key={c.v} className="bg-background p-6 sm:p-10">
                <p className="text-5xl sm:text-6xl font-bold text-brand leading-none mb-4">{c.v}</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">{c.l}</p>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground/80">Source: {c.src}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            USGS recovered-scrap and HS 7602 trade figures are separate datasets and are not directly additive. Exported scrap includes many grades; not all of it is suitable feedstock for Birch Aluminum.
          </p>
          <p className="mt-10 text-xl sm:text-2xl font-bold border-l-4 border-brand pl-4">
            The U.S. already has a massive aluminum scrap ecosystem — but significant material value continues to leave the domestic supply chain.
          </p>
        </div>
      </section>

      <Section n={1} eyebrow="America needs aluminum" title="Half of U.S. aluminum supply comes from abroad." takeaway="The U.S. depends on imports for roughly 50% of its aluminum.">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <p className="text-7xl sm:text-8xl font-bold text-brand leading-none">~50%</p>
            <p className="mt-3 uppercase text-sm text-muted-foreground tracking-wider">Net import reliance, 2024</p>
          </div>
          <div className="lg:col-span-2 h-64">
            <ResponsiveContainer>
              <BarChart data={supply} layout="vertical" margin={{ left: 20, right: 60 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" width={150} tick={{ fill: FG, fontSize: 13 }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: number) => `${v} Mt`} />
                <Bar dataKey="value" radius={0}>
                  {supply.map((d, i) => <Cell key={d.name} fill={i === 1 ? BRAND : MUTED} />)}
                  <LabelList dataKey="value" position="right" formatter={(v: number) => `${v} Mt`} fill={FG} fontWeight={700} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <Source>USGS Mineral Commodity Summaries, Aluminum, 2025 (2024 estimates, approx. million metric tons)</Source>
      </Section>


      <ScrapExportSankey />

      <Section n={4} eyebrow="Circularity is achievable" title="Other countries recycle far more." takeaway="The U.S. has room to capture much more of its own metal." dark>
        <div className="h-72">
          <ResponsiveContainer>
            <BarChart data={recycling} margin={{ top: 30 }}>
              <XAxis dataKey="name" tick={{ fill: "hsl(var(--primary-foreground))", fontSize: 14, fontWeight: 700 }} axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="value">
                {recycling.map((d) => <Cell key={d.name} fill={d.name === "United States" ? MUTED : BRAND} />)}
                <LabelList dataKey="value" position="top" formatter={(v: number) => `${v}%`} fill="hsl(var(--primary-foreground))" fontSize={28} fontWeight={800} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-primary-foreground/60">Source: Aluminum can recycling rates — ABAL Brazil 2023; European Aluminium / Metal Packaging Europe 2022; The Aluminum Association 2023</p>
      </Section>

      <Section n={5} eyebrow="The missing link" title="The gap is domestic processing capacity." takeaway="Scrap is available. Buyers are nearby. Processing is the bottleneck.">
        <div className="grid grid-cols-3 gap-px bg-border border border-border text-center">
          {[
            { t: "Scrap supply", s: "Abundant", ok: true },
            { t: "Processing", s: "Missing capacity", ok: false },
            { t: "U.S. demand", s: "Strong", ok: true },
          ].map((c) => (
            <div key={c.t} className={`p-6 sm:p-10 ${c.ok ? "bg-background" : "bg-brand text-brand-foreground"}`}>
              <p className="text-xs uppercase tracking-wider mb-2 opacity-70">{c.t}</p>
              <p className="text-xl sm:text-3xl font-bold">{c.s}</p>
            </div>
          ))}
        </div>
        <Source>Birch Aluminum synthesis of USGS 2025 and Census trade data</Source>
      </Section>

      <Section n={6} eyebrow="What Birch does" title="Domestic scrap in. Specification-grade 356 and 380 out." takeaway="6M lbs/month of U.S.-made secondary alloy." dark>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
          {flow.map((f, i) => (
            <div key={f.step} className="bg-primary p-5 relative">
              <p className="text-brand text-sm font-bold mb-2">{i + 1}</p>
              <p className="text-lg font-bold">{f.step}</p>
              <p className="text-xs uppercase text-primary-foreground/60 mt-1">{f.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[{ v: "6M", l: "lbs / month" }, { v: "97%", l: "target recovery" }, { v: "72M", l: "lbs / year" }].map((s) => (
            <div key={s.l}><p className="text-4xl sm:text-6xl font-bold text-brand">{s.v}</p><p className="text-xs uppercase text-primary-foreground/60">{s.l}</p></div>
          ))}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-primary-foreground/60">Source: Birch Aluminum management planning case, 2026</p>
      </Section>

      <Section n={7} eyebrow="Value stays in America" title="Birch keeps the value chain inside U.S. manufacturing." takeaway="Every pound processed here is margin, jobs and supply security kept at home.">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-secondary p-8">
            <p className="text-minimal text-muted-foreground mb-4">Today</p>
            <p className="text-xl font-bold">U.S. scrap → Overseas smelter → Imported alloy → U.S. plant</p>
            <p className="mt-4 text-sm text-muted-foreground">Freight twice · long lead times · tariff exposure</p>
          </div>
          <div className="bg-brand text-brand-foreground p-8">
            <p className="text-minimal mb-4 opacity-70">With Birch</p>
            <p className="text-xl font-bold">U.S. scrap → Birch, Alabama → U.S. plant</p>
            <p className="mt-4 text-sm opacity-80">Regional supply · short lead times · domestic content</p>
          </div>
        </div>
        <Source>Birch Aluminum, 2026</Source>
      </Section>
    </main>
    <Footer />
  </div>
);

export default AluminumOpportunity;
