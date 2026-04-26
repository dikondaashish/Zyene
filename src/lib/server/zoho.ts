type ZohoAppendResult =
  | { ok: true }
  | { ok: false; error: string; errorCode?: number | null; details?: string }

export async function getZohoAccessToken(options?: {
  skipDirectToken?: boolean
  directTokenEnvNames?: string[]
}) {
  const directNames = options?.directTokenEnvNames || ["ZOHO_OAUTH_ACCESS_TOKEN"]
  const directToken = directNames.map((name) => process.env[name]).find(Boolean)
  if (!options?.skipDirectToken && directToken) return directToken

  const clientId = process.env.ZOHO_OAUTH_CLIENT_ID
  const clientSecret = process.env.ZOHO_OAUTH_CLIENT_SECRET
  const refreshToken = process.env.ZOHO_OAUTH_REFRESH_TOKEN || process.env.ZOHO_REFRESH_TOKEN
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

export async function appendRowToZohoSheet({
  sheetApiUrl,
  worksheetName,
  method,
  row,
  directTokenEnvNames,
}: {
  sheetApiUrl: string
  worksheetName: string
  method: string
  row: Record<string, unknown>
  directTokenEnvNames?: string[]
}): Promise<ZohoAppendResult> {
  const accessToken = await getZohoAccessToken({ directTokenEnvNames })
  if (!accessToken) {
    return { ok: false, error: "Zoho access token is not available." }
  }

  const params = new URLSearchParams({
    method,
    worksheet_name: worksheetName,
    json_data: JSON.stringify([row]),
  })

  const runZohoAppend = async (token: string) =>
    fetch(sheetApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

  let zohoRes = await runZohoAppend(accessToken)

  if (zohoRes.status === 401) {
    const refreshedToken = await getZohoAccessToken({ skipDirectToken: true, directTokenEnvNames })
    if (refreshedToken) {
      zohoRes = await runZohoAppend(refreshedToken)
    }
  }

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
      : "Failed to append row in Zoho Sheet."

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
