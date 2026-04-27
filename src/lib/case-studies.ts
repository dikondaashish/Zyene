export type CaseStudyResult = {
  metric: string
  label: string
  iconName: "trending-up" | "clock" | "chart"
}

export type CaseStudy = {
  id: string
  industry: string
  company: string
  role: string
  challenge: string
  solution: string
  results: CaseStudyResult[]
  quote: string
  tags: string[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "marketing-operations-automation",
    industry: "Professional Services",
    company: "Growth Team",
    role: "Lauren Meyers — Growth Strategist",
    challenge:
      "A growing professional services team was stuck managing disconnected tools and manual handoffs across marketing and operations. Work was falling through the gaps between platforms, execution was inconsistent, and leadership had no real-time visibility into what was actually getting done.",
    solution:
      "Zyene mapped the team's core workflows across marketing and operations, identified the highest-impact automation opportunities, and deployed a unified AI operating layer connecting their CRM, marketing platform, and ops tools. Manual handoffs were replaced with automated triggers, and reporting was consolidated into a single weekly dashboard.",
    results: [
      { metric: "3×", label: "Average ROI within 90 days", iconName: "trending-up" },
      { metric: "Days → Minutes", label: "Reduction in workflow cycle time", iconName: "clock" },
      { metric: "100%", label: "Reporting automated — zero manual assembly", iconName: "chart" },
    ],
    quote:
      "Before Zyene, our team was stuck in disconnected tools and manual handoffs. Within the first month, we automated core workflows across marketing and operations. What used to take days now takes minutes — with better consistency, faster execution, and clear visibility across teams.",
    tags: ["Marketing Automation", "Operations AI", "Workflow Integration"],
  },
  {
    id: "voice-crm-automation",
    industry: "Real Estate & Property",
    company: "Harbor Ridge Group",
    role: "Daniel Carter — Operations Lead",
    challenge:
      "Harbor Ridge Group was handling high inbound call volume across their property operations team. Call outcomes were being logged manually — often hours after the conversation — leading to stale CRM data, missed follow-ups, and a pipeline view that leadership could not trust for forecasting.",
    solution:
      "Zyene deployed Zentraic AI to handle inbound call qualification, routing, and post-call CRM sync. Every call outcome — lead score, disposition, assigned rep, and next action — was automatically written to HubSpot in real time. The team stopped spending time on call logging and started spending it on the conversations that needed their attention.",
    results: [
      { metric: "68%", label: "Faster call-to-CRM turnaround", iconName: "clock" },
      { metric: "Zero", label: "Manual CRM updates after calls", iconName: "chart" },
      { metric: "↑ Pipeline", label: "Forecast accuracy improved materially", iconName: "trending-up" },
    ],
    quote:
      "Zentraic AI helped us handle inbound calls, qualify leads, and sync every outcome to CRM without manual follow-up. Our team now closes loops faster, misses fewer opportunities, and scales daily call operations without adding extra headcount.",
    tags: ["Voice AI", "CRM Automation", "Zentraic AI"],
  },
]
