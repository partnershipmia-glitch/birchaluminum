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
          <p className="text-minimal text-brand mb-5">Investor Market Brief</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">THE ALUMINUM<br />OPPORTUNITY</h1>
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wider">
            {["Demand", "Scrap", "Exports", "Benchmarks", "Gap", "Birch", "Value"].map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className={i === 5 ? "text-brand" : "text-primary-foreground/70"}>{s}</span>
                {i < 6 && <span className="text-brand">→</span>}
              </span>
            ))}
          </div>
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

      <Section n={2} eyebrow="Scrap is already here" title="Recycled metal is already America's largest domestic source." takeaway="The raw material for U.S. alloy already exists — above ground." dark>
        <div className="grid sm:grid-cols-3 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
          {[
            { v: "~3.3 Mt", l: "Aluminum recovered from U.S. scrap / year" },
            { v: "5×", l: "Recycled vs. primary domestic output" },
            { v: "95%", l: "Less energy than primary aluminum" },
          ].map((s) => (
            <div key={s.l} className="bg-primary p-8">
              <p className="text-5xl sm:text-6xl font-bold text-brand leading-none mb-3">{s.v}</p>
              <p className="text-sm uppercase tracking-wider text-primary-foreground/70">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-primary-foreground/60">Source: USGS MCS 2025; The Aluminum Association, 2024</p>
      </Section>

      <Section n={3} eyebrow="Scrap leaves the country" title="Millions of tons of U.S. scrap are shipped overseas." takeaway="Exported scrap = exported jobs, margin and supply security.">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-7xl sm:text-8xl font-bold text-brand leading-none">~2 Mt</p>
            <p className="mt-3 uppercase text-sm text-muted-foreground tracking-wider">U.S. aluminum scrap exported per year</p>
            <svg viewBox="0 0 400 140" className="w-full mt-8" aria-label="Scrap flow">
              <rect x="0" y="20" width="90" height="100" fill={FG} />
              <text x="45" y="75" textAnchor="middle" fill="hsl(var(--background))" fontSize="13" fontWeight="700">U.S. SCRAP</text>
              <path d="M90 30 C200 30 220 30 310 30 L310 70 C220 70 200 70 90 70 Z" fill={MUTED} opacity="0.6" />
              <path d="M90 70 C200 70 220 110 310 110 L310 120 C220 120 200 120 90 120 Z" fill={BRAND} />
              <text x="320" y="55" fontSize="12" fontWeight="700" fill={FG}>Exported</text>
              <text x="320" y="118" fontSize="12" fontWeight="700" fill={FG}>Stays for</text>
              <text x="320" y="132" fontSize="12" fontWeight="700" fill={FG}>U.S. alloy</text>
            </svg>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={exportsData} dataKey="value" nameKey="name" innerRadius="55%" outerRadius="90%" label={({ name, value }) => `${name} ${value}%`} labelLine={false} fontSize={12}>
                  {exportsData.map((d, i) => <Cell key={d.name} fill={i === 0 ? BRAND : i === 5 ? "hsl(var(--accent))" : MUTED} stroke="hsl(var(--background))" />)}
                </Pie>
                <Tooltip formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <Source>U.S. Census Bureau / USITC DataWeb (HTS 7602), 2023; USGS MCS 2025 — shares approximate</Source>
      </Section>

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
