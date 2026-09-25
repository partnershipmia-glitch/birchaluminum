import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Brain, Thermometer, Gauge, Droplet, Wrench, BarChart3, Check, ArrowRight,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import siteLayout from "@/assets/tech-site-layout.png.asset.json";
import separation from "@/assets/tech-separation.png.asset.json";
import charging from "@/assets/tech-charging.png.asset.json";
import ingotUrl from "@/assets/tech-ingot-stacking-v5.png";
import exhaust from "@/assets/tech-exhaust-treatment.png.asset.json";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const Flow = ({ steps, dark }: { steps: string[]; dark?: boolean }) => (
  <div className="flex flex-wrap items-center gap-2">
    {steps.map((s, i) => (
      <div key={s} className="flex items-center gap-2">
        <div
          className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] border px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider ${dark ? "border-primary-foreground/25" : "border-border bg-background"}`}
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {s}
        </div>
        {i < steps.length - 1 && <span className="text-brand font-bold">→</span>}
      </div>
    ))}
  </div>
);

const Zoomable = ({ src, alt, onOpen }: { src: string; alt: string; onOpen: (s: { src: string; alt: string }) => void }) => (
  <button type="button" onClick={() => onOpen({ src, alt })} className="block w-full cursor-zoom-in group" aria-label={`Enlarge ${alt}`}>
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto border border-border transition-transform duration-500 group-hover:scale-[1.01]" />
  </button>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-minimal text-brand mb-3">{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 max-w-5xl">{children}</h2>
);

// approximate plant regions on site layout image (percent)
const zones = [
  { id: "separation", label: "01 — AI SEPARATION", box: { left: 20, top: 10, width: 20, height: 35 } },
  { id: "melting", label: "02 — SMART MELTING", box: { left: 40, top: 10, width: 15, height: 35 } },
  { id: "casting", label: "03 — AUTOMATED CASTING", box: { left: 55, top: 10, width: 15, height: 35 } },
  { id: "handling", label: "04 — AUTONOMOUS HANDLING", box: { left: 66, top: 10, width: 25, height: 35 } },
  { id: "emissions", label: "05 — EMISSIONS CONTROL", box: { left: 1, top: 4, width: 14, height: 44 } },
];

const Technology = () => {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const [zone, setZone] = useState<string | null>(null);
  const active = zones.find((z) => z.id === zone);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Technology & Automation | Birch Aluminum</title>
        <meta name="description" content="How Birch Aluminum combines proven secondary aluminum production with automation, AI-assisted process control and modern emissions systems." />
        <link rel="canonical" href="https://birchaluminum.com/technology" />
        <meta property="og:title" content="Technology & Automation | Birch Aluminum" />
        <meta property="og:description" content="AI-assisted, automated secondary aluminum production designed for scale." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        {/* 1 HERO */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
            <p className="text-minimal text-brand mb-5">Technology & Automation</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1] mb-6">
              SECONDARY ALUMINUM.<br /><span className="text-brand">BUILT FOR THE NEXT GENERATION.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-10">AI-assisted. Automated. Designed for scale.</p>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {[["SCRAP", "plant"], ["SEPARATION", "separation"], ["MELTING", "melting"], ["CASTING", "casting"], ["HANDLING", "handling"], ["SHIPMENT", "handling"]].map(([s, id], i, arr) => (
                <div key={s} className="flex items-center gap-2">
                  <button
                    onClick={() => scrollTo(id)}
                    className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] border border-primary-foreground/25 px-4 py-3 text-sm font-bold tracking-wider hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    {s}
                  </button>
                  {i < arr.length - 1 && <span className="text-brand font-bold">→</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-3xl">
              Birch Aluminum combines proven metallurgical processes with modern automation across the production chain.
            </p>
          </div>
        </section>

        {/* 2 PLANT */}
        <section id="plant" className="section-padding bg-background border-b border-border scroll-mt-20">
          <div className="container mx-auto px-3 sm:px-6 max-w-[1600px]">
            <div className="px-2">
              <H2>ONE INTEGRATED PRODUCTION SYSTEM</H2>
              <p className="-mt-5 mb-8 text-lg text-muted-foreground">From incoming scrap to finished ingot.</p>
            </div>
            <div className="relative">
              <Zoomable src={siteLayout.url} alt="Birch Aluminum site layout" onOpen={setZoom} />
              {active && (
                <div
                  className="pointer-events-none absolute border-4 border-brand bg-brand/15 transition-all duration-300"
                  style={{ left: `${active.box.left}%`, top: `${active.box.top}%`, width: `${active.box.width}%`, height: `${active.box.height}%` }}
                />
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 px-2">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onMouseEnter={() => setZone(z.id)}
                  onMouseLeave={() => setZone(null)}
                  onFocus={() => setZone(z.id)}
                  onBlur={() => setZone(null)}
                  onClick={() => scrollTo(z.id)}
                  className="border border-border px-3 py-2 text-xs font-bold tracking-wider hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
                >
                  {z.label}
                </button>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
              {["280' × 100' PRODUCTION BUILDING", "45' CLEAR HEIGHT", "ONE CONTINUOUS MATERIAL FLOW"].map((t) => (
                <p key={t} className="bg-background p-6 text-xl sm:text-2xl font-bold">{t}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3 SEPARATION */}
        <section id="separation" className="section-padding bg-background border-b border-border scroll-mt-20">
          <div className="container mx-auto px-3 sm:px-6 max-w-[1600px]">
            <div className="px-2"><Label>01 / Scrap Preparation</Label><H2>FROM MIXED SCRAP TO CONTROLLED FEEDSTOCK</H2></div>
            <Zoomable src={separation.url} alt="Aluminum scrap separation — manual vs AI-powered" onOpen={setZoom} />
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
              {[["2–3×", "Faster processing"], ["+5–15%", "Metal recovery potential"], ["98%", "Target feedstock purity*"]].map(([v, l]) => (
                <div key={l} className="bg-background p-6 sm:p-10">
                  <p className="text-5xl sm:text-6xl font-bold text-brand leading-none mb-3">{v}</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground px-2">*Performance varies by feedstock, equipment configuration and operating conditions. Final values subject to OEM validation.</p>
          </div>
        </section>

        {/* 4 MELTING */}
        <section id="melting" className="section-padding bg-background border-b border-border scroll-mt-20">
          <div className="container mx-auto px-3 sm:px-6 max-w-[1600px]">
            <div className="px-2"><Label>02 / Melting</Label><H2>THE FURNACE BECOMES A CONTROLLED DATA SYSTEM</H2></div>
            <Zoomable src={charging.url} alt="Furnace operation and charging" onOpen={setZoom} />
            <div className="mt-10 px-2"><Flow steps={["Charge", "Temperature", "Melt Level", "Chemistry", "Skimming", "Pour"]} /></div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
              {[[Brain, "AI Charge Recommendation"], [Thermometer, "Real-Time Temperature"], [Gauge, "Melt-Level Monitoring"], [Droplet, "Automated Skimming"], [Wrench, "Predictive Maintenance"], [BarChart3, "Production Optimization"]].map(([Icon, l]) => {
                const I = Icon as typeof Brain;
                return (
                  <div key={l as string} className="bg-background p-5 flex flex-col items-start gap-3">
                    <I className="w-7 h-7 text-brand" />
                    <p className="text-xs font-bold uppercase tracking-wider">{l as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5 CASTING */}
        <section id="casting" className="section-padding bg-background border-b border-border scroll-mt-20">
          <div className="container mx-auto px-3 sm:px-6 max-w-[1600px]">
            <div className="px-2"><Label>03 / Casting</Label><H2>FROM LIQUID METAL TO FINISHED INGOT — AUTOMATICALLY</H2></div>
            <Zoomable src={ingotUrl} alt="Ingot casting and stacking" onOpen={setZoom} />
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
              {[["1.5M LB / YEAR", "Reference production scale"], ["~$1.0M", "Projected automation investment"], ["~1 YEAR", "Projected payback"]].map(([v, l]) => (
                <div key={l} className="bg-background p-6 sm:p-10">
                  <p className="text-4xl sm:text-5xl font-bold text-brand leading-none mb-3">{v}</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground px-2">Projected operating case based on stated labor and automation assumptions. Actual economics depend on staffing, wages, production schedule, equipment scope and final vendor pricing.</p>
          </div>
        </section>

        {/* 6 HANDLING */}
        <section id="handling" className="section-padding bg-secondary border-b border-border scroll-mt-20">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
            <H2>THE PRODUCT KEEPS MOVING — WITHOUT WAITING FOR AN OPERATOR</H2>
            <Flow steps={["Casting Line", "Robotic Stacking", "Automatic Weighing", "Strapping + Labeling", "Autonomous Forklift / AGV", "Warehouse", "Truck Loading"]} />
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {["Automatic pallet movement", "Automatic weighing & tracking", "Warehouse routing", "Truck staging & loading"].map((b) => (
                <li key={b} className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-brand shrink-0" />{b}</li>
              ))}
            </ul>
            <p className="mt-10 text-2xl sm:text-3xl font-bold border-l-4 border-brand pl-4">LESS MANUAL HANDLING. MORE CONTINUOUS FLOW.</p>
          </div>
        </section>

        {/* 7 EMISSIONS */}
        <section id="emissions" className="section-padding bg-background border-b border-border scroll-mt-20">
          <div className="container mx-auto px-3 sm:px-6 max-w-[1600px]">
            <div className="px-2"><Label>04 / Emissions Control</Label><H2>CLEANER OPERATIONS. CONTINUOUS MONITORING.</H2></div>
            <Zoomable src={exhaust.url} alt="Backhouse / off-gas system" onOpen={setZoom} />
            <div className="mt-10 grid lg:grid-cols-2 gap-8 px-2">
              <div className="bg-primary text-primary-foreground p-6 sm:p-8">
                <p className="text-minimal text-brand mb-5">Off-gas path</p>
                <Flow dark steps={["Furnace", "Duct", "Backhouse", "Monitoring", "Stack"]} />
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 content-center">
                {["Real-time emissions monitoring", "Automated airflow control", "Filter-condition alerts", "Predictive maintenance", "Continuous data logging", "Mobile alerts", "Compliance-data integration"].map((b) => (
                  <li key={b} className="flex items-center gap-2 font-semibold"><Check className="w-5 h-5 text-brand shrink-0" />{b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border">
              {["BETTER DATA", "BETTER CONTROL", "BETTER COMPLIANCE READINESS"].map((t) => (
                <p key={t} className="bg-background p-6 text-xl sm:text-2xl font-bold text-center">{t}</p>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground px-2">Air-permit timelines are determined by the permitting authority. Technology does not guarantee EPA or state permit approval.</p>
          </div>
        </section>

        {/* 8 DATA LOOP */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
            <H2>ONE PLANT. ONE DATA LOOP.</H2>
            <Flow dark steps={["Scrap Identification", "AI Separation", "Charge Optimization", "Melt Monitoring", "Alloy Control", "Automated Casting", "Robotic Stacking", "Autonomous Handling", "Inventory Data", "Customer Shipment"]} />
            <div className="my-6 flex justify-center text-brand text-3xl font-bold">↕</div>
            <div className="border border-primary-foreground/25 p-5 text-center font-bold tracking-wider text-sm sm:text-base">
              QUALITY + ENERGY + MAINTENANCE + EMISSIONS + PRODUCTION DATA
            </div>
            <div className="my-4 flex justify-center text-brand text-3xl font-bold">↓</div>
            <div className="bg-brand text-brand-foreground p-6 text-center text-2xl sm:text-3xl font-bold">PLANT CONTROL SYSTEM</div>
          </div>
        </section>

        {/* 9 WHY */}
        <section className="section-padding bg-background border-b border-border">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {[["QUALITY", "More consistent feedstock", "More repeatable chemistry"], ["YIELD", "Higher metal recovery", "Less avoidable loss"], ["LABOR", "Less repetitive manual handling", "Higher output per employee"], ["UPTIME", "Predictive maintenance", "Fewer unplanned interruptions"]].map(([t, a, b]) => (
                <div key={t} className="bg-background p-6 sm:p-8">
                  <p className="text-3xl font-bold text-brand mb-4">{t}</p>
                  <p className="font-semibold">{a}</p>
                  <p className="font-semibold">{b}</p>
                </div>
              ))}
            </div>
            <p className="mt-14 text-3xl sm:text-5xl font-bold">AUTOMATION IS NOT THE PRODUCT.</p>
            <p className="mt-3 text-3xl sm:text-5xl font-bold text-brand">LOW-COST, CONSISTENT ALUMINUM IS THE PRODUCT.</p>
          </div>
        </section>

        {/* 10 FINAL */}
        <section className="min-h-screen flex items-center bg-primary text-primary-foreground section-padding">
          <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
            <div className="space-y-2 text-lg sm:text-xl font-bold tracking-wider text-primary-foreground/70 mb-8">
              <p>THE TECHNOLOGY EXISTS.</p><p>THE FEEDSTOCK EXISTS.</p><p>THE MARKET EXISTS.</p>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold leading-[1] mb-10">BIRCH BRINGS THEM <span className="text-brand">TOGETHER.</span></h2>
            <p className="text-sm sm:text-base font-bold tracking-wider mb-12">U.S. SCRAP → AUTOMATED PROCESSING → SPECIFICATION-GRADE ALUMINUM → U.S. MANUFACTURING</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/aluminum-opportunity" className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-6 py-4 font-bold hover:opacity-90 transition-opacity">
                <ArrowRight className="w-4 h-4" /> EXPLORE THE MARKET OPPORTUNITY
              </Link>
              <Link to="/investor-opportunity" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-4 font-bold hover:bg-primary-foreground hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4" /> VIEW THE BIRCH PROJECT
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-[96vw] w-[96vw] p-2 bg-background">
          <DialogTitle className="sr-only">{zoom?.alt}</DialogTitle>
          {zoom && <img src={zoom.src} alt={zoom.alt} className="w-full h-auto max-h-[90vh] object-contain" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Technology;
