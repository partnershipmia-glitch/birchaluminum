import { Helmet } from "react-helmet-async";
import { ArrowRight, Factory, MapPin, Recycle, Truck } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacilityReel from "@/components/FacilityReel";
import { deckUrl } from "@/lib/links";

const marketStats = [
  { value: "$12.9B", label: "U.S. secondary aluminum alloy market" },
  { value: "1.3M", label: "Vehicles of annual production capacity in Alabama" },
  { value: "356", label: "Alloy for foundries" },
  { value: "A380", label: "Alloy for die-casting manufacturers" },
];

const customers = [
  "Mercedes-Benz",
  "Hyundai",
  "Honda",
  "Mazda Toyota",
  "Toyota Motor Manufacturing",
  "Regional Tier 1 suppliers",
  "Foundries and die casters",
  "New GE reshoring facility in Tennessee",
];

const operatingCase = [
  { value: "72M lbs", label: "Annual production" },
  { value: "$135.0M", label: "Annual revenue" },
  { value: "$12.2M", label: "Annual EBITDA" },
  { value: "9.0%", label: "EBITDA margin" },
  { value: "69.7%", label: "EBITDA return on capital" },
  { value: "1.4 years", label: "Projected payback" },
];

const expansion = [
  { value: "$18.8B", label: "North American market" },
  { value: "$36M", label: "Die-casting revenue" },
  { value: "$6M", label: "Die-casting EBITDA" },
  { value: "31.6%", label: "EBITDA return on capital" },
];

const fiveYear = [
  { year: "2027", revenue: "$0", ebitda: "$0", stage: "Development" },
  { year: "2028", revenue: "$94.5M", ebitda: "$8.5M", stage: "Production ramp" },
  { year: "2029", revenue: "$153.0M", ebitda: "$15.2M", stage: "Die-casting ramp" },
  { year: "2030", revenue: "$171.0M", ebitda: "$18.2M", stage: "Combined platform" },
  { year: "2031", revenue: "$171.0M", ebitda: "$18.2M", stage: "Stabilized operations" },
];

const MarketResearch = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Secondary Aluminum Market | Birch Aluminum</title>
      <meta name="description" content="Birch Aluminum market opportunity, 72M lb alloy production case, die-casting expansion and five-year management projections." />
      <link rel="canonical" href="https://birchaluminum.com/market-research" />
      <meta property="og:title" content="Secondary Aluminum Market | Birch Aluminum" />
      <meta property="og:description" content="A $12.9B U.S. secondary aluminum alloy market and Birch Aluminum's two-stage growth plan." />
      <meta property="og:url" content="https://birchaluminum.com/market-research" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <TopBar />
    <Navigation />
    <main>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <p className="text-minimal text-brand mb-5">Market Opportunity</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">The Market Is Already Here.</h1>
          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-3xl">
            Large regional demand, shorter delivery and domestic supply for the Southeast's automotive and industrial manufacturing base.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {marketStats.map((item) => (
              <div key={item.label} className="bg-background p-5 sm:p-8">
                <p className="text-3xl sm:text-5xl font-bold text-brand leading-none mb-3">{item.value}</p>
                <p className="text-xs sm:text-sm uppercase text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary border-y border-border">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-minimal text-brand mb-4">Nearby Customer Ecosystem</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Built near demand.</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {customers.map((customer) => <p key={customer} className="bg-background p-4 font-semibold">{customer}</p>)}
            </div>
          </div>
          <div>
            <p className="text-minimal text-brand mb-4">Regional Advantage</p>
            <div className="space-y-px bg-border border border-border">
              {[
                { icon: MapPin, title: "Alabama location", text: "Close to major automotive plants and regional Tier 1 suppliers." },
                { icon: Truck, title: "Shorter delivery", text: "Regional production supports faster, more reliable customer service." },
                { icon: Recycle, title: "Domestic recycled metal", text: "Qualified scrap is converted into specification-grade secondary alloy." },
                { icon: Factory, title: "Industrial customer base", text: "Foundries, die casters and manufacturers use 356 and A380 alloys." },
              ].map((item) => (
                <div key={item.title} className="bg-background p-6 flex gap-4">
                  <item.icon className="w-6 h-6 text-brand shrink-0" />
                  <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-muted-foreground">{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <p className="text-minimal text-brand mb-4">Stage 1 · Aluminum Production Case</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-10">High Volume. Disciplined Margin.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {operatingCase.map((item) => (
              <div key={item.label} className="bg-background p-5 sm:p-8">
                <p className="text-3xl sm:text-5xl font-bold text-brand mb-2">{item.value}</p>
                <p className="text-xs sm:text-sm uppercase text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-bold text-xl sm:text-2xl">Qualified scrap → Secondary alloy → U.S. customers</p>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 sm:px-6">
          <p className="text-minimal text-brand mb-4">Stage 2 · Die-Casting Growth</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">Higher Value. Higher Margin.</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-3xl">Planned Q4 2028 expansion with two automated casting cells turns Birch-produced alloy into finished automotive and industrial components.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {expansion.map((item) => (
              <div key={item.label} className="bg-primary p-5 sm:p-8">
                <p className="text-3xl sm:text-5xl font-bold text-brand mb-2">{item.value}</p>
                <p className="text-xs sm:text-sm uppercase text-primary-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xl sm:text-2xl font-bold">Alloy → Finished component → Higher value</p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-5 sm:px-6">
          <p className="text-minimal text-brand mb-4">Five-Year Financial Projection</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-10">Stage 1 alloy production → Stage 2 die-casting growth</h2>
          <div className="grid sm:grid-cols-5 gap-px bg-border border border-border mb-8">
            {fiveYear.map((item) => (
              <div key={item.year} className="bg-background p-5">
                <p className="text-3xl font-bold mb-4">{item.year}</p>
                <p className="font-bold">{item.revenue}</p><p className="text-xs text-muted-foreground mb-3">Revenue</p>
                <p className="font-bold text-brand">{item.ebitda}</p><p className="text-xs text-muted-foreground mb-3">EBITDA</p>
                <p className="text-xs font-semibold uppercase">{item.stage}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[["$589.5M", "Five-year revenue"], ["$60.1M", "Five-year EBITDA"], ["$171.0M", "Stabilized annual revenue"], ["$18.2M", "Stabilized annual EBITDA"]].map(([value, label]) => (
              <div key={label} className="bg-background p-5 sm:p-7"><p className="text-2xl sm:text-4xl font-bold text-brand">{value}</p><p className="text-xs uppercase text-muted-foreground mt-2">{label}</p></div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Management planning case subject to production ramp, feedstock pricing, customer contracts and awards, recovery rates, tooling, site requirements, financing terms and final equipment quotations.</p>
        </div>
      </section>

      <FacilityReel />

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Review the full two-stage plan.</h2>
          <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity">View Investor Deck <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default MarketResearch;