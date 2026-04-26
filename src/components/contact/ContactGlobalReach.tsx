"use client"

import { motion } from "framer-motion"
import { Globe } from "@/components/ui/cobe-globe"

const MARKERS = [
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "missori", location: [38.5767, -92.1735] as [number, number], label: "Missori" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "hyderabad", location: [17.385, 78.4867] as [number, number], label: "hyderabad" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
]

const ARCS = [
  { id: "sf-missori", from: [37.7595, -122.4367] as [number, number], to: [38.5767, -92.1735] as [number, number] },
  { id: "missori-london", from: [38.5767, -92.1735] as [number, number], to: [51.5074, -0.1278] as [number, number] },
  { id: "london-dubai", from: [51.5074, -0.1278] as [number, number], to: [25.2048, 55.2708] as [number, number] },
  { id: "dubai-hyderabad", from: [25.2048, 55.2708] as [number, number], to: [17.385, 78.4867] as [number, number] },
  { id: "hyderabad-singapore", from: [17.385, 78.4867] as [number, number], to: [1.3521, 103.8198] as [number, number] },
]

export function ContactGlobalReach() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 rounded-[16px] border border-[#DFE4EA] bg-[#F6F8FB] p-8 md:p-10 lg:grid-cols-[1fr_1fr]"
        >
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">
              Global Operations
            </p>
            <h3 className="mb-4 text-[34px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[44px]">
              Built to support distributed teams.
            </h3>
            <p className="mb-8 max-w-[520px] text-[15px] leading-[1.7] text-[#4A4F59]">
              Zyene systems and execution support are designed for cross-region operations, so your team can scale
              execution with clarity and consistency.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center rounded-full bg-white/70 p-5 shadow-[inset_0_0_0_1px_rgba(223,228,234,0.9)]">
            <Globe
              className="w-full max-w-[380px]"
              markers={MARKERS}
              arcs={ARCS}
              markerColor={[0, 0.6, 1]}
              baseColor={[0.98, 0.99, 1]}
              arcColor={[0.2, 0.43, 0.86]}
              glowColor={[0.95, 0.97, 1]}
              dark={0}
              mapBrightness={8}
              markerSize={0.036}
              markerElevation={0.012}
              arcWidth={0.65}
              arcHeight={0.24}
              speed={0.0034}
              theta={0.25}
              diffuse={1.25}
              mapSamples={22000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
