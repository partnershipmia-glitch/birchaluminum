import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/monitor/PriceTicker";
import FacilityMap from "@/components/monitor/FacilityMap";
import NewsFeed, { CATEGORIES } from "@/components/monitor/NewsFeed";
import PricePanel from "@/components/monitor/PricePanel";
import { useSessionUser, displayName, signInWithGoogle } from "@/components/monitor/useSession";

const IndustryMonitor = () => {
  const [category, setCategory] = useState("All");
  const { user, isAdmin } = useSessionUser();

  return (
    <div className="min-h-screen bg-secondary">
      <Helmet>
        <title>Industry Monitor | Birch Aluminum</title>
        <meta name="description" content="Aluminum, scrap and critical-minerals market monitor: prices, industry news, and a map of U.S. smelters and recyclers." />
      </Helmet>
      <TopBar />
      <Navigation />
      <PriceTicker />
      <main className="container mx-auto space-y-6 px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-minimal text-foreground !font-bold">Industry Monitor</p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">Aluminum, scrap & critical minerals.</h1>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {user ? <span className="text-muted-foreground">Signed in as <b className="text-foreground">{displayName(user)}</b></span>
              : <button onClick={signInWithGoogle} className="border border-foreground px-3 py-1.5 font-bold uppercase tracking-wider hover:bg-foreground hover:text-background">Sign in with Google</button>}
            {isAdmin && <Link to="/industry-monitor/admin" className="bg-brand px-3 py-1.5 font-bold uppercase tracking-wider text-primary">Enter prices</Link>}
          </div>
        </div>

        <FacilityMap />

        <div className="grid gap-6 lg:grid-cols-[200px_1fr_340px]">
          <aside>
            <section className="border border-border bg-background">
              <h2 className="border-b border-border p-4 text-sm font-bold uppercase tracking-wider">Filters</h2>
              <div className="flex flex-wrap gap-1 p-3 lg:flex-col">
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCategory(c)} className={`px-3 py-2 text-left text-xs font-bold uppercase tracking-wider ${category === c ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>{c}</button>
                ))}
              </div>
            </section>
          </aside>
          <NewsFeed category={category} />
          <div><PricePanel /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryMonitor;
