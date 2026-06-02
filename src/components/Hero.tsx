import { ArrowRight, TrendingUp, Factory, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground section-padding overflow-hidden">
      {/* Bright accent glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl lg:mx-auto lg:text-center">
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Now Raising · Decatur, Alabama
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4">
            Invest in the <span className="text-yellow-400">aluminum smelter</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-6">
            and own an equity of cashflow business.
          </p>

          <ul className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed max-w-2xl space-y-3 list-none">
            <li className="flex gap-3"><span className="text-yellow-400 font-bold mt-1">›</span><span>I'm raising funds on a secondary aluminum smelting facility.</span></li>
            <li className="flex gap-3"><span className="text-yellow-400 font-bold mt-1">›</span><span>We will process scrap wheels into sows.</span></li>
            <li className="flex gap-3"><span className="text-yellow-400 font-bold mt-1">›</span><span>2 furnaces producing ~3 million lbs/month, scaling to 4 furnaces and 6M lbs/month.</span></li>
            <li className="flex gap-3"><span className="text-yellow-400 font-bold mt-1">›</span><span>LOIs in hand from sow buyers and scrap suppliers.</span></li>
          </ul>

          {/* Bright Investor Snapshot */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 mb-10 border border-yellow-400/30">
            <div className="bg-primary p-6">
              <DollarSign className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">Capital Raise</p>
              <p className="text-3xl font-black text-yellow-400">$1.5M</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Equity partnership</p>
            </div>
            <div className="bg-primary p-6">
              <Factory className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">What It Builds</p>
              <p className="text-3xl font-black">Smelter</p>
              <p className="text-sm text-primary-foreground/70 mt-1">~3,000,000 lbs of finished aluminum</p>
            </div>
            <div className="bg-primary p-6">
              <TrendingUp className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">2-Year Outcome</p>
              <p className="text-3xl font-black text-yellow-400">$74M+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">36M lbs of ALUMINUM per year, 2-furnace operation</p>
            </div>
            <div className="bg-primary p-6">
              <TrendingUp className="w-6 h-6 text-yellow-400 mb-3" />
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">Targeted EBITDA</p>
              <p className="text-3xl font-black text-yellow-400">$5M/yr</p>
              <p className="text-sm text-primary-foreground/70 mt-1">$20M+ enterprise value within 24 months</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com&su=Partnership%20Inquiry%20-%20Birch%20Aluminum&body=Hello%20Birch%20Aluminum%20Team%2C%0A%0AI%20am%20interested%20in%20becoming%20a%20partner%20in%20your%20Decatur%2C%20Alabama%20aluminum%20smelting%20facility.%20Please%20share%20more%20details%20about%20the%20equity%20opportunity.%0A%0AMy%20contact%20info%3A%0AName%3A%20%0APhone%3A%20%0A%0AThank%20you.%0A%0A--%0AReply%20to%3A%20BirchFamilyLLCFL%40gmail.com%20%7C%20%2B1%20754-610-1052"
              target="_blank"
              rel="noopener noreferrer"
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
