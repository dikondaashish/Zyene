import { NextRequest, NextResponse } from "next/server"
import { verifyTurnstileToken } from "@/lib/server/turnstile"
import { appendRowToZohoSheet } from "@/lib/server/zoho"
import { isValidEmail } from "@/lib/validators"

type TalentPoolPayload = {
  name: string
  email: string
  notifyOnReopen: boolean
  roleSlug?: string
  roleTitle?: string
  sourcePage?: string
  turnstileToken?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as TalentPoolPayload
    const name = String(body?.name || "").trim()
    const email = String(body?.email || "").trim()

    if (name.length < 2 || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address.", field: "email" }, { status: 400 })
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

    const notifyValue = body.notifyOnReopen ? "Yes" : "No"

    const row = {
      created_at: new Date().toISOString(),
      full_name: name,
      name,
      fullName: name,
      email,
      notify_when_reopen: notifyValue,
      notify: notifyValue,
      notify_reopen: notifyValue,
      role_slug: body.roleSlug || "",
      roleSlug: body.roleSlug || "",
      role_title: body.roleTitle || "",
      roleTitle: body.roleTitle || "",
      source_page: body.sourcePage || "",
      sourcePage: body.sourcePage || "",
      status: "New",
    }

    const zohoResult = await appendRowToZohoSheet({
      sheetApiUrl,
      worksheetName,
      method,
      row,
      directTokenEnvNames: ["ZOHO_OAUTH_ACCESS_TOKEN"],
    })

    if (!zohoResult.ok) {
      return NextResponse.json(
        {
          error: zohoResult.error,
          details: zohoResult.details,
          errorCode: zohoResult.errorCode,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
