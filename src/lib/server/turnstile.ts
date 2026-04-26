export type TurnstileVerificationResult =
  | { ok: true }
  | { ok: false; error: string; details?: string[] }

export async function verifyTurnstileToken(token: string, ip?: string | null): Promise<TurnstileVerificationResult> {
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
