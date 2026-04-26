import { NextRequest, NextResponse } from "next/server"
import { isValidEmail } from "@/lib/validators"
import { validateEmailWithAbstract } from "@/lib/emailReputation"

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string }
    const email = String(body?.email || "").trim()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid work email address.", field: "workEmail" },
        { status: 400 }
      )
    }

    const validation = await validateEmailWithAbstract(email)
    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, error: validation.message || "Please use a valid work email address.", field: "workEmail" },
        { status: 400 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Could not validate email right now." }, { status: 500 })
  }
}
