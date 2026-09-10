import { Helmet } from "react-helmet-async";
import { Factory, MapPin, Recycle, Truck } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacilityReel from "@/components/FacilityReel";

const marketStats = [
  { value: "Southeast U.S.", label: "Target regional industrial market" },
  { value: "Domestic", label: "Recycled aluminum supply focus" },
  { value: "356, 380 alloys", label: "Target secondary alloy products" },
  { value: "Qualified scrap", label: "Automotive wheels and cast aluminum feedstock focus" },
];

const customers = [
  "Automotive manufacturers",
  "Regional Tier 1 and Tier 2 suppliers",
  "Foundries",
  "Die casters",
  "Industrial manufacturers",
  "Aluminum consumers seeking domestic recycled supply",
  "Clean aluminum scrap suppliers",
  "Strategic partners",
];

const operatingCase = [
  { value: "Scrap", label: "Qualified aluminum wheels and cast scrap feedstock" },
  { value: "Melt", label: "Secondary aluminum recycling and remelting" },
  { value: "Control", label: "Chemistry and specification management" },
  { value: "Cast", label: "Planned ingot and sow formats" },
  { value: "Supply", label: "Domestic industrial aluminum customers" },
  { value: "Diligence", label: "Capacity and economics reviewed privately" },
];

const expansion = [
  { value: "Alloy", label: "Base secondary production platform" },
  { value: "Customers", label: "Buyer qualification and specifications" },
  { value: "Optionality", label: "Potential specialty or custom alloys" },
  { value: "Downstream", label: "Future value-added opportunities under review" },
];

const diligence = [
  { title: "Development status", body: "Current site, permitting, engineering and procurement assumptions should be reviewed in the latest approved materials." },
  { title: "Commercial path", body: "Customer discussions, specifications, sample expectations and awards are diligence items and are not represented as commitments on this website." },
  { title: "Feedstock strategy", body: "Specific supplier relationships, volumes, recovery assumptions and pricing remain confidential until qualified diligence." },
  { title: "Financial model", body: "Revenue, margin, return, capital and financing assumptions are not public claims and do not guarantee future performance." },
];

const MarketResearch = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Secondary Aluminum Market | Birch Aluminum</title>
      <meta name="description" content="Birch Aluminum market thesis for a development-stage U.S. secondary aluminum recycling and alloy manufacturing project serving Southeast industrial customers." />
      <link rel="canonical" href="https://birchaluminum.com/market-research" />
      <meta property="og:title" content="Secondary Aluminum Market | Birch Aluminum" />
      <meta property="og:description" content="Market thesis for a development-stage U.S. secondary aluminum alloy project focused on domestic recycled supply, 356, 380 alloys, and Southeast industrial demand." />
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
            Large regional demand, shorter delivery and domestic recycled aluminum supply for the Southeast's automotive and industrial manufacturing base.
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
                { icon: MapPin, title: "Alabama location", text: "Close to a broad Southeast automotive and industrial manufacturing corridor." },
                { icon: Truck, title: "Shorter delivery", text: "Regional production can support faster, more reliable service for qualified customers." },
                { icon: Recycle, title: "Domestic recycled metal", text: "Qualified scrap can be converted into specification-grade secondary alloy." },
                { icon: Factory, title: "Industrial customer base", text: "Foundries, die casters and manufacturers use 356, 380 alloy families." },
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
          <p className="text-minimal text-brand mb-4">Secondary Aluminum Production Case</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-10">From qualified scrap to specification-grade alloy.</h2>
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
          <p className="text-minimal text-brand mb-4">Growth Path</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">Alloy first. Downstream optionality later.</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-3xl">
            The project is designed to validate secondary alloy production before evaluating specialty alloys, customer-specific formats or downstream manufacturing opportunities.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {expansion.map((item) => (
              <div key={item.label} className="bg-primary p-5 sm:p-8">
                <p className="text-3xl sm:text-5xl font-bold text-brand mb-2">{item.value}</p>
                <p className="text-xs sm:text-sm uppercase text-primary-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xl sm:text-2xl font-bold">Alloy platform → Customer qualification → Future value-added options</p>
        </div>
      </section>

      <FacilityReel />

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Review the current qualified-investor materials.</h2>
          <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity">Request Investor Deck <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default MarketResearch;