import { SplitList } from "@/components/ui/SplitList"

const HIRING_STEPS = [
  {
    title: "Application review",
    description: "We read every application for relevant experience, clear communication, and how you approach problems.",
  },
  {
    title: "Introductory call",
    description: "A short conversation about your background, how you work, and what you want to build next.",
  },
  {
    title: "Practical exercise",
    description:
      "For some roles, a small task based on real work. It is scoped to respect your time, and we discuss it with you.",
  },
  {
    title: "Final conversation",
    description: "We align on scope, expectations, compensation, and growth before an offer is made.",
  },
]

export function HowWeHire() {
  return (
    <SplitList
      className="border-t border-line"
      heading="How we hire."
      intro="A short, practical process focused on real ability and role fit. Most decisions are shared within two to four weeks."
      items={HIRING_STEPS}
      numbered
    />
  )
}
