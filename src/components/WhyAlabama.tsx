import { MapPin, Zap, HardHat, Users } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    label: "Land & Site Build",
    value: "Purpose-built",
    body: "Facility optimized for environmental permitting and operational workflow.",
  },
  {
    icon: Zap,
    label: "Utilities",
    value: "~$20,000 / mo",
    body: "Low, predictable natural gas and electricity cost base.",
  },
  {
    icon: HardHat,
    label: "Labor",
    value: "~25% lower",
    body: "Labor costs below comparable industrial regions.",
  },
  {
    icon: Users,
    label: "Buyers",
    value: "5 major consumers",
    body: "Within approximately two hours of the facility.",
  },
];

const utilities = [
  { component: "Natural Gas", birch: "$0.030 / lb", other: "$0.045 – $0.060 / lb" },
  { component: "Electricity", birch: "$0.025 / lb", other: "$0.035 – $0.050 / lb" },
];

const WhyAlabama = () => {
  return (
    <section id="why-alabama" className="section-padding bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Why Alabama</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl">
          Strategic location. Lower costs. Higher margins.
        </h2>
        <p className="text-lg text-muted-foreground mb-14 max-w-3xl">
          Alabama delivers a structural cost advantage — lower utilities, lower labor, and direct
          proximity to major aluminum consumers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-12">
          {advantages.map((a) => (
            <div key={a.label} className="bg-background p-8">
              <a.icon className="w-6 h-6 text-brand mb-5" />
              <p className="text-minimal text-muted-foreground mb-2">{a.label}</p>
              <p className="text-2xl font-bold mb-3">{a.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="border border-border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4 font-semibold">Utility Comparison</th>
                  <th className="text-right p-4 font-semibold">Birch (Alabama)</th>
                  <th className="text-right p-4 font-semibold">Typical Region</th>
                </tr>
              </thead>
              <tbody>
                {utilities.map((r) => (
                  <tr key={r.component} className="border-t border-border">
                    <td className="p-4 font-medium">{r.component}</td>
                    <td className="p-4 text-right font-mono">{r.birch}</td>
                    <td className="p-4 text-right font-mono text-muted-foreground">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-center">
            <p className="text-minimal text-primary-foreground/60 mb-3">Annual savings</p>
            <p className="text-4xl md:text-5xl font-bold text-brand leading-none mb-3">
              $1.08M – $2.16M
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Lower conversion cost per year at 3M lbs per month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlabama;
