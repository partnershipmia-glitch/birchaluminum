import { Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold tracking-tight mb-2">BIRCH ALUMINUM</p>
            <p className="text-sm text-primary-foreground/60">
              Secondary Aluminum Production
            </p>
          </div>

          <div>
            <p className="text-minimal text-primary-foreground/60 mb-4">Contact</p>
            <p className="font-medium mb-1">Alex Bereza</p>
            <a
              href="mailto:birchfamilyllcfl@gmail.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-2"
            >
              <Mail className="w-3.5 h-3.5" />
              birchfamilyllcfl@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alex-bereza-6394b6357/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-2"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/alex_nomore7?igsh=aW5ibnJ2N3Jwem0w&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
          </div>

          <div>
            <p className="text-minimal text-primary-foreground/60 mb-4">Company</p>
            <p className="text-sm text-primary-foreground/70">Birch Aluminum</p>
            <p className="text-sm text-primary-foreground/70">Decatur, Alabama</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Birch Aluminum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
