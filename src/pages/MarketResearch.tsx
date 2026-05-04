import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      <TopBar />
      <Navigation />

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
          <p className="text-minimal text-muted-foreground mb-4">5.1 Economic Outlook</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Demand holds through every cycle
          </h2>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              The global outlook is moderate, with significant market volatility over the last
              twelve months tied to shifts in trade policy. Interest rates remain steady and
              central banks continue to support growth.
            </p>
            <p>
              Demand for aluminum stays strong even in challenging climates. The metal is a core
              input across the domestic and global economy, and the U.S. defense industry — one
              of its largest consumers — provides additional stability for Birch Aluminum's
              divestment pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Revenue Chart */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-minimal text-muted-foreground mb-3">5.2 Industry Analysis</p>
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
            Tariffs and inflation have pushed aluminum from $2,400/ton in 2025 to $3,600/ton in
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
          <p className="text-minimal text-muted-foreground mb-4">5.3 Customer Profile</p>
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
          <p className="text-minimal text-muted-foreground mb-4">5.4 Competition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A free-market commodity business
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Smelting, processing, and sale of aluminum is a commodity-driven enterprise. The
            edge belongs to operators with controllable cost structures who can stay profitable
            through price swings. Birch Aluminum competes on operating discipline.
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

      <Footer />
    </div>
  );
};

export default MarketResearch;
