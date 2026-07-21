import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyMarket from "@/components/WhyMarket";
import WhyNow from "@/components/WhyNow";
import Team from "@/components/Team";
import EntryPoint from "@/components/EntryPoint";
import Compounds from "@/components/Compounds";
import InvestorEconomics from "@/components/InvestorEconomics";
import Year1Ramp from "@/components/Year1Ramp";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <WhyMarket />
      <WhyNow />
      <Team />
      <EntryPoint />
      <Compounds />
      <InvestorEconomics />
      <Year1Ramp />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
