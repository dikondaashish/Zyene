"use client"

import { Calendar, Code, FileText, Rocket, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"

const timelineData = [
  {
    id: 1,
    title: "Discover",
    date: "Week 1",
    content: "Map bottlenecks across marketing, operations, and sales to find the highest-impact automation points.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Week 2",
    content: "Design system architecture and workflow logic tailored to your current stack and team handoffs.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 3,
    title: "Build",
    date: "Week 3-4",
    content: "Build AI agents and automations that execute tasks, route work, and keep CRM/data layers in sync.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 72,
  },
  {
    id: 4,
    title: "Integrate",
    date: "Week 5",
    content: "Connect systems to live channels and operational tools to ensure real-time execution visibility.",
    category: "Integration",
    icon: Workflow,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 45,
  },
  {
    id: 5,
    title: "Scale",
    date: "Week 6+",
    content: "Monitor performance, tune automation quality, and scale throughput without scaling headcount.",
    category: "Scale",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 28,
  },
]

export function OrbitalDemo() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[860px] mx-auto mb-8"
        >
          <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">System Map</p>
          <h2 className="text-[36px] md:text-[48px] leading-[1.06] font-normal tracking-[-0.03em] text-[#0A1015]">
            See how Zyene systems connect and execute
          </h2>
        </motion.div>

        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  )
}
