export const MIN_MESSAGE_WORDS = 5

export type ContactValidationInput = {
  fullName?: string
  workEmail?: string
  company?: string
  jobTitle?: string
  phone?: string
  country?: string
  helpType?: string
  message?: string
}

export type ContactFieldErrors = Partial<
  Record<"fullName" | "workEmail" | "company" | "jobTitle" | "phone" | "country" | "helpType" | "message", string>
>

function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidPhone(value: string) {
  if (!value) return true
  if (!/^[0-9+\-\s()]+$/.test(value)) return false
  const digitsOnly = value.replace(/\D/g, "")
  return digitsOnly.length >= 7 && digitsOnly.length <= 15
}

export function validateContactInput(input: ContactValidationInput): ContactFieldErrors {
  const fullName = String(input.fullName || "").trim()
  const workEmail = String(input.workEmail || "").trim()
  const company = String(input.company || "").trim()
  const jobTitle = String(input.jobTitle || "").trim()
  const phone = String(input.phone || "").trim()
  const country = String(input.country || "").trim()
  const helpType = String(input.helpType || "").trim()
  const message = String(input.message || "").trim()

  const errors: ContactFieldErrors = {}

  if (fullName.length < 2) {
    errors.fullName = "Please enter your full name."
  }

  if (!isValidEmail(workEmail)) {
    errors.workEmail = "Please enter a valid work email address."
  }

  if (company.length < 2) {
    errors.company = "Please enter a valid company name."
  }

  if (jobTitle.length < 2) {
    errors.jobTitle = "Please enter a valid job title."
  }

  if (!isValidPhone(phone)) {
    errors.phone = "Phone number can contain only numbers and must be 7-15 digits."
  }

  if (!country) {
    errors.country = "Please select your country."
  }

  if (!helpType) {
    errors.helpType = "Please select what you need help with."
  }

  if (countWords(message) < MIN_MESSAGE_WORDS) {
    errors.message = `Message must be at least ${MIN_MESSAGE_WORDS} words.`
  }

  return errors
}

export function getFirstContactError(errors: ContactFieldErrors) {
  const priority: Array<keyof ContactFieldErrors> = [
    "fullName",
    "workEmail",
    "company",
    "jobTitle",
    "phone",
    "country",
    "helpType",
    "message",
  ]

  for (const key of priority) {
    if (errors[key]) return errors[key] || null
  }

  return null
}
