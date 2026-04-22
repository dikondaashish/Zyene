import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/voice", label: "Zentraic AI" },
    { href: "https://zyenereviews.com", label: "Zyene Reviews", external: true },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#marketing", label: "Digital Marketing" },
    { href: "/services#webdev", label: "Web & App Development" },
    { href: "/services#crm", label: "CRM & Automation" },
    { href: "/services#ai", label: "AI Solutions" },
  ],
};

const socialLinks = [
  {
    href: "https://www.facebook.com/share/17xwRYPuyo/?mibextid=wwXIfr",
    icon: Facebook,
    label: "Zyene on Facebook",
  },
  {
    href: "https://www.linkedin.com/company/zyene/posts/?feedView=all",
    icon: Linkedin,
    label: "Zyene on LinkedIn",
  },
  {
    href: "https://www.instagram.com/zyene_inc/",
    icon: Instagram,
    label: "Zyene on Instagram",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 md:mt-32 bg-muted border-t border-border">
      <div className="container pt-32 pb-16">
        <div className="h-24" aria-hidden="true" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-start mb-2 text-4xl leading-none font-bold font-brandmark text-foreground hover:text-brand transition-colors"
              aria-label="Zyene home"
            >
              <span className="font-brandmark">Zyene</span>
              <sup className="ml-1 text-xs leading-none font-semibold font-brandmark">™</sup>
            </Link>
            <p className="text-sm tracking-[0.12em] text-muted-foreground mb-4 font-brandmark">
              Growth Powered by Intelligence
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Marketing systems, CRM automation, and AI tools for businesses that want to scale.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-accent transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@zyene.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>support@zyene.com</span>
                </a>
              </li>
              <li>
                <address className="not-italic text-muted-foreground leading-relaxed">
                  28 Geary St Ste 650 #1892<br />
                  San Francisco, CA 94108
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 pb-4 md:pb-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Zyene, Inc. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
