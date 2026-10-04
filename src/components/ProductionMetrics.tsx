const metrics = [
  { value: "6 million", rest: "pounds\naluminum throughput\nper month" },
  { value: "72 million", rest: "pounds per year\nproduction throughput" },
  { value: "$1 million", rest: "per month\nTargeted EBITDA" },
];

const ProductionMetrics = () => {
  return (
    <section className="bg-primary border-t border-brand/20 py-12 md:py-16">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-brand/25 bg-brand/25">
          {metrics.map((m) => (
            <div key={m.value} className="bg-primary p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand leading-tight">
                {m.value}
              </p>
              <p className="text-2xl sm:text-3xl text-white/70 leading-tight whitespace-pre-line">
                {m.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionMetrics;
