import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const sectionLinks = [
  { label: "Why Birch", href: "/technology" },
  { label: "Investors", href: "/investors" },
  { label: "Opportunity", href: "/aluminum-opportunity" },
];

const Navigation = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  const navLinks = sectionLinks.map((l) => ({
    ...l,
    to: l.href.startsWith("/") ? l.href : onHome ? l.href : `/${l.href}`,
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
        </div>
      </div>

      <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto grid grid-cols-2 divide-x divide-y divide-border border-x border-border px-0">
            {navLinks.map((link) =>
              link.to.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="flex min-h-11 items-center justify-center px-2 py-3 text-center text-[11px] font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex min-h-11 items-center justify-center px-2 py-3 text-center text-[11px] font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
      </div>
    </nav>
  );
};

export default Navigation;
