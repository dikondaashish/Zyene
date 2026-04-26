"use client"

import { motion } from "framer-motion"
import { Globe } from "@/components/ui/cobe-globe"

const MARKERS = [
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "missori", location: [38.5767, -92.1735] as [number, number], label: "Missori" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "hyderabad", location: [17.385, 78.4867] as [number, number], label: "Hyderabad" },
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

export function AboutGlobalOperations() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-24">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#0099FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-[#0A1015]/8 blur-3xl" />

      <div className="mx-auto max-w-[1180px] rounded-[18px] border border-[#DFE4EA] bg-gradient-to-b from-[#FBFCFE] to-[#F7F9FC] p-5 shadow-[0_20px_50px_rgba(10,16,21,0.08)] md:p-7">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[14px] border border-[#E1E6EC] bg-white p-7 md:p-9"
        >
          <p className="mb-4 inline-flex rounded-full border border-[#CFE7FF] bg-[#EAF4FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A1015]/80">
            Global Operations
          </p>
          <h3 className="mb-4 text-[34px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[42px]">
            Built to support distributed teams.
          </h3>
          <p className="mb-8 text-[15px] leading-[1.75] text-[#4A4F59]">
            Zyene systems and execution support are designed for cross-region operations, so your team can scale
            execution with clarity and consistency.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[10px] border border-[#E1E6EC] bg-[#F7F9FC] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">Coverage</p>
              <p className="mt-1 text-[18px] font-medium text-[#0A1015]">Multi-region</p>
            </div>
            <div className="rounded-[10px] border border-[#E1E6EC] bg-[#F7F9FC] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">Delivery model</p>
              <p className="mt-1 text-[18px] font-medium text-[#0A1015]">Ops + Systems</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[14px] border border-[#E1E6EC] bg-gradient-to-b from-[#F9FBFF] via-[#F6F8FC] to-[#EFF4FA] p-4 md:p-6"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0099FF]/10 to-transparent" />
          <Globe
            className="mx-auto w-full max-w-[470px]"
            markers={MARKERS}
            arcs={ARCS}
            markerColor={[0.18, 0.65, 1]}
            baseColor={[0.92, 0.96, 1]}
            arcColor={[0.2, 0.55, 0.98]}
            glowColor={[0.9, 0.95, 1]}
            dark={0}
            mapBrightness={9}
            markerSize={0.034}
            markerElevation={0.014}
            arcWidth={0.65}
            arcHeight={0.22}
            speed={0.003}
            theta={0.23}
            diffuse={1.15}
            mapSamples={22000}
          />
        </motion.div>
        </div>
      </div>
    </section>
  )
}
