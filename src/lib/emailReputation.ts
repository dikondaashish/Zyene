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

async function fetchAbstractEmailCheck(url: string) {
  const response = await fetch(url, { method: "GET", cache: "no-store" })
  if (!response.ok) return null
  const parsed = (await response.json().catch(() => null)) as AbstractApiResponse | null
  return parsed
}

export async function validateEmailWithAbstract(email: string): Promise<EmailValidationResult> {
  const apiKey = process.env.ABSTRACT_EMAIL_REPUTATION_API_KEY
  if (!apiKey) {
    return { ok: true }
  }

  const encodedEmail = encodeURIComponent(email.trim())
  const reputationUrl = `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodedEmail}`
  const validationUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodedEmail}`

  let data = await fetchAbstractEmailCheck(reputationUrl)
  if (!data) {
    data = await fetchAbstractEmailCheck(validationUrl)
  }

  if (!data) {
    // Do not block leads if provider is temporarily unavailable.
    return { ok: true }
  }

  const invalidReason = isClearlyInvalid(data)
  if (invalidReason) {
    return { ok: false, message: invalidReason }
  }

  return { ok: true }
}
