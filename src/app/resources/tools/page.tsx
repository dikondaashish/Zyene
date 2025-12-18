import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Marketing Tools - Zyene',
  description: 'Free calculators and tools by Zyene.',
  canonical: '/resources/tools',
  ogImage: '/og-resources.jpg'
});

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Marketing Tools</h1>
          <p className="text-xl text-gray-600 mb-10">Free calculators &amp; tools.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AEO Readiness Check</h3>
              <p className="text-gray-600">Quick checklist to assess AI-search readiness.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">SEO Opportunity Finder</h3>
              <p className="text-gray-600">Identify high-impact keywords and content gaps.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Content Brief Generator</h3>
              <p className="text-gray-600">A simple structure for research-backed briefs.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
