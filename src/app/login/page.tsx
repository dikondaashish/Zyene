import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ClientLoginForm } from "@/components/login/ClientLoginForm"
import { SITE_DATA } from "@/lib/constants"
import { CLIENTS_URL, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Client Login",
  description: "Sign in to the Zyene client portal for an active engagement.",
  robots: { index: false, follow: false },
  alternates: { canonical: CLIENTS_URL },
}

function Wordmark({ inverted }: { inverted?: boolean }) {
  return (
    <Link href={SITE_URL} aria-label="Zyene home" className="inline-flex items-center gap-2.5">
      <span aria-hidden="true" className="relative h-7 w-7">
        <Image
          src={inverted ? SITE_DATA.logoDark : SITE_DATA.logoLight}
          alt=""
          fill
          sizes="28px"
          className="object-contain"
          priority
        />
      </span>
      <span aria-hidden="true" className={`font-space-grotesk text-[20px] font-bold tracking-[-0.02em] ${inverted ? "text-white" : "text-[#0A1015]"}`}>
        Zyene
        <sup className="ml-0.5 align-super text-[7px] font-semibold">TM</sup>
      </span>
    </Link>
  )
}

export default function ClientLoginPage() {
  return (
    <div className="relative min-h-[100dvh] bg-white text-[#0A1015] [color-scheme:light]">
      <div className="grid min-h-[100dvh] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <aside className="relative hidden overflow-hidden bg-[#0A1015] text-white lg:flex lg:flex-col">
          <Image
            src="/images/industrial/hero-security.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.58)_0%,rgba(10,16,21,0.78)_52%,rgba(10,16,21,0.94)_100%)]" />
          <div aria-hidden="true" className="zy-grain absolute inset-0" />

          <div className="relative z-10 flex h-full flex-col justify-between px-12 py-12 xl:px-16">
            <Wordmark inverted />

            <div className="max-w-[400px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">Client portal</p>
              <p className="zy-display mt-5 text-[clamp(36px,3.6vw,52px)] text-white">
                Issued access for live work.
              </p>
              <p className="mt-6 text-[16px] leading-[1.65] text-white/78">
                Sign in with the credentials Zyene created for your engagement. Accounts are not opened from this page.
              </p>
            </div>

            <div className="max-w-[440px] border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">Support</p>
              <a
                href="mailto:support@zyene.com"
                className="mt-2 inline-block text-[15px] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                support@zyene.com
              </a>
            </div>
          </div>
        </aside>

        <section className="flex flex-col bg-[#FBFBFA]">
          <div className="relative overflow-hidden bg-[#0A1015] px-6 pb-8 pt-7 text-white lg:hidden">
            <Image
              src="/images/industrial/hero-security.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-50"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.55)_0%,rgba(10,16,21,0.88)_100%)]" />
            <div className="relative z-10 flex items-center justify-between">
              <Wordmark inverted />
              <a href="mailto:support@zyene.com" className="text-[13px] text-white/70 hover:text-white">
                Need help?
              </a>
            </div>
            <p className="relative z-10 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
              Client portal
            </p>
          </div>

          <header className="hidden items-center justify-end px-12 py-7 lg:flex xl:px-16">
            <a
              href="mailto:support@zyene.com"
              className="text-[13.5px] text-[#5B6470] transition-colors hover:text-[#0A1015]"
            >
              Need help?
            </a>
          </header>

          <div className="flex flex-1 items-start px-6 py-10 md:px-12 lg:px-16 lg:pt-6 xl:px-24">
            <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:pt-[min(8vh,72px)]">
              <h1 className="zy-display text-[clamp(34px,5vw,44px)] text-[#0A1015]">Sign in</h1>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[#4B525C]">
                Use the username and password issued for your workspace.
              </p>
              <ClientLoginForm />
            </div>
          </div>

          <footer className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 px-6 py-6 text-[12.5px] text-[#8A8F98] md:px-12 lg:px-16">
            <span>© {new Date().getFullYear()} Zyene</span>
            <span aria-hidden="true" className="text-[#D0D3D6]">
              ·
            </span>
            <Link href={`${SITE_URL}/legal/privacy-policy`} className="underline-offset-4 hover:text-[#0A1015] hover:underline">
              Privacy
            </Link>
            <span aria-hidden="true" className="text-[#D0D3D6]">
              ·
            </span>
            <Link href={`${SITE_URL}/legal/terms-conditions`} className="underline-offset-4 hover:text-[#0A1015] hover:underline">
              Terms
            </Link>
          </footer>
        </section>
      </div>
    </div>
  )
}
