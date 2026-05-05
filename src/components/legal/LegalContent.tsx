'use client';

import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[16px] text-[#3D4145] leading-[1.7] font-normal">{children}</p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="text-[16px] text-[#3D4145] leading-[1.7]">{children}</li>
);

export default function LegalContent() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[700px] mx-auto px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >

          {/* Intro note */}
          <div className="rounded-[12px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5">
            <P>
              This Privacy Policy explains how <strong>Zyene</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, stores, and protects information you provide when visiting <strong>zyene.com</strong> or engaging our services. By using our website or services, you agree to the practices described below.
            </P>
          </div>

          {/* 1 */}
          <Section title="1. Information We Collect">
            <P>We collect information in the following ways:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li><strong>Information you give us directly.</strong> When you fill out our contact form, book a strategy call, apply for a role, or communicate with us by email, we collect your name, email address, company name, job title, phone number, and any details you include in your message.</Li>
              <Li><strong>Automatically collected information.</strong> When you visit our website we may automatically receive your IP address, browser type, operating system, referring URL, pages visited, and time spent on each page through standard server logs and analytics tools.</Li>
              <Li><strong>Cookies and similar technologies.</strong> We use cookies to operate the website, remember your preferences, and understand traffic patterns. See Section 6 for details.</Li>
              <Li><strong>Information from third-party tools.</strong> Our website uses third-party services (listed in Section 5) that may collect data in accordance with their own privacy policies.</Li>
            </ul>
          </Section>

          {/* 2 */}
          <Section title="2. How We Use Your Information">
            <P>We use the information we collect to:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Respond to your enquiries and deliver the services you have requested.</Li>
              <Li>Schedule and conduct strategy calls or discovery sessions.</Li>
              <Li>Send you service-related communications, updates, and project information.</Li>
              <Li>Send marketing content such as newsletters or case studies — only where you have given your consent, and only until you unsubscribe.</Li>
              <Li>Improve our website and services based on aggregated, anonymised usage data.</Li>
              <Li>Comply with legal obligations, enforce our agreements, and protect the rights and safety of Zyene, our clients, and the public.</Li>
            </ul>
            <P>We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.</P>
          </Section>

          {/* 3 */}
          <Section title="3. Legal Basis for Processing (GDPR)">
            <P>If you are located in the European Economic Area (EEA) or the United Kingdom, we process your personal data on the following legal bases:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li><strong>Contract performance</strong> — to fulfil services you have requested or to take pre-contractual steps at your request.</Li>
              <Li><strong>Legitimate interests</strong> — to respond to enquiries, improve our website, prevent fraud, and conduct our business operations.</Li>
              <Li><strong>Consent</strong> — for marketing communications. You may withdraw consent at any time by using the unsubscribe link in any email or by contacting us directly.</Li>
              <Li><strong>Legal obligation</strong> — where we are required to retain or disclose data by law.</Li>
            </ul>
          </Section>

          {/* 4 */}
          <Section title="4. Data Retention">
            <P>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.
            </P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Contact and enquiry records are retained for up to <strong>3 years</strong> from the date of last contact, unless an ongoing business relationship requires longer retention.</Li>
              <Li>Client project data is retained for up to <strong>5 years</strong> after project completion to meet contractual and regulatory requirements.</Li>
              <Li>Marketing consent records are retained for as long as we hold consent, and for <strong>1 year</strong> after withdrawal to demonstrate compliance.</Li>
              <Li>Website analytics data is retained in aggregated, anonymised form indefinitely.</Li>
            </ul>
            <P>When data is no longer required, it is securely deleted or anonymised.</P>
          </Section>

          {/* 5 */}
          <Section title="5. Third-Party Services and Data Sharing">
            <P>We share data with trusted third-party services that help us operate our business. Each provider processes data in accordance with its own privacy policy and applicable data protection law. The services we currently use include:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li><strong>Zoho CRM / Zoho Sheets</strong> — to manage client and prospect records.</Li>
              <Li><strong>Web3Forms</strong> — to receive and route contact form submissions.</Li>
              <Li><strong>Vercel</strong> — our website hosting and infrastructure provider.</Li>
              <Li><strong>Google Analytics / Google Tag Manager</strong> (if active) — to understand website traffic and user behaviour.</Li>
              <Li><strong>Stripe</strong> — for payment processing, if applicable.</Li>
            </ul>
            <P>We do not share your personal data with any other third party without your explicit consent, except where required by law or court order.</P>
            <P>If we ever sell or transfer any part of our business, personal data held at that time may form part of the transferred assets. We will notify affected individuals in advance wherever possible.</P>
          </Section>

          {/* 6 */}
          <Section title="6. Cookies">
            <P>Cookies are small text files stored on your device when you visit our website. We use the following types of cookies:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li><strong>Essential cookies</strong> — required for the website to function. These cannot be disabled.</Li>
              <Li><strong>Analytics cookies</strong> — help us understand how visitors use the site (pages viewed, session duration, referral source). We use this data in aggregate only.</Li>
              <Li><strong>Preference cookies</strong> — remember choices you make (e.g., language or display settings).</Li>
            </ul>
            <P>You can control and delete cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the website but will limit our ability to improve it. For more information about managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#0099FF] underline underline-offset-2">allaboutcookies.org</a>.</P>
          </Section>

          {/* 7 */}
          <Section title="7. International Data Transfers">
            <P>
              Zyene operates from the United States. If you are accessing our website or services from outside the United States, your information may be transferred to and processed in the United States or other countries where our service providers operate.
            </P>
            <P>
              Where personal data is transferred from the EEA or UK to countries outside those regions, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, or we rely on other lawful transfer mechanisms.
            </P>
          </Section>

          {/* 8 */}
          <Section title="8. Data Security">
            <P>
              We take reasonable technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission (HTTPS/TLS), access controls limited to authorised personnel, and regular review of our security practices.
            </P>
            <P>
              No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. In the event of a data breach that affects your rights and freedoms, we will notify you and relevant authorities as required by applicable law.
            </P>
          </Section>

          {/* 9 */}
          <Section title="9. Your Rights">
            <P>Depending on your location, you may have the following rights regarding your personal data:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li><strong>Access</strong> — request a copy of the personal data we hold about you.</Li>
              <Li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data.</Li>
              <Li><strong>Erasure (&quot;right to be forgotten&quot;)</strong> — request deletion of your personal data where there is no compelling reason for us to keep it.</Li>
              <Li><strong>Restriction</strong> — ask us to limit how we use your data in certain circumstances.</Li>
              <Li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</Li>
              <Li><strong>Objection</strong> — object to processing based on legitimate interests, including direct marketing.</Li>
              <Li><strong>Withdraw consent</strong> — where processing is based on your consent, withdraw it at any time.</Li>
              <Li><strong>California residents (CCPA)</strong> — you have the right to know what personal information we collect, to request deletion, and to opt out of any sale of personal information. We do not sell personal information.</Li>
            </ul>
            <P>To exercise any of these rights, contact us at <a href="mailto:privacy@zyene.com" className="text-[#0099FF] underline underline-offset-2">privacy@zyene.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with your local data protection authority.</P>
          </Section>

          {/* 10 */}
          <Section title="10. Children's Privacy">
            <P>
              Our website and services are directed at businesses and professionals. We do not knowingly collect personal data from individuals under the age of 16. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
            </P>
          </Section>

          {/* 11 */}
          <Section title="11. Links to Third-Party Websites">
            <P>
              Our website may contain links to external websites operated by third parties. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any third-party site you visit.
            </P>
          </Section>

          {/* 12 */}
          <Section title="12. Changes to This Policy">
            <P>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we do, we will update the &quot;Last updated&quot; date at the bottom of this page. Continued use of our website or services after changes are posted constitutes acceptance of the updated policy.
            </P>
            <P>For material changes that significantly affect how we use your data, we will make reasonable efforts to notify you directly (e.g., by email if we hold your contact details).</P>
          </Section>

          {/* 13 */}
          <Section title="13. Contact Us">
            <P>If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:</P>
            <div className="rounded-[10px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5 space-y-1">
              <p className="text-[16px] font-semibold text-[#0A1015]">Zyene</p>
              <p className="text-[15px] text-[#3D4145]">Email: <a href="mailto:privacy@zyene.com" className="text-[#0099FF] underline underline-offset-2">privacy@zyene.com</a></p>
              <p className="text-[15px] text-[#3D4145]">Website: <a href="https://zyene.com" className="text-[#0099FF] underline underline-offset-2">zyene.com</a></p>
            </div>
          </Section>

          {/* Footer */}
          <div className="pt-12 border-t border-[#EEEEEE] space-y-2">
            <p className="text-[14px] text-[#888888] font-medium uppercase tracking-widest italic">
              Last updated: April 27, 2026
            </p>
            <p className="text-[13px] text-[#AAAAAA] leading-[1.6]">
              This document is provided for informational purposes. Zyene recommends consulting a qualified legal professional to ensure full compliance with all applicable laws and regulations for your specific jurisdiction and business activities.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
