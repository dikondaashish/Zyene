import { NextRequest, NextResponse } from "next/server"

type TalentPoolPayload = {
  name: string
  email: string
  notifyOnReopen: boolean
  roleSlug?: string
  roleTitle?: string
  sourcePage?: string
  turnstileToken?: string
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
    }
  }

  return { ok: true }
}

async function getZohoAccessToken() {
  const directToken = process.env.ZOHO_OAUTH_ACCESS_TOKEN
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

  const tokenData = await tokenRes.json()
  return tokenData.access_token as string | undefined
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as TalentPoolPayload

    if (!body?.name || !body?.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }
    if (!body?.turnstileToken) {
      return NextResponse.json({ error: "Security check is required." }, { status: 400 })
    }

    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null
    const turnstile = await verifyTurnstileToken(body.turnstileToken, ip)
    if (!turnstile.ok) {
      return NextResponse.json(
        { error: turnstile.error, details: "details" in turnstile ? turnstile.details : undefined },
        { status: 400 }
      )
    }

    const sheetApiUrl = process.env.ZOHO_SHEET_API_URL
    const worksheetName = process.env.ZOHO_SHEET_WORKSHEET || "submissions"
    const method = process.env.ZOHO_SHEET_APPEND_METHOD || "worksheet.records.add"

    if (!sheetApiUrl) {
      return NextResponse.json({ error: "Zoho Sheet API URL is not configured." }, { status: 500 })
    }

    const accessToken = await getZohoAccessToken()
    if (!accessToken) {
      return NextResponse.json({ error: "Zoho access token is not available." }, { status: 500 })
    }

    const notifyValue = body.notifyOnReopen ? "Yes" : "No"

    const row = {
      created_at: new Date().toISOString(),
      "created_at\n": new Date().toISOString(),
      full_name: body.name,
      "full_name\n": body.name,
      name: body.name,
      fullName: body.name,
      email: body.email,
      notify_when_reopen: notifyValue,
      "notify_when_reopen\n": notifyValue,
      notify: notifyValue,
      notify_reopen: notifyValue,
      role_slug: body.roleSlug || "",
      roleSlug: body.roleSlug || "",
      role_title: body.roleTitle || "",
      "role_title\n": body.roleTitle || "",
      roleTitle: body.roleTitle || "",
      source_page: body.sourcePage || "",
      sourcePage: body.sourcePage || "",
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
      typeof parsed?.error_message === "string" ? parsed.error_message : "Failed to append row in Zoho Sheet."

    if (!zohoRes.ok || zohoStatus === "failure") {
      return NextResponse.json(
        {
          error: zohoErrorMessage,
          details: responseText,
          errorCode: zohoErrorCode,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, details: responseText })
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
