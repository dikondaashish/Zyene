'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h2 className="text-[18px] font-bold text-[#0A1015] tracking-tight">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const P = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[16px] text-[#3D4145] leading-[1.7] font-normal ${className ?? ""}`}>{children}</p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="text-[16px] text-[#3D4145] leading-[1.7]">{children}</li>
);

export default function EmailCommunicationsContent() {
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
          <div className="rounded-[12px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5 space-y-3">
            <P>
              This Email Communications Notice applies to email communications sent by <strong>Zyene</strong>, our
              authorized team members, or systems we use in connection with our website, services, hiring,
              partnerships, client work, and business operations.
            </P>
            <P className="text-[15px] text-[#5C6369]">
              This notice is provided for clarity and does not create a contract, waive any rights, amend any written
              agreement, or replace our{' '}
              <Link href="/legal/privacy-policy" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                Privacy Policy
              </Link>{' '}
              or{' '}
              <Link href="/legal/terms-conditions" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                Terms &amp; Conditions
              </Link>
              , which govern use of our website and services.
            </P>
          </div>

          <Section title="Intended recipients">
            <P>
              Zyene emails are intended only for the person or organization to whom they are addressed. If you received
              a message from Zyene in error, please notify the sender, delete the email and any attachments, and do not
              copy, forward, disclose, retain, or rely on the message.
            </P>
          </Section>

          <Section title="Confidential information">
            <P>
              Zyene emails may contain confidential, proprietary, privileged, or commercially sensitive information,
              including information about clients, partners, candidates, services, systems, strategy, pricing, or
              internal operations. Unauthorized review, use, disclosure, or distribution of that information is
              prohibited.
            </P>
          </Section>

          <Section title="Authority to bind Zyene">
            <P>
              Email is often used for day-to-day coordination, but an email does not by itself create a contract,
              modify an existing agreement, approve a statement of work, waive legal rights, or authorize payment terms.
              Binding commitments must be confirmed by an authorized Zyene representative in a signed agreement,
              accepted proposal, approved order form, or another written record that clearly states Zyene&apos;s approval.
            </P>
          </Section>

          <Section title="Professional context and advice">
            <P>
              Any views, recommendations, technical notes, or business observations in an email are provided in the
              context of the specific conversation. They should not be treated as legal, financial, tax, employment, or
              compliance advice unless Zyene has separately agreed in writing to provide that service.
            </P>
          </Section>

          <Section title="Email security">
            <P>Email is not a fully secure communication channel. Recipients should:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Use up-to-date antivirus and security software.</Li>
              <Li>Verify unexpected attachments or links with the sender through a separate channel before opening.</Li>
              <Li>Avoid sending passwords, access tokens, payment credentials, or highly sensitive data by email.</Li>
              <Li>Report suspected phishing, impersonation, or unauthorized use of the Zyene name.</Li>
            </ul>
            <P>
              Zyene uses reasonable measures to reduce email security risks, but we cannot guarantee that any email,
              attachment, or link is free from malicious code, interception, delay, corruption, or delivery error.
              To the extent permitted by law, Zyene is not responsible for loss or damage caused by email transmission
              failures, unauthorized alteration, malware, or a recipient&apos;s security environment.
            </P>
          </Section>

          <Section title="Payment and account-change requests">
            <P>
              To help prevent fraud, do not rely solely on email instructions for bank account changes, wire details,
              payment redirects, vendor onboarding, credential requests, or urgent financial actions. Verify any such
              request through a known Zyene contact or another trusted communication channel before acting.
            </P>
          </Section>

          <Section title="Privacy and data">
            <P>
              How we collect and use personal data in connection with our website and services is described in our{' '}
              <Link href="/legal/privacy-policy" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                Privacy Policy
              </Link>
              . For general inquiries, contact{' '}
              <a href="mailto:support@zyene.com" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                support@zyene.com
              </a>
              . For privacy-specific requests, contact{' '}
              <a href="mailto:privacy@zyene.com" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                privacy@zyene.com
              </a>
              .
            </P>
          </Section>

          <Section title="Contact">
            <P>
              If you received a Zyene email in error, suspect impersonation, or have questions about this notice,
              contact us:
            </P>
            <div className="rounded-[10px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5 space-y-1">
              <p className="text-[16px] font-semibold text-[#0A1015]">Zyene</p>
              <p className="text-[15px] text-[#3D4145]">
                General email: <a href="mailto:support@zyene.com" className="text-[#0099FF] underline underline-offset-2">support@zyene.com</a>
              </p>
              <p className="text-[15px] text-[#3D4145]">
                Privacy requests: <a href="mailto:privacy@zyene.com" className="text-[#0099FF] underline underline-offset-2">privacy@zyene.com</a>
              </p>
              <p className="text-[15px] text-[#3D4145]">
                Website: <a href="https://zyene.com" className="text-[#0099FF] underline underline-offset-2">zyene.com</a>
              </p>
            </div>
          </Section>

          <div className="pt-12 border-t border-[#EEEEEE] space-y-2">
            <p className="text-[14px] text-[#888888] font-medium uppercase tracking-widest italic">
              Last updated: May 5, 2026
            </p>
            <P className="text-[15px] text-[#5C6369]">
              This notice may be updated from time to time. The version posted on this page is the current version.
            </P>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
