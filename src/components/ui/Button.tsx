"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = {
  primary:
    "bg-[#F4F5F2] text-[#0A1015] hover:bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_30px_-12px_rgba(0,0,0,0.45)]",
  secondary:
    "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/15 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
  outline:
    "border border-[#0A1015]/15 bg-transparent text-[#0A1015] hover:border-[#0A1015]/40 hover:bg-[#0A1015]/[0.03]",
  ghost: "text-[#CECFD0] hover:text-white hover:bg-white/[0.06]",
  dark:
    "bg-[#0A1015] text-white hover:bg-[#1B252F] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-14px_rgba(10,16,21,0.55)]",
}

const sizeVariants = {
  default: "h-12 px-6 text-[15px]",
  sm: "h-10 px-5 text-[14px]",
  lg: "h-14 px-8 text-[15px]",
  icon: "h-10 w-10",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild, children, ...props }, ref) => {
    const classes = cn(
      "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.005em] whitespace-nowrap",
      "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out-expo active:scale-[0.98]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      "disabled:pointer-events-none disabled:opacity-50",
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
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
