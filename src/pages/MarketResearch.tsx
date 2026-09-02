import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacilityReel from "@/components/FacilityReel";
import { TrendingUp, Factory, Globe, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const industryRevenue = [
  { year: "2026", value: 22 },
  { year: "2027", value: 23 },
  { year: "2028", value: 24 },
  { year: "2029", value: 25 },
  { year: "2030", value: 26 },
];

const aluminumPricing = [
  { year: "2021", value: 2500 },
  { year: "2022", value: 2700 },
  { year: "2023", value: 2300 },
  { year: "2024", value: 2500 },
  { year: "2025", value: 2600 },
  { year: "2026", value: 3600 },
];

const stats = [
  { value: "$20B", label: "U.S. annual aluminum demand (2026)" },
  { value: "645,000", label: "Metric tons consumed annually" },
  { value: "4.6%", label: "Industry CAGR through 2030" },
  { value: "120,000", label: "U.S. enterprises using aluminum" },
];

const drivers = [
  {
    icon: TrendingUp,
    title: "Tariff-Driven Price Spike",
    text: "Aluminum jumped from $2,400/ton (2025) to $3,600/ton (April 2026) — a 50% increase in twelve months driven by trade policy and inflation.",
  },
  {
    icon: Factory,
    title: "Defense & Aerospace Demand",
    text: "Defense, aerospace, automotive, construction, electronics, and packaging sectors continue to require aluminum regardless of broader economic conditions.",
  },
  {
    icon: Globe,
    title: "Asian Export Pull",
    text: "Strong global demand — particularly in Asian markets — supports sustained price strength and creates additional sales channels via international brokers.",
  },
  {
    icon: Shield,
    title: "Government Support",
    text: "Substantial federal backing for the expansion of domestic aluminum production strengthens the long-term outlook for U.S. secondary smelters.",
  },
];

const nationalCompetitors = ["Alcoa Corporation", "Century Aluminum", "Kaiser Aluminum", "Magnitude 7 Metals"];
const regionalCompetitors = ["Bermco Aluminum", "Constellium Aluminum", "Novelis", "Real Alloy"];

const Bar = ({ data, prefix = "$", suffix = "" }: { data: { year: string; value: number }[]; prefix?: string; suffix?: string }) => {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end gap-3 md:gap-6 h-72 border-b border-border pb-2">
      {data.map((d) => (
        <div key={d.year} className="flex-1 flex flex-col items-center gap-3">
          <span className="text-lg md:text-2xl text-foreground font-bold font-mono">
            {prefix}
            {d.value.toLocaleString()}
            {suffix}
          </span>
          <div
            className="w-full bg-foreground transition-all"
            style={{ height: `${(d.value / max) * 100}%` }}
          />
          <span className="text-base md:text-lg text-foreground font-bold font-mono">{d.year}</span>
        </div>
      ))}
    </div>
  );
};

