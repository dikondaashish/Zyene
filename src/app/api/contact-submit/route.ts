import { NextRequest, NextResponse } from "next/server"
import { appendContactToZohoSheet } from "@/lib/zohoSheets"

type ContactSubmitBody = {
  name?: string
  email?: string
  message?: string
  timestamp?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactSubmitBody

    const name = String(body?.name || "").trim()
    const email = String(body?.email || "").trim()
    const message = String(body?.message || "").trim()
    const timestamp = body?.timestamp ? String(body.timestamp) : undefined

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "name, email, and message are required." },
        { status: 400 }
      )
    }

    const result = await appendContactToZohoSheet({
      name,
      email,
      message,
      timestamp,
    })

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error || "Failed to append contact row in Zoho Sheet." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, message: "Contact row appended to Zoho Sheet." })
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 })
  }
}
