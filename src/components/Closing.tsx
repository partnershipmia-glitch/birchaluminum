import { ArrowRight } from "lucide-react";

const Closing = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-minimal text-muted-foreground mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We are open to new partnerships, collaborations, and long-term
            relationships. Send your proposal or introduction — we review every
            message.
          </p>
          <a
            href="mailto:birchfamilyllcfl@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Proposal <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Closing;
