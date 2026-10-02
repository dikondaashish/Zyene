"use client"

import { Globe } from "@/components/ui/Globe"
import { Reveal, RevealText } from "@/components/ui/Reveal"

const MARKERS = [
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "missouri", location: [38.5767, -92.1735] as [number, number], label: "Missouri" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "hyderabad", location: [17.385, 78.4867] as [number, number], label: "Hyderabad" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
]

const ARCS = [
  { id: "sf-missouri", from: MARKERS[0].location, to: MARKERS[1].location },
  { id: "missouri-london", from: MARKERS[1].location, to: MARKERS[2].location },
  { id: "london-dubai", from: MARKERS[2].location, to: MARKERS[3].location },
  { id: "dubai-hyderabad", from: MARKERS[3].location, to: MARKERS[4].location },
  { id: "hyderabad-singapore", from: MARKERS[4].location, to: MARKERS[5].location },
]

export function AboutGlobalOperations() {
  return (
    <section className="overflow-hidden border-t border-line bg-white">
      <div className="zy-container zy-section grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <RevealText
            text="Built for distributed teams."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[440px] text-[17px] leading-[1.6] text-[#4B525C]">
              Our team works across North America, Europe, the Middle East, and Asia, so implementation and
              support line up with the hours your operation runs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-10 grid max-w-[440px] grid-cols-2 border-t border-[#0A1015]/15">
              {MARKERS.map((marker) => (
                <li key={marker.id} className="border-b border-[#0A1015]/10 py-3.5 text-[15.5px] text-[#0A1015]">
                  {marker.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <Globe
            className="mx-auto w-full max-w-[560px]"
            markers={MARKERS}
            arcs={ARCS}
            markerColor={[0.18, 0.65, 1]}
            baseColor={[0.94, 0.95, 0.96]}
            arcColor={[0.2, 0.55, 0.98]}
            glowColor={[1, 1, 1]}
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
        </Reveal>
      </div>
    </section>
  )
}
