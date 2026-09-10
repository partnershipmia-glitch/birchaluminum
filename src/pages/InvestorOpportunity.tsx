import { Helmet } from "react-helmet-async";
import { ArrowRight, Factory, FileText, MapPin, Recycle, ShieldCheck, Truck } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacilityReel from "@/components/FacilityReel";
import Team from "@/components/Team";
import OpportunityHighlights from "@/components/OpportunityHighlights";
import { callUrl, deckUrl, inquiryUrl } from "@/lib/links";

const thesis = [
  {
    icon: Recycle,
    title: "Domestic scrap conversion",
    text: "The project is designed to convert qualified U.S. aluminum scrap streams, including automotive wheels and cast aluminum, into specification-grade secondary aluminum alloys.",
  },
  {
    icon: Factory,
    title: "Industrial end markets",
    text: "Target customers include foundries, die casters, Tier 1 and Tier 2 automotive suppliers, and manufacturers seeking domestic recycled aluminum supply.",
  },
  {
    icon: MapPin,
    title: "North Alabama location thesis",
    text: "Decatur and the Huntsville-Decatur region provide a practical Southeast U.S. base near automotive, logistics, workforce, and industrial infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Diligence-first communication",
    text: "Detailed project economics, capacity assumptions, supplier discussions, customer materials, and investment terms are provided only through the qualified investor process.",
  },
];

const processSteps = [
  "Qualify scrap streams",
  "Sort and prepare feedstock",
  "Melt and refine aluminum",
  "Adjust chemistry for target alloys",
  "Cast ingot or sow formats",
  "Ship to industrial customers",
];

const investorQuestions = [
  {
    q: "What is Birch Aluminum developing?",
    a: "Birch Aluminum is developing a U.S.-based secondary aluminum recycling, melting, and casting project focused on producing specification-grade secondary aluminum alloys for industrial customers.",
  },
  {
    q: "Where is the project focused?",
    a: "The project is focused on Decatur, Alabama and the broader Huntsville-Decatur industrial region. Final site, permitting, construction, and operating details should be reviewed in the latest investor materials.",
  },
  {
    q: "What products are targeted?",
    a: "Target products include 356, 380 alloys, secondary aluminum ingots, and potential specialty or custom alloys as the project develops. The company should not be interpreted as currently producing these alloys until operations begin.",
  },
  {
    q: "Who are the target customers?",
    a: "The target customer base includes die casters, foundries, automotive suppliers, and industrial aluminum consumers that require reliable domestic secondary alloy supply.",
  },
  {
    q: "What information is available to investors?",
    a: "Qualified investors can request the investor deck, project development status, financial model assumptions, use-of-funds details, diligence materials, and management discussion. Any securities offering information must be reviewed separately from general project information.",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. Nothing on this website guarantees returns, profitability, financing, customers, permits, construction timing, production capacity, or project completion. All forward-looking statements depend on assumptions, execution, financing, market conditions, and regulatory requirements.",
  },
];

const InvestorOpportunity = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Aluminum Investment Opportunity | Birch Aluminum</title>
      <meta
        name="description"
        content="Birch Aluminum is developing a U.S. secondary aluminum recycling and alloy manufacturing project in the Decatur, Alabama region for qualified investors and strategic partners."
      />
      <link rel="canonical" href="https://birchaluminum.com/investor-opportunity" />
      <meta property="og:title" content="Aluminum Investment Opportunity | Birch Aluminum" />
      <meta
        property="og:description"
        content="A development-stage U.S. secondary aluminum project focused on domestic scrap conversion, specification-grade alloys, and Southeast industrial markets."
      />
      <meta property="og:url" content="https://birchaluminum.com/investor-opportunity" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Aluminum Investment Opportunity | Birch Aluminum",
          description:
            "Development-stage U.S. secondary aluminum recycling and alloy manufacturing project information for qualified investors and strategic partners.",
          url: "https://birchaluminum.com/investor-opportunity",
          about: [
            "secondary aluminum",
            "aluminum recycling",
            "aluminum investment opportunity",
            "356, 380 alloys",
            "Alabama manufacturing investment",
          ],
        })}
      </script>
    </Helmet>

    <TopBar />
    <Navigation />

    <main>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <p className="text-minimal text-brand mb-5">Aluminum Investment Opportunity</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
            U.S. Secondary Aluminum Manufacturing Project
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-3xl mb-8 leading-relaxed">
            Birch Aluminum is developing a secondary aluminum recycling, melting, and casting
            project in the Decatur, Alabama region, designed to produce specification-grade recycled
            aluminum alloys for U.S. industrial markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Request Investor Deck <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Let's schedule a quick 15 min call and I'll cover all your questions
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <p className="text-minimal text-brand mb-4">Investment Thesis</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10">
            Build domestic recycled aluminum capacity near industrial demand.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {thesis.map((item) => (
              <div key={item.title} className="bg-background p-6 sm:p-8">
                <item.icon className="w-7 h-7 text-brand mb-5" />
                <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary border-y border-border">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-minimal text-brand mb-4">Business Model</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Scrap to specification-grade alloy.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The planned model is straightforward: source qualified aluminum scrap, process and
              melt the material, refine chemistry, cast saleable alloy formats, and supply industrial
              customers that need reliable domestic secondary aluminum.
            </p>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Let's schedule a quick 15 min call and I'll cover all your questions <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          <div className="space-y-px bg-border border border-border">
            {processSteps.map((step, index) => (
              <div key={step} className="bg-background p-5 flex items-center gap-4">
                <span className="text-brand font-bold text-xl">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacilityReel />

      <Team />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-3 gap-6">
          <div className="border border-border p-6 sm:p-8 bg-background">
            <Truck className="w-7 h-7 text-brand mb-5" />
            <p className="text-minimal text-brand mb-4">Feedstock</p>
            <h3 className="text-2xl font-bold mb-4">Automotive wheels and cast aluminum scrap.</h3>
            <p className="text-muted-foreground leading-relaxed">
              The project is designed around suitable clean aluminum scrap streams. Specific supplier
              relationships, volumes, and pricing are confidential and available only through diligence.
            </p>
          </div>
          <div className="border border-border p-6 sm:p-8 bg-background">
            <Factory className="w-7 h-7 text-brand mb-5" />
            <p className="text-minimal text-brand mb-4">Products</p>
            <h3 className="text-2xl font-bold mb-4">356, 380 target alloys.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Target products include casting alloys used by foundries and die-casting customers.
              Product mix may evolve based on customer specifications and final equipment configuration.
            </p>
          </div>
          <div className="border border-border p-6 sm:p-8 bg-background">
            <FileText className="w-7 h-7 text-brand mb-5" />
            <p className="text-minimal text-brand mb-4">Investor Diligence</p>
            <h3 className="text-2xl font-bold mb-4">Detailed materials by request.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Qualified investors can request the latest deck, use-of-funds materials, development
              status, assumptions, market notes, and founder discussion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary border-y border-border">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <p className="text-minimal text-brand mb-4">Investor FAQ</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-10">Initial diligence questions.</h2>
          <div className="space-y-px bg-border border border-border">
            {investorQuestions.map((item) => (
              <div key={item.q} className="bg-background p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <p className="text-minimal text-brand mb-5">Qualified Investor Next Step</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Request the current investor package.</h2>
          <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
            Birch Aluminum shares more detailed project information with qualified investors and
            strategic partners. The website provides general project information only and does not
            constitute an offer to sell securities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Request Investor Deck <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Let's schedule a quick 15 min call and I'll cover all your questions
            </a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default InvestorOpportunity;
