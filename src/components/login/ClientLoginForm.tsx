"use client"

import * as React from "react"
import Link from "next/link"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

const fieldClass =
  "h-[52px] w-full rounded-[12px] border bg-white px-4 text-[16px] text-[#0A1015] placeholder:text-[#0A1015]/28 [color-scheme:light] transition-[border-color,box-shadow] duration-200 ease-out-expo focus:outline-none disabled:opacity-60"
const fieldOk = "border-[#0A1015]/18 focus:border-[#0A1015] focus:ring-2 focus:ring-[#0A1015]/10"
const fieldErr = "border-[#B42318] focus:border-[#B42318] focus:ring-2 focus:ring-[#B42318]/15"

export function ClientLoginForm() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [capsLock, setCapsLock] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [formError, setFormError] = React.useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = React.useState<{ username?: string; password?: string }>({})
  const usernameRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const onCaps = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLock(event.getModifierState("CapsLock"))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: { username?: string; password?: string } = {}
    if (!username.trim()) nextErrors.username = "Enter the username issued for this engagement."
    if (!password) nextErrors.password = "Enter your password."
    setFieldErrors(nextErrors)
    setFormError(null)

    if (nextErrors.username) {
      usernameRef.current?.focus()
      return
    }
    if (nextErrors.password) {
      passwordRef.current?.focus()
      return
    }

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 420))
    setSubmitting(false)
        setFormError("No matching workspace for these credentials.")
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      className="mt-8 [&_input:-webkit-autofill]:[-webkit-text-fill-color:#0A1015] [&_input:-webkit-autofill]:[box-shadow:inset_0_0_0_1000px_#fff]"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="client-username" className="mb-2 block text-[13px] font-medium text-[#0A1015]">
            Username
          </label>
          <input
            ref={usernameRef}
            id="client-username"
            name="username"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoFocus
            value={username}
            disabled={submitting}
            onChange={(event) => {
              setUsername(event.target.value)
              if (fieldErrors.username) setFieldErrors((prev) => ({ ...prev, username: undefined }))
            }}
            placeholder="Issued for your workspace"
            aria-invalid={Boolean(fieldErrors.username)}
            aria-describedby={fieldErrors.username ? "client-username-error" : undefined}
            className={`${fieldClass} ${fieldErrors.username ? fieldErr : fieldOk}`}
          />
          {fieldErrors.username ? (
            <p id="client-username-error" className="mt-2 text-[13px] text-[#B42318]">
              {fieldErrors.username}
            </p>
          ) : null}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label htmlFor="client-password" className="text-[13px] font-medium text-[#0A1015]">
              Password
            </label>
            <a
              href="mailto:support@zyene.com?subject=Client%20portal%20password"
              className="text-[13px] text-[#5B6470] underline-offset-4 transition-colors hover:text-[#0A1015] hover:underline"
            >
              Forgot password
            </a>
          </div>
          <div className="relative">
            <input
              ref={passwordRef}
              id="client-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              disabled={submitting}
              onChange={(event) => {
                setPassword(event.target.value)
                if (fieldErrors.password) setFieldErrors((prev) => ({ ...prev, password: undefined }))
              }}
              onKeyDown={onCaps}
              onKeyUp={onCaps}
              placeholder="••••••••"
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={
                fieldErrors.password ? "client-password-error" : capsLock ? "client-caps" : undefined
              }
              className={`${fieldClass} pr-12 ${fieldErrors.password ? fieldErr : fieldOk}`}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              disabled={submitting}
              onClick={() => setShowPassword((open) => !open)}
              className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#5B6470] transition-colors hover:bg-[#0A1015]/5 hover:text-[#0A1015] disabled:pointer-events-none"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {fieldErrors.password ? (
            <p id="client-password-error" className="mt-2 text-[13px] text-[#B42318]">
              {fieldErrors.password}
            </p>
          ) : capsLock ? (
            <p id="client-caps" className="mt-2 text-[13px] text-[#5B6470]">
              Caps Lock is on.
            </p>
          ) : null}
        </div>
      </div>

      {formError ? (
        <div
          role="alert"
          className="mt-6 rounded-[12px] border border-[#0A1015]/10 bg-white px-4 py-3.5 text-[14px] leading-[1.55] text-[#3D444D]"
        >
          {formError} If you were issued a login, email{" "}
          <a href="mailto:support@zyene.com" className="font-medium text-[#0A1015] underline underline-offset-4">
            support@zyene.com
          </a>
          .
        </div>
      ) : null}

      <Button type="submit" variant="dark" size="lg" className="mt-8 w-full rounded-[12px]" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Signing in
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <p className="mt-6 text-[13.5px] leading-[1.55] text-[#5B6470]">
        Need an account? Access is created when an engagement starts.{" "}
        <Link href="/contact" className="font-medium text-[#0A1015] underline-offset-4 hover:underline">
          Contact Zyene
        </Link>.
      </p>
    </form>
  )
}
