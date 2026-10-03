import { NextResponse, type NextRequest } from "next/server"
import { CLIENTS_URL, SITE_URL, isClientsHost } from "@/lib/site"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")
  const { pathname, search } = request.nextUrl

  if (isClientsHost(host)) {
    if (pathname === "/robots.txt") {
      return new NextResponse("User-agent: *\nDisallow: /\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    }

    if (pathname === "/" || pathname === "/login") {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.rewrite(url)
    }

    return NextResponse.redirect(new URL(`${pathname}${search}`, SITE_URL), 308)
  }

  if (pathname === "/login") {
    return NextResponse.redirect(new URL(`/${search}`, CLIENTS_URL), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/robots.txt",
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
}
