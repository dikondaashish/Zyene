type ContactSubmitPayload = {
  name: string
  email: string
  message: string
  timestamp?: string
}

type ZohoAccessTokenResponse = {
  access_token?: string
  error?: string
}

const DEFAULT_ZOHO_ACCOUNTS_BASE_URL = "https://accounts.zoho.com"
const DEFAULT_ZOHO_SHEET_BASE_URL = "https://sheet.zoho.com/api/v2"
const DEFAULT_ZOHO_APPEND_METHOD = "worksheet.records.add"

function getRequiredEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not configured.`)
  }
  return value
}

async function requestZohoAccessToken() {
  const clientId = getRequiredEnv("ZOHO_CLIENT_ID")
  const clientSecret = getRequiredEnv("ZOHO_CLIENT_SECRET")
  const refreshToken = getRequiredEnv("ZOHO_REFRESH_TOKEN")
  const accountsBaseUrl = process.env.ZOHO_ACCOUNTS_BASE_URL || DEFAULT_ZOHO_ACCOUNTS_BASE_URL

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

  const tokenData = (await tokenRes.json().catch(() => null)) as ZohoAccessTokenResponse | null
  if (!tokenRes.ok || !tokenData?.access_token) {
    const reason = tokenData?.error || "Could not refresh Zoho access token."
    throw new Error(reason)
  }

  return tokenData.access_token
}

async function appendRowWithToken(accessToken: string, payload: ContactSubmitPayload) {
  const sheetId = getRequiredEnv("ZOHO_SHEET_ID")
  const worksheetName = getRequiredEnv("ZOHO_WORKSHEET_NAME")
  const method = process.env.ZOHO_APPEND_METHOD || DEFAULT_ZOHO_APPEND_METHOD
  const sheetBaseUrl = process.env.ZOHO_SHEET_BASE_URL || DEFAULT_ZOHO_SHEET_BASE_URL

  const rowTimestamp = payload.timestamp || new Date().toISOString()
  const row = {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    timestamp: rowTimestamp,
  }

  const params = new URLSearchParams({
    method,
    worksheet_name: worksheetName,
    json_data: JSON.stringify([row]),
  })

  const zohoRes = await fetch(`${sheetBaseUrl}/${sheetId}`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  })

  const text = await zohoRes.text()
  const parsed = ((): Record<string, unknown> | null => {
    try {
      return JSON.parse(text) as Record<string, unknown>
    } catch {
      return null
    }
  })()

  const status = typeof parsed?.status === "string" ? parsed.status : null
  const errorMessage =
    typeof parsed?.error_message === "string" ? parsed.error_message : "Failed to append row in Zoho Sheet."

  return {
    ok: zohoRes.ok && status !== "failure",
    statusCode: zohoRes.status,
    errorMessage,
  }
}

export async function appendContactToZohoSheet(payload: ContactSubmitPayload) {
  const firstToken = await requestZohoAccessToken()
  const firstAttempt = await appendRowWithToken(firstToken, payload)
  if (firstAttempt.ok) {
    return { ok: true as const }
  }

  // Retry once in case token expired between refresh and request.
  if (firstAttempt.statusCode === 401) {
    const retryToken = await requestZohoAccessToken()
    const retryAttempt = await appendRowWithToken(retryToken, payload)
    if (retryAttempt.ok) {
      return { ok: true as const }
    }
    return { ok: false as const, error: retryAttempt.errorMessage }
  }

  return { ok: false as const, error: firstAttempt.errorMessage }
}
