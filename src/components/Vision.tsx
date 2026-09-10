const chain = [
  "Procure Qualified Scrap",
  "Process Secondary Aluminum",
  "Cast Target Alloy Formats",
  "Supply U.S. Industrial Buyers",
  "Evaluate Downstream Opportunities",
];

const Vision = () => {
  return (
    <section id="vision" className="section-padding bg-secondary">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-minimal text-brand mb-4">The Bigger Vision</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
          One plant is the start.
          <br />
          <span className="text-brand">The network is the business.</span>
        </h2>

        <div className="bg-primary text-primary-foreground p-6 sm:p-10">
          <div className="flex flex-col items-center gap-3">
            {chain.map((node, i) => (
              <div key={node} className="w-full flex flex-col items-center gap-3">
                <div className="w-full max-w-md text-center border border-primary-foreground/20 px-4 py-3 text-sm sm:text-base font-bold uppercase tracking-wider">
                  {node}
                </div>
                {i < chain.length - 1 && <span className="text-brand text-xl leading-none">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
