import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const monitorLink = { label: "Industry Monitor", href: "/industry-monitor" };

const sectionLinks = [
  { label: "Opportunity", href: "/aluminum-opportunity" },
  { label: "Why Birch", href: "/technology" },
  { label: "For Investors", href: "/investors", highlight: true },
];

const Navigation = () => {
  const location = useLocation();
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

      <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto grid grid-cols-2 divide-x divide-y divide-border border-x border-border px-0">
            {[
              { link: monitor, render: (l: typeof monitor) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="flex min-h-11 items-center justify-center px-2 py-3 text-center text-[11px] font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ) },
            ].map(({ link, render }) => render(link))}
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
                  className={`flex min-h-11 items-center justify-center px-2 py-3 text-center text-[11px] font-semibold uppercase transition-colors ${
                    link.highlight
                      ? "text-foreground !font-bold hover:opacity-80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
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
