"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    step: "1",
    title: "Connect",
    description:
      "Securely connect your Google Business Profile. We only request the permissions needed for review monitoring and replies.",
  },
  {
    step: "2",
    title: "Get Alerted",
    description:
      "Receive instant alerts when new reviews arrive. AI checks sentiment and flags urgent low-rating reviews fast.",
  },
  {
    step: "3",
    title: "Reply & Grow",
    description:
      "Use one-tap AI reply suggestions and automatically ask happy customers for more reviews.",
  },
]

const capabilities = [
  {
    title: "Real-time monitoring",
    text: "Track Google, Facebook, and Yelp reviews in one dashboard so your team never misses a customer signal.",
  },
  {
    title: "Smart response workflow",
    text: "Generate AI-assisted replies, review them quickly, and publish with your team’s brand voice and standards.",
  },
  {
    title: "Campaign automation",
    text: "Send post-service email and SMS requests automatically to increase review volume from happy customers.",
  },
  {
    title: "Team visibility",
    text: "Share alerts with operators and managers so negative feedback gets resolved before it impacts reputation.",
  },
]

const outcomes = [
  { metric: "< 15 min", label: "to detect and triage new reviews" },
  { metric: "2x faster", label: "response turnaround for critical feedback" },
  { metric: "Higher trust", label: "from consistent public replies and follow-up" },
]

export function ReviewsDeepDive() {
  return (
    <section id="zyene-reviews" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-[#E7ECF2]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center rounded-[20px] border border-[#E4E8EE] bg-[#F8FAFD] p-6 md:p-8">
          <div className="rounded-[12px] bg-white border border-[#E4E8EE] p-4">
            <Image
              src="/images/image.png"
              alt="Zyene Reviews logo"
              width={540}
              height={137}
              className="h-auto w-full max-w-[520px] rounded-[6px]"
              priority
            />
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Zyene Reviews</p>
            <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] mb-4">
              Built for daily reputation operations
            </h2>
            <p className="text-[16px] text-[#4A4F59] leading-[1.75]">
              Zyene Reviews helps local teams monitor feedback, respond quickly, and run repeatable review growth campaigns without switching tools.
            </p>
          </div>
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">How it works</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-[#E2E7EE] bg-[#F8FAFD] p-6"
              >
                <div className="w-8 h-8 rounded-full bg-[#0A1015] text-white text-[13px] font-semibold flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-[22px] text-[#0A1015] mb-3">{item.title}</h3>
                <p className="text-[15px] text-[#4A4F59] leading-[1.65]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Core capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-[#E2E7EE] bg-[#F8FAFD] p-6"
              >
                <h3 className="text-[22px] text-[#0A1015] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#4A4F59] leading-[1.7]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="rounded-[18px] border border-[#E2E7EE] bg-[#F8FAFD] p-6 md:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-5">Operational outcomes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outcomes.map((item) => (
              <div key={item.metric} className="rounded-[10px] border border-[#DFE5EE] bg-white p-5">
                <p className="text-[28px] tracking-[-0.02em] text-[#0A1015] mb-2">{item.metric}</p>
                <p className="text-[14px] text-[#4A4F59] leading-[1.6]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
