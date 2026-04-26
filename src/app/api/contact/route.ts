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
  const apiKey = process.env.ZOHO_CONTACT_API_KEY

  if (!sheetApiUrl) {
    return { ok: false, error: "Zoho contacts sheet API URL is not configured." }
  }

  let accessToken: string | null = null
  if (!apiKey) {
    accessToken = await getZohoAccessToken()
    if (!accessToken) {
      return { ok: false, error: "Zoho contacts sheet access token is not available." }
    }
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

  if (apiKey) {
    // Some Zoho endpoints (especially legacy sheet APIs) accept API keys as query/body params.
    const apiKeyParamName = process.env.ZOHO_CONTACT_API_KEY_PARAM || "apikey"
    params.set(apiKeyParamName, apiKey)
  }

  const headers: HeadersInit = {
    "Content-Type": "application/x-www-form-urlencoded",
  }

  if (accessToken) {
    headers.Authorization = `Zoho-oauthtoken ${accessToken}`
  }

  const zohoRes = await fetch(sheetApiUrl, {
    method: "POST",
    headers,
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
  try {
    const body = (await request.json()) as ContactPayload

    if (
      !body?.fullName ||
      !body?.workEmail ||
      !body?.company ||
      !body?.jobTitle ||
      !body?.country ||
      !body?.helpType ||
      !body?.message
    ) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 })
    }

    if (!body?.turnstileToken) {
      return NextResponse.json({ error: "Security check is required." }, { status: 400 })
    }

    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null
    const verification = await verifyTurnstileToken(body.turnstileToken, ip)
    if (!verification.ok) {
      return NextResponse.json({ error: verification.error, details: verification.details }, { status: 400 })
    }

    const mailResult = await sendWeb3FormsLeadEmail(body)
    if (!mailResult.ok) {
      return NextResponse.json({ error: mailResult.error }, { status: 502 })
    }

    // Zoho sync is best-effort. Do not fail the user submission if sheet sync fails.
    const zohoResult = await appendToZohoContactsSheet(body)
    if (!zohoResult.ok) {
      return NextResponse.json({
        ok: true,
        message: "Contact submission received.",
        sourcePage: body.sourcePage || "/contact",
        warning: "Submission email sent, but CRM sync is pending.",
      })
    }

    return NextResponse.json({
      ok: true,
      message: "Contact submission received.",
      sourcePage: body.sourcePage || "/contact",
    })
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
