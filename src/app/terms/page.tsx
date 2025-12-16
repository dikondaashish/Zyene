import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Terms of Service - Zyene",
  description: "Zyene's Terms of Service - Read the terms and conditions that govern your use of our marketing services and website.",
  canonical: "/terms",
  ogImage: "/og-terms.jpg"
});

export default function TermsOfServicePage() {
  const lastUpdated = "December 16, 2024";

  return (
    <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-32 pb-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <p className="text-gray-600 mb-8">
              These Terms of Service ("Terms") govern your use of Zyene's website and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <p className="text-sm text-gray-500 mb-12">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using Zyene's website and services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </section>

              {/* Description of Service */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Description of Service
                </h2>
                <p className="text-gray-600 mb-4">
                  Zyene provides marketing services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Answer Engine Optimization (AEO)</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Marketing Strategy and Consulting</li>
                  <li>Analytics and Reporting</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              {/* Client Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-gray-600 mb-4">
                  As a client of Zyene, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Provide accurate and complete information about your business</li>
                  <li>Grant necessary access to required systems and platforms</li>
                  <li>Provide timely feedback and approvals</li>
                  <li>Make payments as agreed in your service agreement</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not engage in any illegal or unethical marketing practices</li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Project-based services require 50% upfront payment</li>
                  <li>Retainer services are billed monthly in advance</li>
                  <li>All invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur interest at 1.5% per month</li>
                  <li>Additional work requires written approval and may incur additional charges</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  Upon full payment, clients own the deliverables created specifically for them. However:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Zyene retains rights to our methodologies, processes, and tools</li>
                  <li>We reserve the right to showcase work in our portfolio (with client permission)</li>
                  <li>Third-party licenses remain with their respective owners</li>
                  <li>Client must ensure they have rights to any materials they provide</li>
                </ul>
              </section>

              {/* Confidentiality */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Confidentiality
                </h2>
                <p className="text-gray-600">
                  Both parties agree to keep confidential all proprietary information shared during the course 
                  of our engagement. This includes business strategies, financial information, customer data, 
                  and any materials marked as confidential. This obligation survives the termination of our agreement.
                </p>
              </section>

              {/* Service Level and Warranties */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Service Level and Warranties
                </h2>
                <p className="text-gray-600 mb-4">
                  We strive to provide exceptional service and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Services will be performed in a professional manner</li>
                  <li>Deliverables will meet the specifications outlined in your agreement</li>
                  <li>We will respond to inquiries within 24 business hours</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We cannot guarantee specific results such as rankings, traffic numbers, or conversion rates, 
                  as these depend on numerous factors beyond our control.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  To the fullest extent permitted by law, Zyene shall not be liable for any indirect, incidental, 
                  special, or consequential damages resulting from your use of our services. Our total liability 
                  for any claim shall not exceed the amount paid for services in the three months preceding the claim.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Termination
                </h2>
                <p className="text-gray-600 mb-4">
                  Either party may terminate our agreement:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>With 30 days written notice for retainer agreements</li>
                  <li>For material breach if not cured within 15 days</li>
                  <li>Immediately for non-payment or illegal activities</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Upon termination, you will pay for all services rendered through the termination date.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Indemnification
                </h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold Zyene harmless from any claims, damages, or expenses arising 
                  from your use of our services, your breach of these terms, or your violation of any rights of another.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Governing Law
                </h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                  where Zyene is headquartered, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Dispute Resolution
                </h2>
                <p className="text-gray-600">
                  Any disputes arising from these Terms or our services will be resolved through good faith 
                  negotiations. If unresolved, disputes will be resolved through binding arbitration in accordance 
                  with the rules of the relevant arbitration association.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting on our website. Your continued use of our services constitutes acceptance of the modified Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> legal@zyene.com<br />
                    <strong>Website:</strong> https://zyene.com<br />
                    <strong>Phone:</strong> Available on our contact page
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
