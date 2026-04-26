import { NextRequest, NextResponse } from "next/server"
import { getFirstContactError, validateContactInput } from "@/lib/validators"
import { validateEmailWithAbstract } from "@/lib/emailReputation"
import { verifyTurnstileToken } from "@/lib/server/turnstile"
import { appendRowToZohoSheet } from "@/lib/server/zoho"

type ContactPayload = {
  fullName: string
  workEmail: string
  company: string
  jobTitle: string
  phone?: string
  country: string
  helpType: string
  message: string
  sourcePage?: string
  turnstileToken?: string
}

function validateContactPayload(body: ContactPayload) {
  const errors = validateContactInput(body)
  return getFirstContactError(errors)
}

function logContactDebug(step: string, metadata: Record<string, unknown> = {}) {
  if (process.env.CONTACT_API_DEBUG !== "true") return
  // Never log secret values or full payload content.
  console.log(`[contact-api] ${step}`, metadata)
}

async function appendToZohoContactsSheet(body: ContactPayload) {
  const sheetApiUrl = process.env.ZOHO_CONTACT_SHEET_API_URL
  const worksheetName = process.env.ZOHO_CONTACT_WORKSHEET || "Sheet1"
  const method = process.env.ZOHO_CONTACT_APPEND_METHOD || "worksheet.records.add"

  if (!sheetApiUrl) {
    return { ok: false, error: "Zoho contacts sheet API URL is not configured." }
  }

  const createdAt = new Date().toISOString()

  const row = {
    created_at: createdAt,
    full_name: body.fullName,
    work_email: body.workEmail,
    company: body.company,
    job_title: body.jobTitle,
    phone: body.phone || "",
    country: body.country,
    help_type: body.helpType,
    message: body.message,
    source_page: body.sourcePage || "/contact",
    status: "New",
  }

  return appendRowToZohoSheet({
    sheetApiUrl,
    worksheetName,
    method,
    row,
    directTokenEnvNames: ["ZOHO_CONTACT_OAUTH_ACCESS_TOKEN", "ZOHO_OAUTH_ACCESS_TOKEN"],
  })
}

export async function POST(request: NextRequest) {
  const requestId = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  try {
    const body = (await request.json()) as ContactPayload
    logContactDebug("request_received", {
      requestId,
      sourcePage: body?.sourcePage || "/contact",
      hasTurnstileToken: Boolean(body?.turnstileToken),
      hasPhone: Boolean(body?.phone),
    })

    const validationError = validateContactPayload(body)
    if (validationError) {
      logContactDebug("validation_failed", { requestId, reason: validationError })
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const emailValidation = await validateEmailWithAbstract(body.workEmail)
    if (!emailValidation.ok) {
      logContactDebug("validation_failed", { requestId, reason: "email_reputation_failed" })
      return NextResponse.json(
        {
          error: emailValidation.message || "Please use a valid work email address.",
          field: "workEmail",
        },
        { status: 400 }
      )
    }

    if (!body?.turnstileToken) {
      logContactDebug("validation_failed", { requestId, reason: "missing_turnstile_token" })
      return NextResponse.json({ error: "Security check is required." }, { status: 400 })
    }

    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null
    const verification = await verifyTurnstileToken(body.turnstileToken, ip)
    if (!verification.ok) {
      logContactDebug("turnstile_failed", {
        requestId,
        error: verification.error,
        details: verification.details,
      })
      return NextResponse.json({ error: verification.error, details: verification.details }, { status: 400 })
    }
    logContactDebug("turnstile_verified", { requestId })

    const zohoResult = await appendToZohoContactsSheet(body)

    if (!zohoResult.ok) {
      logContactDebug("zoho_sync_failed", {
        requestId,
        error: zohoResult.error,
        details: "details" in zohoResult ? zohoResult.details : undefined,
      })
      return NextResponse.json({ error: "CRM sync failed. Please try again shortly." }, { status: 502 })
    }

    logContactDebug("zoho_sync_success", { requestId })
    logContactDebug("submission_success", { requestId })
    return NextResponse.json({
      ok: true,
      message: "Contact submission received.",
      sourcePage: body.sourcePage || "/contact",
    })
  } catch {
    logContactDebug("unexpected_error", { requestId })
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
