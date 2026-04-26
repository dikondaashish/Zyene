"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"

type RealNumbersVariant = "default" | "aboutTrustedOutcomes"

type RealNumbersProps = {
  variant?: RealNumbersVariant
}

type RealNumbersContent = {
  eyebrow: string
  heading: string
  card1Value: string
  card1Label: string
  card2Eyebrow: string
  card2Value: string
  card2Label: string
  card3Eyebrow: string
  card3Value: string
  card3Label: string
  card4Eyebrow: string
  card4Value: string
  card4Label: string
}

const CONTENT_BY_VARIANT: Record<RealNumbersVariant, RealNumbersContent> = {
  default: {
    eyebrow: "Real Numbers",
    heading: "Automation that pays for itself, fast",
    card1Value: "3x",
    card1Label: "Average ROI",
    card2Eyebrow: "efficiency",
    card2Value: "60%+",
    card2Label: "Operational efficiency gains",
    card3Eyebrow: "hours",
    card3Value: "20k+",
    card3Label: "Total hours saved annually",
    card4Eyebrow: "sucess client",
    card4Value: "300+",
    card4Label: "Trusted clients worldwide",
  },
  aboutTrustedOutcomes: {
    eyebrow: "Trusted Outcomes",
    heading: "Execution outcomes you can measure",
    card1Value: "30-50%",
    card1Label: "Average manual time saved",
    card2Eyebrow: "speed",
    card2Value: "2.3x",
    card2Label: "Faster workflow execution",
    card3Eyebrow: "quality",
    card3Value: "40%",
    card3Label: "Process error reduction",
    card4Eyebrow: "response",
    card4Value: "<24h",
    card4Label: "Typical turnaround time",
  },
}

export function RealNumbers({ variant = "default" }: RealNumbersProps) {
  const content = CONTENT_BY_VARIANT[variant]

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[12px] font-bold text-[#8A8F98] tracking-[0.2em] uppercase mb-4">
            {content.eyebrow}
          </p>
          <h2 className="text-[36px] md:text-[54px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] font-display-serif max-w-[800px] mx-auto">
            {content.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: ROI - Centered Dark Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0A1015] rounded-[12px] p-9 flex flex-col items-center justify-between min-h-[340px] text-center shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image src={SITE_DATA.logoDark} alt="Zyene Logo" fill className="object-contain" />
              </div>
              <span className="text-white font-semibold text-[20px] tracking-tight">Zyene</span>
            </div>

            <div className="my-auto">
              <h3 className="text-[72px] md:text-[84px] font-normal text-white leading-none font-display-serif">
                {content.card1Value}
              </h3>
            </div>

            <p className="text-white/60 text-[15px] font-medium uppercase tracking-wider">
              {content.card1Label}
            </p>
          </motion.div>

          {/* Card 2: Efficiency - Top Left/Right Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F5F5F5] rounded-[12px] p-9 flex flex-col justify-between min-h-[340px] shadow-sm"
          >
            <div>
              <p className="text-[13px] font-bold text-[#8A8F98] uppercase tracking-widest mb-4">{content.card2Eyebrow}</p>
              <h3 className="text-[64px] md:text-[72px] font-normal text-[#0A1015] leading-none font-display-serif">
                {content.card2Value}
              </h3>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-[#4A4F59] text-[15px] max-w-[160px] leading-snug">
                {content.card2Label}
              </p>
              <div className="text-[#0A1015] opacity-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 6V12L16 14" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Hours Saved - Top Left/Right Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F5F5F5] rounded-[12px] p-9 flex flex-col justify-between min-h-[340px] shadow-sm"
          >
            <div>
              <p className="text-[13px] font-bold text-[#8A8F98] uppercase tracking-widest mb-4">{content.card3Eyebrow}</p>
              <h3 className="text-[54px] md:text-[62px] font-normal text-[#0A1015] leading-none font-display-serif">
                {content.card3Value}
              </h3>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-[#4A4F59] text-[15px] max-w-[160px] leading-snug">
                {content.card3Label}
              </p>
              <div className="text-[#0A1015] opacity-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Clients - Social Proof Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F5F5F5] rounded-[12px] p-9 flex flex-col justify-between min-h-[340px] shadow-sm border border-transparent hover:border-[#0099FF]/10 transition-colors"
          >
            <div>
              <p className="text-[13px] font-bold text-[#8A8F98] uppercase tracking-widest mb-4">{content.card4Eyebrow}</p>
              <h3 className="text-[64px] md:text-[72px] font-normal text-[#0A1015] leading-none font-display-serif">
                {content.card4Value}
              </h3>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-[#4A4F59] text-[15px] max-w-[160px] leading-snug">
                {content.card4Label}
              </p>
              <div className="text-[#0A1015] opacity-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
