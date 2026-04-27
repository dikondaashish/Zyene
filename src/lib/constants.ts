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
  logoDark: "/images/Logo_White.png",
  logoLight: "/images/Logo_Black.png",
  heroBg: "/images/hero-mesh.jpg",
  badgeIcon: "/images/badge-icon.png",
  /** Stripe “S” mark — local SVG (Brandfetch CDN blocks Next.js optimizer / invalid client id). */
  stripeFooterIcon: "/images/stripe-icon.svg",
  nav: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Use cases", href: "/use-cases" },
    { label: "Products", href: "/products" },
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
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
  features: [
    {
      title: "Unify and Analyze All Your Data",
      description: "Connect internal docs, third-party tools, and real-time inputs into a single intelligent interface. Let AI surface insights that drive smarter, more confident business decisions.",
      image: "/images/logo1.png"
    },
    {
      title: "Automate High-Frequency Workflows",
      description: "Zyene AI systems break down complex tasks into clear, traceable steps. Eliminate repetitive work and scale your team's output with unmatched efficiency and precision.",
      image: "/images/feature2.png"
    },
    {
      title: "Accelerate Execution with Reliable Autonomy",
      description: "Our agents don't just assist — they complete tasks end-to-end with accountability and speed. Track progress, refine outputs, and get results faster.",
      image: "/images/feature3.png"
    }
  ],
  processTabs: [
    {
      id: "discovery",
      title: "Discovery",
      label: "01 – DISCOVERY",
      heading: "Identify System Gaps Across Teams",
      description: "We map where your marketing, operations, and sales workflows break down across tools, handoffs, and reporting. This reveals the exact bottlenecks slowing growth and where automation will create the highest impact first.",
      image: "/images/process1.png"
    },
    {
      id: "develop",
      title: "Develop",
      label: "02 – DEVELOP",
      heading: "Build a Unified AI Operating Layer",
      description: "We connect your core workflows into one structured system where tasks, data, and decisions flow together. Each process is designed for visibility and control, so execution scales without adding operational complexity.",
      image: "/images/process2.png"
    },
    {
      id: "optimize",
      title: "Optimize",
      label: "03 – OPTIMIZE",
      heading: "Scale Performance with Continuous Optimization",
      description: "Once live, we monitor workflows end-to-end and improve system performance using real usage data. You get faster execution, clearer reporting, and compounding gains across every part of the business.",
      image: "/images/logo2.png"
    }
  ],
  statsProfiles: [
    "/images/logo6.png",
    "/images/stat1.png",
    "/images/stat2.png",
  ],
  industries: [
    {
      name: "Finance",
      description: "Zyene automates reporting, reconciliation, and compliance workflows so finance teams move faster with full audit visibility."
    },
    {
      name: "E-commerce",
      description: "Zyene connects storefront, support, and fulfillment to automate retention campaigns, inventory actions, and customer follow-ups."
    },
    {
      name: "Healthcare",
      description: "Zyene streamlines scheduling, intake, and care operations with secure, compliant automation across patient workflows."
    },
    {
      name: "SaaS",
      description: "Enhance user onboarding, automate feature requests, and analyze user behavior to improve retention and lifetime value."
    },
    {
      name: "Real Estate",
      description: "Zyene automates lead routing, listing operations, and client communication to accelerate deal flow and response times."
    },
    {
      name: "Logistics",
      description: "Zyene coordinates routing, exception handling, and shipment updates so logistics teams execute with less manual overhead."
    },
    {
      name: "Legal",
      description: "Zyene assists legal ops with document workflows, intake automation, and task orchestration for faster matter turnaround."
    },
    {
      name: "Education",
      description: "Zyene automates admin workflows, student communications, and learning operations to improve speed and consistency."
    },
    {
      name: "Manufacturing",
      description: "Automate production planning, monitor quality in real-time, and improve operational efficiency across facilities."
    },
    {
      name: "Insurance",
      description: "Streamline claims processing, automate underwriting tasks, and improve policyholder response times with AI workflows."
    },
    {
      name: "Hospitality",
      description: "Optimize guest communication, automate booking operations, and personalize service delivery at scale."
    },
    {
      name: "HR & Recruiting",
      description: "Automate candidate screening, interview coordination, and onboarding workflows to accelerate hiring outcomes."
    }
  ],
  benefits: [
    {
      title: "Increased efficiency",
      description: "AI agents handle tasks instantly, speeding up delivery across workflows."
    },
    {
      title: "Lower Operational Costs",
      description: "Automate repetitive work and scale operations without scaling your headcount."
    },
    {
      title: "Smarter Decision-Making",
      description: "Turn scattered data into actionable insights with AI-powered analysis."
    },
    {
      title: "24/7 Workflow Continuity",
      description: "Run critical processes nonstop — even outside business hours."
    },
    {
      title: "Seamless Integration",
      description: "Connect with your current tools and systems in minutes, not months."
    },
    {
      title: "Enterprise-Grade Security",
      description: "Protect sensitive data with encrypted, compliant, and secure AI operations."
    }
  ],
  comparison: {
    others: [
      "Manual task delegation",
      "Limited data usage",
      "Human error & delay",
      "Costly scaling"
    ],
    zyene: [
      "End-to-end task automation",
      "Unified analysis across all data",
      "Reliable, always-on AI agents",
      "Scales without adding headcount"
    ]
  },
  testimonials: [
    {
      quote: "Before Zyene, our team was stuck in disconnected tools and manual handoffs. Within the first month, we automated core workflows across marketing and operations. What used to take days now takes minutes — with better consistency, faster execution, and clear visibility across teams.",
      name: "Lauren Meyers",
      role: "Growth Strategist",
      stat: "3x",
      statText: "Average ROI"
    },
    {
      quote: "Zentraic AI helped us handle inbound calls, qualify leads, and sync every outcome to CRM without manual follow-up. Our team now closes loops faster, misses fewer opportunities, and scales daily call operations without adding extra headcount.",
      name: "Daniel Carter",
      role: "Operations Lead, Harbor Ridge Group",
      stat: "68%",
      statText: "Faster call-to-CRM turnaround"
    }
  ],
  faqs: [
    {
      question: "What exactly does an AI agent do?",
      answer: "Zyene AI agents execute end-to-end business workflows — from capturing inputs to triggering actions across your systems — with full visibility and control."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most teams can start within a few days. We usually launch the first workflows in 1-2 weeks, then scale based on your priorities and systems."
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "No technical team is required. Zyene provides hands-on support, setup, and execution. We can also provide dedicated team support (marketing, ops, sales) that works like an extension of your in-house team."
    },
    {
      question: "What tools can it integrate with?",
      answer: "Zyene integrates with your core stack including HubSpot, Salesforce, Slack, Notion, Airtable, Google Workspace, and other CRM, ops, and communication tools."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Zyene uses secure, permission-based workflows with encrypted data handling and controlled access so your business data stays protected."
    }
  ],
  footerLinks: {
    pages: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Terms & conditions", href: "/legal/terms-conditions" },
    ]
    ,
    seo: [
      { label: "Sitemap", href: "/sitemap.xml" },
      { label: "Robots", href: "/robots.txt" },
      { label: "LLMs", href: "/llms.txt" },
    ],
  },
  footerCtaBg: "/images/footer-cta-bg.png",
  testimonialBg: "/images/Logo_White.png"
};
