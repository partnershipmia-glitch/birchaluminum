import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBirch from "@/components/WhyBirch";
import WhyAlabama from "@/components/WhyAlabama";
import WhyMarket from "@/components/WhyMarket";
import PhotoBand from "@/components/PhotoBand";
import UseOfFunds from "@/components/UseOfFunds";
import InvestorEconomics from "@/components/InvestorEconomics";
import Roadmap from "@/components/Roadmap";
import SupplyStrategy from "@/components/SupplyStrategy";
import Financials from "@/components/Financials";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Birch Aluminum – Secondary Aluminum Smelter, Decatur AL</title>
        <meta name="description" content="Birch Aluminum is building a debt-free secondary aluminum smelter in Alabama producing ~36M lbs annually. $6.03M equity raise, 30% investor ownership." />
        <link rel="canonical" href="https://birchaluminum.lovable.app/" />
        <meta property="og:title" content="Birch Aluminum – Secondary Aluminum Smelter, Decatur AL" />
        <meta property="og:description" content="Birch Aluminum is building a debt-free secondary aluminum smelter in Alabama producing ~36M lbs annually. $6.03M equity raise, 30% investor ownership." />
        <meta property="og:url" content="https://birchaluminum.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Birch Aluminum – Secondary Aluminum Smelter, Decatur AL" />
        <meta name="twitter:description" content="Birch Aluminum is building a debt-free secondary aluminum smelter in Alabama producing ~36M lbs annually. $6.03M equity raise, 30% investor ownership." />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyBirch />
        <WhyAlabama />
        <WhyMarket />
        <PhotoBand />
        <UseOfFunds />
        <InvestorEconomics />
        <Roadmap />
        <SupplyStrategy />
        <Financials />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
