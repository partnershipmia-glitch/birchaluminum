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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com&su=Proposal%20-%20Birch%20Aluminum&body=Hello%20Birch%20Aluminum%20Team%2C%0A%0APlease%20find%20my%20proposal%20below%3A%0A%0A%0AMy%20contact%20info%3A%0AName%3A%20%0ACompany%3A%20%0APhone%3A%20%0A%0AThank%20you%20for%20your%20time.%0A%0A--%0AReply%20to%3A%20BirchFamilyLLCFL%40gmail.com%20%7C%20%2B1%20754-610-1052"
            target="_blank"
            rel="noopener noreferrer"
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
