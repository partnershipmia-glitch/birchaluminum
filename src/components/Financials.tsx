import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const assumptions = [
  { label: "Selling price", value: "$2.05 / lb" },
  { label: "EBITDA", value: "$0.11 / lb" },
  { label: "Capacity", value: "36M lbs / year" },
  { label: "Debt", value: "None" },
];

const revenue = [
  { year: "Year 1", value: 51.7 },
  { year: "Year 2", value: 66.4 },
  { year: "Year 3", value: 73.8 },
];

const ebitda = [
  { year: "Year 1", value: 2.77 },
  { year: "Year 2", value: 3.56 },
  { year: "Year 3", value: 3.96 },
];

const capacity = [
  { year: "Year 1", value: 70 },
  { year: "Year 2", value: 90 },
  { year: "Year 3", value: 100 },
];

const table = [
  { year: "Year 1", revenue: "$51.7M", production: "25.2M lbs", ebitda: "$2.77M", cum: "$2.77M" },
  { year: "Year 2", revenue: "$66.4M", production: "32.4M lbs", ebitda: "$3.56M", cum: "$6.33M" },
  { year: "Year 3", revenue: "$73.8M", production: "36.0M lbs", ebitda: "$3.96M", cum: "$10.29M" },
];

const valuation = [
  { multiple: "4×", ev: "$15.8M", stake: "$4.75M" },
  { multiple: "5×", ev: "$19.8M", stake: "$5.94M" },
  { multiple: "6×", ev: "$23.8M", stake: "$7.13M" },
];

const banner = [
  { value: "36M lbs", label: "Annual capacity" },
  { value: "Debt-Free", label: "Cash flow" },
  { value: "30%", label: "Investor ownership" },
];

type ChartProps = {
  title: string;
  data: { year: string; value: number }[];
  format: (v: number) => string;
};

const Chart = ({ title, data, format }: ChartProps) => (
  <div className="border border-border p-6">
    <p className="text-minimal text-muted-foreground mb-6">{title}</p>
    <div className="w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 26, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "hsl(var(--muted) / 0.4)" }}
            contentStyle={{
              background: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              fontSize: 13,
            }}
            formatter={(v: number) => [format(v), title]}
          />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              formatter={(v: number) => format(v)}
              style={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 700 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Financials = () => {
  return (
    <section id="financials" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-minimal text-brand mb-5">Financials</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
          3-Year Financial Outlook
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-10">
          {assumptions.map((a) => (
            <div key={a.label} className="bg-background p-6">
              <p className="text-minimal text-muted-foreground mb-2">{a.label}</p>
              <p className="text-2xl font-bold text-brand">{a.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10 bg-background">
          <Chart title="Revenue" data={revenue} format={(v) => `$${v}M`} />
          <Chart title="EBITDA" data={ebitda} format={(v) => `$${v.toFixed(2)}M`} />
          <Chart title="Capacity Utilization" data={capacity} format={(v) => `${v}%`} />
        </div>

        <div className="border border-border overflow-x-auto bg-background mb-10">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">Year</th>
                <th className="text-right p-4 font-semibold">Revenue</th>
                <th className="text-right p-4 font-semibold">Production</th>
                <th className="text-right p-4 font-semibold">EBITDA</th>
                <th className="text-right p-4 font-semibold">Cumulative EBITDA</th>
              </tr>
            </thead>
            <tbody>
              {table.map((r) => (
                <tr key={r.year} className="border-t border-border">
                  <td className="p-4 font-medium">{r.year}</td>
                  <td className="p-4 text-right font-mono">{r.revenue}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.production}</td>
                  <td className="p-4 text-right font-mono">{r.ebitda}</td>
                  <td className="p-4 text-right font-mono font-bold text-brand">{r.cum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border border-border bg-background p-8">
            <p className="text-minimal text-muted-foreground mb-6">
              Valuation · Year 3 EBITDA multiple
            </p>
            <div className="space-y-4">
              {valuation.map((v) => (
                <div key={v.multiple} className="flex items-baseline justify-between border-b border-border pb-3">
                  <span className="text-lg font-medium">{v.multiple}</span>
                  <span className="text-2xl font-bold">{v.ev}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border bg-background p-8">
            <p className="text-minimal text-muted-foreground mb-6">30% Investor Stake</p>
            <div className="space-y-4">
              {valuation.map((v) => (
                <div key={v.multiple} className="flex items-baseline justify-between border-b border-border pb-3">
                  <span className="text-lg font-medium">{v.multiple}</span>
                  <span className="text-2xl font-bold text-brand">{v.stake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground grid md:grid-cols-3 gap-px">
          {banner.map((b) => (
            <div key={b.label} className="p-8">
              <p className="text-3xl font-bold text-brand mb-1">{b.value}</p>
              <p className="text-sm text-primary-foreground/70">{b.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          Figures are illustrative projections based on stated assumptions. Actual results may
          differ.
        </p>
      </div>
    </section>
  );
};

export default Financials;
