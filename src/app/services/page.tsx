import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Services - Zyene Marketing Agency",
  description: "Discover Zyene's full suite of marketing services: Answer Engine Optimization, SEO, content marketing, email marketing, and strategic distribution that drives real results.",
  canonical: "/services",
  ogImage: "/og-services.jpg"
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Services That Actually Drive Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No fluff, no vanity metrics. Just proven strategies that fill your pipeline 
              and drive measurable revenue for your business.
            </p>
            <Button href="/get-proposal" variant="primary" size="lg">
              Get Your Custom Strategy
            </Button>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Core Services
            </h2>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Answer Engine Optimization (AEO)',
                  description: 'Dominate AI search results and get cited in ChatGPT, Perplexity, Google AI Overviews, and Gemini before your competitors know what hit them.',
                  gradient: 'from-blue-500 to-blue-600',
                  features: [
                    'AI visibility audits across all major platforms',
                    'Strategic citation acquisition',
                    'Content optimization for AI models',
                    'Brand mention monitoring',
                    'Competitive AI positioning'
                  ],
                  href: '/services/aeo'
                },
                {
                  title: 'Research-Driven Content Marketing',
                  description: 'Create content that ranks, influences pipeline, and drives conversions. From benchmark reports to SEO-optimized articles.',
                  gradient: 'from-green-500 to-green-600',
                  features: [
                    'Survey-driven benchmark reports',
                    'SEO-optimized blog content',
                    'Thought leadership pieces',
                    'Case studies and white papers',
                    'Content distribution strategy'
                  ],
                  href: '/services/content-marketing'
                },
                {
                  title: 'Email Marketing That Converts',
                  description: 'Achieve a 14% lift in sales with campaigns that engage, nurture, and convert subscribers into customers.',
                  gradient: 'from-purple-500 to-purple-600',
                  features: [
                    'Welcome sequence optimization',
                    'Nurture campaign design',
                    'Lead segmentation strategy',
                    'A/B testing and optimization',
                    'Performance analytics'
                  ],
                  href: '/services/email-marketing'
                },
                {
                  title: 'SEO That Actually Works',
                  description: 'Get found on Google and beyond. We combine technical SEO, content strategy, and link acquisition to drive qualified organic traffic.',
                  gradient: 'from-orange-500 to-orange-600',
                  features: [
                    'Technical SEO audits',
                    'Keyword strategy and research',
                    'On-page optimization',
                    'Link building campaigns',
                    'Local SEO optimization'
                  ],
                  href: '/services/seo'
                }
              ].map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href={service.href} variant="outline">
                      Learn More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              The Zyene Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'DISCOVER',
                  description: 'We dive deep into your business, market, and competitors to uncover opportunities and validate content-market fit.'
                },
                {
                  step: '2',
                  title: 'STRATEGIZE',
                  description: 'We build a comprehensive 12-month roadmap prioritizing high-impact initiatives that drive pipeline.'
                },
                {
                  step: '3',
                  title: 'EXECUTE',
                  description: 'Our team creates and implements campaigns, content, and optimizations with relentless attention to detail.'
                },
                {
                  step: '4',
                  title: 'OPTIMIZE',
                  description: 'We monitor, analyze, and continuously improve everything we do to ensure maximum ROI.'
                }
              ].map((phase, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Flexible Engagement Models
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Project-Based</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for specific initiatives with clear scope and deliverables.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Fixed pricing</li>
                  <li>• Defined timeline</li>
                  <li>• Specific deliverables</li>
                  <li>• Best for one-off projects</li>
                </ul>
                <Button href="/get-proposal" variant="outline" className="w-full">
                  Get Project Quote
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Retainer Partnership</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing marketing support with strategic guidance and execution.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Monthly investment</li>
                  <li>• Flexible scope</li>
                  <li>• Priority support</li>
                  <li>• Best for growing brands</li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Discuss Retainer
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-8 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Grow Your Revenue?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your business goals. 
              No pressure, no obligation—just a strategic conversation.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Schedule Your Free Consultation
            </Button>
          </div>
        </section>

        <Footer />
      </div>
  );
}
