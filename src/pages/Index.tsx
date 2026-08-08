import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyBirch from "@/components/WhyBirch";
import WhyMarket from "@/components/WhyMarket";
import Team from "@/components/Team";
import WhyAlabama from "@/components/WhyAlabama";
import PhotoBand from "@/components/PhotoBand";
import UseOfFunds from "@/components/UseOfFunds";
import Vision from "@/components/Vision";
import InvestorEconomics from "@/components/InvestorEconomics";
import Financials from "@/components/Financials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "Birch Aluminum – Vertically Integrated U.S. Aluminum Platform";
const description =
  "Birch Aluminum is building a 96M+ lb/yr secondary aluminum smelter in Alabama, then scaling scrap yards and plants nationwide. $8.5M raise, 30% investor equity.";

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
        <WhyBirch />
        <WhyMarket />
        <Team />
        <WhyAlabama />
        <PhotoBand />
        <UseOfFunds />
        <Vision />
        <InvestorEconomics />
        <Financials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
