import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const pitchCallUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com" +
  "&su=" +
  encodeURIComponent("Let's Clear It Up With Me - Birch Aluminum") +
  "&body=" +
  encodeURIComponent(
    "Hello Birch Aluminum Team,\n\nI would like to schedule a pitch call to discuss the investment opportunity.\n\nName:\nCompany:\nPhone:\nPreferred date/time:\n\nThank you.\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052"
  );

const sectionLinks = [
  { label: "Market", href: "#market" },
  { label: "Team", href: "#team" },
  { label: "Investment", href: "#investor-economics" },
  { label: "Contact", href: "#cta" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const navLinks = [
    ...sectionLinks.map((l) => ({
      ...l,
      to: onHome ? l.href : `/${l.href}`,
      external: false,
    })),
    { label: "Market Research", to: "/market-research", external: false, href: "/market-research" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Birch Aluminum" className="h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.to.startsWith("#") ? (
              <a
                key={link.label}
                href={link.to}
                className="text-minimal text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-minimal text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={pitchCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-5 py-2 text-sm font-bold hover:bg-yellow-300 transition-colors"
          >
            <Calendar className="w-4 h-4" /> Let's Clear It Up With Me
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) =>
              link.to.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-minimal text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-minimal text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={pitchCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-primary px-5 py-3 text-sm font-bold text-center mt-4 hover:bg-yellow-300 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Let's Clear It Up With Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
