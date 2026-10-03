import { headers } from "next/headers"
import { Navbar } from "@/components/layout/Navbar"
import { FooterGate } from "@/components/layout/FooterGate"
import { isClientsHost } from "@/lib/site"

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const host = (await headers()).get("host")
  const isPortal = isClientsHost(host)

  if (isPortal) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <FooterGate />
    </>
  )
}
