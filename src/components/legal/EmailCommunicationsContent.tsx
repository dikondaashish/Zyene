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
  const noticeUrl = 'https://zyene.com/legal/email-notice';

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
              Emails sent by <strong>Zyene</strong> or by members of our team may contain confidential, proprietary,
              or commercially sensitive information related to our clients, partners, candidates, services, systems, or
              internal operations. This notice explains how those communications should be handled.
            </P>
            <P className="text-[15px] text-[#5C6369]">
              This notice is provided for clarity and convenience. It does not create a contract, waive any rights,
              amend any written agreement, or replace our{' '}
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

          <Section title="Intended recipient and confidentiality">
            <P>
              Zyene email communications are intended only for the named recipient or the organization authorized to
              receive them. If you are not the intended recipient, you must not review, use, copy, forward, disclose,
              or rely on the message or any attachment. Please notify the sender promptly, delete the email and any
              attachments from your systems, and do not retain copies.
            </P>
          </Section>

          <Section title="Authority and commitments">
            <P>
              Email communications are often used for day-to-day coordination. Unless expressly stated by an authorized
              Zyene representative, an email does not modify an existing agreement, create a new contract, approve a
              statement of work, waive legal rights, or authorize payment terms. Formal commitments must be confirmed in
              a signed agreement, accepted proposal, approved order form, or another written record clearly authorized
              by Zyene.
            </P>
          </Section>

          <Section title="Professional context">
            <P>
              Any views, recommendations, technical notes, or business observations in an email are provided in the
              context of the specific conversation. They should not be treated as legal, financial, tax, employment, or
              compliance advice unless Zyene has separately agreed in writing to provide that service.
            </P>
          </Section>

          <Section title="Security and attachments">
            <P>Email is not a fully secure communication channel. Recipients should:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Use up-to-date antivirus and security software.</Li>
              <Li>Verify unexpected attachments or links with the sender through a separate channel before opening.</Li>
              <Li>Do not send passwords, access tokens, payment credentials, or highly sensitive data by email.</Li>
              <Li>
                Report suspected phishing, impersonation, or unauthorized use of the Zyene name to{' '}
                <a href="mailto:support@zyene.com" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                  support@zyene.com
                </a>
                .
              </Li>
            </ul>
            <P>
              Zyene uses reasonable measures to reduce email security risks, but we cannot guarantee that any email,
              attachment, or link is free from malicious code, interception, delay, corruption, or delivery error.
              Recipients remain responsible for applying appropriate security controls before opening or acting on an
              email.
            </P>
          </Section>

          <Section title="Payment and account changes">
            <P>
              To help prevent fraud, do not rely solely on email instructions for bank account changes, wire details,
              payment redirects, vendor onboarding, credential requests, or urgent financial actions. Verify any such
              request through a known Zyene contact or a trusted communication channel before acting.
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

          <Section title="Signature line">
            <div className="rounded-[12px] border border-[#E3E8EF] bg-white px-6 py-5 font-mono text-[14px] text-[#3D4145] leading-relaxed">
              This email may contain confidential information intended only for its recipient. If received in error,
              notify the sender and delete it. Notice: {noticeUrl}
            </div>
            <P className="text-[15px] text-[#5C6369]">
              Zyene team members may link to this page from email signatures instead of adding long disclaimer blocks to
              every message.
            </P>
          </Section>
        </motion.div>
      </div>
    </section>
  );
}
