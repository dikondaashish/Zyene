"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

const USE_CASES = [
  {
    id: "marketing-automation",
    label: "Marketing automation",
    preHeading: "Marketing Automation",
    title: "Faster marketing execution with Zyene",
    outcome: "Launch and optimize campaigns faster with an embedded Zyene team.",
    whyItMatters: "Scale output without hiring a large in-house team. Zyene combines people and systems for consistent execution.",
    workflow: [
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ), 
        text: "Zyene sets up and runs campaigns end-to-end" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        ), 
        text: "We monitor performance and improve results weekly" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        ), 
        text: "Your team gets clear updates with minimal coordination" 
      }
    ]
  },
  {
    id: "crm-automation",
    label: "CRM automation",
    preHeading: "CRM Automation",
    title: "CRM operations run by your extended team",
    outcome: "Improve follow-up speed and conversion quality while Zyene runs the workflow.",
    whyItMatters: "Keep your pipeline clean and active with Zyene as your execution and tech partner.",
    workflow: [
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        ), 
        text: "We set up lead capture, enrichment, and routing" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        ), 
        text: "Zyene manages assignment, stage movement, and follow-ups" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        ), 
        text: "You get clear visibility while records and handoffs stay updated" 
      }
    ]
  },
  {
    id: "ai-voice-agents",
    label: "AI voice agents",
    preHeading: "AI Voice Agents",
    title: "AI voice support with human oversight",
    outcome: "Handle routine calls reliably while Zyene configures and improves call quality.",
    whyItMatters: "Get automation with accountability for faster customer response without added complexity.",
    workflow: [
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ), 
        text: "We deploy voice agents for inbound and outbound workflows" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        ), 
        text: "Zyene reviews call flows, prompts, and escalation paths" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        ), 
        text: "Call outcomes are tracked and shared for faster action" 
      }
    ]
  },
  {
    id: "workflow-automation",
    label: "Workflow automation",
    preHeading: "Workflow Automation",
    title: "Daily operations streamlined with Zyene",
    outcome: "Cut delays and manual follow-ups with workflows Zyene builds and runs.",
    whyItMatters: "We design, implement, and support operations so your team can focus on decisions.",
    workflow: [
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18 7l-7.1 7.1-3.7-3.7L3.1 14.6"></path>
          </svg>
        ), 
        text: "We map repeated work into practical automation flows" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        ), 
        text: "Zyene adds approvals, ownership rules, and escalation logic" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ), 
        text: "Your team gets clear status, tasks, and next actions" 
      }
    ]
  },
  {
    id: "industry-specific-systems",
    label: "Industry-specific systems",
    preHeading: "Industry-Specific Systems",
    title: "Custom industry systems with Zyene consulting",
    outcome: "Deploy industry-fit systems with Zyene support, not generic templates.",
    whyItMatters: "Get implementation plus execution support so systems work in real operating conditions.",
    workflow: [
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        ), 
        text: "We audit industry workflows and prioritize automation first" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        ), 
        text: "Zyene designs systems around your exact process constraints" 
      },
      { 
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        ), 
        text: "We stay your execution partner as your business scales" 
      }
    ]
  }
]

