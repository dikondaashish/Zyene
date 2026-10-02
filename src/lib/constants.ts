/** Hero partner strip: icon on the left, company name on the right (except `none`, wordmark-only). */
export type MarqueePartner = {
  id: string
  icon: string
  labelVariant: "google" | "simple" | "uppercase" | "none"
  /** Required when labelVariant is simple or uppercase */
  label?: string
  /** Default true; set false for colored wordmarks on dark backgrounds */
  iconInvert?: boolean
}

export const SITE_DATA = {
  logoDark: "/images/logo-white.png",
  logoLight: "/images/logo-black.png",
  /** Stripe “S” mark — local SVG (Brandfetch CDN blocks Next.js optimizer / invalid client id). */
  stripeFooterIcon: "/images/stripe-icon.svg",
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Industries",
      href: "/industries/wholesale-distribution",
      children: [
        { label: "Wholesale Distribution", href: "/industries/wholesale-distribution" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Specialty Contractors", href: "/industries/specialty-contractors" },
      ],
    },
    { label: "Solutions", href: "/solutions" },
    { label: "How We Work", href: "/how-we-work" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Security", href: "/security" },
        { label: "Resources", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  marqueePartners: [
    { id: "google", icon: "/images/ai-logos/google.svg", labelVariant: "google" },
    { id: "openai", icon: "/images/ai-logos/openai.svg", labelVariant: "simple", label: "OpenAI" },
    { id: "anthropic", icon: "/images/ai-logos/anthropic.svg", labelVariant: "simple", label: "Anthropic" },
    { id: "scale-ai", icon: "/images/ai-logos/scale-ai.png", labelVariant: "uppercase", label: "Scale AI" },
    { id: "runway", icon: "/images/ai-logos/runway.png", labelVariant: "uppercase", label: "Runway" },
    {
      id: "glean",
      icon: "/images/ai-logos/glean.svg",
      labelVariant: "none",
      iconInvert: false,
    },
  ] satisfies MarqueePartner[],
  industries: [
    {
      name: "Distribution",
      description: "Purchase orders, order entry, RFQs, quotes, customer questions, and product data, prepared for the ERP your order desk already uses.",
      href: "/industries/wholesale-distribution",
      cta: "Explore Distribution AI",
    },
    {
      name: "Manufacturing",
      description: "RFQ-to-quote work, drawings and specifications, purchasing, quality documents, SOP search, and workflows around ERP or MES.",
      href: "/industries/manufacturing",
      cta: "Explore Manufacturing AI",
    },
    {
      name: "Contractors",
      description: "Bid and RFP intake, estimating support, RFIs, submittals, change orders, job closeout, and back-office updates. ServiceTitan, Procore, and accounting are integration capabilities, not partnerships.",
      href: "/industries/specialty-contractors",
      cta: "Explore Contractor AI",
    }
  ],
  benefits: [
    {
      title: "Workflow-first",
      description: "We begin with how the work actually happens, not with a model demo."
    },
    {
      title: "System-independent",
      description: "We connect the ERP, CRM, email, and documents you already run. We do not ask you to replace them."
    },
    {
      title: "Human-controlled",
      description: "People stay in the loop wherever judgment or approval matters. Critical actions can require an employee."
    },
    {
      title: "Model-independent",
      description: "We choose the model for the problem. The company is not tied to one provider."
    },
    {
      title: "Measurable",
      description: "Every deployment starts with a business metric: hours, touches, exceptions, turnaround, or response time."
    },
    {
      title: "Production-minded",
      description: "We test accuracy, permissions, exceptions, and failure cases before a workflow goes live."
    }
  ],
  faqs: [
    {
      question: "What does Zyene actually build?",
      answer: "Production AI systems for distributors, manufacturers, and specialty contractors. The systems read email and documents, check your business software, prepare the next action, and leave approval with your people when it matters."
    },
    {
      question: "Do we have to replace our ERP or CRM?",
      answer: "No. We integrate with the systems you already use. We do not position Zyene as a replacement for ERP, MES, field software, or accounting."
    },
    {
      question: "Which systems can you connect?",
      answer: "Integration capabilities include platforms such as NetSuite, Epicor, Infor, Microsoft Dynamics, Acumatica, SAP, Salesforce, HubSpot, ServiceTitan, Procore, and QuickBooks. Listing a system is not an official partnership."
    },
    {
      question: "Will AI take actions on its own?",
      answer: "Only where you allow it. Critical actions can require an employee to approve. Exceptions are escalated instead of forced through."
    },
    {
      question: "How do you measure results?",
      answer: "We agree on the metric before a pilot: processing time, manual touches, exception rate, cost per transaction, quote turnaround, employee hours, or customer response time. We do not publish invented results."
    }
  ],
  footerLinks: {
    pages: [
      { label: "Home", href: "/" },
      { label: "Distribution", href: "/industries/wholesale-distribution" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Contractors", href: "/industries/specialty-contractors" },
      { label: "Solutions", href: "/solutions" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Security", href: "/security" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Resources", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Terms & conditions", href: "/legal/terms-conditions" },
      { label: "Email notice", href: "/legal/email-notice" },
    ],
  },
};
