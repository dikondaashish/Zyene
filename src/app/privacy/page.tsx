import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Zyene collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeader
        title="Privacy Policy"
        subtitle="Last updated: April 2, 2026"
      />

      <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email,
            company, and any message you submit through our contact forms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">How We Use Information</h2>
          <p>
            We use your information to respond to inquiries, provide requested services,
            improve our website experience, and communicate with you about our offerings.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Data Sharing</h2>
          <p>
            We do not sell personal data. We may share information with trusted service
            providers who support our operations and are bound by confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href="mailto:support@zyene.com" className="text-foreground underline underline-offset-4">
              support@zyene.com
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
