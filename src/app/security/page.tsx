import type { Metadata } from "next"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "Industrial AI Security",
  description:
    "Human approval, data isolation, access control, auditability, encryption, and retention. We do not claim certifications we do not hold.",
  alternates: { canonical: "https://zyene.com/security" },
}

const faqs = [
  {
    question: "Are you SOC 2 certified?",
    answer: "No. We will not say we are certified until we are.",
  },
  {
    question: "Can we run this in our own environment later?",
    answer:
      "Deployment options can include your cloud, our cloud, or a more private setup as a project requires. We do not promise a private environment on day one.",
  },
]

export default function SecurityPage() {
  return (
    <>
      <SolutionsHero
        headingLines={["Security and", "responsible AI."]}
        eyebrow="Security"
        description="Industrial buyers need to know who approves an action, who can see the data, and what is logged. This page states the controls. It does not invent a certification."
        imageAlt="Security and responsible AI"
        image="/images/industrial/hero-security.jpg"
      />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <SolutionLayers
          eyebrow="Controls"
          heading="What we will say, and what we will not claim"
          layers={[
            {
              title: "Human approval",
              subtitle: "Critical actions can wait for a person",
              image: "/images/industrial/sol-human-approval.jpg",
              points: [
                "Orders, quotes, and system writes can require an employee.",
                "Exceptions are escalated instead of forced through.",
                "The workflow states where a person is required.",
              ],
            },
            {
              title: "Data isolation",
              subtitle: "One customer's information stays separate",
              image: "/images/industrial/hero-security.jpg",
              points: [
                "Customer information is kept separated.",
                "AI receives only the permissions that workflow needs.",
                "Access is limited to the people and systems involved.",
              ],
            },
            {
              title: "Auditability",
              subtitle: "Actions and important decisions are logged",
              image: "/images/industrial/sol-workflow-agents.jpg",
              points: [
                "Important actions are recorded.",
                "You can see what was prepared and what was approved.",
                "Logs support review after the fact.",
              ],
            },
            {
              title: "Model and data policies",
              subtitle: "Which providers see data",
              image: "/images/industrial/sol-documents.jpg",
              points: [
                "We explain which model providers receive data for a deployment.",
                "Retention follows that provider's arrangement and our agreement with you.",
                "We are not locked to a single model vendor.",
              ],
            },
            {
              title: "Encryption and retention",
              subtitle: "In transit and at rest, where it applies",
              image: "/images/industrial/hero-solutions.jpg",
              points: [
                "Data is encrypted in transit and at rest where the deployment supports it.",
                "We state how long information is retained for that project.",
                "Retention is part of the agreement, not a slogan.",
              ],
            },
            {
              title: "What we will not claim",
              subtitle: "No borrowed enterprise badges",
              image: "/images/industrial/hero-how-we-work.jpg",
              points: [
                "We do not say SOC 2 certified until we are.",
                "We do not imply vendor partnerships we do not have.",
                "Deployment in your cloud or a private environment is discussed per project.",
              ],
            },
          ]}
        />
        <FAQ faqs={faqs} />
        <FooterCTA />
      </div>
    </>
  )
}
