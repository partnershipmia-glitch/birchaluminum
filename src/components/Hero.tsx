import { ArrowRight, TrendingUp, Factory, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground section-padding overflow-hidden">
      {/* Bright accent glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Now Raising · Decatur, Alabama
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Invest <span className="text-yellow-400">$2.8M</span>.<br />
            Own a piece of a U.S.<br />
            aluminum smelter.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed max-w-2xl">
            We're building a secondary aluminum smelting facility in Alabama,
            processing scrap wheels into sows. One furnace producing ~2 million lbs/month,
            scaling to two furnaces in 18–24 months. Buyers and supply already lined up.
          </p>

          {/* Bright Investor Snapshot */}
          <div className="grid sm:grid-cols-3 gap-px bg-primary-foreground/10 mb-10 border border-yellow-400/30">
            <div className="bg-primary p-6">
              <DollarSign className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">Capital Raise</p>
              <p className="text-3xl font-black text-yellow-400">$2.8M</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Equity partnership</p>
            </div>
            <div className="bg-primary p-6">
              <Factory className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">What It Builds</p>
              <p className="text-3xl font-black">Smelter</p>
              <p className="text-sm text-primary-foreground/70 mt-1">2M lbs/month, scaling to 4M</p>
            </div>
            <div className="bg-primary p-6">
              <TrendingUp className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">2-Year Outcome</p>
              <p className="text-3xl font-black text-yellow-400">~2x</p>
              <p className="text-sm text-primary-foreground/70 mt-1">~$6.5M EBITDA / yr at scale</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:birchfamilyllcfl@gmail.com"
              className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-8 py-4 font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
            >
              Become a Partner <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#investment"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              See the numbers
            </a>
          </div>

          <p className="text-sm text-primary-foreground/50 mt-6 max-w-2xl">
            Fast cash conversion · First-position UCC collateral · Buyers & supply lined up
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
