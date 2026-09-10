import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OpportunityHighlights from "@/components/OpportunityHighlights";

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
    </Helmet>

    <TopBar />
    <Navigation />

    <main>
      <OpportunityHighlights />
    </main>

    <Footer />
  </div>
);

export default InvestorOpportunity;
