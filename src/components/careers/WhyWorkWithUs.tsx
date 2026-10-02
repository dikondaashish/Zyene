import { SplitList } from "@/components/ui/SplitList"

const VALUES = [
  {
    title: "Work that ships",
    description:
      "What you build runs inside real operations: orders, quotes, documents, and the teams who depend on them every day.",
  },
  {
    title: "Ownership from day one",
    description:
      "You own outcomes end to end, from understanding the workflow to measuring whether it improved. Less process, more judgment.",
  },
  {
    title: "AI as a daily tool",
    description:
      "Modern models and tooling are part of how we build, review, and test. We expect you to use them well and know their limits.",
  },
  {
    title: "Small team, direct access",
    description:
      "You work directly with founders and customers. Decisions are made close to the work, and feedback is quick.",
  },
  {
    title: "Remote-friendly by default",
    description:
      "We write things down, keep meetings purposeful, and judge work by its quality, not by hours online.",
  },
]

export function WhyWorkWithUs() {
  return (
    <SplitList
      heading="What working here is like."
      intro="We are building an execution-first company. Every role has a direct line to product quality and customer results."
      items={VALUES}
    />
  )
}
