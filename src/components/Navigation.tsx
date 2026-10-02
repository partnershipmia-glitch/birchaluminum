import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const monitorLink = { label: "Industry Monitor", href: "/industry-monitor" };

const sectionLinks = [
  { label: "Opportunity", href: "/aluminum-opportunity" },
  { label: "Why Birch", href: "/technology" },
  { label: "For Investors", href: "/investors", highlight: true },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const onHome = location.pathname === "/";

  const toPath = (href: string) =>
    href.startsWith("/") ? href : onHome ? href : `/${href}`;

  const navLinks = sectionLinks.map((l) => ({
    ...l,
    to: toPath(l.href),
  }));

  const monitor = { ...monitorLink, to: toPath(monitorLink.href) };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Birch Aluminum" className="h-8 sm:h-9 w-auto" />
          </Link>
          <Link
            to={monitor.to}
            className="hidden md:inline-block text-minimal !font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            {monitor.label}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <a href="/#inquiry" className="bg-brand text-primary font-bold uppercase tracking-wider text-[11px] px-3 py-2">
            Request Info
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
                className={`text-minimal !font-bold transition-colors ${
                  link.highlight
                    ? "text-foreground hover:opacity-80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-5 py-2 flex flex-col">
            {[monitor, ...navLinks].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-3.5 border-b border-border text-sm uppercase tracking-wider ${
                  location.pathname === link.to ? "text-foreground font-bold" : "text-muted-foreground font-semibold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#inquiry"
              onClick={() => setOpen(false)}
              className="my-4 bg-brand text-primary text-center font-bold uppercase tracking-wider text-sm py-3.5"
            >
              Request Info
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
