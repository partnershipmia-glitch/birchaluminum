import { ArrowRight } from "lucide-react";
import { deckUrl } from "@/lib/links";

const today = ["Collection", "Trading / Export"];
const birch = ["Domestic Sorting", "Domestic Processing", "Domestic Melting", "356 / 380 Alloy", "Finished Ingot"];

const Step = ({ t, strong, hl }: { t: string; strong?: boolean; hl?: boolean }) => (
  <div
    className={`p-3 text-center uppercase tracking-wider ${strong ? "font-bold text-base" : "text-sm font-semibold"} ${
      hl ? "bg-brand text-brand-foreground" : strong ? "bg-foreground text-background" : "bg-background border border-border"
    }`}
  >
    {t}
  </div>
);
const Down = () => <div className="text-center text-brand font-bold leading-none py-1">↓</div>;

const cards = [
  { t: "Domestic Feedstock", d: "Existing U.S. aluminum scrap market" },
  { t: "Domestic Demand", d: "Automotive + industrial customers" },
  { t: "Value Creation", d: "Scrap → specification-grade alloy" },
  { t: "Scalability", d: "Additional furnace and processing capacity as demand grows" },
];

const metrics = [
  { v: "$17.5M", l: "Capital Raise", note: "Target" },
  { v: "15 Months", l: "Target to Production", note: "Projected" },
  { v: "356 + 380", l: "Initial Alloy Focus" },
  { v: "SIGNED", l: "Feedstock & Customer LOIs", note: "Non-binding" },
];

const FinalOpportunity = () => (
  <>
    <section className="section-padding bg-secondary border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <p className="text-minimal text-brand mb-3">Before / After</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">THE OPPORTUNITY</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-muted-foreground mb-5">Today</h3>
            <Step t="U.S. Scrap" strong />
            {today.map((s) => (<div key={s}><Down /><Step t={s} /></div>))}
            <Down />
            <div className="p-4 text-center font-bold uppercase border-2 border-dashed border-muted-foreground text-muted-foreground">
              Value leaves the domestic chain
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold uppercase text-sm">
              <span>U.S.</span>
              <div className="flex-1 h-1 bg-metallic relative">
                <span className="absolute -right-1 -top-[9px] text-metallic text-lg">▶</span>
              </div>
              <span className="text-muted-foreground">Overseas</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-brand mb-5">Birch Model</h3>
            <Step t="U.S. Scrap" strong />
            {birch.map((s) => (<div key={s}><Down /><Step t={s} /></div>))}
            <Down />
            <Step t="U.S. Manufacturing" strong hl />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1] mb-4">THE METAL IS ALREADY HERE.</h2>
        <p className="text-2xl sm:text-4xl font-bold text-brand leading-tight mb-14">
          WE ARE BUILDING THE CAPACITY TO PROCESS MORE OF IT HERE.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
          {cards.map((c) => (
            <div key={c.t} className="bg-primary p-6">
              <p className="text-brand font-bold uppercase tracking-wider mb-3">{c.t}</p>
              <p className="text-primary-foreground/80">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {metrics.map((m) => (
            <div key={m.l}>
              <p className="text-4xl sm:text-5xl font-bold text-brand leading-none">{m.v}</p>
              <p className="mt-2 text-sm uppercase tracking-wider">{m.l}</p>
              {m.note && <p className="text-[11px] uppercase tracking-wider text-primary-foreground/50 mt-1">{m.note}</p>}
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-wider text-primary-foreground/50">
          Birch Aluminum management data. Targets and projections are forward-looking and not guaranteed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-14">
          <a
            href={deckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="w-5 h-5" /> View Investor Deck
          </a>
          <a
            href="mailto:birchfamilyllcfl@gmail.com?subject=Data%20Room%20Access%20Request"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-8 py-4 font-bold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
          >
            Request Data Room Access
          </a>
        </div>
      </div>
    </section>
  </>
);

export default FinalOpportunity;
