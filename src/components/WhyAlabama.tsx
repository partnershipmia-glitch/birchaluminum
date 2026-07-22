import { Zap, Flame, HardHat, Truck, Target } from "lucide-react";

const advantages = [
  { icon: Zap, label: "Electricity", value: "~30% cheaper", detail: "than Rust Belt states" },
  { icon: Flame, label: "Natural Gas", value: "~35% cheaper", detail: "than Rust Belt states" },
  { icon: HardHat, label: "Labor", value: "~40% cheaper", detail: "than Rust Belt states" },
];

const costTable = [
  { component: "Natural Gas", birch: "$0.030", rust: "$0.045 – $0.060", adv: "$0.015 – $0.030" },
  { component: "Electricity", birch: "$0.025", rust: "$0.035 – $0.050", adv: "$0.010 – $0.025" },
  { component: "Labor", birch: "$0.025", rust: "$0.040 – $0.050", adv: "$0.015 – $0.025" },
  { component: "Other Conversion", birch: "$0.020", rust: "$0.020 – $0.025", adv: "$0.000 – $0.005" },
];

const buyers = [
  { region: "Alabama (in-state)", count: "20+" },
  { region: "Tennessee", count: "10+" },
  { region: "Georgia", count: "15+" },
  { region: "Kentucky", count: "8+" },
  { region: "Mississippi", count: "6+" },
  { region: "Ohio", count: "20+" },
  { region: "Indiana", count: "10+" },
];

const WhyAlabama = () => {
  return (
    <section id="why-alabama" className="section-padding bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-4">Why Alabama</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-4xl">
          Strategic location. Lower costs. Higher margins.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Alabama delivers a structural cost advantage vs. Rust Belt states — resulting in a
          lower conversion cost and higher EBITDA.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {advantages.map((a) => (
            <div key={a.label} className="border border-border p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <a.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-minimal text-muted-foreground mb-1">{a.label}</p>
                <p className="text-xl font-bold text-yellow-600">{a.value}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">Cost Component</th>
                <th className="text-right p-4 font-semibold">Birch (Alabama)</th>
                <th className="text-right p-4 font-semibold">Rust Belt (Typical)</th>
                <th className="text-right p-4 font-semibold">Advantage ($/lb)</th>
              </tr>
            </thead>
            <tbody>
              {costTable.map((r) => (
                <tr key={r.component} className="border-t border-border">
                  <td className="p-4 font-medium">{r.component}</td>
                  <td className="p-4 text-right font-mono">{r.birch}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.rust}</td>
                  <td className="p-4 text-right font-mono text-yellow-600 font-semibold">{r.adv}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-foreground bg-muted/40">
                <td className="p-4 font-bold">Total Conversion Cost</td>
                <td className="p-4 text-right font-mono font-bold">~$0.10 / lb</td>
                <td className="p-4 text-right font-mono">~$0.13 – $0.16 / lb</td>
                <td className="p-4 text-right font-mono text-yellow-600 font-bold">$0.03 – $0.06 / lb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-primary text-primary-foreground p-8 md:p-10 mb-10">
          <p className="text-minimal text-primary-foreground/60 mb-3">Result at 3M lbs / month</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">$90,000 – $180,000</p>
              <p className="text-primary-foreground/70 text-sm mt-1">lower cost per month</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">$1.08M – $2.16M</p>
              <p className="text-primary-foreground/70 text-sm mt-1">lower cost per year</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <div className="border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <Truck className="w-5 h-5 text-muted-foreground" />
              <p className="text-minimal text-muted-foreground">Close to the customer base</p>
            </div>
            <p className="text-3xl font-bold mb-1">
              69+ <span className="text-base font-normal text-muted-foreground">major aluminum buyers</span>
            </p>
            <p className="text-sm text-muted-foreground">Within ~500 miles of the facility.</p>
          </div>

          <div className="border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-muted-foreground" />
              <p className="text-minimal text-muted-foreground">Buyers by region</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {buyers.map((b) => (
                <div key={b.region} className="flex items-baseline justify-between border-b border-border pb-2">
                  <span className="text-sm text-muted-foreground">{b.region}</span>
                  <span className="font-bold text-yellow-600">{b.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlabama;
