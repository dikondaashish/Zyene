'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Resources & Blog - Zyene Marketing Insights",
  description: "Discover marketing insights, case studies, and strategies from the Zyene team. Learn about AEO, SEO, content marketing, and email marketing best practices.",
  canonical: "/resources",
  ogImage: "/og-resources.jpg"
});

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const articles = [
    {
      category: 'AEO',
      title: 'The Complete Guide to Answer Engine Optimization (2025)',
      excerpt: 'AI search is reshaping how buyers discover businesses. Here\'s everything you need to know about optimizing for ChatGPT, Perplexity, and Google AI Overviews...',
      date: 'March 15, 2024',
      readTime: '12 min read'
    },
    {
      category: 'Content Marketing',
      title: 'How to Create Content That Actually Drives Pipeline',
      excerpt: 'Most content gets views but no conversions. Learn the research-backed approach to creating content that influences revenue...',
      date: 'March 10, 2024',
      readTime: '8 min read'
    },
    {
      category: 'SEO',
      title: 'SEO in the Age of AI: What Changed and What Didn\'t',
      excerpt: 'AI is transforming search, but some SEO fundamentals remain critical. Here\'s what you need to know...',
      date: 'March 5, 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Marketing Insights That Actually Matter
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Strategy guides, industry research, and tactical advice from the Zyene team. No fluff. No recycled content. Just insights that drive results.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-transform">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📅 {article.date}</span>
                  <span>⏱️ {article.readTime}</span>
                </div>
                <Button href="#" variant="outline" size="sm">
                  Read Article →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">📬 Get Weekly Marketing Insights</h3>
            <p className="text-gray-600 mb-6">
              Join 5,000+ marketers getting tactical strategies delivered every Tuesday.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
          </Card>
        </div>
      </section>

      <Footer />
      </div>
  );
}
