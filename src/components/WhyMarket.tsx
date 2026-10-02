import { ArrowRight } from "lucide-react";

const takeaways = [
  "Customers need local, reliable supply.",
  "Tariffs support US production.",
  "Investing in reshoring production.",
];


const WhyMarket = () => {
  return (
    <section id="market" className="relative overflow-hidden bg-primary py-16 text-brand md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--brand)/.16)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--brand)/.16)_1px,transparent_1px)] [background-size:52px_52px]" aria-hidden />
      <div className="container relative mx-auto px-5 sm:px-6">
        <header className="border-l-4 border-brand pl-5 sm:pl-7">
          <div className="mb-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand/60 sm:text-xs">
            <span className="h-2 w-2 animate-pulse bg-brand motion-reduce:animate-none" aria-hidden />
            U.S. supply / market signal
          </div>
          <h2 className="max-w-5xl text-3xl font-black uppercase leading-[1.02] sm:text-5xl md:text-6xl">
            The US Supply Gap <span className="block text-brand/65">Is Already Here.</span>
          </h2>
        </header>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <div className="group relative overflow-hidden border border-brand/25 bg-primary p-6 transition-colors duration-300 hover:border-brand sm:p-8">
            <span className="absolute right-4 top-4 font-mono text-[10px] font-bold text-brand/35">01 / MARKET</span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand/55">U.S. market size</p>
            <p className="mt-4 text-5xl font-black leading-none sm:text-6xl">13B</p>
            <p className="mt-2 text-lg font-black uppercase">pounds / year</p>
            <div className="mt-8 h-1 overflow-hidden bg-brand/15" aria-hidden>
              <span className="block h-full w-2/3 bg-brand transition-[width] duration-700 ease-out group-hover:w-full motion-reduce:transition-none" />
            </div>
          </div>

          <div className="group relative overflow-hidden border border-brand/25 bg-primary p-6 transition-colors duration-300 hover:border-brand sm:p-8 md:col-span-2">
            <span className="absolute right-4 top-4 font-mono text-[10px] font-bold text-brand/35">02 / REGION</span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand/55">Operational advantage</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Alabama</h3>
            <div className="mt-6 grid gap-px bg-brand/25 sm:grid-cols-3">
              {["40% cheaper utilities.", "Lower pay rate.", "NO UNIONS."].map((item, index) => (
                <div key={item} className="relative bg-primary p-4 transition-colors duration-300 group-hover:bg-brand/10">
                  <span className="font-mono text-[10px] font-bold text-brand/45">0{index + 1}</span>
                  <p className="mt-2 text-sm font-black uppercase leading-tight sm:text-base">{item}</p>
                </div>
              ))}
            </div>
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-brand/10 transition-transform duration-1000 ease-in-out group-hover:translate-x-[400%] motion-reduce:hidden" aria-hidden />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {takeaways.map((t, i) => (
            <div
              key={t}
              className="group relative flex min-h-20 items-center gap-4 overflow-hidden border border-brand/20 bg-primary p-4 transition-all duration-300 hover:border-brand hover:bg-brand sm:gap-7 sm:p-6 motion-reduce:transition-none"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-brand transition-[width] duration-300 group-hover:w-2 group-hover:bg-primary motion-reduce:transition-none" aria-hidden />
              <span className="shrink-0 font-mono text-2xl font-black leading-none text-brand/45 transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="flex-grow text-base font-black uppercase leading-tight text-brand transition-colors duration-300 group-hover:text-primary sm:text-xl md:text-2xl">
                {t}
              </p>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary sm:h-6 sm:w-6 motion-reduce:transition-none" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-brand/20 pt-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brand/45 sm:text-[10px]">
          <span>Supply analysis</span>
          <span>Birch Aluminum / USA</span>
        </div>
      </div>
    </section>
  );
};

export default WhyMarket;
