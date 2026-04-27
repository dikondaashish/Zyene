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

export default function TermsContent() {
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
              These Terms and Conditions ("Terms") govern your access to and use of the website located at <strong>zyene.com</strong> and any services provided by <strong>Zyene</strong> ("we", "us", "our"). By accessing this website or engaging our services, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
            </P>
          </div>

          {/* 1 */}
          <Section title="1. Services">
            <P>
              Zyene provides AI-powered digital transformation services to businesses, including but not limited to: AI workflow automation, systems integration, CRM automation, marketing and operations AI systems, AI voice and lead management tools, and execution support ("Services"). Specific deliverables, timelines, fees, and engagement terms for any project are set out in a separate written agreement, statement of work, or proposal ("Service Agreement") between Zyene and the client.
            </P>
            <P>
              These Terms apply to your use of our website and, where no separate Service Agreement exists, to your general engagement with Zyene. In the event of any conflict between these Terms and a Service Agreement, the Service Agreement shall prevail.
            </P>
          </Section>

          {/* 2 */}
          <Section title="2. Acceptance and Eligibility">
            <P>By accessing our website or engaging our services, you represent and warrant that:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>You are at least 18 years of age and have the legal capacity to enter into a binding agreement.</Li>
              <Li>If you are acting on behalf of a company or other legal entity, you have the authority to bind that entity to these Terms.</Li>
              <Li>Your use of our website and services complies with all applicable laws and regulations in your jurisdiction.</Li>
            </ul>
          </Section>

          {/* 3 */}
          <Section title="3. Website Use">
            <P>You agree to use our website only for lawful purposes. You must not:</P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Use our website in any way that violates applicable local, national, or international laws or regulations.</Li>
              <Li>Attempt to gain unauthorised access to any part of our website, servers, databases, or connected systems.</Li>
              <Li>Transmit any unsolicited commercial communications, malware, or otherwise harmful data.</Li>
              <Li>Scrape, copy, reproduce, or redistribute our website content for commercial purposes without prior written consent.</Li>
              <Li>Misrepresent your identity or affiliation with any person or organisation.</Li>
            </ul>
            <P>We reserve the right to restrict or terminate access to our website for any user who violates these Terms, without notice or liability.</P>
          </Section>

          {/* 4 */}
          <Section title="4. Intellectual Property">
            <P>
              All content on this website — including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software — is the property of Zyene or its content suppliers and is protected by applicable intellectual property laws.
            </P>
            <P>
              You may view and print pages from the website for your own personal, non-commercial reference. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
            </P>
            <P>
              Nothing in these Terms grants you any right, title, or interest in Zyene's trademarks, service marks, trade names, or brand identifiers. All rights not expressly granted are reserved.
            </P>
          </Section>

          {/* 5 */}
          <Section title="5. Client-Owned Materials">
            <P>
              Where you provide us with data, materials, or content ("Client Materials") as part of a service engagement, you retain all ownership of and responsibility for those Client Materials. You grant Zyene a limited, non-exclusive, royalty-free licence to use, process, and reproduce Client Materials solely to the extent necessary to deliver the agreed Services.
            </P>
            <P>
              You warrant that you own or have the necessary rights to provide Client Materials to us, and that such materials do not infringe the intellectual property or other rights of any third party.
            </P>
          </Section>

          {/* 6 */}
          <Section title="6. Confidentiality">
            <P>
              Each party acknowledges that in the course of an engagement, it may receive information of a confidential or proprietary nature from the other party ("Confidential Information"). Each party agrees to:
            </P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Hold all Confidential Information in strict confidence.</Li>
              <Li>Not disclose Confidential Information to third parties without prior written consent, except to employees or contractors who need to know for the purpose of the Services and are bound by equivalent confidentiality obligations.</Li>
              <Li>Use Confidential Information only for the purposes of the engagement.</Li>
            </ul>
            <P>
              This obligation does not apply to information that is or becomes publicly known through no breach of these Terms, was lawfully received from a third party without restriction, or is required to be disclosed by law or court order.
            </P>
          </Section>

          {/* 7 */}
          <Section title="7. Payment Terms">
            <P>
              Fees for services are set out in the applicable Service Agreement or proposal. Unless otherwise agreed in writing:
            </P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>Invoices are due within <strong>14 days</strong> of the invoice date.</Li>
              <Li>Late payments may incur interest at the rate of 1.5% per month (or the maximum rate permitted by law, if lower) from the due date until payment is received.</Li>
              <Li>We reserve the right to suspend services if payments are overdue by more than 30 days, following written notice to the client.</Li>
              <Li>All fees are exclusive of applicable taxes (including VAT, GST, or sales tax). You are responsible for any applicable taxes in your jurisdiction.</Li>
            </ul>
          </Section>

          {/* 8 */}
          <Section title="8. Disclaimer of Warranties">
            <P>
              Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, or non-infringement.
            </P>
            <P>
              We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or usefulness of any information on the website. Any reliance on such information is at your own risk.
            </P>
            <P>
              Results described on our website (including case studies, testimonials, and performance statistics) represent outcomes achieved by specific clients under specific conditions and are not guarantees of results for other clients or engagements.
            </P>
          </Section>

          {/* 9 */}
          <Section title="9. Limitation of Liability">
            <P>
              To the maximum extent permitted by applicable law, Zyene and its officers, directors, employees, agents, suppliers, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages — including but not limited to loss of profits, revenue, data, goodwill, or business interruption — arising out of or in connection with your use of our website or services, even if we have been advised of the possibility of such damages.
            </P>
            <P>
              In no event shall Zyene's total cumulative liability to you for any claims arising under or related to these Terms or a Service Agreement exceed the total fees paid by you to Zyene in the three (3) months immediately preceding the event giving rise to the claim, or USD $500, whichever is greater.
            </P>
            <P>
              Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by applicable law.
            </P>
          </Section>

          {/* 10 */}
          <Section title="10. Indemnification">
            <P>
              You agree to indemnify, defend, and hold harmless Zyene and its officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of our website or services; (b) your violation of these Terms; (c) your violation of any third-party rights, including intellectual property rights; or (d) any Client Materials you provide to us.
            </P>
          </Section>

          {/* 11 */}
          <Section title="11. Third-Party Links and Services">
            <P>
              Our website may contain links to third-party websites or reference third-party tools and integrations. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy practices, or reliability of any third-party websites or services. Your use of third-party websites is entirely at your own risk and subject to the terms and conditions of those websites.
            </P>
          </Section>

          {/* 12 */}
          <Section title="12. AI-Generated Content and Outputs">
            <P>
              Some of our services involve the use of AI systems and automation tools. You acknowledge that:
            </P>
            <ul className="list-disc pl-6 space-y-2">
              <Li>AI-generated outputs may contain errors, inaccuracies, or omissions and should be reviewed by qualified personnel before being acted upon.</Li>
              <Li>Zyene does not guarantee the accuracy, legality, or suitability of AI-generated content for any specific purpose.</Li>
              <Li>You are solely responsible for reviewing, approving, and implementing any AI-generated output in your business operations.</Li>
              <Li>The use of AI services is subject to the terms of the underlying model providers (e.g., OpenAI, Anthropic, Google), and Zyene shall not be liable for changes, limitations, or failures of those underlying services.</Li>
            </ul>
          </Section>

          {/* 13 */}
          <Section title="13. Termination">
            <P>
              Either party may terminate a service engagement in accordance with the terms of the applicable Service Agreement. Where no Service Agreement exists, either party may terminate by providing 14 days' written notice to the other.
            </P>
            <P>
              We may immediately terminate or suspend your access to our website or services if you breach these Terms, without notice or liability to you. Upon termination, all licences granted to you under these Terms cease immediately. Provisions that by their nature should survive termination (including Sections 4, 6, 8, 9, 10, 14, and 15) shall survive.
            </P>
          </Section>

          {/* 14 */}
          <Section title="14. Governing Law and Dispute Resolution">
            <P>
              These Terms and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of the State of <strong>Delaware, United States</strong>, without regard to its conflict of law principles.
            </P>
            <P>
              Before initiating any formal legal proceedings, both parties agree to attempt to resolve any dispute in good faith through informal negotiation for a period of at least 30 days. If the dispute is not resolved during that period, either party may pursue available legal remedies.
            </P>
            <P>
              Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Delaware, and both parties hereby consent to the personal jurisdiction and venue of such courts.
            </P>
          </Section>

          {/* 15 */}
          <Section title="15. Changes to These Terms">
            <P>
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Your continued use of our website or services after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </P>
            <P>For material changes to existing Service Agreements, we will notify you directly and obtain your written agreement before the changes take effect.</P>
          </Section>

          {/* 16 */}
          <Section title="16. Miscellaneous">
            <P><strong>Entire agreement.</strong> These Terms, together with any applicable Service Agreement and our Privacy Policy, constitute the entire agreement between you and Zyene with respect to their subject matter and supersede all prior negotiations, representations, or agreements.</P>
            <P><strong>Severability.</strong> If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed, while the remaining provisions continue in full force.</P>
            <P><strong>Waiver.</strong> Failure by either party to enforce any provision of these Terms does not constitute a waiver of future enforcement of that provision or any other provision.</P>
            <P><strong>Assignment.</strong> You may not assign or transfer any rights or obligations under these Terms without our prior written consent. Zyene may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.</P>
            <P><strong>Force majeure.</strong> Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including natural disasters, government actions, internet outages, or failures of third-party infrastructure.</P>
          </Section>

          {/* 17 */}
          <Section title="17. Contact Us">
            <P>If you have questions about these Terms, please contact us:</P>
            <div className="rounded-[10px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5 space-y-1">
              <p className="text-[16px] font-semibold text-[#0A1015]">Zyene</p>
              <p className="text-[15px] text-[#3D4145]">Email: <a href="mailto:legal@zyene.com" className="text-[#0099FF] underline underline-offset-2">legal@zyene.com</a></p>
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
