"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Turnstile } from "react-turnstile"

export function ContactHero() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileRenderKey, setTurnstileRenderKey] = useState(0)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitError(null)
    setSubmitSuccess(null)

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

    setSubmitting(true)
    try {
      // Client-side Web3Forms call (free-plan compatible).
      const web3FormsResult = web3FormsAccessKey
        ? await fetch("https://api.web3forms.com/submit", {
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
          }).then(async (res) => {
            const data = (await res.json().catch(() => null)) as { success?: boolean } | null
            return { ok: Boolean(res.ok && data?.success) }
          })
        : { ok: false }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = (await response.json().catch(() => null)) as { error?: string } | null
      if (!response.ok) {
        throw new Error(data?.error || "Could not submit your request right now.")
      }

      form.reset()
      setTurnstileToken(null)
      setTurnstileRenderKey((prev) => prev + 1)
      setSubmitSuccess(
        web3FormsResult.ok
          ? "Thanks! We received your details. Our team will reach out soon."
          : "Thanks! We received your details. CRM sync completed; email notification is pending."
      )
    } catch (error) {
      setTurnstileToken(null)
      setTurnstileRenderKey((prev) => prev + 1)
      setSubmitError(error instanceof Error ? error.message : "Could not submit your request right now.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden bg-[#0A1015]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-mesh.jpg" 
          alt="Contact Hero Background" 
          fill 
          className="object-cover object-center opacity-100"
          priority
        />
        {/* Subtle Overlay to match Framer's depth */}
        <div className="absolute inset-0 bg-[#0a1015]/40" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 relative z-10 px-6 lg:px-12 items-center">
        {/* Left Column: Text & Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-bold text-white tracking-[0.2em] uppercase"
            >
              Contact
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[56px] md:text-[88px] lg:text-[100px] leading-[1] font-normal tracking-[-0.04em] text-white font-display-serif"
            >
              Get started
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-white/70 max-w-[480px] leading-[1.6]"
            >
              Tell us what&apos;s slowing your team down — we&apos;ll show you how Zyene systems can automate execution and deliver measurable business outcomes.
            </motion.p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            <div className="py-6 flex items-center gap-4 border-b border-white/10">
              <MapPin size={20} className="text-white" />
              <span className="text-[16px] text-white/90">28 Geary St Ste 650 #1892, San Francisco, CA 94108</span>
            </div>
            <div className="py-6 flex items-center gap-4 border-b border-white/10">
              <Phone size={20} className="text-white" />
              <a href="tel:+14154099798" className="text-[16px] text-white/90 hover:text-white transition-colors">+1 (415) 409-9798</a>
            </div>
            <div className="py-6 flex items-center gap-4">
              <Mail size={20} className="text-white" />
              <a href="mailto:support@zyene.com" className="text-[16px] text-white/90 hover:text-white transition-colors">support@zyene.com</a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12"
        >
          <form className="space-y-6" noValidate onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="fullName" className="text-[13px] font-medium text-white/90">Full Name *</label>
                <input 
                  id="fullName"
                  name="fullName"
                  type="text" 
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="workEmail" className="text-[13px] font-medium text-white/90">Work Email *</label>
                <input 
                  id="workEmail"
                  name="workEmail"
                  type="email" 
                  required
                  autoComplete="email"
                  placeholder="john.doe@zyene.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                />
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
                  placeholder="Zyene, Inc."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="jobTitle" className="text-[13px] font-medium text-white/90">Job Title *</label>
                <input 
                  id="jobTitle"
                  name="jobTitle"
                  type="text" 
                  required
                  autoComplete="organization-title"
                  placeholder="Chief Executive Officer"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                />
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
                    placeholder="+1 234 567 8901"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                  />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="country" className="text-[13px] font-medium text-white/90">Country *</label>
                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue="🇺🇸 United States"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                  >
                    <option value="🇺🇸 United States" className="text-[#0A1015]">🇺🇸 United States</option>
                    <option value="🇨🇦 Canada" className="text-[#0A1015]">🇨🇦 Canada</option>
                    <option value="🇬🇧 United Kingdom" className="text-[#0A1015]">🇬🇧 United Kingdom</option>
                    <option value="🇦🇺 Australia" className="text-[#0A1015]">🇦🇺 Australia</option>
                    <option value="🇮🇳 India" className="text-[#0A1015]">🇮🇳 India</option>
                    <option value="🇩🇪 Germany" className="text-[#0A1015]">🇩🇪 Germany</option>
                    <option value="🌍 Other" className="text-[#0A1015]">🌍 Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="helpType" className="text-[13px] font-medium text-white/90">What would you like help with? *</label>
                <select
                  id="helpType"
                  name="helpType"
                  required
                  defaultValue=""
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] h-[52px] px-4 text-white focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all"
                >
                  <option value="" disabled className="text-[#0A1015]">Select an option</option>
                  <option value="Marketing Automation & Team ppl to hire" className="text-[#0A1015]">Marketing Automation & Team ppl to hire</option>
                  <option value="Operations & Workflow Systems & Team ppl to hire" className="text-[#0A1015]">Operations & Workflow Systems & Team ppl to hire</option>
                  <option value="CRM & Sales Automation & Team ppl to hire" className="text-[#0A1015]">CRM & Sales Automation & Team ppl to hire</option>
                  <option value="AI Systems & Agents & Team ppl to build" className="text-[#0A1015]">AI Systems & Agents & Team ppl to build</option>
                  <option value="General Inquiry & other" className="text-[#0A1015]">General Inquiry & other</option>
                </select>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="message" className="text-[13px] font-medium text-white/90">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  placeholder="Enter your message..."
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[4px] p-4 text-white placeholder:text-white/25 focus:outline-none focus:border-[#0099FF]/70 focus:ring-2 focus:ring-[#0099FF]/20 transition-all resize-none"
                />
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
                disabled={submitting || !turnstileToken}
                className="w-full h-[56px] bg-white text-[#0A1015] hover:bg-white/90 font-bold text-[14px] rounded-[4px] transition-all tracking-wide uppercase"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
              {submitError ? <p className="text-[13px] text-[#F97066]">{submitError}</p> : null}
              {submitSuccess ? <p className="text-[13px] text-[#47CD89]">{submitSuccess}</p> : null}
              
              <p className="text-[13px] text-white/50 text-center leading-[1.6]">
                By sending this form, you agree to our <Link href="/legal/terms-conditions" className="text-white hover:underline underline-offset-4">Terms & Conditions</Link> and <Link href="/legal/privacy-policy" className="text-white hover:underline underline-offset-4">Privacy Policy</Link> terms.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
