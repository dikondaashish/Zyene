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
              Emails from <strong>Zyene</strong> and our team may include confidential business information. This page
              summarizes how we expect those messages to be handled. You may link here from your email signature:{' '}
              <strong className="text-[#0A1015]">https://zyene.com/legal/email-notice</strong>
            </P>
            <P className="text-[15px] text-[#5C6369]">
              This notice is for convenience and clarity. It does not replace our{' '}
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

          <Section title="Confidentiality">
            <P>
              Messages are intended only for the named recipient(s). If you are not the intended recipient, any review,
              use, disclosure, or distribution is prohibited. Please notify the sender immediately, delete the message
              and any attachments from your systems, and do not copy or forward it.
            </P>
          </Section>

          <Section title="Personal views">
            <P>
              Unless a message explicitly states otherwise, opinions or recommendations in an email are those of the
              sender in context of the conversation. They may not reflect the official position of Zyene on every
              topic.
            </P>
          </Section>

          <Section title="Security and attachments">
            <P>Email and attachments can carry security risks. Recipients should:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Use up-to-date antivirus and security software.</Li>
              <Li>Verify unexpected attachments or links with the sender through a separate channel before opening.</Li>
              <Li>
                Report messages that impersonate Zyene to{' '}
                <a href="mailto:support@zyene.com" className="text-[#0A1015] underline underline-offset-2 hover:no-underline">
                  support@zyene.com
                </a>
                .
              </Li>
            </ul>
            <P>
              Zyene uses reasonable measures to reduce risk but cannot guarantee that any email or attachment is free of
              harmful content. Zyene is not liable for loss or damage arising from email transmission, including from
              malware, except where applicable law does not allow that limitation.
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

          <Section title="Suggested short line for your signature">
            <div className="rounded-[12px] border border-[#E3E8EF] bg-white px-6 py-5 font-mono text-[14px] text-[#3D4145] leading-relaxed">
              This email may contain confidential information. If you received it in error, please notify the sender and
              delete it. Details: https://zyene.com/legal/email-notice
            </div>
            <P className="text-[15px] text-[#5C6369]">
              Adjust wording to match your role and region if your counsel advises a different formulation.
            </P>
          </Section>
        </motion.div>
      </div>
    </section>
  );
}
