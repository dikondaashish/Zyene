import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Guides & White Papers - Zyene',
  description: 'Deep-dive guides and white papers from Zyene.',
  canonical: '/resources/guides',
  ogImage: '/og-resources.jpg'
});

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Guides &amp; White Papers</h1>
          <p className="text-xl text-gray-600 mb-10">Playbooks, frameworks, and deep dives.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AEO Playbooks</h3>
              <p className="text-gray-600">Frameworks to win citations across AI search experiences.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Content Systems</h3>
              <p className="text-gray-600">Research-driven content programs that scale.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Growth Frameworks</h3>
              <p className="text-gray-600">Processes to compound organic traffic and pipeline.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
