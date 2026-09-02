import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import { deckUrl } from "@/lib/links";

const sectionLinks = [
  { label: "Why Birch", href: "#why-birch" },
  { label: "Facility", href: "#facility" },
  { label: "Vision", href: "#vision" },
  { label: "See It", href: "#team" },
  { label: "Investors", href: "#investment" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const navLinks = sectionLinks.map((l) => ({
    ...l,
    to: onHome ? l.href : `/${l.href}`,
  }));

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Birch Aluminum" className="h-8 sm:h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
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
            href={deckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-2 text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" /> View Deck
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
          <div className="container mx-auto px-5 py-5 space-y-4">
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
            <Link
              to="/market-research"
              onClick={() => setIsOpen(false)}
              className="block text-minimal text-muted-foreground hover:text-foreground transition-colors"
            >
              Market Research
            </Link>
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand text-brand-foreground px-5 py-3 text-sm font-bold mt-4 hover:opacity-90 transition-opacity"
            >
              <ArrowRight className="w-4 h-4" /> View Deck
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
