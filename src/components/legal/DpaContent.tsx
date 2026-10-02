"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { REVEAL_VIEWPORT } from "@/lib/motion"

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="text-[18px] font-bold tracking-tight text-[#0A1015]">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[16px] font-normal leading-[1.7] text-[#3D4145]">{children}</p>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="text-[16px] leading-[1.7] text-[#3D4145]">{children}</li>
)

export default function DpaContent() {
  return (
    <section className="w-full overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[700px] px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="rounded-[12px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5">
            <P>
              This Data Processing Agreement (“DPA”) describes how Zyene processes personal and operational data when
              a customer uses our website or engages us to design, build, or run a production workflow. It is intended
              for IT and legal review. It sits alongside our{" "}
              <Link href="/legal/privacy-policy" className="text-[#0099FF] underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/legal/terms-conditions" className="text-[#0099FF] underline underline-offset-2">
                Terms &amp; Conditions
              </Link>
              .
            </P>
          </div>

          <Section title="1. Roles">
            <P>
              For the zyene.com website, Zyene is the controller of contact, hiring, and analytics information you
              submit to us. For a client engagement, the customer is the controller of the operational data in that
              workflow. Zyene is a processor of that data, acting on the customer’s documented instructions.
            </P>
          </Section>

          <Section title="2. What we process in an engagement">
            <P>
              A typical workflow reads work that already exists in the customer’s operation: emails, purchase orders,
              RFQs, bid packets, invoices, drawings, and records in the ERP, CRM, or field software the customer
              already runs. That data can include names, email addresses, phone numbers, customer and vendor records,
              order lines, and the documents attached to them.
            </P>
            <P>
              We process that data to extract, validate, and prepare the next action, and to keep an audit of what the
              system did. We do not use customer operational data to train public models.
            </P>
          </Section>

          <Section title="3. Customer instructions">
            <P>
              The statement of work, this DPA, and any written security requirements the customer provides are the
              instructions. We will not process engagement data for our own marketing, sell it, or share it with a
              third party except as a subprocessor listed here or as required by law.
            </P>
          </Section>

          <Section title="4. Subprocessors">
            <P>
              We use the following providers to operate the website and, where an engagement requires it, to run a
              workflow. The statement of work names the model provider when one is in use.
            </P>
            <ul className="list-disc space-y-2 pl-6">
              <Li>
                <strong>Vercel</strong> — hosts and deploys zyene.com.
              </Li>
              <Li>
                <strong>Cloudflare</strong> — DNS and SSL for zyene.com. Cloudflare Turnstile also protects our forms
                from automated abuse.
              </Li>
              <Li>
                <strong>Zoho</strong> — stores contact-form and talent-pool submissions from this website.
              </Li>
              <Li>
                <strong>Model providers</strong> — language and document models used inside a client workflow, chosen
                for that engagement. The customer’s statement of work names the provider when it is in use.
              </Li>
            </ul>
            <P>
              Website forms may also use Web3Forms (email routing), Abstract API (email validation), and Cal.com
              (scheduling), as described in the Privacy Policy. Stripe is used when an engagement or product
              subscription is billed.
            </P>
            <P>
              We will update this page when a subprocessor is added or removed. Material changes to how engagement data
              is processed are agreed in writing before they apply to an existing customer.
            </P>
          </Section>

          <Section title="5. Security">
            <P>
              Transmission to zyene.com uses HTTPS. Access to customer data is limited to people working on that
              engagement. Critical writes to a customer’s ERP or CRM can require an employee of the customer to
              approve. We log important actions so they can be reviewed. Deployment (our cloud, the customer’s cloud,
              or a more private setup) is scoped per project. See{" "}
              <Link href="/security" className="text-[#0099FF] underline underline-offset-2">
                Security
              </Link>
              .
            </P>
          </Section>

          <Section title="6. Location, retention, and deletion">
            <P>
              Zyene operates from the United States. Subprocessors may process data in the United States or other
              regions where they operate. Retention for a client engagement follows the statement of work. When the
              engagement ends, we delete or return the customer’s operational data according to those terms, except
              where we must keep a record for law or dispute.
            </P>
          </Section>

          <Section title="7. Customer rights and our help">
            <P>
              If a person whose data is in a customer workflow exercises a privacy right, the customer is responsible
              for the response. We will assist with information we hold, within a reasonable time, so the customer can
              reply.
            </P>
          </Section>

          <Section title="8. Agreement">
            <P>
              By signing a Zyene statement of work that incorporates this DPA, or by otherwise agreeing in writing,
              the customer and Zyene agree to these terms for that engagement. Questions:{" "}
              <a href="mailto:legal@zyene.com" className="text-[#0099FF] underline underline-offset-2">
                legal@zyene.com
              </a>
              . Privacy requests:{" "}
              <a href="mailto:privacy@zyene.com" className="text-[#0099FF] underline underline-offset-2">
                privacy@zyene.com
              </a>
              .
            </P>
            <P>Last updated: October 2, 2026.</P>
          </Section>
        </motion.div>
      </div>
    </section>
  )
}
