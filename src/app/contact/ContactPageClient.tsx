"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Send,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

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

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setErrorMessage(
          result.message ||
            "Something went wrong sending your message. Please try again or email us directly at support@zyene.com."
        );
      }
    } catch {
      setErrorMessage(
        "Unable to send your message right now. Please email us directly at support@zyene.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Contact Info & Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a specific project in mind or want to understand
              how Zyene can help your business, we respond to every inquiry
              within one business day.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:support@zyene.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    support@zyene.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office</h3>
                  <address className="not-italic text-muted-foreground">
                    28 Geary St Ste 650 #1892<br />
                    San Francisco, CA 94108
                  </address>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card hover={false} className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle2
                    className="h-8 w-8 text-success"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Received
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll reply within one business day. If it&apos;s urgent,
                  email us directly at{" "}
                  <a
                    href="mailto:support@zyene.com"
                    className="text-foreground underline underline-offset-2"
                  >
                    support@zyene.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="form-input"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="form-input"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company
                    <span className="text-muted-foreground ml-1 text-xs font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="form-input"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us what you're working on and what you need help with."
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="flex items-start space-x-3 p-4 rounded-lg bg-error/10 border border-error/30 text-sm text-foreground"
                  >
                    <AlertCircle
                      className="h-5 w-5 text-error flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* Schedule Meeting */}
      <Section dark id="schedule">
        <SectionHeader
          title="Prefer to Talk First?"
          subtitle="Book a free 30-minute call and we'll walk through exactly what Zyene can do for your business."
        />

        <div className="max-w-2xl mx-auto">
          <Card hover={false} className="overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Free Consultation</p>
                  <p className="text-sm text-muted-foreground">
                    with a Zyene growth strategist
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>30 min</span>
              </div>
            </div>

            <div className="px-8 py-8 text-center">
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Pick a time on our calendar. We&apos;ll review your current setup and
                tell you plainly what we can help with and what we can&apos;t.
              </p>
              <a
                href="https://calendly.com/zyene-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consultation on Calendly (opens in new tab)"
              >
                <Button variant="primary" size="lg">
                  Choose a Time on Calendly
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
