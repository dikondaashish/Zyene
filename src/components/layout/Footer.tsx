import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#seo", label: "SEO & AEO" },
    { href: "/services#smm", label: "Social Media Marketing" },
    { href: "/services#content", label: "Content Marketing" },
    { href: "/services#email", label: "Email Marketing" },
    { href: "/services#webdev", label: "Web Design & Development" },
  ],
};

const socialLinks = [
  { href: "https://www.facebook.com/share/17xwRYPuyo/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/zyene/posts/?feedView=all", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/zyene_inc/", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">Zyene</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Strategy-first digital marketing and AI solutions for measurable growth.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-accent transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
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
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@zyene.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>support@zyene.com</span>
                </a>
              </li>
              <li className="text-muted-foreground">
                28 Geary St Ste 650 #1892, San Francisco, CA 94108
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zyene. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
