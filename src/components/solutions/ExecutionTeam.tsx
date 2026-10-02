import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SplitList } from "@/components/ui/SplitList"

const workFlow = [
  {
    title: "Your workflow, first",
    description: "We start from how the work happens today, including the exceptions.",
  },
  {
    title: "Your systems stay",
    description: "ERP, CRM, email, and documents remain the system of record.",
  },
  {
    title: "Your people approve",
    description: "Judgment stays with employees wherever the action is critical.",
  },
  {
    title: "A metric, not a demo",
    description: "We agree on what will be measured before anything is deployed.",
  },
]

export function ExecutionTeam() {
  return (
    <SplitList
      heading="Applied engineering, not a rented department."
      intro="We design and integrate the workflow with your team. We do not pretend to replace your order desk, estimators, or project managers."
      items={workFlow}
      numbered
      footer={
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
        >
          Talk to our team <ArrowUpRight className="h-4 w-4" />
        </Link>
      }
    />
  )
}
