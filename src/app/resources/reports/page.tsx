import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Industry Reports - Zyene',
  description: 'Benchmarks and industry research from Zyene.',
  canonical: '/resources/reports',
  ogImage: '/og-resources.jpg'
});

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Industry Reports</h1>
          <p className="text-xl text-gray-600 mb-10">Benchmarks and research.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AEO Benchmarks</h3>
              <p className="text-gray-600">What drives citations across AI search engines.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">SEO Benchmarks</h3>
              <p className="text-gray-600">Organic traffic and ranking factors in modern search.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Content Benchmarks</h3>
              <p className="text-gray-600">Conversion and distribution insights from the field.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
