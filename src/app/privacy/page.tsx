import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { generateSEOMetadata } from '@/components/seo/SEOMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy - Zyene",
  description: "Zyene's Privacy Policy - Learn how we collect, use, and protect your personal information when you use our marketing services and website.",
  canonical: "/privacy",
  ogImage: "/og-privacy.jpg"
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 16, 2024";

  return (
    <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-32 pb-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <p className="text-gray-600 mb-8">
              At Zyene, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our services.
            </p>
            
            <p className="text-sm text-gray-500 mb-12">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-12">
              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Information You Provide</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact information (name, email, phone, company)</li>
                      <li>Business information (website, industry, company size)</li>
                      <li>Marketing preferences and interests</li>
                      <li>Communication with our team</li>
                      <li>Form submissions and inquiries</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Automatically Collect</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and geolocation data</li>
                      <li>Browser type and operating system</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Provide and improve our marketing services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant marketing communications (with your consent)</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Develop new services and features</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraudulent activities and ensure security</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website and services</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Affiliates:</strong> With our corporate affiliates for consistent service delivery</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Personalize your experience</li>
                  <li>Provide targeted advertising (with your consent)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Your Privacy Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Restriction:</strong> Limit how we use your information</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at privacy@zyene.com.
                </p>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. International Data Transfers
                </h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your own. We ensure 
                  appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-gray-600">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                  personal information from children. If we become aware of such collection, we will take steps to delete it promptly.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new policy on this page and updating the "Last updated" date. Your continued use of our services 
                  after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> privacy@zyene.com<br />
                    <strong>Website:</strong> https://zyene.com<br />
                    <strong>Phone:</strong> Contact information available on our website
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
