import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyMarket from "@/components/WhyMarket";
import WhyNow from "@/components/WhyNow";
import Team from "@/components/Team";
import EntryPoint from "@/components/EntryPoint";
import PhotoBand from "@/components/PhotoBand";
import Compounds from "@/components/Compounds";
import InvestorEconomics from "@/components/InvestorEconomics";
import Year1Ramp from "@/components/Year1Ramp";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Birch Aluminum – Secondary Aluminum Smelter, Decatur AL</title>
        <meta name="description" content="Investment opportunity: scalable secondary aluminum smelting facility in Decatur, Alabama. 15% equity offered, ~$73.8M annual revenue target." />
        <link rel="canonical" href="https://birchaluminum.lovable.app/" />
        <meta property="og:title" content="Birch Aluminum – Secondary Aluminum Smelter, Decatur AL" />
        <meta property="og:description" content="Investment opportunity: scalable secondary aluminum smelting facility in Decatur, Alabama. 15% equity offered, ~$73.8M annual revenue target." />
        <meta property="og:url" content="https://birchaluminum.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Birch Aluminum – Secondary Aluminum Smelter, Decatur AL" />
        <meta name="twitter:description" content="Investment opportunity: scalable secondary aluminum smelting facility in Decatur, Alabama. 15% equity offered, ~$73.8M annual revenue target." />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <WhyMarket />
        <WhyNow />
        <Team />
        <EntryPoint />
        <PhotoBand />
        <Compounds />
        <InvestorEconomics />
        <Year1Ramp />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
