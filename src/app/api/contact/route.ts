import { NextRequest, NextResponse } from "next/server"

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

type TurnstileVerificationResult =
  | { ok: true }
  | { ok: false; error: string; details?: string[] }

function logContactDebug(step: string, metadata: Record<string, unknown> = {}) {
  if (process.env.CONTACT_API_DEBUG !== "true") return
  // Never log secret values or full payload content.
  console.log(`[contact-api] ${step}`, metadata)
}

async function verifyTurnstileToken(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return { ok: false, error: "Turnstile secret key is not configured." }
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  })

  if (ip) {
    params.set("remoteip", ip)
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })

  if (!response.ok) {
    return { ok: false, error: "Could not verify security check." }
  }

  const data = (await response.json()) as {
    success?: boolean
    "error-codes"?: string[]
  }

  if (!data.success) {
    return {
      ok: false,
      error: "Security verification failed. Please try again.",
      details: data["error-codes"] ?? [],
    } satisfies TurnstileVerificationResult
  }

  return { ok: true } satisfies TurnstileVerificationResult
}

async function getZohoAccessToken() {
  const directToken = process.env.ZOHO_CONTACT_OAUTH_ACCESS_TOKEN || process.env.ZOHO_OAUTH_ACCESS_TOKEN
  if (directToken) return directToken

  const clientId = process.env.ZOHO_OAUTH_CLIENT_ID
  const clientSecret = process.env.ZOHO_OAUTH_CLIENT_SECRET
  const refreshToken = process.env.ZOHO_OAUTH_REFRESH_TOKEN
  const accountsBaseUrl = process.env.ZOHO_ACCOUNTS_BASE_URL || "https://accounts.zoho.com"

  if (!clientId || !clientSecret || !refreshToken) {
    return null
  }

  const tokenRes = await fetch(`${accountsBaseUrl}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }).toString(),
  })

  if (!tokenRes.ok) return null

  const tokenData = (await tokenRes.json()) as { access_token?: string }
  return tokenData.access_token ?? null
}

async function appendToZohoContactsSheet(body: ContactPayload) {
  const sheetApiUrl = process.env.ZOHO_CONTACT_SHEET_API_URL
  const worksheetName = process.env.ZOHO_CONTACT_WORKSHEET || "Sheet1"
  const method = process.env.ZOHO_CONTACT_APPEND_METHOD || "worksheet.records.add"

  if (!sheetApiUrl) {
    return { ok: false, error: "Zoho contacts sheet API URL is not configured." }
  }

  const accessToken = await getZohoAccessToken()
  if (!accessToken) {
    return { ok: false, error: "Zoho contacts sheet access token is not available." }
  }

  const createdAt = new Date().toISOString()

  const row = {
    created_at: createdAt,
    "created_at\n": createdAt,
    full_name: body.fullName,
    "full_name\n": body.fullName,
    work_email: body.workEmail,
    "work_email\n": body.workEmail,
    email: body.workEmail,
    company: body.company,
    "company\n": body.company,
    job_title: body.jobTitle,
    "job_title\n": body.jobTitle,
    phone: body.phone || "",
    country: body.country,
    help_type: body.helpType,
    "help_type\n": body.helpType,
    message: body.message,
    source_page: body.sourcePage || "/contact",
    status: "New",
  }

  const params = new URLSearchParams({
    method,
    worksheet_name: worksheetName,
    json_data: JSON.stringify([row]),
  })

  const zohoRes = await fetch(sheetApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  })

  const responseText = await zohoRes.text()
  let parsed: Record<string, unknown> | null = null
  try {
    parsed = JSON.parse(responseText) as Record<string, unknown>
  } catch {
    parsed = null
  }

  const zohoStatus = typeof parsed?.status === "string" ? parsed.status : null
  const zohoErrorCode = typeof parsed?.error_code === "number" ? parsed.error_code : null
  const zohoErrorMessage =
    typeof parsed?.error_message === "string"
      ? parsed.error_message
      : "Failed to append contact row in Zoho Sheet."

  if (!zohoRes.ok || zohoStatus === "failure") {
    return {
      ok: false,
      error: zohoErrorMessage,
      errorCode: zohoErrorCode,
      details: responseText,
    }
  }

  return { ok: true }
}

async function sendWeb3FormsLeadEmail(body: ContactPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return { ok: false, error: "Web3Forms access key is not configured." }
  }

  const payload = {
    access_key: accessKey,
    subject: `New Contact Lead - ${body.helpType}`,
    from_name: "Zyene Website Contact Form",
    full_name: body.fullName,
    work_email: body.workEmail,
    company: body.company,
    job_title: body.jobTitle,
    phone: body.phone || "",
    country: body.country,
    help_type: body.helpType,
    message: body.message,
    source_page: body.sourcePage || "/contact",
  }

  const web3Res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = (await web3Res.json().catch(() => null)) as { success?: boolean; message?: string } | null
  if (!web3Res.ok || !data?.success) {
    return {
      ok: false,
      error: data?.message || "Failed to send lead email.",
    }
  }

  return { ok: true }
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

    if (
      !body?.fullName ||
      !body?.workEmail ||
      !body?.company ||
      !body?.jobTitle ||
      !body?.country ||
      !body?.helpType ||
      !body?.message
    ) {
      logContactDebug("validation_failed", { requestId, reason: "missing_required_fields" })
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 })
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

    const mailResult = await sendWeb3FormsLeadEmail(body)
    const zohoResult = await appendToZohoContactsSheet(body)

    if (!mailResult.ok) {
      logContactDebug("web3forms_failed", { requestId, error: mailResult.error })
    } else {
      logContactDebug("web3forms_sent", { requestId })
    }

    if (!zohoResult.ok) {
      logContactDebug("zoho_sync_failed_non_blocking", {
        requestId,
        error: zohoResult.error,
        details: "details" in zohoResult ? zohoResult.details : undefined,
      })
    } else {
      logContactDebug("zoho_sync_success", { requestId })
    }

    // Accept submission if at least one downstream delivery path succeeds.
    if (mailResult.ok || zohoResult.ok) {
      const warning =
        !mailResult.ok && zohoResult.ok
          ? "Submission saved to CRM. Email notification is pending."
          : mailResult.ok && !zohoResult.ok
            ? "Submission email sent, but CRM sync is pending."
            : undefined

      logContactDebug("submission_success", {
        requestId,
        warning: warning ?? null,
      })

      return NextResponse.json({
        ok: true,
        message: "Contact submission received.",
        sourcePage: body.sourcePage || "/contact",
        warning,
      })
    }

    return NextResponse.json(
      {
        error: "Submission could not be delivered right now. Please try again shortly.",
      },
      { status: 502 }
    )
  } catch {
    logContactDebug("unexpected_error", { requestId })
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
