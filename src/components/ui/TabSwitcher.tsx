"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  className?: string;
}

export function TabSwitcher({ tabs, className }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)

  return (
    <div className={cn("w-full flex flex-col md:flex-row gap-8", className)}>
      <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 md:w-1/3 hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-4 text-left rounded-xl transition-all whitespace-nowrap md:whitespace-normal",
              activeTab === tab.id
                ? "text-white"
                : "text-brand-textMuted hover:text-white hover:bg-brand-border/30"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-brand-border rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="md:w-2/3 relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {tab.content}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
