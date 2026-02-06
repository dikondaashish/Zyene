
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/share/17xwRYPuyo/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/zyene/posts/?feedView=all", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/zyene_inc/", icon: Instagram, label: "Instagram" },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Let&apos;s Start a Conversation
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you&apos;re looking to boost your digital presence, optimize your 
            marketing strategy, or explore AI solutions, we&apos;re here to help.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                <a
                  href="mailto:support@zyene.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@zyene.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground max-w-[250px]">
                  28 Geary St Ste 650 #1892, San Francisco, CA 94108
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA card */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Grow?
          </h3>
          <p className="text-muted-foreground mb-8">
            Schedule a free consultation and discover how Zyene can transform 
            your digital presence and drive measurable results.
          </p>
          <a 
            href="https://calendly.com/zyene-support/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Schedule a Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
