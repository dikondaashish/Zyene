import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Email Marketing Services - Zyene",
  description: "Achieve a 14% lift in sales with email marketing that converts. From welcome sequences to nurture campaigns, we create strategies that drive revenue. Contact for enterprise pricing.",
  canonical: "/services/email-marketing",
  ogImage: "/og-email-marketing.jpg"
});

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Email Marketing That Drives a 14% Lift in Sales
          </h1>
          <p className="text-xl text-gray-600">
            Strategic campaigns that engage subscribers, nurture leads, and convert customers.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '✉️', title: 'Campaign Strategy', items: ['Audience segmentation', 'Journey mapping', 'A/B testing plan'] },
              { icon: '✍️', title: 'Email Copywriting', items: ['Engaging subject lines', 'Conversion-focused copy', 'Clear CTAs'] },
              { icon: '🎨', title: 'Design & Templates', items: ['Custom templates', 'Responsive design', 'Brand consistency'] },
              { icon: '📊', title: 'List Management', items: ['Segmentation', 'Growth strategies', 'Deliverability'] },
              { icon: '📈', title: 'Analytics', items: ['Open rate tracking', 'Click-through analysis', 'ROI reporting'] }
            ].map((service, i) => (
              <Card key={i} className="p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Email Marketing Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['STARTER', 'GROWTH', 'SCALE'].map((tier, i) => (
              <Card key={i} className={`p-8 text-center ${i === 1 ? 'border-2 border-primary' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{tier}</h3>
                <div className="text-2xl font-bold text-primary mb-6">Contact for Pricing</div>
                <Button href="/get-proposal" variant={i === 1 ? 'primary' : 'outline'} className="w-full">
                  Get Proposal
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}