function UseCaseCard({ useCase }: { useCase: typeof USE_CASES[0] }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      id={useCase.id} 
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-32"
    >
      <div className="max-w-[700px]">
        <p className="text-[14px] font-bold text-[#0A1015] tracking-[0.1em] uppercase mb-4">
          {useCase.preHeading}
        </p>
        <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.02em] text-[#0A1015] mb-10 font-display-serif">
          {useCase.title}
        </h2>

        <div className="space-y-10 mb-10">
          {/* Outcome */}
          <div>
            <h4 className="text-[16px] font-bold text-[#0A1015] uppercase tracking-wider mb-3">Outcome</h4>
            <p className="text-[18px] text-[#4D4D4D] leading-[1.6]">
              {useCase.outcome}
            </p>
          </div>

          {/* Why It Matters */}
          <div>
            <h4 className="text-[16px] font-bold text-[#0A1015] uppercase tracking-wider mb-3">Why it matters</h4>
            <p className="text-[18px] text-[#4D4D4D] leading-[1.6]">
              {useCase.whyItMatters}
            </p>
          </div>

          {/* Workflow */}
          <div>
            <h4 className="text-[16px] font-bold text-[#0A1015] uppercase tracking-wider mb-6">Workflow</h4>
            <div className="space-y-5">
              {useCase.workflow.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center text-[#000000] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-[17px] text-[#4D4D4D] leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button variant="dark" size="lg" className="px-10 rounded-[8px]" asChild>
          <Link href="/contact">Book a Strategy Call</Link>
        </Button>
      </div>
    </motion.div>
  )
}

export function UseCasesList() {
  const [activeId, setActiveId] = React.useState(USE_CASES[0].id)
  const sectionRef = React.useRef<HTMLDivElement | null>(null)
  const leftColRef = React.useRef<HTMLDivElement | null>(null)
  const navRef = React.useRef<HTMLDivElement | null>(null)
  const [navMode, setNavMode] = React.useState<"top" | "fixed" | "bottom">("top")
  const [fixedLeft, setFixedLeft] = React.useState(0)
  const [fixedWidth, setFixedWidth] = React.useState(288)

  React.useEffect(() => {
    const updateActiveId = () => {
      const targetY = window.innerHeight * 0.35
      let nextActiveId = USE_CASES[0].id
      let bestDistance = Number.POSITIVE_INFINITY

      for (const useCase of USE_CASES) {
        const el = document.getElementById(useCase.id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top - targetY)
        if (distance < bestDistance) {
          bestDistance = distance
          nextActiveId = useCase.id
        }
      }

      setActiveId(nextActiveId)
    }

    updateActiveId()
    window.addEventListener("scroll", updateActiveId, { passive: true })
    window.addEventListener("resize", updateActiveId)

    return () => {
      window.removeEventListener("scroll", updateActiveId)
      window.removeEventListener("resize", updateActiveId)
    }
  }, [])

  React.useEffect(() => {
    const updateNavPosition = () => {
      if (!sectionRef.current || !leftColRef.current || !navRef.current) return

      const topOffset = 128
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const leftRect = leftColRef.current.getBoundingClientRect()
      const navHeight = navRef.current.offsetHeight

      setFixedLeft(leftRect.left)
      setFixedWidth(leftRect.width)

      if (sectionRect.top > topOffset) {
        setNavMode("top")
        return
      }

      if (sectionRect.bottom <= topOffset + navHeight) {
        setNavMode("bottom")
        return
      }

      setNavMode("fixed")
    }

    updateNavPosition()
    window.addEventListener("scroll", updateNavPosition, { passive: true })
    window.addEventListener("resize", updateNavPosition)
    return () => {
      window.removeEventListener("scroll", updateNavPosition)
      window.removeEventListener("resize", updateNavPosition)
    }
  }, [])

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* Mobile/Tablet Sticky Nav */}
      <div className="md:hidden sticky top-20 z-20 -mx-6 px-6 py-4 mb-8 bg-white/95 backdrop-blur-md border-y border-[#E5E5E5]">
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar">
          {USE_CASES.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => {
                const el = document.getElementById(useCase.id)
                if (el) {
                  const offset = 140
                  const bodyRect = document.body.getBoundingClientRect().top
                  const elementRect = el.getBoundingClientRect().top
                  const elementPosition = elementRect - bodyRect
                  const offsetPosition = elementPosition - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full border text-[13px] font-medium transition-all duration-300 ${
                activeId === useCase.id
                  ? "bg-[#0A1015] border-[#0A1015] text-white"
                  : "bg-white border-[#E5E5E5] text-[#8A8F98]"
              }`}
            >
              {useCase.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={sectionRef} className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-start gap-12 lg:gap-24 relative">
        
        {/* Left Column: Sticky Nav (30% width roughly) */}
        <div ref={leftColRef} className="hidden md:block w-72 flex-shrink-0 self-start relative">
          <div
            ref={navRef}
            className="h-fit flex flex-col gap-8 z-10"
            style={{
              position: navMode === "fixed" ? "fixed" : "absolute",
              top: navMode === "fixed" ? 128 : navMode === "top" ? 0 : "auto",
              bottom: navMode === "bottom" ? 0 : "auto",
              left: navMode === "fixed" ? fixedLeft : 0,
              width: fixedWidth,
            }}
          >
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.id}
                className="transition-opacity duration-300"
                style={{ opacity: activeId === useCase.id ? 1 : 0.5 }}
              >
                <a
                  href={`/use-cases#${useCase.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById(useCase.id)
                    if (el) {
                      const offset = 120
                      const bodyRect = document.body.getBoundingClientRect().top
                      const elementRect = el.getBoundingClientRect().top
                      const elementPosition = elementRect - bodyRect
                      const offsetPosition = elementPosition - offset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                      window.history.replaceState(null, "", `/use-cases#${useCase.id}`)
                    }
                  }}
                  className="flex items-center gap-4 text-left group w-full"
                >
                  <div className="w-2.5 h-2.5 rounded-[10px] bg-[#0A1015] transition-all duration-300" />
                  <span className="text-[16px] font-medium text-[#0A1015] transition-all duration-300">
                    {useCase.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px bg-[#E5E5E5] self-stretch" />

        {/* Right Column: Cards */}
        <div className="flex-1 flex flex-col gap-40 pb-40">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
