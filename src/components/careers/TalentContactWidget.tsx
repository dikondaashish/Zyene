"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Turnstile } from "react-turnstile"

type TalentContactWidgetProps = {
  roleSlug?: string
  roleTitle?: string
}

export function TalentContactWidget({ roleSlug, roleTitle }: TalentContactWidgetProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [notifyOnReopen, setNotifyOnReopen] = React.useState(true)
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const mailtoHref = React.useMemo(() => {
    const subject = encodeURIComponent("Career Interest - Keep Me in Mind")
    const body = encodeURIComponent(
      `Hi Zyene Team,\n\nIf relevant openings come up, please contact me.\n\nName: ${name || "[Your Name]"}\nEmail: ${email || "[Your Email]"}\nNotify me when this role reopens: ${notifyOnReopen ? "Yes" : "No"}\n\nThank you.`
    )
    return `mailto:support@zyene.com?subject=${subject}&body=${body}`
  }, [name, email, notifyOnReopen])

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
          name,
          email,
          notifyOnReopen,
          roleSlug,
          roleTitle,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/careers",
          turnstileToken,
        }),
      })

      if (!response.ok) {
        const errorData = (await response.json().catch(() => null)) as
          | { error?: string; errorCode?: number }
          | null

        if (errorData?.errorCode === 2884) {
          throw new Error(
            "Setup needed: your Zoho Sheet requires a header row (created_at, full_name, email, notify_when_reopen, role_slug, role_title, source_page, status)."
          )
        }

        if (errorData?.error) {
          throw new Error(errorData.error)
        }

        throw new Error("Failed to submit")
      }

      setSubmitted(true)
      setTurnstileToken(null)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not save your info right now. Please try again."
      setSubmitError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const confettiDots = React.useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${8 + ((i * 7) % 84)}%`,
        delay: i * 0.04,
        duration: 0.55 + (i % 4) * 0.08,
      })),
    []
  )

  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[980px]">
        <div className="relative [perspective:1400px]">
          <motion.div
            animate={{ rotateY: submitted ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[420px] [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 rounded-[14px] border border-[#E1E6EC] bg-[#F7F9FC] p-6 md:p-8 shadow-[0_10px_30px_rgba(10,16,21,0.06)] [backface-visibility:hidden]">
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">
                Stay Connected
              </p>
              <h3 className="mb-2 text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0A1015]">
                Share your name and email
              </h3>
              <p className="mb-6 text-[15px] leading-[1.6] text-[#4A4F59]">
                If we have a matching role later, we will contact you.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="h-12 rounded-[8px] border border-[#DDE3EA] bg-white px-4 text-[#0A1015] placeholder:text-[#8A8F98] focus:outline-none focus:ring-2 focus:ring-[#0099FF]/25 focus:border-[#0099FF]/70 transition-all"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="h-12 rounded-[8px] border border-[#DDE3EA] bg-white px-4 text-[#0A1015] placeholder:text-[#8A8F98] focus:outline-none focus:ring-2 focus:ring-[#0099FF]/25 focus:border-[#0099FF]/70 transition-all"
                  />
                </div>

                <label className="mb-5 inline-flex items-center gap-3 text-[14px] text-[#2F343B] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={notifyOnReopen}
                    onChange={(e) => setNotifyOnReopen(e.target.checked)}
                    className="h-4 w-4 rounded border border-[#C7D0DA] text-[#0A1015] focus:ring-2 focus:ring-[#0099FF]/25"
                  />
                  Notify me when this role reopens.
                </label>

                {turnstileSiteKey ? (
                  <div className="mb-5">
                    <Turnstile
                      sitekey={turnstileSiteKey}
                      onVerify={(token) => {
                        setTurnstileToken(token)
                        setSubmitError(null)
                      }}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => {
                        setTurnstileToken(null)
                        setSubmitError("Security check failed. Please retry.")
                      }}
                      theme="light"
                      size="normal"
                    />
                  </div>
                ) : (
                  <p className="mb-5 text-[13px] text-[#B42318]">
                    Security check is not configured yet. Please add `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#0A1015] px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#111A23]"
                  >
                    {submitting ? "Saving..." : "Join Talent Pool"}
                  </button>

                  <Link
                    href="/careers"
                    className="inline-flex h-12 items-center justify-center rounded-[8px] border border-[#D5DDE6] bg-white px-6 text-[14px] font-medium text-[#0A1015] transition-colors hover:bg-[#F4F7FA]"
                  >
                    View Open Roles
                  </Link>

                  <a
                    href="mailto:support@zyene.com?subject=Careers%20Inquiry"
                    className="inline-flex h-12 items-center justify-center rounded-[8px] border border-transparent px-3 text-[14px] font-medium text-[#0A1015]/85 transition-colors hover:text-[#0A1015]"
                  >
                    Email Recruiting
                  </a>
                </div>
                {submitError ? (
                  <p className="mt-3 text-[13px] text-[#B42318]">{submitError}</p>
                ) : null}
              </form>
            </div>

            <div className="absolute inset-0 rounded-[14px] border border-[#E1E6EC] bg-[#F7F9FC] p-6 md:p-8 shadow-[0_10px_30px_rgba(10,16,21,0.06)] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              {submitted &&
                confettiDots.map((dot) => (
                  <motion.span
                    key={dot.id}
                    initial={{ opacity: 0, y: -18, scale: 0.7 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 34, 56], scale: [0.7, 1, 0.9] }}
                    transition={{
                      duration: dot.duration,
                      delay: dot.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="pointer-events-none absolute top-4 h-2 w-2 rounded-full"
                    style={{
                      left: dot.left,
                      backgroundColor: dot.id % 3 === 0 ? "#0099FF" : dot.id % 2 === 0 ? "#0A1015" : "#8A8F98",
                    }}
                  />
                ))}
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">
                Stay Connected
              </p>
              <h3 className="mb-2 text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0A1015]">
                Thanks! We received your interest.
              </h3>
              <p className="mb-6 text-[15px] leading-[1.6] text-[#4A4F59]">
                Expected follow-up timeline: if a relevant role opens, our recruiting team usually reviews talent pool profiles weekly and reaches out by email.
              </p>

              <div className="mb-6 rounded-[10px] border border-[#D8E0E8] bg-white p-4 md:p-5">
                <p className="text-[14px] leading-[1.6] text-[#4A4F59]">
                  We captured interest for <span className="font-medium text-[#0A1015]">{name || "your profile"}</span>. If you opted in, we will notify you when this role reopens.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#0A1015] px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#111A23]"
                >
                  Email Recruiting
                </a>

                <Link
                  href="/careers"
                  className="inline-flex h-12 items-center justify-center rounded-[8px] border border-[#D5DDE6] bg-white px-6 text-[14px] font-medium text-[#0A1015] transition-colors hover:bg-[#F4F7FA]"
                >
                  View Open Roles
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
