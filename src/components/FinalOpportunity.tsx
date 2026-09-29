
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


const FinalOpportunity = () => (
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
);
