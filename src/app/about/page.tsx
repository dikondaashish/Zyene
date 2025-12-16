import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "About Zyene - Our Story, Mission & Values",
  description: "Learn about Zyene's journey from a startup marketing team to a full-service agency. Discover our mission to deliver measurable results through AI-powered marketing strategies.",
  canonical: "/about",
  ogImage: "/og-about.jpg"
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We're Not Your Typical Agency
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Zyene was born from a simple realization: most marketing agencies sell activity, not results. 
              We exist to change that.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Origin Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                It started with a team that had to build marketing from scratch. No budget, no agency support, 
                just the raw challenge of making a B2B startup visible in a crowded market. We tried everything—
                content marketing, SEO, email campaigns, social media.
              </p>
              <p>
                Some things worked. Many didn't. But through relentless testing and measurement, we discovered 
                what actually drives B2B growth: research-backed content, strategic distribution, and an obsession 
                with pipeline impact.
              </p>
              <p>
                Today, we bring that same scrappy, results-first approach to every client. We've been in your shoes. 
                We know what it's like to bet on marketing and need it to pay off.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Zyene Different */}
        <section className="py-20 px-4 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              What Makes Zyene Different
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Every strategy we recommend is backed by data. We analyze your market, competitors, 
                  and customer behavior to identify what actually works.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Pipeline-Focused</h3>
                <p className="text-gray-600">
                  We don't chase vanity metrics. Our strategies are designed to fill your pipeline 
                  with qualified leads that convert.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Partnership Approach</h3>
                <p className="text-gray-600">
                  We become an extension of your team. Your success is our success, and we act 
                  like it every day.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Startup DNA</h3>
                <p className="text-gray-600">
                  We move fast, test relentlessly, and optimize continuously. No bureaucracy, 
                  no delays—just results.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">AI-Forward</h3>
                <p className="text-gray-600">
                  We're ahead of the curve on AI search optimization. We help you win in 
                  ChatGPT, Perplexity, and beyond.
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our strategies have driven millions in revenue for clients. We have the 
                  case studies to prove it.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Our Core Values
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  icon: '🎯',
                  title: 'Results Over Activity',
                  description: 'We measure success by pipeline impact, not busywork. If it doesn\'t drive results, we don\'t do it.'
                },
                {
                  icon: '🧪',
                  title: 'Test Everything',
                  description: 'Assumptions are expensive. We test, measure, and optimize until we find what works for your specific market.'
                },
                {
                  icon: '🔬',
                  title: 'Research-Backed',
                  description: 'Every recommendation starts with deep research into your market, customers, and competitive landscape.'
                },
                {
                  icon: '💡',
                  title: 'Stay Curious',
                  description: 'The marketing landscape evolves constantly. We stay ahead of trends so you don\'t have to.'
                },
                {
                  icon: '🤝',
                  title: 'Radical Transparency',
                  description: 'No black boxes. You\'ll always know what we\'re doing, why we\'re doing it, and what results it\'s driving.'
                },
                {
                  icon: '🎪',
                  title: 'No Ego',
                  description: 'We\'re not here to win awards. We\'re here to help you grow. If something isn\'t working, we change it.'
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="text-5xl">{value.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                    <p className="text-lg text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-8 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work with a Team That Gets It?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's chat about your goals and how we can help you achieve them. No pressure, 
              no sales pitch—just a strategic conversation about your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule a Call
              </Button>
              <Button href="/get-proposal" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Get a Proposal
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}
