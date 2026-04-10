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
          href="mailto:birchfamilyllcfl@gmail.com"
          className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Send Proposal <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
