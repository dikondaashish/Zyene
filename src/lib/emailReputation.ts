type AbstractApiResponse = Record<string, unknown>

type EmailValidationResult = {
  ok: boolean
  message?: string
}

function readNestedBoolean(data: AbstractApiResponse, key: string) {
  const value = data[key]
  if (typeof value === "boolean") return value
  if (value && typeof value === "object" && "value" in value) {
    const nestedValue = (value as { value?: unknown }).value
    return typeof nestedValue === "boolean" ? nestedValue : null
  }
  return null
}

function readNestedString(data: AbstractApiResponse, key: string) {
  const value = data[key]
  if (typeof value === "string") return value
  if (value && typeof value === "object" && "value" in value) {
    const nestedValue = (value as { value?: unknown }).value
    return typeof nestedValue === "string" ? nestedValue : null
  }
  return null
}

function isClearlyInvalid(data: AbstractApiResponse) {
  const formatValid = readNestedBoolean(data, "is_valid_format")
  if (formatValid === false) {
    return "Please enter a valid work email address."
  }

  const disposable = readNestedBoolean(data, "is_disposable_email")
  if (disposable === true) {
    return "Please use a business email address."
  }

  const smtpValid = readNestedBoolean(data, "is_smtp_valid")
  if (smtpValid === false) {
    return "This email address cannot receive messages."
  }

  const mxFound = readNestedBoolean(data, "is_mx_found")
  if (mxFound === false) {
    return "This email domain cannot receive messages."
  }

  const deliverability = readNestedString(data, "deliverability")?.toUpperCase()
  if (deliverability === "UNDELIVERABLE") {
    return "This email address appears undeliverable."
  }

  const reputation = readNestedString(data, "reputation")?.toLowerCase()
  if (reputation && ["bad", "poor", "risky", "low"].includes(reputation)) {
    return "Please use a trusted work email address."
  }

  return null
}

function isProviderErrorResponse(data: AbstractApiResponse | null) {
  if (!data) return false

  const error = data.error
  if (typeof error === "string" && error.trim()) return true
  if (error && typeof error === "object") return true

  const errorMessage = data.error_message
  if (typeof errorMessage === "string" && errorMessage.trim()) return true

  const message = data.message
  if (typeof message === "string" && /invalid|error|failed|unauthorized|forbidden/i.test(message)) {
    return true
  }

  return false
}

async function fetchAbstractEmailCheck(url: string) {
  const response = await fetch(url, { method: "GET", cache: "no-store" })
  const parsed = (await response.json().catch(() => null)) as AbstractApiResponse | null
  return {
    ok: response.ok,
    data: parsed,
  }
}

export async function validateEmailWithAbstract(email: string): Promise<EmailValidationResult> {
  const apiKey = process.env.ABSTRACT_EMAIL_REPUTATION_API_KEY
  if (!apiKey) {
    return { ok: true }
  }

  const encodedEmail = encodeURIComponent(email.trim())
  const reputationUrl = `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodedEmail}`
  const validationUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodedEmail}`

  // Validation endpoint is stronger for format/MX/SMTP checks.
  const validation = await fetchAbstractEmailCheck(validationUrl)
  if (validation.ok && validation.data) {
    const invalidReason = isClearlyInvalid(validation.data)
    if (invalidReason) {
      return { ok: false, message: invalidReason }
    }
  }

  const reputation = await fetchAbstractEmailCheck(reputationUrl)
  if (reputation.ok && reputation.data) {
    const invalidReason = isClearlyInvalid(reputation.data)
    if (invalidReason) {
      return { ok: false, message: invalidReason }
    }
  }

  // If provider explicitly responded with errors (invalid key/plan/endpoint), fail clearly.
  if (
    isProviderErrorResponse(validation.data) ||
    isProviderErrorResponse(reputation.data) ||
    (!validation.ok && !reputation.ok)
  ) {
    return { ok: false, message: "We could not verify this email. Please enter a valid work email." }
  }

  return { ok: true }
}
