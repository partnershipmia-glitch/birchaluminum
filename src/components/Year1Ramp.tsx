const ramp = [
  { month: "M6", value: 1.5 },
  { month: "M7", value: 2.1 },
  { month: "M8", value: 2.55 },
  { month: "M9", value: 3.0 },
  { month: "M10", value: 3.0 },
  { month: "M11", value: 3.0 },
  { month: "M12", value: 3.0 },
];

const Year1Ramp = () => {
  const max = 3.0;
  return (
    <section id="ramp" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-3">Ramp Schedule</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Year 1 Production Ramp
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-3xl">
          Planned full stabilization by Month 9.
        </p>

        <div className="bg-background border border-border p-5 md:p-8">
          <div className="flex items-end justify-between gap-3 md:gap-6 h-40 md:h-52">
            {ramp.map((r) => {
              const h = (r.value / max) * 100;
              return (
                <div key={r.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs md:text-sm font-bold">{r.value.toFixed(2)}M</div>
                  <div className="w-full bg-secondary relative" style={{ height: "100%" }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-primary transition-all"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    {r.month}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">lbs / month</p>
        </div>
      </div>
    </section>
  );
};

export default Year1Ramp;
