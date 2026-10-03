export const SITE_URL = "https://zyene.com"
export const CLIENTS_HOST = "clients.zyene.com"
export const CLIENTS_URL = `https://${CLIENTS_HOST}`

export function isClientsHost(host: string | null | undefined) {
  if (!host) return false
  const hostname = host.split(":")[0]?.toLowerCase()
  return hostname === CLIENTS_HOST || hostname === "clients.localhost"
}
