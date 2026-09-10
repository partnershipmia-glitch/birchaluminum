import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OpportunityHighlights from "@/components/OpportunityHighlights";
import WhyMarket from "@/components/WhyMarket";

import PhotoBand from "@/components/PhotoBand";
import FacilityReel from "@/components/FacilityReel";
import UseOfFunds from "@/components/UseOfFunds";
import Vision from "@/components/Vision";
import InvestorEconomics from "@/components/InvestorEconomics";
import Financials from "@/components/Financials";
import Footer from "@/components/Footer";

const title = "Birch Aluminum | U.S. Secondary Alloy Platform";
const description =
  "Birch Aluminum is developing a U.S. secondary aluminum recycling and alloy manufacturing project in the Decatur, Alabama region for investors and strategic partners.";

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
        <Hero />
        <OpportunityHighlights />
        <UseOfFunds />
        <WhyAlabama />
        <PhotoBand />
        <FacilityReel />
        <WhyMarket />
        <Vision />
        <InvestorEconomics />
        <Financials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