const MarketResearch = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Aluminum Market Research 2026 | Birch Aluminum</title>
        <meta name="description" content="U.S. secondary aluminum market data: $20B industry, 4.6% CAGR, tariff-driven price spike, and competitive landscape analysis." />
        <link rel="canonical" href="https://birchaluminum.lovable.app/market-research" />
        <meta property="og:title" content="Aluminum Market Research 2026 | Birch Aluminum" />
        <meta property="og:description" content="U.S. secondary aluminum market data: $20B industry, 4.6% CAGR, tariff-driven price spike, and competitive landscape analysis." />
        <meta property="og:url" content="https://birchaluminum.lovable.app/market-research" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Aluminum Market Research 2026 | Birch Aluminum" />
        <meta name="twitter:description" content="U.S. secondary aluminum market data: $20B industry, 4.6% CAGR, tariff-driven price spike, and competitive landscape analysis." />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-primary-foreground/60 mb-6">Market Research</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            U.S. Secondary Aluminum Market
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            A $20 billion domestic industry growing at 4.6% annually, with prices up 50%
            year-over-year on the back of trade policy, defense demand, and global supply pressure.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-foreground pl-6">
                <div className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{s.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Outlook */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-4">Economic Outlook</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Demand holds through every cycle
          </h2>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              This section details the economic climate, the aluminum processing and distribution
              industry, the customer profile, and the competition that the business will face as it
              progresses through its operations.
            </p>
            <p>
              Currently, the global economic outlook is moderate. There has been significant market
              volatility over the past twelve months as a result of changes in global trade policy.
              Interest rates remain steady, and central banks continue to implement appropriate
              fiscal policy to ensure that the global economy continues to grow.
            </p>
            <p>
              Demand for aluminum remains strong even during challenging economic climates. This
              metal is an incredibly important part of the domestic and global economic ecosystem.
              The business will be able to divest substantial inventories domestically. One of the
              major users of aluminum is the defense industry, which will further contribute to
              the economic stability of Birch Aluminum.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Revenue Chart */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-3">Industry Analysis</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Industry Revenue Forecast
          </h2>
          <p className="text-muted-foreground mb-6">
            Domestic aluminum industry revenue (USD billions), 2026–2030.
          </p>
          <Bar data={industryRevenue} prefix="$" suffix="B" />
        </div>
      </section>

      {/* Pricing Chart */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Aluminum Pricing — 50% YoY Spike
          </h2>
          <p className="text-muted-foreground mb-6">
            Price per metric ton, 2021–2026. April 2026 spot: <span className="text-foreground font-medium">$3,600/ton</span>.
          </p>
          <Bar data={aluminumPricing} prefix="$" />
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
            Tariffs and inflation have pushed aluminum from $2,600/ton in 2025 to $3,600/ton in
            April 2026. Continued global demand — particularly in Asian markets — supports
            sustained pricing strength.
          </p>
        </div>
      </section>

      {/* Drivers */}
      <section className="section-padding bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <p className="text-minimal text-muted-foreground mb-4">Growth Drivers</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why this market, why now
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {drivers.map((d) => (
              <div key={d.title} className="bg-background border border-border p-8">
                <d.icon className="w-6 h-6 mb-6" />
                <h3 className="text-xl font-bold mb-3">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Profile */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-4">Customer Profile</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            120,000 U.S. buyers of aluminum sows
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-2 border-foreground pt-6">
              <p className="text-minimal text-muted-foreground mb-2">Annual Revenue</p>
              <p className="text-2xl font-bold">$20M+</p>
              <p className="text-sm text-muted-foreground mt-2">per buying entity</p>
            </div>
            <div className="border-t-2 border-foreground pt-6">
              <p className="text-minimal text-muted-foreground mb-2">Order Size</p>
              <p className="text-2xl font-bold">$50K – $400K+</p>
              <p className="text-sm text-muted-foreground mt-2">per purchase order</p>
            </div>
            <div className="border-t-2 border-foreground pt-6">
              <p className="text-minimal text-muted-foreground mb-2">Buyer Type</p>
              <p className="text-2xl font-bold">Foundries</p>
              <p className="text-sm text-muted-foreground mt-2">manufacturers, die-casters, metal distributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="section-padding bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-4">Competition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A free-market commodity business
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The smelting, processing, and sale of aluminum is very much a free-market enterprise
            — this is a commodity-driven business. The most important aspect of competing in this
            industry is to maintain highly controllable operating and overhead costs so that the
            enterprise can provide aluminum at market rates despite inevitable fluctuations.
            Birch Aluminum, through its highly controllable cost base, will operate competitively
            at all times.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">National Competitors</h3>
              <ul className="space-y-3">
                {nationalCompetitors.map((c) => (
                  <li key={c} className="border-b border-border pb-3 text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Regional Competitors</h3>
              <ul className="space-y-3">
                {regionalCompetitors.map((c) => (
                  <li key={c} className="border-b border-border pb-3 text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sensitivity Analysis */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <p className="text-minimal text-muted-foreground mb-4">Sensitivity Analysis</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Key financial drivers based on business plan assumptions
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10">
            <span><span className="text-brand font-bold">3,000,000</span> lbs / month</span>
            <span><span className="text-brand font-bold">$2.05</span> / lb selling price</span>
            <span><span className="text-brand font-bold">~$0.10</span> / lb operating cost</span>
            <span><span className="text-brand font-bold">~95%</span> recovery</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 mb-10">
            <div className="border border-border">
              <p className="bg-primary text-primary-foreground p-4 font-semibold text-sm uppercase tracking-wider">Key Assumptions</p>
              <div className="p-4 space-y-3 text-sm">
                {[
                  ["Scrap Purchase Price", "$1.60 – $1.70 / lb"],
                  ["Recovery Rate", "~95%"],
                  ["Operating Cost", "~$0.10 / lb"],
                  ["Selling Price", "$2.05 / lb"],
                  ["Production Capacity", "3,000,000 lbs / month"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border overflow-x-auto">
              <p className="bg-primary text-primary-foreground p-4 font-semibold text-sm uppercase tracking-wider">EBITDA Sensitivity by Variable</p>
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-3">Variable</th>
                    <th className="text-right p-3">EBITDA / lb</th>
                    <th className="text-right p-3">Monthly EBITDA</th>
                    <th className="text-right p-3">Annual EBITDA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { group: "Recovery Rate", rows: [
                      ["95% (Base)", "$0.10 / lb", "$300,000", "$3,600,000"],
                      ["92%", "$0.07 / lb", "$210,000", "$2,520,000"],
                      ["90%", "$0.05 / lb", "$150,000", "$1,800,000"],
                    ]},
                    { group: "Scrap Purchase Price", rows: [
                      ["$1.50 / lb", "$0.20 / lb", "$600,000", "$7,200,000"],
                      ["$1.60 / lb (Base)", "$0.10 / lb", "$300,000", "$3,600,000"],
                      ["$1.70 / lb", "$0.00 / lb", "$0", "$0"],
                    ]},
                    { group: "Selling Price", rows: [
                      ["$2.15 / lb", "$0.20 / lb", "$600,000", "$7,200,000"],
                      ["$2.05 / lb (Base)", "$0.10 / lb", "$300,000", "$3,600,000"],
                      ["$1.95 / lb", "$0.00 / lb", "$0", "$0"],
                      ["$1.85 / lb", "($0.10) / lb", "($300,000)", "($3,600,000)"],
                    ]},
                  ].map((section) => (
                    <Fragment key={section.group}>
                      <tr className="bg-muted/20 border-t border-border">
                        <td colSpan={4} className="p-3 font-bold text-xs uppercase tracking-wider">{section.group}</td>
                      </tr>
                      {section.rows.map((r) => {
                        const negative = r[1].startsWith("(");
                        return (
                          <tr key={section.group + r[0]} className="border-t border-border">
                            <td className="p-3">{r[0]}</td>
                            <td className={`p-3 text-right font-mono ${negative ? "text-red-600" : "text-green-700"}`}>{r[1]}</td>
                            <td className={`p-3 text-right font-mono ${negative ? "text-red-600" : "text-green-700"}`}>{r[2]}</td>
                            <td className={`p-3 text-right font-mono ${negative ? "text-red-600" : "text-green-700"}`}>{r[3]}</td>
                          </tr>
                        );
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {[
              "Financial performance is most sensitive to recovery rate.",
              "Scrap purchase price directly impacts margins.",
              "Selling price variations have a proportional impact on EBITDA.",
              "Assumes 3M lbs / month production and ~95% recovery.",
            ].map((t) => (
              <div key={t} className="border-l-2 border-brand pl-4 text-muted-foreground">{t}</div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">Note: Analysis based on business plan assumptions.</p>
        </div>
      </section>

      <FacilityReel />

      {/* CTA */}

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to review the full opportunity?
          </h2>
          <p className="text-primary-foreground/80 mb-10 leading-relaxed">
            See the production plan, capital structure, and investor terms.
          </p>
          <Link
            to="/#investment"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-medium hover:opacity-90 transition-opacity"
          >
            View Investment Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketResearch;
