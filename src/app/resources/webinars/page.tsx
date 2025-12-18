import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Webinars - Zyene',
  description: 'Live sessions and replays from the Zyene team.',
  canonical: '/resources/webinars',
  ogImage: '/og-resources.jpg'
});

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Webinars</h1>
          <p className="text-xl text-gray-600 mb-10">Sessions and replays.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AEO: Getting Cited</h3>
              <p className="text-gray-600">Tactics to become the default answer in AI search.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Content That Converts</h3>
              <p className="text-gray-600">How to build research-backed content that drives pipeline.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">SEO Growth</h3>
              <p className="text-gray-600">Organic growth strategies for modern search.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
