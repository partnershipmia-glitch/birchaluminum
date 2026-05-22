import { Mail, ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-2.5 flex items-center justify-between">
        <a
          href="mailto:birchfamilyllcfl@gmail.com"
          className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <Mail className="w-3.5 h-3.5" />
          birchfamilyllcfl@gmail.com
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com&su=Proposal%20-%20Birch%20Aluminum&body=Hello%20Birch%20Aluminum%20Team%2C%0A%0APlease%20find%20my%20proposal%20below%3A%0A%0A%0A--%0AReply%20to%3A%20BirchFamilyLLCFL%40gmail.com%20%7C%20%2B1%20754-610-1052"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Send Proposal <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
