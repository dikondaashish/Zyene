"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Turnstile } from "react-turnstile"
import { type ContactFieldErrors, isValidEmail, validateContactInput } from "@/lib/validators"

export function ContactHero() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [workEmailValue, setWorkEmailValue] = useState("")
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileRenderKey, setTurnstileRenderKey] = useState(0)

  const clearFieldError = (name: string) => {
    if (!(name in fieldErrors)) return
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[name as keyof ContactFieldErrors]
      return next
    })
  }

  const normalizedWorkEmail = workEmailValue.trim()
  const hasTypedWorkEmail = normalizedWorkEmail.length > 0
  const isWorkEmailFormatValid = hasTypedWorkEmail && isValidEmail(normalizedWorkEmail)
  const isSubmitBlockedByEmail = !hasTypedWorkEmail || !isWorkEmailFormatValid || Boolean(fieldErrors.workEmail)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitError(null)
    setSubmitSuccess(null)
    setFieldErrors({})

    if (!turnstileToken) {
      setSubmitError("Please complete the security check.")
      return
    }

    const formData = new FormData(form)
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      workEmail: String(formData.get("workEmail") || ""),
      company: String(formData.get("company") || ""),
      jobTitle: String(formData.get("jobTitle") || ""),
      phone: String(formData.get("phone") || ""),
      country: String(formData.get("country") || ""),
      helpType: String(formData.get("helpType") || ""),
      message: String(formData.get("message") || ""),
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
      turnstileToken,
    }

    const errors = validateContactInput(payload)

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setSubmitError("Please fix the highlighted fields.")
      return
    }

    setSubmitting(true)
    try {
      // Client-side Web3Forms call (free-plan compatible).
      if (web3FormsAccessKey) {
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: web3FormsAccessKey,
              subject: `New Contact Lead - ${payload.helpType}`,
              from_name: "Zyene Website Contact Form",
              full_name: payload.fullName,
              work_email: payload.workEmail,
              company: payload.company,
              job_title: payload.jobTitle,
              phone: payload.phone,
              country: payload.country,
              help_type: payload.helpType,
              message: payload.message,
              source_page: payload.sourcePage,
            }),
          })
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = (await response.json().catch(() => null)) as { error?: string } | null
      if (!response.ok) {
        if (data?.error?.length && data.error.toLowerCase().includes("email")) {
          setFieldErrors((prev) => ({ ...prev, workEmail: data.error as string }))
        }
        throw new Error(data?.error || "Could not submit your request right now.")
      }

      form.reset()
      setTurnstileToken(null)
      setTurnstileRenderKey((prev) => prev + 1)
      setSubmitSuccess("Thanks! We received your message and will be in touch shortly.")
    } catch (error) {
      setTurnstileToken(null)
      setTurnstileRenderKey((prev) => prev + 1)
      setSubmitError(error instanceof Error ? error.message : "Could not submit your request right now.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#0A1015] pb-24 pt-32 text-white md:pb-32 md:pt-40">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/industrial/cta-district.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-60"
          priority
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,21,0.95)_0%,rgba(10,16,21,0.75)_50%,rgba(10,16,21,0.55)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.7)_0%,rgba(10,16,21,0)_35%,rgba(10,16,21,0)_65%,#0A1015_100%)]" />
      <div aria-hidden="true" className="zy-grain absolute inset-0" />

      <div className="zy-container relative z-10 grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-12 lg:sticky lg:top-32">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-2 text-[13px] text-white/60"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Zyene
              </Link>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-white">Assessment</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="zy-display text-[clamp(44px,6.4vw,92px)] text-white"
            >
              Book an AI workflow assessment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-[480px] text-[17px] leading-[1.6] text-white/70 md:text-[18px]"
            >
              Tell us where work still moves by hand between email, documents, and your ERP. We will map the workflow and recommend a pilot.
            </motion.p>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10">
            {[
              { Icon: Mail, label: "Email", value: "support@zyene.com", href: "mailto:support@zyene.com" },
              { Icon: Phone, label: "Phone", value: "+1 (415) 409-9798", href: "tel:+14154099798" },
              { Icon: MapPin, label: "Office", value: "28 Geary St Ste 650 #1892, San Francisco, CA 94108" },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 bg-[#0A1015]/80 px-6 py-5 backdrop-blur-xl">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <Icon className="h-4 w-4 text-white/80" strokeWidth={1.6} />
                </span>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{label}</dt>
                  <dd className="mt-1 text-[15.5px] text-white/90">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-white">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:p-11"
        >
          <form
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit}
            onChange={(event) => clearFieldError((event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).name)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="fullName" className="text-[13px] font-medium text-white/90">Full name *</label>
                <input 
                  id="fullName"
                  name="fullName"
                  type="text" 
                  required
                  autoComplete="name"
                  placeholder="Jane Cooper"
                  aria-invalid={Boolean(fieldErrors.fullName)}
                  className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none transition-all ${
                    fieldErrors.fullName
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                />
                {fieldErrors.fullName ? <p className="text-[12px] text-[#F97066]">{fieldErrors.fullName}</p> : null}
              </div>
              <div className="space-y-2.5">
                <label htmlFor="workEmail" className="text-[13px] font-medium text-white/90">Work email *</label>
                <input 
                  id="workEmail"
                  name="workEmail"
                  type="email" 
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  aria-invalid={Boolean(fieldErrors.workEmail)}
                  onChange={(event) => {
                    const value = event.currentTarget.value
                    setWorkEmailValue(value)
                    const trimmed = value.trim()
                    if (!trimmed) {
                      setFieldErrors((prev) => {
                        if (!prev.workEmail) return prev
                        const next = { ...prev }
                        delete next.workEmail
                        return next
                      })
                      return
                    }

                    if (!isValidEmail(trimmed)) {
                      setFieldErrors((prev) => ({
                        ...prev,
                        workEmail: "Please enter a valid work email address.",
                      }))
                      return
                    }

                    setFieldErrors((prev) => {
                      if (!prev.workEmail) return prev
                      const next = { ...prev }
                      delete next.workEmail
                      return next
                    })
                  }}
                  className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none transition-all ${
                    fieldErrors.workEmail
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                />
                {fieldErrors.workEmail ? <p className="text-[12px] text-[#F97066]">{fieldErrors.workEmail}</p> : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="company" className="text-[13px] font-medium text-white/90">Company *</label>
                <input 
                  id="company"
                  name="company"
                  type="text" 
                  required
                  autoComplete="organization"
                  placeholder="Company name"
                  aria-invalid={Boolean(fieldErrors.company)}
                  className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none transition-all ${
                    fieldErrors.company
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                />
                {fieldErrors.company ? <p className="text-[12px] text-[#F97066]">{fieldErrors.company}</p> : null}
              </div>
              <div className="space-y-2.5">
                <label htmlFor="jobTitle" className="text-[13px] font-medium text-white/90">Job title *</label>
                <input 
                  id="jobTitle"
                  name="jobTitle"
                  type="text" 
                  required
                  autoComplete="organization-title"
                  placeholder="Director of Operations"
                  aria-invalid={Boolean(fieldErrors.jobTitle)}
                  className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none transition-all ${
                    fieldErrors.jobTitle
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                />
                {fieldErrors.jobTitle ? <p className="text-[12px] text-[#F97066]">{fieldErrors.jobTitle}</p> : null}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label htmlFor="phone" className="text-[13px] font-medium text-white/90">Phone (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+\-\s()]*"
                    placeholder="+1 234 567 8901"
                    aria-invalid={Boolean(fieldErrors.phone)}
                    className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none transition-all ${
                      fieldErrors.phone
                        ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                        : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                    }`}
                  />
                  {fieldErrors.phone ? <p className="text-[12px] text-[#F97066]">{fieldErrors.phone}</p> : null}
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="country" className="text-[13px] font-medium text-white/90">Country *</label>
                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue="United States"
                    aria-invalid={Boolean(fieldErrors.country)}
                    className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white focus:outline-none transition-all ${
                      fieldErrors.country
                        ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                        : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                    }`}
                  >
                    <option value="United States" className="text-[#0A1015]">United States</option>
                    <option value="Canada" className="text-[#0A1015]">Canada</option>
                    <option value="United Kingdom" className="text-[#0A1015]">United Kingdom</option>
                    <option value="Australia" className="text-[#0A1015]">Australia</option>
                    <option value="India" className="text-[#0A1015]">India</option>
                    <option value="Germany" className="text-[#0A1015]">Germany</option>
                    <option value="Other" className="text-[#0A1015]">Other</option>
                  </select>
                  {fieldErrors.country ? <p className="text-[12px] text-[#F97066]">{fieldErrors.country}</p> : null}
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="helpType" className="text-[13px] font-medium text-white/90">What would you like help with? *</label>
                <select
                  id="helpType"
                  name="helpType"
                  required
                  defaultValue=""
                  aria-invalid={Boolean(fieldErrors.helpType)}
                  className={`w-full bg-white/[0.03] border rounded-[14px] h-[52px] px-4 text-white focus:outline-none transition-all ${
                    fieldErrors.helpType
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                >
                  <option value="" disabled className="text-[#0A1015]">Select an option</option>
                  {[
                    "AI Workflow Assessment",
                    "Order and Quote Automation",
                    "Document Intelligence",
                    "ERP and CRM Integration",
                    "Workflow Agents",
                    "Enterprise Knowledge Search",
                    "General Inquiry",
                  ].map((option) => (
                    <option key={option} value={option} className="text-[#0A1015]">
                      {option}
                    </option>
                  ))}
                </select>
                {fieldErrors.helpType ? <p className="text-[12px] text-[#F97066]">{fieldErrors.helpType}</p> : null}
              </div>

              <div className="space-y-2.5">
                <label htmlFor="message" className="text-[13px] font-medium text-white/90">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  minLength={20}
                  placeholder="Which workflow takes the most manual time today?"
                  rows={4}
                  aria-invalid={Boolean(fieldErrors.message)}
                  className={`w-full bg-white/[0.03] border rounded-[14px] p-4 text-white placeholder:text-white/25 focus:outline-none transition-all resize-none ${
                    fieldErrors.message
                      ? "border-[#F97066] focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20"
                      : "border-white/10 focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20"
                  }`}
                />
                {fieldErrors.message ? <p className="text-[12px] text-[#F97066]">{fieldErrors.message}</p> : null}
              </div>
            </div>

            <div className="space-y-5 pt-1">
              {turnstileSiteKey ? (
                <div>
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
                      setSubmitError("Security check failed. Please retry.")
                    }}
                    theme="dark"
                    size="normal"
                  />
                </div>
              ) : (
                <p className="text-[13px] text-[#F97066]">Security check is not configured yet.</p>
              )}

              <button 
                type="submit"
                disabled={submitting || isSubmitBlockedByEmail || !turnstileToken}
                className="h-14 w-full rounded-full bg-[#F4F5F2] text-[15px] font-medium text-[#0A1015] transition-[background-color,transform,opacity] duration-300 hover:bg-white active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Request assessment"}
              </button>
              {submitError ? <p className="text-[13px] text-[#F97066]">{submitError}</p> : null}
              {submitSuccess ? <p className="text-[13px] text-[#47CD89]">{submitSuccess}</p> : null}
              
              <p className="text-[13px] text-white/50 text-center leading-[1.6]">
                By sending this form, you agree to our <Link href="/legal/terms-conditions" className="text-white hover:underline underline-offset-4">Terms</Link> and <Link href="/legal/privacy-policy" className="text-white hover:underline underline-offset-4">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
