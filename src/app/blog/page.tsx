import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog - Zyene',
  description: 'Insights and updates from Zyene on AEO, SEO, content marketing, and growth.',
  canonical: '/blog',
  ogImage: '/og-resources.jpg'
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 mb-10">Insights and updates from the Zyene team.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AEO</h3>
              <p className="text-gray-600">Get cited in AI search and stay ahead of competitors.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Content Marketing</h3>
              <p className="text-gray-600">Research-backed content that converts.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-gray-600">Build organic traffic with sustainable growth strategies.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
