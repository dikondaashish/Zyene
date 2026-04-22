import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Zyene's Privacy Policy — how we collect, use, and protect information when you use our website and services.",
};

const lastUpdated = "April 22, 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="privacy-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1
              id="privacy-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Privacy Policy
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
          <div className="max-w-3xl mx-auto prose-styles">
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Zyene, Inc. (&quot;Zyene,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website
              at zyene.com and provides digital marketing, CRM automation, and AI services
              (collectively, the &quot;Services&quot;). This Privacy Policy explains what information
              we collect, why we collect it, and how we handle it.
            </p>

            <PolicySection title="1. Information We Collect">
              <Subsection title="Information you provide directly">
                <ul>
                  <li>
                    <strong>Contact forms:</strong> When you submit an inquiry or book a call, we
                    collect your name, email address, company name, and the content of your message.
                  </li>
                  <li>
                    <strong>Client onboarding:</strong> As a client, we may collect billing
                    information, business details, and credentials necessary to deliver your services.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Information collected automatically">
                <ul>
                  <li>
                    <strong>Usage data:</strong> We collect standard server logs including IP
                    address, browser type, referring URL, pages visited, and timestamps.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use essential cookies to ensure the site functions
                    correctly. We do not use third-party advertising cookies. You can disable cookies
                    in your browser settings; some site features may not work as a result.
                  </li>
                </ul>
              </Subsection>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and fulfill service requests</li>
                <li>Schedule and conduct consultations and onboarding calls</li>
                <li>Deliver, manage, and improve the Services we provide to you</li>
                <li>Send operational communications (project updates, invoices, support)</li>
                <li>Analyze aggregate usage data to improve our website</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for
                marketing purposes.
              </p>
            </PolicySection>

            <PolicySection title="3. Information Sharing">
              <p>We share your information only in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> We use third-party tools to operate our
                  business, including Web3Forms (form processing), Calendly (scheduling), and
                  standard cloud infrastructure providers. These providers access your data only to
                  perform services on our behalf.
                </li>
                <li>
                  <strong>Client work:</strong> To deliver your services, we may require access to
                  your third-party platforms (ad accounts, CRM, analytics). We access only what is
                  necessary.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose information if required by
                  law, subpoena, or other legal process, or to protect the rights and safety of
                  Zyene or others.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Data Retention">
              <p>
                We retain contact form submissions and inquiry data for up to 24 months for
                business correspondence purposes. Client project data is retained for the duration
                of the engagement plus 12 months, after which it is deleted or anonymized.
                You may request deletion of your data at any time by contacting us.
              </p>
            </PolicySection>

            <PolicySection title="5. Your Rights">
              <p>
                Depending on your location, you may have rights under applicable privacy laws,
                including the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, email{" "}
                <a href="mailto:support@zyene.com" className="text-foreground underline underline-offset-2 hover:text-brand transition-colors">
                  support@zyene.com
                </a>
                . We will respond within 30 days.
              </p>
            </PolicySection>

            <PolicySection title="6. Security">
              <p>
                We use industry-standard practices to protect your information, including HTTPS
                encryption on all data transmission and access controls on internal systems. No
                method of transmission over the internet is 100% secure; we cannot guarantee
                absolute security.
              </p>
            </PolicySection>

            <PolicySection title="7. Third-Party Links">
              <p>
                Our website may link to third-party websites (e.g., Zyene Reviews, Zentraic AI,
                social media profiles). We are not responsible for the privacy practices of those
                sites and encourage you to review their privacy policies.
              </p>
            </PolicySection>

            <PolicySection title="8. Children's Privacy">
              <p>
                Our Services are not directed to individuals under 18. We do not knowingly
                collect personal information from minors. If you believe we have inadvertently
                collected such information, contact us and we will delete it promptly.
              </p>
            </PolicySection>

            <PolicySection title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will post the updated
                policy on this page with a revised &quot;Last updated&quot; date. Continued use of our
                website after changes constitutes acceptance of the updated policy.
              </p>
            </PolicySection>

            <PolicySection title="10. Contact Us">
              <p>If you have questions about this Privacy Policy, contact us at:</p>
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
            </PolicySection>

            <div className="mt-16 pt-8 border-t border-border">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Zyene.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({
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

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="[&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
