"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const TEAM = [
  {
    name: "Elena Park",
    role: "Head of Product",
    image: "/images/team-1.jpg",
  },
  {
    name: "Marcus Lee",
    role: "CTO & Co-Founder",
    image: "/images/team-2.jpg",
  },
  {
    name: "Nina Alvarez",
    role: "Head of Customer Success",
    image: "/images/team-3.jpg",
  }
]

export function Team() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[13px] font-bold text-[#0A1015] tracking-[0.2em] uppercase mb-4">
            The Team
          </p>
          <h2 className="text-[32px] md:text-[48px] font-normal tracking-[-0.03em] font-display-serif text-[#0A1015]">
            Built by operators, for operators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden mb-5 bg-[#F7F8FA]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-[20px] font-medium text-[#0A1015] mb-0.5">{member.name}</h3>
              <p className="text-[15px] text-[#4D4D4D]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
