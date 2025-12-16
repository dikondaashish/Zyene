'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Zyene - Get in Touch",
  description: "Contact Zyene for a free strategy session. Ready to dominate your category? Book a call or send us a message. We typically respond within 24 hours.",
  canonical: "/contact",
  ogImage: "/og-contact.jpg"
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    interest: '',
    challenge: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        interest: '',
        challenge: '',
        budget: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    { value: 'aeo', label: 'Answer Engine Optimization (AEO)' },
    { value: 'content', label: 'Content Marketing' },
    { value: 'seo', label: 'SEO Services' },
    { value: 'email', label: 'Email Marketing' },
    { value: 'full-service', label: 'Full-Service Marketing' },
    { value: 'not-sure', label: 'Not Sure - Need Guidance' }
  ];

  const budgetOptions = [
    { value: 'contact', label: 'Contact for Enterprise Pricing' },
    { value: 'project', label: 'Project-based' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something Remarkable
          </h1>
          <p className="text-xl text-gray-600">
            Ready to dominate your category? Book a free strategy session or send us a message. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      We'll get back to you within 24 hours (usually much faster).
                    </p>
                    <Button onClick={() => setSubmitStatus('idle')} variant="primary">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Your Name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    
                    <Input
                      label="Company Name"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />
                    
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@acme.com"
                    />
                    
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                    
                    <Input
                      label="Website URL"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://acme.com"
                    />
                    
                    <Input
                      label="What are you interested in?"
                      name="interest"
                      type="select"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      options={interestOptions}
                    />
                    
                    <Input
                      label="What's your biggest marketing challenge?"
                      name="challenge"
                      type="textarea"
                      required
                      value={formData.challenge}
                      onChange={handleChange}
                      placeholder="Tell us about your current marketing challenges..."
                      rows={4}
                    />
                    
                    <Input
                      label="Monthly Marketing Budget"
                      name="budget"
                      type="select"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      options={budgetOptions}
                    />
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      🔒 Your information is safe. We never spam.
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">📞 Prefer to talk?</h3>
                <p className="text-gray-600 mb-4">Book a 30-minute strategy call</p>
                <Button href="/contact" variant="primary" className="w-full">
                  Schedule Call →
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">📧 Email Us Directly</h3>
                <a href="mailto:hello@zyene.com" className="text-primary hover:underline text-lg">
                  hello@zyene.com
                </a>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">📍 Location</h3>
                <p className="text-gray-600">Remote-first team</p>
                <p className="text-gray-600">Serving clients globally</p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">⏱️ Response Time</h3>
                <p className="text-gray-600">
                  We typically respond within 24 hours (usually much faster)
                </p>
              </Card>

              <div className="flex gap-4 justify-center">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTAs */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Not ready to reach out?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">Read Case Studies</h3>
              <p className="text-gray-600 mb-4">See results we've driven</p>
              <Button href="/case-studies" variant="outline" className="w-full">
                View Case Studies
              </Button>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Browse Resources</h3>
              <p className="text-gray-600 mb-4">Get free marketing insights</p>
              <Button href="/resources" variant="outline" className="w-full">
                Read Blog
              </Button>
            </Card>

            <Card className="p-8 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Get Free Audit</h3>
              <p className="text-gray-600 mb-4">See your AI visibility score</p>
              <Button href="/get-proposal" variant="outline" className="w-full">
                Get Audit
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}
