import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FooterCTA } from "@/components/home/FooterCTA"
import { TalentContactWidget } from "@/components/careers/TalentContactWidget"
import { CareerFaqAccordion } from "@/components/careers/CareerFaqAccordion"

function normalizeCareerSlug(slug: string) {
  return slug
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u2012-\u2015]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const INTERNAL_ROLES = [
  {
    title: "AI Solutions Engineer",
    slug: "ai-solutions-engineer",
    aliases: ["ai-solutions-engineer"],
  },
  {
    title: "Product Designer (UX/UI)",
    slug: "product-designer-ux-ui",
    aliases: ["product-designer-ux-ui", "product-designer-(ux/ui)"],
  },
  {
    title: "Customer Success Manager",
    slug: "customer-success-manager",
    aliases: ["customer-success-manager"],
  },
  {
    title: "Marketing Lead – B2B SaaS",
    slug: "marketing-lead-b2b-saas",
    aliases: ["marketing-lead-b2b-saas", "marketing-lead-–-b2b-saas"],
  },
]

const ALTERNATIVE_OPEN_ROLES = [
  { title: "Data Analyst", href: "https://binary.so/izp2HB1", location: "SF, NY, Remote" },
  { title: "Software Engineer", href: "https://binary.so/d6WE4zX", location: "SF, NY, Remote" },
  { title: "Full Stack Developer (Internship/Full Time)", href: "https://binary.so/SUjsovx", location: "SF, NY, BLR, Hyd, Remote" },
  { title: "AI Engineer", href: "https://binary.so/1PkZTMT", location: "SF, NY, Remote" },
]

const CAREER_FAQ = [
  {
    q: "Hiring timeline",
    a: "For open roles, most processes include screening, role interview loops, and decision updates within 2-4 weeks depending on schedule alignment.",
  },
  {
    q: "Remote policy",
    a: "Many roles support flexible location options. Some roles include hybrid requirements based on team, timezone, and project needs.",
  },
  {
    q: "Visa policy",
    a: "Visa sponsorship depends on role and location requirements. If sponsorship is needed, include that detail in your outreach.",
  },
  {
    q: "Interview steps",
    a: "Typical flow: intro screening, role-specific interview(s), practical/portfolio review (if applicable), and final team conversation.",
  },
]

type PageProps = {
  params: {
    slug: string[]
  }
}

function resolveRole(slugParam: string[]) {
  const joinedSlug = slugParam.join("/")
  const rawSlug = (() => {
    try {
      return decodeURIComponent(joinedSlug)
    } catch {
      return joinedSlug
    }
  })()
  const normalizedSlug = normalizeCareerSlug(rawSlug)
  return INTERNAL_ROLES.find((item) =>
    item.aliases.some((alias) => normalizeCareerSlug(alias) === normalizedSlug)
  )
}

export function generateMetadata({ params }: PageProps) {
  const role = resolveRole(params.slug)
  if (!role) {
    return {
      title: "Careers | Zyene",
      description: "Career opportunities at Zyene.",
    }
  }

  return {
    title: `${role.title} | Careers | Zyene`,
    description: `Application status for ${role.title} at Zyene.`,
  }
}

export default function CareerRoleStatusPage({ params }: PageProps) {
  const role = resolveRole(params.slug)

  if (!role) {
    notFound()
  }

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-12 overflow-hidden bg-[#0A1015]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mesh.jpg"
            alt="Careers Hero Background"
            fill
            className="object-cover object-center opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end relative z-10 px-6 lg:px-24">
          <div className="flex flex-col">
            <h1 className="text-[42px] md:text-[64px] lg:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white font-display-serif">
              {role.title}
            </h1>
          </div>

          <div className="flex flex-col gap-8 lg:pb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src="/images/Logo_white.png"
                  alt="Zyene Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[16px] font-medium text-white/90">Careers</span>
            </div>

            <p className="text-[16px] md:text-[18px] text-[#CECFD0] leading-[1.7] max-w-[500px]">
              Job applications for this role are currently full/closed. Thanks for considering us.
              <br />
              This role is currently closed. We review talent pool weekly.
              Feel free to share your profile by email at{" "}
              <Link
                href="mailto:support@zyene.com"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                support@zyene.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
          <div className="mx-auto max-w-[980px]">
            <div className="rounded-[10px] border border-[#E2E8EF] bg-[#F9FBFD] px-5 py-4">
              <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#0A1015]">
                Sorry, this job application is completed and currently full/closed.
              </p>
            </div>
          </div>
        </section>

        <TalentContactWidget roleSlug={role.slug} roleTitle={role.title} />

        <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
          <div className="mx-auto max-w-[980px]">
            <div className="mb-6">
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">
                Alternative Open Roles
              </p>
              <h3 className="text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0A1015]">
                You can still apply quickly for these roles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ALTERNATIVE_OPEN_ROLES.map((altRole, index) => (
                <Link
                  key={altRole.title}
                  href={altRole.href}
                  className="group rounded-[12px] border border-[#E2E8EF] bg-white p-5 shadow-[0_8px_20px_rgba(10,16,21,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(10,16,21,0.08)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
                      Role 0{index + 1}
                    </span>
                    <span className="text-[12px] font-medium text-[#4A4F59]">Quick Apply</span>
                  </div>
                  <p className="text-[18px] leading-[1.35] font-semibold text-[#0A1015] mb-1.5">
                    {altRole.title}
                  </p>
                  <p className="text-[13px] text-[#5A616B] mb-4">
                    {altRole.location}
                  </p>
                  <span className="inline-flex items-center text-[14px] font-semibold text-[#0A1015] transition-colors group-hover:text-[#0A1015]/80">
                    Apply now
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CareerFaqAccordion items={CAREER_FAQ} />

        <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
          <div className="mx-auto max-w-[980px]">
            <div className="relative overflow-hidden rounded-[12px] border border-[#E2E8EF] bg-white p-6 md:p-7 shadow-[0_10px_24px_rgba(10,16,21,0.05)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0A1015]/20 via-[#0099FF]/45 to-[#0A1015]/20" />
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98] mb-2">
                Hiring Compliance
              </p>
              <div className="mb-4 inline-flex items-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-3 py-2">
                <div className="relative w-[120px] h-[30px]">
                  <Image
                    src="/images/e-verify-logo.svg"
                    alt="E-Verify Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[24px] md:text-[28px] leading-[1.12] tracking-[-0.02em] text-[#0A1015] mb-4">
                U.S. hiring notices and accommodations
              </p>
              <p className="text-[14px] leading-[1.7] text-[#3D4145] mb-5 max-w-[820px]">
                Zyene participates in E-Verify to confirm employment eligibility in the United States.
                Zyene is an equal opportunity employer. If you need a reasonable accommodation during
                the hiring process, please contact{" "}
                <Link href="mailto:support@zyene.com" className="text-[#0A1015] underline underline-offset-4">
                  support@zyene.com
                </Link>
                .
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.e-verify.gov/sites/default/files/everify/posters/EVerifyParticipationPoster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-4 h-10 text-[13px] font-medium text-[#0A1015] hover:bg-[#EEF2F6] transition-colors"
                >
                  E-Verify Participation Notice
                </a>
                <a
                  href="https://www.e-verify.gov/sites/default/files/everify/posters/IER_RighttoWorkPoster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[8px] border border-[#D8E0E8] bg-[#F7F9FC] px-4 h-10 text-[13px] font-medium text-[#0A1015] hover:bg-[#EEF2F6] transition-colors"
                >
                  Right to Work Notice
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
