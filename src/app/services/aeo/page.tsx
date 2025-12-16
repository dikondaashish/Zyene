import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Counter from '@/components/ui/Counter';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Answer Engine Optimization (AEO) Services - Zyene",
  description: "Dominate AI search results with Zyene's AEO services. Get cited in ChatGPT, Perplexity, Google AI Overviews, and Gemini before your competitors. Contact for enterprise pricing.",
  canonical: "/services/aeo",
  ogImage: "/og-aeo.jpg"
});

export default function AEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Answer Engine Optimization (AEO):<br />
            Own AI Search Before Your Competitors Do
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get cited in ChatGPT, Perplexity, Google AI Overviews, and Gemini. While your competitors focus on outdated SEO, we'll make you the default answer in AI search.
          </p>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={586} suffix="%" />
              </div>
              <p className="text-sm text-gray-600">Avg increase in AI-source traffic</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={94} suffix="K+" />
              </div>
              <p className="text-sm text-gray-600">AI citations secured</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={49} suffix="%" />
              </div>
              <p className="text-sm text-gray-600">Shoppers trust AI-mentioned brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI Search Changed Everything. Your Strategy Hasn't.
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-red-50 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-6">OLD SEO (What you're probably still doing):</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-red-500 mr-2">❌</span> Optimize for Google's 10 blue links</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">❌</span> Focus only on website traffic</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">❌</span> Ignore how AI tools consume content</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">❌</span> Miss 90M+ AI search users</li>
              </ul>
            </Card>

            <Card className="p-8 bg-green-50 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-6">NEW REALITY (Answer Engine Optimization):</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> AI gives one answer, not 10 options</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Citations matter more than rankings</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Authority signals determine visibility</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> First movers win massive advantage</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-yellow-50 border-2 border-yellow-500">
            <p className="text-xl font-semibold text-center">
              ⚠️ AI search users projected to jump from 13M today to 90M by 2027
            </p>
          </Card>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-4">
              Here's the brutal truth: AI search doesn't show ten blue links. It features just a few trusted brands. If your brand isn't one of them, you're invisible.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              While you were optimizing title tags, your competitors started optimizing for ChatGPT. Guess who's winning?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8">How Zyene's AEO Services Work</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We combine SEO fundamentals with a deep understanding of how AI tools read, rank, and remix content.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">AI Visibility Audit</h3>
              <p className="text-gray-600 mb-4">
                We scan ChatGPT, Perplexity, Google AI Overviews, and Gemini to see exactly where AI mentions—or misses—your brand.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Current AI visibility score</li>
                <li>• Competitor comparison</li>
                <li>• Citation gaps</li>
                <li>• Quick-win opportunities</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">AI Search Strategy</h3>
              <p className="text-gray-600 mb-4">
                We build your custom AEO roadmap with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Priority prompts to target</li>
                <li>• Content optimization plan</li>
                <li>• Citation acquisition strategy</li>
                <li>• Timeline and success metrics</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-4">Micro Content Refreshes</h3>
              <p className="text-gray-600 mb-4">
                We re-align your existing content with answer engine algorithms:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Structural optimizations</li>
                <li>• Authority signals enhancement</li>
                <li>• Citation-worthy formatting</li>
                <li>• Answer-focused rewrites</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">New Content Creation</h3>
              <p className="text-gray-600 mb-4">
                We create net-new content designed specifically for AI visibility:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Answer-focused blog posts</li>
                <li>• FAQ pages optimized for prompts</li>
                <li>• Comparison content</li>
                <li>• Expert roundups</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4">Strategic Citation Outreach</h3>
              <p className="text-gray-600 mb-4">
                We increase mentions in highly-cited sources through:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Targeted publisher outreach</li>
                <li>• Expert contribution opportunities</li>
                <li>• Data partnerships</li>
                <li>• Press relationship building</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4">Reddit Engagement</h3>
              <p className="text-gray-600 mb-4">
                AI tools heavily cite Reddit. We grow your presence by:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Identifying relevant communities</li>
                <li>• Contributing valuable insights</li>
                <li>• Building authentic engagement</li>
                <li>• Avoiding spammy tactics</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Real Results from Answer Engine Optimization
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">12x</div>
              <h3 className="text-2xl font-bold mb-4">Industry: B2B SaaS</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Challenge:</strong> Zero visibility in AI search</p>
                <p><strong>Solution:</strong> 6-month AEO program</p>
                <p><strong>Results:</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• 12x increase in ChatGPT mentions</li>
                  <li>• Appeared in 73% of target prompts</li>
                  <li>• 210% increase in demo requests</li>
                  <li>• Became category-defining brand in AI answers</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">1,200%</div>
              <h3 className="text-2xl font-bold mb-4">Industry: E-commerce</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Challenge:</strong> Competitors dominating AI shopping recommendations</p>
                <p><strong>Solution:</strong> Strategic citation + Reddit engagement</p>
                <p><strong>Results:</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• 1,200% jump in AI-source traffic</li>
                  <li>• #1 mentioned brand for product category</li>
                  <li>• 43% increase in organic conversions</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button href="/case-studies" variant="primary" size="lg">
              See All Case Studies →
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">AEO Services Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">AEO AUDIT</h3>
              <p className="text-gray-600 mb-6">One-time visibility assessment</p>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• Complete AI visibility audit</li>
                <li>• Competitor analysis</li>
                <li>• Strategic recommendations</li>
                <li>• 90-day roadmap</li>
              </ul>
              <Button href="/get-proposal" variant="outline" className="w-full">
                Get Proposal
              </Button>
            </Card>

            <Card className="p-8 text-center border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4">AEO FOUNDATION</h3>
              <p className="text-gray-600 mb-6">3-month engagement</p>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• Everything in Audit, plus:</li>
                <li>• Content optimization (10 pieces/month)</li>
                <li>• Citation outreach campaign</li>
                <li>• Reddit engagement strategy</li>
                <li>• Monthly reporting</li>
              </ul>
              <Button href="/get-proposal" variant="primary" className="w-full">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">AEO DOMINANCE</h3>
              <p className="text-gray-600 mb-6">6-month engagement</p>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Enterprise Pricing</div>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• Everything in Foundation, plus:</li>
                <li>• New content creation (4 pieces/month)</li>
                <li>• Aggressive citation acquisition</li>
                <li>• Multi-platform distribution</li>
                <li>• Dedicated AEO strategist</li>
              </ul>
              <Button href="/get-proposal" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free AI Visibility Audit</h2>
          <p className="text-xl mb-8 opacity-90">
            See exactly where AI mentions—or ignores—your brand. We'll run a complimentary audit and show you the opportunities you're missing.
          </p>
          <Button href="/get-proposal" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get My Free Audit →
          </Button>
          <p className="mt-6 text-sm opacity-75">
            🔒 No commitment. No sales pitch. Just data.
          </p>
        </div>
      </section>

      <Footer />
      </div>
  );
}
