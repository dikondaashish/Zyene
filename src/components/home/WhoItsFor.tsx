"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AUDIENCES = [
  {
    title: "Growing businesses",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-8",
  },
  {
    title: "Agencies",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-4",
  },
  {
    title: "E-commerce brands",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-4",
  },
  {
    title: "Service companies",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-4",
  },
  {
    title: "Startups scaling operations",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-4",
  },
]

export function WhoItsFor() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-bold text-[#8A8F98] tracking-[0.2em] uppercase mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-[36px] md:text-[54px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] font-display-serif max-w-[800px] mx-auto">
            Built for teams ready to scale with better systems
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {AUDIENCES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[16px] bg-[#F7F8FA] min-h-[280px] md:min-h-[320px] shadow-sm hover:shadow-xl transition-all duration-500 ${item.colSpan}`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/90 via-[#0A1015]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-[2px] bg-white/60" />
                </div>
                <h3 className="text-[24px] md:text-[28px] text-white font-normal leading-[1.2] font-display-serif transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
