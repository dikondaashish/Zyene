import { CareersHero } from "@/components/careers/CareersHero"
import { OpenRoles } from "@/components/careers/OpenRoles"
import { WhyWorkWithUs } from "@/components/careers/WhyWorkWithUs"
import { HowWeHire } from "@/components/careers/HowWeHire"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"
import Image from "next/image"

const CAREERS_FAQS = [
  {
    question: "What does the hiring process look like at Zyene?",
    answer:
      "Our process usually includes an initial screening, role-specific interviews, and a final team conversation. Timelines vary by role, but most decisions are shared within 2-4 weeks.",
  },
  {
    question: "How long does it take to get started after an offer?",
    answer:
      "Start dates are coordinated based on role priority and candidate availability. We align onboarding plans early so new team members can ramp up quickly.",
  },
  {
    question: "Do I need technical skills for every role?",
    answer:
      "No. Technical depth depends on the role. We hire across product, operations, customer success, design, marketing, and engineering.",
  },
  {
    question: "Do you support remote or hybrid work?",
    answer:
      "Many roles support flexible location options. Role requirements can vary based on team collaboration, timezone coverage, and project needs.",
  },
  {
    question: "Do you sponsor visas and use E-Verify?",
    answer:
      "Visa sponsorship depends on role and location. Zyene participates in E-Verify to confirm employment eligibility in the United States.",
  },
]

export const metadata = {
  title: "Careers | AI Supply",
  description: "Join us in building the future of autonomous AI workforce. We're hiring builders, thinkers, and systems-minded individuals.",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <OpenRoles />
        <WhyWorkWithUs />
        <HowWeHire />
        <FAQ faqs={CAREERS_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />

        <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
          <div className="mx-auto max-w-[980px]">
            <div className="relative overflow-hidden rounded-[12px] border border-[#E2E8EF] bg-white p-6 md:p-7 shadow-[0_10px_24px_rgba(10,16,21,0.05)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0A1015]/20 via-[#0099FF]/45 to-[#0A1015]/20" />
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98] mb-2">
                Hiring Compliance
              </p>
              <div className="mb-4 inline-flex items-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-3 py-2">
                <div className="relative w-[120px] h-[30px]">
                  <Image
                    src="/images/e-verify-logo.svg"
                    alt="E-Verify Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[24px] md:text-[28px] leading-[1.12] tracking-[-0.02em] text-[#0A1015] mb-4">
                U.S. hiring notices and accommodations
              </p>
              <p className="text-[14px] leading-[1.7] text-[#3D4145] mb-5 max-w-[820px]">
                Zyene participates in E-Verify to confirm employment eligibility in the United States.
                Zyene is an equal opportunity employer. If you need a reasonable accommodation during
                the hiring process, please contact{" "}
                <a href="mailto:support@zyene.com" className="text-[#0A1015] underline underline-offset-4">
                  support@zyene.com
                </a>
                .
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.e-verify.gov/sites/default/files/everify/posters/EVerifyParticipationPoster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-4 h-10 text-[13px] font-medium text-[#0A1015] hover:bg-[#EEF2F6] transition-colors"
                >
                  E-Verify Participation Notice
                </a>
                <a
                  href="https://www.e-verify.gov/sites/default/files/everify/posters/IER_RighttoWorkPoster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-4 h-10 text-[13px] font-medium text-[#0A1015] hover:bg-[#EEF2F6] transition-colors"
                >
                  Right to Work Notice
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
