import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Counter from '@/components/ui/Counter';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Content Marketing Services - Zyene",
  description: "Drive pipeline with research-driven content marketing. From benchmark reports to SEO-optimized articles, we create content that ranks and converts. Contact for enterprise pricing.",
  canonical: "/services/content-marketing",
  ogImage: "/og-content-marketing.jpg"
});

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Content Marketing That Converts
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're putting "Marketing" back into "Content Marketing." Research-backed strategies, conversion-focused creation, and distribution that actually drives pipeline.
          </p>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={114} suffix="%" />
              </div>
              <p className="text-sm text-gray-600">Backlink acquisition rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={10} suffix="X" />
              </div>
              <p className="text-sm text-gray-600">Organic traffic growth</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">💰</div>
              <p className="text-sm text-gray-600">Content that influences real revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Most Content Marketing Is Expensive Blogging
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">You're publishing content that:</h3>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-red-500">
                  <p className="flex items-start"><span className="text-red-500 mr-2">❌</span> Gets views but no conversions</p>
                </Card>
                <Card className="p-6 border-l-4 border-red-500">
                  <p className="flex items-start"><span className="text-red-500 mr-2">❌</span> Ranks but doesn't drive pipeline</p>
                </Card>
                <Card className="p-6 border-l-4 border-red-500">
                  <p className="flex items-start"><span className="text-red-500 mr-2">❌</span> Costs money without ROI proof</p>
                </Card>
                <Card className="p-6 border-l-4 border-red-500">
                  <p className="flex items-start"><span className="text-red-500 mr-2">❌</span> Dies on your blog with zero distribution</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Zyene creates content that:</h3>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-green-500">
                  <p className="flex items-start"><span className="text-green-500 mr-2">✓</span> Captures qualified leads at every funnel stage</p>
                </Card>
                <Card className="p-6 border-l-4 border-green-500">
                  <p className="flex items-start"><span className="text-green-500 mr-2">✓</span> Influences real pipeline and revenue</p>
                </Card>
                <Card className="p-6 border-l-4 border-green-500">
                  <p className="flex items-start"><span className="text-green-500 mr-2">✓</span> Earns backlinks and authority</p>
                </Card>
                <Card className="p-6 border-l-4 border-green-500">
                  <p className="flex items-start"><span className="text-green-500 mr-2">✓</span> Gets strategically distributed for maximum reach</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Approach */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Our Content Marketing Engine</h2>
          
          <div className="space-y-12">
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">RESEARCH</h3>
                  <p className="text-gray-600 mb-4">Uncover content-market fit for your brand</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Study your customers (reviews, calls, surveys)</li>
                    <li>• Competitive content analysis</li>
                    <li>• Keyword & SERP research</li>
                    <li>• Community listening</li>
                    <li>• Channel validation</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">CREATE</h3>
                  <p className="text-gray-600 mb-4">Content that ranks, influences, and converts</p>
                  <p className="text-gray-700 mb-3">What we create:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                    <li>• Long-form blog posts</li>
                    <li>• Comparison pages</li>
                    <li>• Landing pages</li>
                    <li>• White papers</li>
                    <li>• Benchmark reports</li>
                    <li>• Email sequences</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">DISTRIBUTE</h3>
                  <p className="text-gray-600 mb-4">Amplify every asset you create</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Strategic backlink acquisition</li>
                    <li>• Reddit community engagement</li>
                    <li>• LinkedIn thought leadership</li>
                    <li>• Content repurposing</li>
                    <li>• Partner & influencer outreach</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">OPTIMIZE</h3>
                  <p className="text-gray-600 mb-4">Turn old content into revenue-driving assets</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Search intent realignment</li>
                    <li>• Conversion element testing</li>
                    <li>• Technical SEO improvements</li>
                    <li>• Content freshness updates</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Content Marketing Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">STARTUP</h3>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>
              <p className="text-gray-600 mb-6">Perfect for early-stage companies</p>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• 4 blog posts/month</li>
                <li>• Keyword research</li>
                <li>• Basic distribution</li>
                <li>• Monthly reporting</li>
              </ul>
              <Button href="/get-proposal" variant="outline" className="w-full">
                Get Proposal
              </Button>
            </Card>

            <Card className="p-8 text-center border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4">GROWTH</h3>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>
              <p className="text-gray-600 mb-6">Ideal for scaling companies</p>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• 8 blog posts/month</li>
                <li>• 1 white paper/quarter</li>
                <li>• Backlink acquisition</li>
                <li>• Reddit engagement</li>
                <li>• Content optimization</li>
              </ul>
              <Button href="/get-proposal" variant="primary" className="w-full">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">ENTERPRISE</h3>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Enterprise Pricing</div>
              <p className="text-gray-600 mb-6">For category leaders</p>
              <ul className="space-y-3 text-left text-gray-600 mb-8">
                <li>• 12 blog posts/month</li>
                <li>• 1 benchmark report/quarter</li>
                <li>• Aggressive distribution</li>
                <li>• Dedicated strategist</li>
                <li>• Unlimited optimization</li>
              </ul>
              <Button href="/get-proposal" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}
