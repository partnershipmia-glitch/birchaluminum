import { Helmet } from "react-helmet-async";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList } from "recharts";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrapExportSankey from "@/components/ScrapExportSankey";
import CountryComparison from "@/components/CountryComparison";
import ScrapMarketScale from "@/components/ScrapMarketScale";
import ValueChain from "@/components/ValueChain";
import FinalOpportunity from "@/components/FinalOpportunity";

const BRAND = "hsl(var(--brand))";
const MUTED = "hsl(var(--metallic))";
const FG = "hsl(var(--foreground))";

const Source = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">Source: {children}</p>
);

const Section = ({
  n, eyebrow, title, takeaway, dark, children,
}: { n: number; eyebrow: string; title: string; takeaway?: string; dark?: boolean; children: React.ReactNode }) => (

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
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 md:gap-2">
            {["U.S. Aluminum Scrap", "Sort + Process", "Melt + Control Chemistry", "356 / 380 Aluminum", "U.S. Manufacturing"].map((s, i, arr) => (
              <div key={s} className="contents">
                <div
                  className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] border p-3 sm:p-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wide leading-snug ${i === 3 ? "bg-brand text-brand-foreground border-brand" : "border-primary-foreground/25"}`}

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
              { n: "3.6", u: "Million Metric Tons", l: "Aluminum scrap recovered in the U.S." },
              { n: "2.05", u: "Million Metric Tons", l: "Aluminum waste and scrap exported from the U.S." },
              { n: "$4.0", u: "Billion", l: "Value of U.S. aluminum scrap exports" },
            ].map((c) => (
              <div key={c.l} className="bg-background p-6 sm:p-10 text-center flex flex-col items-center">
                <p className="text-5xl sm:text-6xl font-bold text-brand leading-none mb-1">{c.n}</p>
                <p className="text-lg sm:text-xl font-bold text-brand mb-4">{c.u}</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{c.l}</p>
              </div>
            ))}


          </div>
        </div>
      </section>

      <Section n={1} eyebrow="America needs aluminum" title="Half of U.S. aluminum supply comes from abroad.">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <p className="text-7xl sm:text-8xl font-bold text-brand leading-none">50%</p>
            <p className="mt-3 uppercase text-sm text-muted-foreground tracking-wider">Net import reliance, 2024–2026</p>
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
      </Section>


      <ScrapExportSankey />

      <ScrapMarketScale />
      <CountryComparison />

      <Section n={5} eyebrow="The missing link" title="The gap is domestic processing capacity." takeaway="Scrap is available. Buyers are nearby. Processing is the bottleneck.">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border text-center">
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

      <ValueChain />

      <FinalOpportunity />
    </main>
    <Footer />
  </div>
);

export default AluminumOpportunity;
