import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Zyene's terms governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <Section>
      <SectionHeader
        title="Terms of Service"
        subtitle="Last updated: April 2, 2026"
      />

      <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Use of Website</h2>
          <p>
            By using this site, you agree to use it lawfully and in a way that does not
            harm Zyene, other users, or the site itself.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Service Scope</h2>
          <p>
            Any marketing or development engagement details, deliverables, and timelines are
            defined in separate client agreements.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p>
            All content on this website, unless otherwise stated, is owned by Zyene and may
            not be copied or redistributed without permission.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For terms-related questions, email{' '}
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
