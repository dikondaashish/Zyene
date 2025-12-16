import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "SEO Services - Zyene",
  description: "Get found on Google with SEO that actually works. We combine technical SEO, content strategy, and link acquisition to drive qualified organic traffic. Contact for enterprise pricing.",
  canonical: "/services/seo",
  ogImage: "/og-seo.jpg"
});

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            SEO Services That Drive Qualified Traffic
          </h1>
          <p className="text-xl text-gray-600">
            Get found on Google and beyond. We combine technical SEO, content strategy, and strategic link building.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔧', title: 'Technical SEO', items: ['Site architecture', 'Page speed', 'Mobile optimization', 'Schema markup'] },
              { icon: '🔍', title: 'Keyword Research', items: ['Intent-based targeting', 'Competitor analysis', 'SERP opportunities'] },
              { icon: '📝', title: 'On-Page Optimization', items: ['Title & meta tags', 'Header structure', 'Internal linking'] },
              { icon: '🔗', title: 'Link Building', items: ['Strategic backlinks', 'Digital PR', 'Guest posting'] },
              { icon: '📊', title: 'Content Refreshes', items: ['Update old content', 'Improve intent alignment', 'Add conversions'] },
              { icon: '📍', title: 'Local SEO', items: ['Google Business Profile', 'Local citations', 'Review management'] }
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
          <h2 className="text-4xl font-bold text-center mb-16">SEO Services Pricing</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['LOCAL SEO', 'REGIONAL SEO', 'NATIONAL SEO', 'ENTERPRISE SEO'].map((tier, i) => (
              <Card key={i} className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{tier}</h3>
                <div className="text-2xl font-bold text-primary mb-6">Contact for Pricing</div>
                <Button href="/get-proposal" variant="outline" className="w-full">Get Proposal</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}
