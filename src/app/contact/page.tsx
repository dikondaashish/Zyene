"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Send, Calendar, Clock, ArrowRight } from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/share/17xwRYPuyo/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/zyene/posts/?feedView=all", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/zyene_inc/", icon: Instagram, label: "Instagram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
        console.log("Contact form submitted successfully");
      } else {
        console.error("Submission failed:", result.message);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again later.");
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
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions? We&apos;d love to hear from you. Get in touch and 
              let&apos;s start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a question about our services, pricing, or 
              anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-foreground" />
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
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    28 Geary St Ste 650 #1892, San Francisco, CA 94108
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card hover={false} className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Send className="h-8 w-8 text-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* Schedule Meeting */}
      <Section dark id="schedule">
        <SectionHeader
          title="Schedule a Meeting"
          subtitle="Book a free 30-minute consultation to discuss your growth goals."
        />

        <div className="max-w-2xl mx-auto">
          <Card hover={false} className="p-8">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">Strategic growth discussion</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>30 min</span>
              </div>
            </div>

            <div className="text-center py-8">
              <p className="text-muted-foreground mb-8">
                Select a time that works best for you on our calendar.
              </p>
              <a 
                href="https://calendly.com/zyene-support/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="lg">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}


