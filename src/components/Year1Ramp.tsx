const data = [
  { month: "M1", prod: 0, burn: 0.10, note: "Lease, permitting, legal" },
  { month: "M2", prod: 0, burn: 0.25, note: "Engineering, payroll" },
  { month: "M3", prod: 0, burn: 0.80, note: "Furnace deposits" },
  { month: "M4", prod: 0, burn: 2.55, note: "Property close + equipment" },
  { month: "M5", prod: 0, burn: 3.10, note: "Install & commissioning" },
  { month: "M6", prod: 1.5, burn: 4.50, note: "WC scrap inventory · production start" },
  { month: "M7", prod: 2.1, burn: 4.65, note: "Ramp" },
  { month: "M8", prod: 2.55, burn: 4.75, note: "Ramp" },
  { month: "M9", prod: 3.0, burn: 4.84, note: "Full stabilization" },
];

const MAX_PROD = 3.0;
const MAX_BURN = 4.84;

const Year1Ramp = () => {
  return (
    <section id="ramp" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-muted-foreground mb-3">Ramp & Capital Deployment</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Year 1 Production Ramp & Funds Burn
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-3xl">
          Capital deployed through Month 9 reaches ~$4.84M — the full project funding requirement.
          Production begins Month 6 and stabilizes at ~3M lbs/month by Month 9.
        </p>

        <div className="bg-background border border-border p-5 md:p-8">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-primary" />
              <span className="text-muted-foreground">Production (M lbs / month)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-yellow-500" />
              <span className="text-muted-foreground">Cumulative Funds Burn ($M)</span>
            </div>
          </div>

          {/* Chart */}
          <div className="flex items-end justify-between gap-2 md:gap-4 h-56 md:h-64">
            {data.map((d) => {
              const hProd = (d.prod / MAX_PROD) * 100;
              const hBurn = (d.burn / MAX_BURN) * 100;
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <div className="flex items-end gap-1 w-full flex-1">
                    {/* Production bar */}
                    <div className="flex-1 h-full bg-secondary relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-primary transition-all"
                        style={{ height: `${hProd}%` }}
                      />
                    </div>
                    {/* Burn bar */}
                    <div className="flex-1 h-full bg-secondary relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-yellow-500 transition-all"
                        style={{ height: `${hBurn}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    {d.month}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-[11px] md:text-xs">
              <thead>
                <tr className="border-b border-border text-muted-foreground uppercase tracking-wider">
                  <th className="text-left py-2 pr-2">Month</th>
                  <th className="text-right py-2 px-2">Production</th>
                  <th className="text-right py-2 px-2">Cum. Burn</th>
                  <th className="text-left py-2 pl-2 hidden md:table-cell">Milestone</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.month} className="border-b border-border/50">
                    <td className="py-2 pr-2 font-medium">{d.month}</td>
                    <td className="py-2 px-2 text-right">
                      {d.prod > 0 ? `${d.prod.toFixed(2)}M lbs` : "—"}
                    </td>
                    <td className="py-2 px-2 text-right font-medium">${d.burn.toFixed(2)}M</td>
                    <td className="py-2 pl-2 text-muted-foreground hidden md:table-cell">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Year1Ramp;
