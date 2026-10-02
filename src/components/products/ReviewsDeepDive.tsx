"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { REVEAL_VIEWPORT } from "@/lib/motion"

const steps = [
  {
    step: "1",
    title: "Connect the accounts you already have",
    description:
      "Google Business Profile and the other review sources you use. We only request the permissions needed to read reviews and draft replies.",
  },
  {
    step: "2",
    title: "See new feedback",
    description:
      "New reviews surface in one place. Low ratings can be flagged so someone on your team can look at them first.",
  },
  {
    step: "3",
    title: "Reply, then ask the next customer",
    description:
      "Draft a reply for a person to send, and send a follow-up request after a completed job so the ask is not left to memory.",
  },
]

const capabilities = [
  {
    title: "One place to read reviews",
    text: "Google, Facebook, Yelp, and the other sources you connect, instead of checking each one by hand.",
  },
  {
    title: "A draft, not a published reply",
    text: "AI prepares a reply in your voice. Someone on your team can edit and send it.",
  },
  {
    title: "Ask after the work is done",
    text: "Email or SMS after a job, so collecting service feedback is not a separate chore on the desk.",
  },
  {
    title: "Visible to the people who own the job",
    text: "Alerts can go to operators and managers when a review needs a person, not a campaign dashboard nobody opens.",
  },
]

export function ReviewsDeepDive() {
  return (
    <section id="zyene-reviews" className="border-t border-[#E7ECF2] bg-white px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px] space-y-16">
        <div className="grid items-center gap-8 rounded-[20px] border border-[#E4E8EE] bg-[#F8FAFD] p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <div className="rounded-[12px] border border-[#E4E8EE] bg-white p-4">
            <Image
              src="/images/zyene-reviews.png"
              alt="Zyene Reviews logo"
              width={540}
              height={137}
              className="h-auto w-full max-w-[520px] rounded-[6px]"
              priority
            />
          </div>
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">Zyene Reviews</p>
            <h2 className="mb-4 text-[36px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[56px]">
              Built because asking for feedback was too easy to skip
            </h2>
            <p className="text-[16px] leading-[1.75] text-[#4A4F59]">
              After a job, someone still had to remember to request a review and then watch three websites for the
              reply. Zyene Reviews is that internal process, opened so other operators can use it.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">How it works</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-[#E2E7EE] bg-[#F8FAFD] p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A1015] text-[13px] font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 text-[22px] text-[#0A1015]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[#4A4F59]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">What it does</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {capabilities.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-[#E2E7EE] bg-[#F8FAFD] p-6"
              >
                <h3 className="mb-2 text-[22px] text-[#0A1015]">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#4A4F59]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
