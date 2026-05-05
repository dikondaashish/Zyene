"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = {
  primary: "bg-white text-[#0A1015] hover:bg-white/95 backdrop-blur-[4px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)]",
  secondary: "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 backdrop-blur-md",
  outline: "border border-white/10 bg-transparent hover:bg-white/[0.04] text-white",
  ghost: "hover:bg-white/[0.04] text-[#CECFD0] hover:text-white",
  dark: "bg-[#0A1015] text-white hover:bg-[#0A1015]/90 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)]",
}

const sizeVariants = {
  default: "h-[48px] px-6 py-2 text-[15px]",
  sm: "h-[40px] px-5 text-[14px]",
  lg: "h-[58px] px-10 text-[16px]",
  icon: "h-10 w-10",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-[4px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50",
      buttonVariants[variant],
      sizeVariants[size],
      className
    )

    if (asChild && React.isValidElement<{ className?: string }>(children)) {
      return React.cloneElement(children, {
        className: cn(classes, children.props.className),
        ...props,
      })
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={classes}
        {...(props as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
