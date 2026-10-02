import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { servicePageJsonLd } from "@/lib/seo"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "AI for Specialty Contractors",
  description:
    "AI for HVAC, electrical, mechanical, plumbing, fire protection, and roofing firms. Bid documents become a scope summary and checklist before estimating starts.",
  alternates: { canonical: "https://zyene.com/industries/specialty-contractors" },
}

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "HVAC, electrical, mechanical, plumbing, fire protection, roofing, and commercial service companies.",
  },
  {
    question: "Is this an AI receptionist?",
    answer:
      "No. The work is bid intake, estimates, project documents, closeout, and back-office updates into the systems you already use.",
  },
  {
    question: "Which field systems?",
    answer:
      "We connect to ServiceTitan, Procore, ERP, and accounting where the workflow needs them.",
  },
]

export default function SpecialtyContractorsPage() {
  return (
    <>
      <JsonLd
        data={servicePageJsonLd({
          path: "/industries/specialty-contractors",
          name: "AI for Specialty Contractors",
          description:
            "Bid intake, estimate preparation, project documents, closeout, and back-office updates for specialty contractors.",
          serviceType: "Specialty contractor AI operations",
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Specialty Contractors", path: "/industries/specialty-contractors" },
          ],
        })}
      />
      <SolutionsHero
        headingLines={["Automate the office", "work around every job."]}
        eyebrow="Specialty Contractors"
        description="HVAC, electrical, mechanical, plumbing, fire protection, roofing, and commercial service companies."
        imageAlt="Specialty contractor operations"
        image="/images/industrial/hero-contractors.jpg"
      />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <SolutionLayers
          eyebrow="Operational problems"
          heading="The job starts in the office, not on the tools"
          layers={[
            {
              title: "Bids land as a pile of files",
              subtitle: "Scope, deadlines, and requirements are buried",
              image: "/images/industrial/con-bid-intake.jpg",
              points: ["An RFP arrives by email.", "Someone has to summarize it before estimating starts.", "Deadlines get missed when the packet is long."],
            },
            {
              title: "Project paper keeps moving",
              subtitle: "RFIs, submittals, changes, daily reports",
              image: "/images/industrial/con-project-docs.jpg",
              points: ["Documents need a person to route them.", "The field system is not the inbox.", "Closeout waits on information that already exists."],
            },
            {
              title: "The back office retypes the job",
              subtitle: "ServiceTitan, Procore, ERP, or accounting",
              image: "/images/industrial/con-back-office.jpg",
              points: ["The field or accounting system stays the record.", "Records are updated after the email is read.", "A person can still approve the write."],
            },
          ]}
        />
        <SolutionLayers
          eyebrow="Workflows"
          heading="The office work surrounding the job"
          layers={[
            {
              title: "Bid and RFP intake",
              subtitle: "A checklist before anyone estimates",
              image: "/images/industrial/sol-documents.jpg",
              points: [
                "An RFP arrives and the documents are read.",
                "Scope, deadlines, and requirements are extracted.",
                "A bid checklist is created for the team.",
              ],
            },
            {
              title: "Estimate preparation",
              subtitle: "Plans and specifications, organized",
              image: "/images/industrial/con-estimate.jpg",
              points: [
                "Relevant information is pulled from plans and specifications.",
                "Estimator inputs are organized.",
                "Historical projects can be compared.",
              ],
            },
            {
              title: "Project documentation",
              subtitle: "RFIs, submittals, changes, daily reports",
              image: "/images/industrial/hero-contractors.jpg",
              points: [
                "Documents are organized and summarized.",
                "They are routed to the right employees.",
                "The project file stays easier to follow.",
              ],
            },
            {
              title: "Job closeout",
              subtitle: "From the job to the package",
              image: "/images/industrial/con-closeout.jpg",
              points: [
                "Technician and project information is gathered.",
                "Warranty documents, the customer report, and billing information are assembled.",
                "A closeout package is prepared for review.",
              ],
            },
            {
              title: "Back office",
              subtitle: "Email into the systems you already pay for",
              image: "/images/industrial/con-back-office.jpg",
              points: [
                "Email can update ServiceTitan, Procore, ERP, or accounting where we integrate.",
                "Records and tasks are prepared.",
                "A person approves before the write happens.",
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
