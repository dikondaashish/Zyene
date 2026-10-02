import { BLOG_POSTS } from "@/lib/blog-posts"

const SITE_URL = "https://zyene.com"

const PAGES = [
  ["Home", "/", "Production AI systems for distributors, manufacturers, and specialty contractors, connected to the ERP, CRM, and documents they already run."],
  ["Wholesale Distribution", "/industries/wholesale-distribution", "Purchase order entry, quote lookup, product data, and customer operations for distributors."],
  ["Manufacturing", "/industries/manufacturing", "RFQs and drawings, purchasing, quality documents, ERP and MES connections, and SOP knowledge for manufacturers."],
  ["Specialty Contractors", "/industries/specialty-contractors", "Bid intake, estimating support, project documents, closeout, and back-office work for HVAC, electrical, mechanical, plumbing, fire protection, and roofing firms."],
  ["Solutions", "/solutions", "Document intelligence, order and quote automation, workflow agents, ERP and CRM integration, enterprise knowledge search, and AI operations assessments."],
  ["How We Work", "/how-we-work", "Discover, design, build, integrate, validate, then deploy and improve, with people kept on the approval step."],
  ["Security", "/security", "Human approval, data isolation, auditability, model and data policies, encryption, and retention."],
  ["Case Studies", "/case-studies", "Example workflows for each industry: purchase orders, RFQs, and bid intake."],
  ["Use Cases", "/use-cases", "Order desks, RFQs, bids, and documents that still get retyped into an ERP."],
  ["Products", "/products", "Zyene Reviews and Zentraic AI: internal tools opened as SaaS for post-service reviews and voice, separate from the industrial operations work."],
  ["About", "/about", "Zyene's mission, principles, and how the team works."],
  ["Careers", "/careers", "Open roles at Zyene."],
  ["Resources", "/blog", "Practical articles on putting AI to work inside industrial operations."],
  ["Contact", "/contact", "Book an AI workflow assessment: map one workflow and leave with a recommended pilot."],
  ["Privacy Policy", "/legal/privacy-policy", "How Zyene collects, uses, and protects personal data."],
  ["Terms & Conditions", "/legal/terms-conditions", "Terms governing use of the Zyene website and services."],
  ["Data Processing Agreement", "/legal/data-processing-agreement", "How Zyene processes customer emails, purchase orders, and ERP data. Subprocessors: Vercel (site hosting), Cloudflare (DNS and SSL), Zoho, and model providers."],
] as const

function body() {
  const lines = [
    "# Zyene",
    "",
    "> Zyene designs, builds, and integrates production AI systems for distributors, manufacturers, and specialty contractors. The work is the operational gap between email, documents, ERP, CRM, and people.",
    "",
    "## What Zyene does",
    "",
    "Zyene is an applied AI engineering company for industrial operations. We connect to ERP, MES, field, and accounting systems rather than replacing them. Critical actions such as orders, quotes, and customer replies can require employee approval. Every engagement starts with an assessment of one workflow and a metric agreed before the pilot.",
    "",
    "## Pages",
    "",
    ...PAGES.map(([name, path, description]) => `- [${name}](${SITE_URL}${path === "/" ? "" : path}): ${description}`),
    "",
    "## Products",
    "",
    "- Zyene Reviews: reputation management for local and multi-location businesses, with review monitoring, AI-assisted replies, and review request campaigns. https://zyenereviews.com",
    "- Zentraic AI: voice AI for inbound and outbound calls, lead qualification and routing, and CRM updates. https://zyene.com/products",
    "",
    "## Articles",
    "",
    ...BLOG_POSTS.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`),
    "",
    "## Contact",
    "",
    "- General: support@zyene.com",
    "- Privacy: privacy@zyene.com",
    "- Legal: legal@zyene.com",
    "- Backed by Google for Startups and Stripe",
    "",
  ]
  return lines.join("\n")
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}

export const dynamic = "force-static"
