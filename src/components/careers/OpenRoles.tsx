"use client"

import { motion } from "framer-motion"
import Link from "next/link"

function toCareerSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u2012-\u2015]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const ROLES = [
  { title: "AI Solutions Engineer", location: "SF, NY, Remote" },
  { title: "Product Designer (UX/UI)", location: "SF, NY, Remote" },
  { title: "Customer Success Manager", location: "SF, NY, Remote" },
  { title: "Marketing Lead – B2B SaaS", location: "SF, NY, Remote" },
  { title: "Data Analyst", location: "SF, NY, Remote", href: "https://binary.so/izp2HB1" },
  { title: "Software Engineer", location: "SF, NY, Remote", href: "https://binary.so/d6WE4zX" },
  { title: "Full Stack Developer (Internship/Full Time)", location: "SF, NY, BLR, Hyd, Remote", href: "https://binary.so/SUjsovx" },
  { title: "AI Engineer", location: "SF, NY, Remote", href: "https://binary.so/1PkZTMT" },
  { title: "AI Engineer Intern", location: "SF, NY, Remote", href: "https://binary.so/TCJFdx8" },
  { title: "Data Analyst Intern", location: "SF, NY, Remote", href: "https://binary.so/KuVmvVW" },
]

export function OpenRoles() {
  const LABEL_TOP_OFFSET = 164
  const LABEL_SIDE_OFFSET = 20

  return (
    <section className="bg-white border-t border-[#EEEEEE]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-start min-h-[600px] relative">
        
        {/* Left: Pre-Heading Section */}
        <div className="w-full md:w-[320px] pt-16 md:pt-24 px-8 md:px-12 flex flex-col items-start md:self-start relative">
          <div
            className="h-fit z-10 md:sticky"
            style={{
              top: LABEL_TOP_OFFSET,
              marginLeft: LABEL_SIDE_OFFSET,
            }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[14px] font-bold text-[#0A1015] tracking-[0.05em] uppercase"
            >
              Open Roles
            </motion.p>
          </div>
        </div>

        {/* Vertical Divider Line — matching framer-xckc4f */}
        <div className="hidden md:block w-px bg-[#EEEEEE] self-stretch" />

        {/* Right: Positions Wrapper */}
        <div className="flex-1 flex flex-col pt-16 md:pt-24">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <Link 
                href={role.href || `/careers/${toCareerSlug(role.title)}`}
                className="group flex items-center justify-between py-5 md:py-6 px-6 md:px-20 transition-all duration-300 border-b border-[#EEEEEE] last:border-b-0"
              >
                {/* Title */}
                <h4 className="text-[18px] md:text-[24px] font-normal text-[#0A1015] tracking-tight transition-all duration-300 group-hover:opacity-80">
                  {role.title}
                </h4>
                
                {/* CTA Wrapper (Text + Arrow) */}
                <div className="flex items-center gap-4 md:gap-6 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[14px] text-[#3D4145] font-medium transition-colors">
                    {role.location}
                  </span>
                  
                  {/* Exact Arrow SVG from Framer source */}
                  <div className="w-[16px] h-[16px] flex items-center justify-center text-[#0A1015]">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M 0.927 11 L 0 10.073 L 8.733 1.331 L 0.794 1.331 L 0.794 0 L 11 0 L 11 10.206 L 9.669 10.206 L 9.669 2.266 Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Border Accent — matching framer-z1g3kc */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0A1015] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
