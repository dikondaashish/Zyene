"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { Turnstile } from "react-turnstile"
import { Reveal, RevealText } from "@/components/ui/Reveal"

const EASE = [0.16, 1, 0.3, 1] as const

const INPUT_CLASS =
  "h-[52px] w-full rounded-[14px] border border-[#0A1015]/12 bg-white px-4 text-[15px] text-[#0A1015] transition-all placeholder:text-[#8A8F98] focus:border-[#0099FF]/70 focus:outline-none focus:ring-2 focus:ring-[#0099FF]/20"

type TalentContactWidgetProps = {
  roleSlug?: string
  roleTitle?: string
}

export function TalentContactWidget({ roleSlug, roleTitle }: TalentContactWidgetProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const reduce = useReducedMotion()
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [notifyOnReopen, setNotifyOnReopen] = React.useState(true)
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null)
  const [turnstileRenderKey, setTurnstileRenderKey] = React.useState(0)
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) {
      setSubmitError("Please complete the security check.")
      return
    }
    setSubmitting(true)
    setSubmitError(null)
    try {
      const response = await fetch("/api/talent-pool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          notifyOnReopen,
          roleSlug,
          roleTitle,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/careers",
          turnstileToken,
        }),
      })
      if (!response.ok) throw new Error("Failed to submit")
      setSubmitted(true)
      setTurnstileToken(null)
    } catch {
      setTurnstileToken(null)
      setTurnstileRenderKey((prev) => prev + 1)
      setSubmitError("We could not save your details just now. Please try again, or email support@zyene.com.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="bg-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText text="Join the talent pool." className="zy-display text-[clamp(34px,4.6vw,64px)] text-[#0A1015]" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[420px] text-[17px] leading-[1.6] text-[#4B525C]">
              Leave your name and email. We review the talent pool every week and reach out when a matching role
              opens.
            </p>
          </Reveal>
        </div>

        <Reveal className="rounded-[24px] border border-line bg-paper p-7 md:p-10">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="done"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                role="status"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1015] text-white">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-6 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#0A1015]">
                  Thanks{name ? `, ${name.split(" ")[0]}` : ""}. You are in the talent pool.
                </p>
                <p className="mt-3 max-w-[480px] text-[15.5px] leading-[1.65] text-[#4B525C]">
                  {notifyOnReopen
                    ? "We will email you if this role reopens or a similar one becomes available."
                    : "We will email you if a matching role becomes available."}
                </p>
                <Link
                  href="/careers#open-roles"
                  className="mt-8 inline-flex text-[14.5px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
                >
                  See open roles
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2.5">
                    <label htmlFor="talent-name" className="text-[13px] font-medium text-[#0A1015]">
                      Full name
                    </label>
                    <input
                      id="talent-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Cooper"
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="talent-email" className="text-[13px] font-medium text-[#0A1015]">
                      Email
                    </label>
                    <input
                      id="talent-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <label className="flex cursor-pointer select-none items-center gap-3 text-[14.5px] text-[#2F343B]">
                  <input
                    type="checkbox"
                    checked={notifyOnReopen}
                    onChange={(e) => setNotifyOnReopen(e.target.checked)}
                    className="h-4 w-4 rounded border border-[#C7D0DA] accent-[#0A1015]"
                  />
                  Email me if this role reopens
                </label>

                {turnstileSiteKey ? (
                  <Turnstile
                    key={turnstileRenderKey}
                    sitekey={turnstileSiteKey}
                    onVerify={(token) => {
                      setTurnstileToken(token)
                      setSubmitError(null)
                    }}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => {
                      setTurnstileToken(null)
                      setSubmitError("The security check could not load. Please refresh and try again.")
                    }}
                    theme="light"
                    size="normal"
                  />
                ) : null}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={submitting || !turnstileToken}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#0A1015] px-7 text-[14.5px] font-medium text-white transition-[background-color,opacity] duration-300 hover:bg-[#1A222B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Saving…" : "Join the talent pool"}
                  </button>
                  <a
                    href="mailto:support@zyene.com?subject=Careers%20inquiry"
                    className="text-[14.5px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
                  >
                    Or email us directly
                  </a>
                </div>
                {submitError ? (
                  <p role="alert" className="text-[13.5px] text-[#B42318]">
                    {submitError}
                  </p>
                ) : null}
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
