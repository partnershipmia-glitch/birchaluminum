import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Production from "@/components/Production";
import Partnership from "@/components/Partnership";
import Investment from "@/components/Investment";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Production />
      <Partnership />
      <Investment />
      <Closing />
      <Footer />
    </div>
  );
};

export default Index;
