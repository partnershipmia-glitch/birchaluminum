import { ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 py-2.5 flex items-center justify-center sm:justify-end">
        <a
          href="/?type=scrap#inquiry"
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <span className="text-primary-foreground/70 font-normal">Have aluminum wheels, cast aluminum, or clean scrap?</span>
          <span className="flex items-center gap-1.5 text-brand font-bold">Send Supplier Proposal <ArrowRight className="w-3.5 h-3.5" /></span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
