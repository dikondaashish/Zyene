"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  variant?: "dark" | "light";
}

export function AccordionItem({ title, content, isOpen, onToggle, variant = "dark" }: AccordionItemProps) {
  const isLight = variant === "light"
  return (
    <div className={`border-b ${isLight ? 'border-black/10' : 'border-white/10'} last:border-b-0`}>
      <button
        onClick={onToggle}
        className="w-full py-10 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-[20px] md:text-[24px] font-normal ${isLight ? 'text-[#0A1015]' : 'text-white'} pr-8 tracking-tight group-hover:opacity-80 transition-opacity`}>{title}</span>
        <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0 }}
            className={`absolute w-[18px] h-[2px] ${isLight ? 'bg-[#0A1015]' : 'bg-[#CECFD0]'}`} 
          />
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 90 }}
            className={`absolute w-[18px] h-[2px] ${isLight ? 'bg-[#0A1015]' : 'bg-[#CECFD0]'}`} 
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className={`pb-10 text-[18px] ${isLight ? 'text-[#4A4F59]' : 'text-[#8A8F98]'} leading-[1.5] max-w-[640px]`}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
