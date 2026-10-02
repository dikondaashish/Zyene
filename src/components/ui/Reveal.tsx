"use client"

import * as React from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { REVEAL_VIEWPORT } from "@/lib/motion"

const EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  as?: "div" | "li" | "article" | "section"
}

export function Reveal({ delay = 0, y = 24, as = "div", children, ...props }: RevealProps) {
  const reduce = useReducedMotion()
  const Component = motion[as] as typeof motion.div
  return (
    <Component
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function RevealText({
  text,
  className,
  delay = 0,
  as = "h2",
}: {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3"
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {text}
    </Tag>
  )
}
