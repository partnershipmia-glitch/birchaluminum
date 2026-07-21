import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Scrap supply", body: "Purchase wheel scrap from confirmed suppliers." },
  { n: "02", title: "Melt & process", body: "Process material in low-maintenance furnaces." },
  { n: "03", title: "Cast alloy", body: "Cast specification-grade aluminum sows." },
  { n: "04", title: "Sell to buyers", body: "Sell through existing buyers, brokers, and direct industrial relationships." },
];

const practical = [
  "Wheel scrap is widely available.",
  "Material composition is relatively consistent.",
  "The production process is established.",
  "Finished alloys have an existing market.",
  "The plant does not require an expensive or complex equipment configuration.",
  "Furnaces and burners are designed for lower acquisition and maintenance costs.",
  "The operating model does not depend on expensive pumps or a complex liquid-metal holding system.",
];

const EntryPoint = () => {
  return (
    <section id="entry" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-primary-foreground/60 mb-4">Section 04 · Our Entry Point</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mb-6">
          Start With One Feedstock, One Core Process, and Existing Buyers
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-3xl mb-14 leading-relaxed">
          Birch Aluminum will begin with aluminum wheel scrap and produce established secondary
          aluminum specifications. The initial operating model is intentionally focused.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="bg-primary border border-primary-foreground/20 p-6 h-full">
                <p className="text-yellow-400 font-black text-2xl mb-3">{s.n}</p>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-yellow-400" />
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/15 pt-10">
          <p className="text-minimal text-primary-foreground/60 mb-6">Why this entry point is practical</p>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl">
            {practical.map((p) => (
              <li key={p} className="flex gap-3 text-primary-foreground/85">
                <span className="text-yellow-400 shrink-0">›</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EntryPoint;
