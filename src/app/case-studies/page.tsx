import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Case Studies - Zyene Marketing Results",
  description: "See how Zyene has helped businesses achieve 586% traffic increase, dominate AI search results, and drive millions in revenue. Real results from real clients.",
  canonical: "/case-studies",
  ogImage: "/og-case-studies.jpg"
});

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      stat: '586%',
      title: 'Increase in AI-Source Traffic',
      industry: 'Heavy Equipment Manufacturing',
      size: '1,000-5,000 employees',
      challenge: 'Invisible in AI search, losing market share',
      solution: 'Complete Answer Engine Optimization strategy including AI visibility audit, content optimization, citation acquisition, and Reddit engagement',
      results: ['586% increase in traffic from AI sources', 'Became #1 mentioned brand in category', '43% increase in qualified leads', 'ROI: 890%']
    },
    {
      stat: '114%',
      title: 'Organic Traffic Growth',
      industry: 'B2B SaaS',
      size: '50-200 employees',
      challenge: 'Content wasn\'t driving conversions',
      solution: 'Complete content marketing overhaul with research-driven strategy',
      results: ['114% increase in organic traffic', '10x increase in qualified leads', '200% growth in blog-attributed revenue']
    },
    {
      stat: '12x',
      title: 'ChatGPT Mentions',
      industry: 'E-commerce',
      size: '200-500 employees',
      challenge: 'Zero visibility in AI search results',
      solution: '6-month AEO program with strategic citation building',
      results: ['12x increase in ChatGPT mentions', 'Appeared in 73% of target prompts', '210% increase in demo requests']
    }
  ];

  return (
    <>
      <Header />
      
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Results That Speak Louder Than Words
          </h1>
          <p className="text-xl text-gray-600">
            Real companies. Real growth. Real numbers. See how Zyene drives measurable results for ambitious brands.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="text-6xl font-bold text-primary mb-4">{study.stat}</div>
                    <p className="text-2xl font-semibold mb-4">{study.title}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Industry</p>
                        <p className="font-semibold">{study.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Challenge</p>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Solution</p>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Results</p>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can drive growth for your business.
          </p>
          <Button href="/get-proposal" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get Your Custom Proposal →
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
