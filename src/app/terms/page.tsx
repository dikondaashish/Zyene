import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Zyene's Terms of Service — the terms that govern your use of our website and services.",
};

const lastUpdated = "April 22, 2026";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="terms-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1
              id="terms-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the Zyene website at zyene.com
              and the digital marketing, automation, and AI services provided by Zyene, Inc.
              (&quot;Zyene,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing our website or engaging our
              services, you agree to these Terms.
            </p>

            <TermsSection title="1. Services">
              <p>
                Zyene provides digital marketing, web development, CRM automation, and AI
                solutions to businesses. The specific scope, deliverables, timelines, and fees
                for any engagement are defined in a separate Service Agreement or Statement of
                Work (&quot;SOW&quot;) executed by both parties. These Terms apply in addition to any
                such agreement.
              </p>
            </TermsSection>

            <TermsSection title="2. Use of the Website">
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>
                  Reproduce, distribute, or create derivative works from our content without
                  written permission
                </li>
                <li>
                  Use automated tools (scrapers, bots) to extract data from our website
                </li>
              </ul>
              <p>
                We reserve the right to terminate access to the website at our discretion for
                any violation of these Terms.
              </p>
            </TermsSection>

            <TermsSection title="3. Intellectual Property">
              <p>
                All content on zyene.com — including text, design, graphics, logos, and code —
                is the property of Zyene, Inc. and is protected by applicable copyright and
                trademark laws. You may not use our branding or content without prior written
                consent.
              </p>
              <p>
                Work product created as part of a client engagement is subject to the IP
                ownership terms defined in your SOW. Unless otherwise agreed in writing, upon
                full payment, clients receive a license to use deliverables for their intended
                business purposes.
              </p>
            </TermsSection>

            <TermsSection title="4. Client Obligations">
              <p>
                As a Zyene client, you agree to:
              </p>
              <ul>
                <li>
                  Provide accurate, complete, and timely information required to deliver your
                  services
                </li>
                <li>
                  Grant Zyene the access and permissions necessary to platforms and systems
                  included in your engagement
                </li>
                <li>
                  Pay all fees according to the payment schedule in your SOW
                </li>
                <li>
                  Review and provide feedback on deliverables within agreed timelines
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="5. Payment & Refunds">
              <p>
                Fees are billed as defined in your SOW. Invoices are due within the payment
                terms specified therein. Late payments may incur interest at 1.5% per month on
                outstanding balances.
              </p>
              <p>
                Due to the nature of professional services, fees paid for work already
                performed are non-refundable. Disputes regarding deliverables should be raised
                in writing within 5 business days of delivery.
              </p>
            </TermsSection>

            <TermsSection title="6. Confidentiality">
              <p>
                Both parties agree to keep confidential any non-public information shared
                during the engagement. Zyene will not disclose client business information,
                credentials, or strategic details to third parties, except as required to
                deliver services or by law. Clients agree to keep our proprietary methodologies,
                pricing, and processes confidential.
              </p>
            </TermsSection>

            <TermsSection title="7. Disclaimers">
              <p>
                The website and its content are provided &quot;as is&quot; without warranties of any
                kind, express or implied. Zyene does not guarantee that the website will be
                uninterrupted, error-free, or free of harmful components.
              </p>
              <p>
                Marketing and growth results vary by business, market conditions, competition,
                and many factors outside our control. We do not guarantee specific revenue,
                lead volume, traffic, or ranking outcomes. Case study results and testimonials
                reflect individual client experiences and are not guarantees of future results.
              </p>
            </TermsSection>

            <TermsSection title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Zyene&apos;s liability for any claim arising
                from these Terms or your use of our services shall not exceed the total fees
                paid to Zyene in the three months preceding the claim. In no event shall Zyene
                be liable for indirect, incidental, consequential, or punitive damages.
              </p>
            </TermsSection>

            <TermsSection title="9. Termination">
              <p>
                Either party may terminate a service engagement per the termination provisions
                in the applicable SOW. Upon termination, you remain responsible for fees for
                work delivered prior to the termination date. Zyene reserves the right to
                terminate access to the website for violations of these Terms.
              </p>
            </TermsSection>

            <TermsSection title="10. Governing Law">
              <p>
                These Terms are governed by the laws of the State of California, without regard
                to its conflict of laws principles. Any disputes arising from these Terms shall
                be subject to the exclusive jurisdiction of courts located in San Francisco
                County, California.
              </p>
            </TermsSection>

            <TermsSection title="11. Changes to These Terms">
              <p>
                We may update these Terms at any time. We will post the updated Terms on this
                page with a revised &quot;Last updated&quot; date. Your continued use of the website
                after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </TermsSection>

            <TermsSection title="12. Contact">
              <p>
                Questions about these Terms? Contact us at:
              </p>
              <div className="bg-muted rounded-xl p-6 mt-4">
                <p className="font-semibold text-foreground">Zyene, Inc.</p>
                <p className="text-muted-foreground">28 Geary St Ste 650 #1892</p>
                <p className="text-muted-foreground">San Francisco, CA 94108</p>
                <p className="text-muted-foreground mt-2">
                  <a
                    href="mailto:support@zyene.com"
                    className="text-foreground underline underline-offset-2 hover:text-brand transition-colors"
                  >
                    support@zyene.com
                  </a>
                </p>
              </div>
            </TermsSection>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Zyene.com
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
