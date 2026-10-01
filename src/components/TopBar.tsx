import { ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 py-2.5 flex items-center justify-center sm:justify-end">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com&su=Proposal%20-%20Birch%20Aluminum&body=Hello%20Birch%20Aluminum%20Team%2C%0A%0APlease%20find%20my%20proposal%20below%3A%0A%0A%0A--%0AReply%20to%3A%20BirchFamilyLLCFL%40gmail.com%20%7C%20%2B1%20754-610-1052"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <span className="text-primary-foreground/70 font-normal">If you supplier, send your proposal.</span>
          <span className="flex items-center gap-1.5 text-brand font-bold">Send a proposal <ArrowRight className="w-3.5 h-3.5" /></span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
