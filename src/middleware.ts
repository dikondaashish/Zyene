import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/** Must match `SITE_URL` / canonical metadata (`https://zyene.com`). */
const CANONICAL_HOST = "zyene.com"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase()
  if (!host) return NextResponse.next()

  if (
    host === "localhost" ||
    host.startsWith("127.") ||
    host.endsWith(".vercel.app")
  ) {
    return NextResponse.next()
  }

  if (host === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl.clone()
    url.hostname = CANONICAL_HOST
    url.protocol = "https:"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/"],
}
