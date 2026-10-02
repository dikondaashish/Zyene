import { CareersHero } from "@/components/careers/CareersHero"
import { OpenRoles } from "@/components/careers/OpenRoles"
import { WhyWorkWithUs } from "@/components/careers/WhyWorkWithUs"
import { HowWeHire } from "@/components/careers/HowWeHire"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"
import { HiringCompliance } from "@/components/careers/HiringCompliance"

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
  title: "Careers",
  description:
    "Join Zyene and build production AI systems for distributors, manufacturers, and specialty contractors. Open roles in engineering and data.",
  alternates: { canonical: "https://zyene.com/careers" },
  openGraph: {
    title: "Careers at Zyene",
    description:
      "Build production AI systems for industrial operations. Explore open roles at Zyene.",
    url: "https://zyene.com/careers",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <OpenRoles />
        <WhyWorkWithUs />
        <HowWeHire />
        <FAQ
          faqs={CAREERS_FAQS}
          aside={{
            title: "Don’t see your role?",
            body: "Tell us what you would like to work on. We read every note and keep strong profiles on file.",
            linkLabel: "Email us",
            href: "mailto:support@zyene.com?subject=Careers%20inquiry",
          }}
        />

        <HiringCompliance />
        <FooterCTA />
      </div>
    </>
  )
}
