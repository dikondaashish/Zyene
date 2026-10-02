import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { TalentContactWidget } from "@/components/careers/TalentContactWidget"
import { HiringCompliance } from "@/components/careers/HiringCompliance"

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
    title: "Marketing Lead",
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
    question: "How long does the hiring process take?",
    answer:
      "Most processes include a screening call, role-specific interviews, and a decision within two to four weeks, depending on scheduling.",
  },
  {
    question: "Is the role remote?",
    answer:
      "Many roles support flexible locations. Some include hybrid requirements based on the team, time zone, and project.",
  },
  {
    question: "Do you sponsor visas?",
    answer:
      "Sponsorship depends on the role and location. If you need it, mention it when you join the talent pool or email us.",
  },
  {
    question: "What are the interview steps?",
    answer:
      "An introductory call, role-specific interviews, a practical or portfolio review where relevant, and a final conversation with the team.",
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
      title: "Careers",
      description: "Career opportunities at Zyene.",
    }
  }

  return {
    title: `${role.title} | Careers`,
    description: `Application status for ${role.title} at Zyene.`,
    robots: { index: false, follow: true },
  }
}

export default function CareerRoleStatusPage({ params }: PageProps) {
  const role = resolveRole(params.slug)

  if (!role) {
    notFound()
  }

  return (
    <>
      <SolutionsHero
        eyebrow="Careers"
        headingLines={[role.title]}
        description="This role is not accepting applications right now. Join the talent pool below and we will contact you when it reopens."
        image="/images/industrial/sol-human-approval.jpg"
        imageAlt="Team member reviewing an order on a laptop in a warehouse"
        cta={{ label: "See open roles", href: "/careers#open-roles" }}
      />

      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <TalentContactWidget roleSlug={role.slug} roleTitle={role.title} />

        <section className="border-t border-line bg-white">
          <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <h2 className="zy-display text-[clamp(34px,4.6vw,64px)] text-[#0A1015]">Open now.</h2>
            <ul className="border-t border-[#0A1015]/15">
              {ALTERNATIVE_OPEN_ROLES.map((altRole) => (
                <li key={altRole.title} className="border-b border-[#0A1015]/10">
                  <a
                    href={altRole.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span className="text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0A1015] md:text-[20px]">
                      {altRole.title}
                    </span>
                    <span className="flex flex-shrink-0 items-center gap-4">
                      <span className="hidden text-[14px] text-[#5B6470] sm:inline">{altRole.location}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A1015]/15 text-[#0A1015] transition-colors duration-300 group-hover:border-[#0A1015] group-hover:bg-[#0A1015] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FAQ faqs={CAREER_FAQ} aside={null} />
        <HiringCompliance />
        <FooterCTA />
      </div>
    </>
  )
}
