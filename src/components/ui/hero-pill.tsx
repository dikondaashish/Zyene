"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroPillProps {
  href?: string;
  label: string;
  announcement?: string;
  className?: string;
  isExternal?: boolean;
}

export function HeroPill({
  href,
  label,
  announcement = "🎉 Milestone",
  className,
  isExternal = false,
}: HeroPillProps) {
  const content = (
    <>
      <div
        className="tw-w-fit tw-rounded-full tw-px-2 tw-py-0.5 tw-text-xs tw-font-medium sm:tw-text-sm tw-text-center"
        style={{ backgroundColor: "#e0e7ff", color: "#6366f1" }}
      >
        {announcement}
      </div>
      <p 
        className="tw-text-xs tw-font-medium sm:tw-text-sm"
        style={{ color: "#6366f1" }}
      >
        {label}
      </p>
      <svg
        width="12"
        height="12"
        className="tw-ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="#6366f1"
        />
      </svg>
    </>
  );

  const pillBaseClasses = cn(
    "tw-flex tw-w-auto tw-items-center tw-space-x-2 tw-rounded-full",
    "tw-px-2 tw-py-1 tw-whitespace-pre",
    className
  );

  const pillStyle = {
    backgroundColor: "rgba(99, 102, 241, 0.2)",
    boxShadow: "0 0 0 1px #e0e7ff",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(pillBaseClasses, "tw-transition-colors tw-duration-300")}
        style={pillStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={pillBaseClasses}
      style={pillStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}
