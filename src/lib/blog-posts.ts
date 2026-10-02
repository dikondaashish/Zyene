export type BlogSection = {
  heading?: string
  paragraphs: string[]
}

export type BlogAuthor = {
  name: string
  role: string
  avatar: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  dateDisplay: string
  dateISO: string
  readMinutes: number
  featured?: boolean
  coverImage: string
  author: BlogAuthor
  sections: BlogSection[]
}

export const WILLIAM_SANDERS: BlogAuthor = {
  name: "William Sanders",
  role: "Content Writer",
  avatar: "",
}

const WORDS_PER_MINUTE = 220

function post(input: Omit<BlogPost, "readMinutes" | "coverImage" | "author">): BlogPost {
  const words = input.sections
    .flatMap((section) => [section.heading ?? "", ...section.paragraphs])
    .join(" ")
    .split(/\s+/).length
  return {
    ...input,
    readMinutes: Math.max(3, Math.round(words / WORDS_PER_MINUTE)),
    coverImage: `/images/blog/${input.slug}.jpg`,
    author: WILLIAM_SANDERS,
  }
}

/** Retired article slugs and the article that replaced each one. */
export const BLOG_REDIRECTS: Record<string, string> = {
  "from-ai-hype-to-operational-ai": "ai-operations-layer-for-industrial-companies",
  "how-ai-transforms-business-operations": "purchase-order-entry-for-distributors",
  "ai-systems-vs-ai-tools": "rfq-intake-for-manufacturers",
  "what-is-digital-transformation": "bid-intake-for-specialty-contractors",
  "voice-and-messaging-as-a-growth-layer": "where-is-my-order-requests",
  "crm-automation-with-ai": "keep-your-erp-as-the-system-of-record",
  "operations-ai-for-growing-businesses": "human-approval-in-ai-workflows",
  "ai-automation-for-marketing-teams": "choosing-your-first-ai-workflow",
  "measuring-digital-transformation-roi": "measuring-ai-in-operations",
  "scaling-execution-without-scaling-headcount": "what-document-ai-can-read-today",
  "digital-transformation-roadmap": "from-assessment-to-pilot",
  "reviews-reputation-and-systematic-follow-up": "knowledge-search-for-operations-teams",
}

export const BLOG_POSTS: BlogPost[] = [
  post({
    slug: "ai-operations-layer-for-industrial-companies",
    title: "What Zyene does: an AI operations layer for distributors, manufacturers, and contractors",
    excerpt:
      "Industrial companies already bought the ERP, the CRM, and the field software. The manual work lives in the gaps between them. That gap is what we build for.",
    category: "Zyene",
    dateDisplay: "Mar 12, 2026",
    dateISO: "2026-03-12",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Walk through the office of almost any distributor, manufacturer, or specialty contractor and you will find the same pattern. The company runs a capable system of record: an ERP, a CRM, an estimating or field-service platform. Around it sits a layer of people moving information by hand. Purchase orders arrive as PDFs and get retyped. RFQs arrive with drawings and get read line by line. Customers email to ask where their order is, and someone looks it up and writes back.",
          "None of that work is strategic, but all of it is necessary, and it scales with volume. When orders grow, the order desk grows. When bids grow, estimators fall behind. Zyene exists to take that layer of manual handling and turn it into a system.",
        ],
      },
      {
        heading: "What we build",
        paragraphs: [
          "We design, build, and integrate production AI workflows that sit on top of the systems you already run. A typical workflow reads incoming work (an email, a PDF, a spreadsheet, a drawing), checks it against your ERP or CRM, flags what is missing or unusual, and prepares the next action: an order, a quote package, a reply, or a checklist.",
          "The six areas we work in are document intelligence, order and quote automation, workflow agents, ERP and CRM integration, enterprise knowledge search, and AI operations assessments. Each one is a building block. Most engagements combine two or three of them around a single workflow.",
        ],
      },
      {
        heading: "What we do not do",
        paragraphs: [
          "We do not ask you to replace your ERP. The system of record stays where it is, and the workflow writes into it the same way a person would, with the same permissions and the same audit trail.",
          "We do not remove people from decisions that matter. Orders above a threshold, price exceptions, and anything customer-facing can wait for an employee to approve. The goal is to remove the retyping, not the judgment.",
          "And we do not publish results we have not measured. Every engagement starts by agreeing on a metric, such as processing time, manual touches, or exception rate, and the pilot is judged against it.",
        ],
      },
      {
        heading: "How an engagement starts",
        paragraphs: [
          "Every project begins with an assessment of one workflow. We map how the work happens today, including the exceptions, identify which systems and data we can reach, and recommend a pilot with a clear metric. From there the work follows the same path: discover, design, build, integrate, validate, then deploy and improve from real use.",
        ],
      },
    ],
  }),
  post({
    slug: "purchase-order-entry-for-distributors",
    title: "Purchase order entry: why distributors still retype orders, and how to stop",
    excerpt:
      "EDI covers your largest accounts. Everyone else sends a PDF. Here is what it takes to turn emailed purchase orders into ERP orders without retyping them.",
    category: "Distribution",
    dateDisplay: "Apr 21, 2026",
    dateISO: "2026-04-21",
    sections: [
      {
        paragraphs: [
          "Most wholesale distributors have solved order entry for their largest customers. Those accounts send orders through EDI or a customer portal, and the orders land in the ERP without anyone touching them. The problem is the long tail: hundreds of smaller customers who email a PDF, paste a list into the body of a message, or attach a spreadsheet exported from their own system.",
          "For those orders, someone on the order desk opens the email, finds the customer in the ERP, matches each line to a SKU, checks the price, and keys it in. It is careful, repetitive work, and it is where errors creep in: a transposed quantity, the wrong unit of measure, a customer part number that maps to the wrong item.",
        ],
      },
      {
        heading: "Why templates and OCR were not enough",
        paragraphs: [
          "Earlier attempts at automating this relied on templates: define where the PO number sits on each customer's form and extract it. That works until a customer changes their form, and it never works for orders written in free text. Plain OCR reads the characters but does not understand that \"2 cs\" means two cases of twelve, or that a customer's internal part number corresponds to your SKU.",
          "Modern language models change the first half of the problem. They can read a purchase order in almost any layout and pull out the customer, ship-to, requested date, and line items with their quantities and units. What they cannot do on their own is know your catalog, your contract prices, or your customer's history. That knowledge lives in your ERP.",
        ],
      },
      {
        heading: "The workflow that works",
        paragraphs: [
          "A reliable order entry workflow has four stages. First, extraction: the AI reads the email and attachments and produces structured lines. Second, matching: each line is matched against your item master and the customer's cross-reference table, and each match carries a confidence level. Third, validation: prices are checked against the contract, quantities against pack sizes, and dates against lead times. Fourth, approval: an employee reviews the prepared order, resolves anything flagged, and approves it into the ERP.",
          "The approval step is not a formality. It is where the order desk's judgment stays in the process. The difference is that the employee now reviews a prepared order with the exceptions highlighted, instead of building it from scratch.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Before a pilot, measure three things on your current process: the time from email received to order entered, the number of manual touches per order, and the rate of orders that need correction after entry. Those are the numbers the pilot should move. If they do not move, the workflow is not working, regardless of how impressive the extraction looks in a demo.",
        ],
      },
    ],
  }),
  post({
    slug: "rfq-intake-for-manufacturers",
    title: "RFQ intake for manufacturers: getting estimators to the quote faster",
    excerpt:
      "An RFQ packet can hold drawings, specifications, and a quantity spreadsheet. The first pass through it is reading, not estimating. That pass can be prepared for you.",
    category: "Manufacturing",
    dateDisplay: "Apr 14, 2026",
    dateISO: "2026-04-14",
    sections: [
      {
        paragraphs: [
          "For a job shop or contract manufacturer, quote speed matters. Customers often send the same RFQ to several suppliers, and the first credible quote has an advantage. Yet the first hours of every quote are spent on work that is not estimating at all: opening the packet, reading the drawings, finding the material and tolerance requirements, noting the quantities, and searching for similar jobs you have done before.",
          "Experienced estimators are scarce, and that preparation work consumes their time before their expertise is ever applied.",
        ],
      },
      {
        heading: "What an estimator package contains",
        paragraphs: [
          "The goal is not to have AI produce the quote. It is to hand the estimator a prepared package. A good package lists the parts and quantities, the materials and finishes, the critical tolerances and any special processes, the delivery requirements, and the terms in the RFQ that deserve attention.",
          "It also flags what is missing. If a drawing revision does not match the one referenced in the request, or a quantity break is ambiguous, the package says so up front, before the estimator has invested an hour.",
        ],
      },
      {
        heading: "Using your own history",
        paragraphs: [
          "The most valuable part of the package is often a list of related historical jobs. Manufacturers have years of quotes and job records in their ERP and file shares, but finding a similar part usually depends on someone remembering it. Searching past jobs by material, geometry described in the drawing notes, customer, and process gives the estimator a starting point grounded in your actual costs.",
        ],
      },
      {
        heading: "Where the estimator stays in charge",
        paragraphs: [
          "Pricing, lead time commitments, and the decision to bid at all remain with the estimator and the sales team. The workflow prepares; people decide. In practice this keeps the quality of your quotes where it is while giving estimators back the time they spent on intake.",
          "A sensible pilot metric is the time from RFQ received to estimator-ready package, alongside the time from RFQ to quote sent. Track both, because a faster package only matters if quotes go out sooner.",
        ],
      },
    ],
  }),
  post({
    slug: "bid-intake-for-specialty-contractors",
    title: "Bid intake for specialty contractors: from RFP packet to checklist",
    excerpt:
      "HVAC, electrical, mechanical, plumbing, fire protection, and roofing firms all share the same office bottleneck: someone has to read the bid documents before estimating can start.",
    category: "Specialty Contractors",
    dateDisplay: "Apr 7, 2026",
    dateISO: "2026-04-07",
    sections: [
      {
        paragraphs: [
          "Specialty contractors live on bids. A general contractor or owner sends an invitation to bid with a set of documents: specifications, drawings, addenda, a bid form, and the general conditions. Before an estimator can price the work, someone has to read that set, determine the scope that applies to your trade, pull the deadlines, and list what must be submitted.",
          "On a busy week, that reading backlog decides which bids you pursue. Opportunities are passed on not because they are a poor fit, but because nobody had time to read the packet.",
        ],
      },
      {
        heading: "What a bid checklist should capture",
        paragraphs: [
          "A useful intake summary answers the questions your team asks every time. What is the scope for our trade, and which specification sections define it? When are bids due, and when are questions due? Is there a pre-bid meeting or site walk? What bonding, insurance, and licensing requirements apply? Which addenda have been issued, and what did they change? What forms must be submitted with the bid?",
          "AI can read the full document set and draft those answers with references back to the page and section they came from. The references matter: they let the estimator verify a requirement in seconds instead of trusting a summary blindly.",
        ],
      },
      {
        heading: "Fitting into the estimating workflow",
        paragraphs: [
          "The output should land where your team already works, whether that is a shared drive folder, a project in your estimating software, or a task in your project management tool, with the checklist attached and the right people notified. If intake creates a new place to look, it adds work instead of removing it.",
        ],
      },
      {
        heading: "Keeping judgment with the estimator",
        paragraphs: [
          "The decision to bid, the scope interpretation, and every number on the bid form stay with your estimators and project managers. What changes is the starting point. Instead of an unread packet, they start with a checklist and a scope summary they can confirm or correct.",
          "Measure the time from invitation received to go or no-go decision, and the share of invitations your team is able to review at all. Those two numbers show whether intake is the constraint it appears to be.",
        ],
      },
    ],
  }),
  post({
    slug: "where-is-my-order-requests",
    title: "“Where is my order?”: answering status requests without pulling people off the desk",
    excerpt:
      "Order status questions are simple to answer and constant to receive. A workflow can look up the answer in your ERP and draft the reply for someone to send.",
    category: "Distribution",
    dateDisplay: "Mar 28, 2026",
    dateISO: "2026-03-28",
    sections: [
      {
        paragraphs: [
          "Ask a customer service team what fills their inbox and the answer is usually the same: status requests. Has my order shipped? When will it arrive? Can I get the tracking number? Is the backordered item in yet? Each question takes a few minutes to answer: find the order, check the ERP, check the carrier, write the reply. Multiplied across a day, those minutes become a large share of the team's time.",
        ],
      },
      {
        heading: "Why portals did not solve it",
        paragraphs: [
          "Many distributors have built customer portals with order tracking, and they help. But a large portion of customers still email or call, because that is how they have always worked with you, or because their question is slightly different from what the portal shows. The demand does not go away; it just arrives through a different channel.",
        ],
      },
      {
        heading: "A lookup and a draft",
        paragraphs: [
          "A status workflow does three things. It reads the incoming message and identifies the customer and the order or purchase order number they are asking about. It checks the ERP for order status, shipment, and any backorder lines, and the carrier for tracking. Then it drafts a reply with the answer in plain language.",
          "For straightforward questions, the draft is ready for a team member to review and send in seconds. When the question is not straightforward (a damaged shipment, a dispute, a request for an exception), the workflow routes it to the right person with the order details already attached.",
        ],
      },
      {
        heading: "Why a person still sends it",
        paragraphs: [
          "Customer communication is part of your relationship with the account. Starting with a person reviewing each reply keeps tone and accuracy under your control, and it builds the evidence you need to decide later whether some categories of reply can be sent automatically.",
          "The metric to watch is customer response time for status requests, along with the hours your team spends on them each week.",
        ],
      },
    ],
  }),
  post({
    slug: "keep-your-erp-as-the-system-of-record",
    title: "AI and your ERP: why the system of record should stay where it is",
    excerpt:
      "Replacing an ERP to get AI is the wrong trade. The better approach is a workflow layer that reads from your ERP and writes to it with the same controls a person has.",
    category: "Integration",
    dateDisplay: "Mar 21, 2026",
    dateISO: "2026-03-21",
    sections: [
      {
        paragraphs: [
          "Industrial companies have invested years in their ERP: configuration, customizations, item masters, pricing rules, and the habits of the people who use it every day. When AI enters the conversation, some vendors suggest that the path forward is a new platform. For most companies, that is the wrong trade. An ERP migration is one of the riskiest projects a business can take on, and it is not what stands between you and automation.",
        ],
      },
      {
        heading: "What actually needs to connect",
        paragraphs: [
          "The work AI can take on usually starts outside the ERP, in email, PDFs, spreadsheets, and shared drives, and ends inside it, as an order, a quote, an update, or a record. The integration layer needs to read reference data from the ERP (customers, items, prices, inventory, open orders) and write prepared transactions back into it.",
          "Most ERPs used by distributors and manufacturers, including NetSuite, Epicor, Infor, Microsoft Dynamics, Acumatica, and SAP, offer APIs or integration tools that make this possible. Where an API is limited, there are usually import routines or a middleware layer that can be used safely. These are integration capabilities, not partnerships, and each system is assessed on its own terms.",
        ],
      },
      {
        heading: "Writing with the same controls as a person",
        paragraphs: [
          "The principle that keeps this safe is simple: the workflow should write into the ERP with the same permissions, validations, and audit trail as the employee it supports. If a person cannot override a credit hold, neither can the workflow. If a transaction needs approval above a threshold, the workflow submits it for approval rather than posting it.",
          "This keeps your existing controls meaningful and makes the automation auditable. Anyone looking at a record can see what was prepared by the workflow and who approved it.",
        ],
      },
      {
        heading: "When the ERP is the problem",
        paragraphs: [
          "Occasionally an assessment reveals that the system of record really is the constraint: data that is too inconsistent to match against, or a platform that cannot be integrated at all. When that happens, it is better to say so plainly and fix the data or plan the migration on its own merits, rather than hide the problem underneath an AI project.",
        ],
      },
    ],
  }),
  post({
    slug: "human-approval-in-ai-workflows",
    title: "Human approval in AI workflows: where people should stay in the loop",
    excerpt:
      "Approval steps are not a sign that automation is incomplete. Placed well, they are what makes it safe to automate the rest of the workflow.",
    category: "Operations",
    dateDisplay: "Mar 7, 2026",
    dateISO: "2026-03-07",
    sections: [
      {
        paragraphs: [
          "A common assumption about AI in operations is that the goal is full automation: no people involved at all. In industrial businesses, that framing usually leads to one of two outcomes. Either the project stalls because nobody is comfortable letting software post orders unsupervised, or it ships and erodes trust the first time it gets something important wrong.",
          "A better framing is to decide deliberately where judgment is needed and design the approval step into the workflow from the start.",
        ],
      },
      {
        heading: "Where approval belongs",
        paragraphs: [
          "Approval steps belong where an error is expensive or visible to a customer. Typical examples are orders above a value threshold, price or discount exceptions, new customers or ship-to addresses, substitutions, customer-facing replies, and anything that commits your company to a delivery date or a price.",
          "Approval does not belong where it adds no information. If an employee would approve every instance of a routine, low-risk step without looking, the approval is a delay, not a control.",
        ],
      },
      {
        heading: "Designing a good approval screen",
        paragraphs: [
          "An approval step works when the reviewer can make a decision quickly and confidently. That means showing the source document next to the prepared transaction, highlighting the fields that were uncertain or that triggered a rule, and explaining why. A reviewer should never have to hunt for the reason something was flagged.",
          "It also means giving the reviewer real options: approve, correct and approve, send back, or route to someone else. Every correction is useful feedback for improving the workflow.",
        ],
      },
      {
        heading: "Earning more automation over time",
        paragraphs: [
          "Approval data tells you where the workflow is reliable. If a category of transaction is approved without changes week after week, you have evidence to consider removing the approval for that category. If corrections cluster around a specific customer or field, you know where to improve. Automation expands because it has been measured, not because it was assumed.",
        ],
      },
    ],
  }),
  post({
    slug: "choosing-your-first-ai-workflow",
    title: "Choosing your first AI workflow: a practical way to score candidates",
    excerpt:
      "The best first workflow is not the most impressive one. It is frequent, rule-bound, measurable, and connected to systems you can reach.",
    category: "Getting Started",
    dateDisplay: "Feb 28, 2026",
    dateISO: "2026-02-28",
    sections: [
      {
        paragraphs: [
          "When a company decides to put AI to work in operations, the list of possible starting points is usually long. Order entry, quoting, invoice matching, customer service, document control, scheduling. Choosing well matters, because the first workflow sets expectations for everything after it. A first project that drags on or cannot show a result makes the second one much harder to approve.",
        ],
      },
      {
        heading: "Five questions to score each candidate",
        paragraphs: [
          "Volume: how often does this work happen? A task done hundreds of times a week returns far more than one done monthly, even if the monthly one is more painful.",
          "Structure: is there a clear right answer most of the time? Workflows governed by rules and reference data, like matching an order to your catalog, are better candidates than workflows that depend on negotiation or relationships.",
          "Access: can the workflow reach the systems and data it needs? If the information lives in a system with no integration path, the project becomes an integration project first.",
          "Measurability: can you measure the current process today? If you cannot say how long it takes or how often it goes wrong, you will not be able to show that it improved.",
          "Ownership: is there a team that owns the workflow and wants it fixed? A motivated owner provides the feedback that makes the system accurate.",
        ],
      },
      {
        heading: "Common good first choices",
        paragraphs: [
          "For distributors, emailed purchase order entry and order status requests often score well. For manufacturers, RFQ intake and purchasing document processing are frequent candidates. For specialty contractors, bid intake and submittal preparation tend to rise to the top. The right answer depends on your volumes and systems, which is why the scoring matters more than the list.",
        ],
      },
      {
        heading: "Start narrow",
        paragraphs: [
          "Whatever you choose, scope it tightly. One document type, one customer segment, or one location is enough for a pilot. A narrow scope gets to a measured result sooner, and a measured result is what earns the next workflow.",
        ],
      },
    ],
  }),
  post({
    slug: "measuring-ai-in-operations",
    title: "How to measure AI in operations: the metrics that actually matter",
    excerpt:
      "Demos measure impressiveness. Operations should measure processing time, manual touches, exception rate, and cost per transaction, against a baseline set before the pilot.",
    category: "Measurement",
    dateDisplay: "Feb 14, 2026",
    dateISO: "2026-02-14",
    sections: [
      {
        paragraphs: [
          "Most AI projects are evaluated on how good the demo looks. A model reads a messy PDF perfectly, or answers a question fluently, and the project is approved. Months later, nobody can say whether the business is better off. The fix is to decide what will be measured before the pilot starts, and to measure the current process first.",
        ],
      },
      {
        heading: "The core operating metrics",
        paragraphs: [
          "Processing time: the elapsed time from work arriving to work completed, such as from purchase order email to order entered, or RFQ received to quote sent. This is usually the metric customers feel.",
          "Manual touches: how many times a person has to handle each item. Reducing touches is often more valuable than reducing time, because every touch is a chance for error and an interruption.",
          "Exception rate: the share of items the workflow could not complete without help, and why. A healthy workflow has a stable, well-understood exception rate and clear routing for the exceptions.",
          "Cost per transaction: the fully loaded cost of handling one order, quote, or request. This is the number that connects the workflow to the business case.",
        ],
      },
      {
        heading: "Set the baseline first",
        paragraphs: [
          "None of these metrics mean anything without a baseline. Before a pilot, sample the current process for a few weeks: time a representative set of items, count the touches, and log the errors that are corrected downstream. It is tedious, but it is the only way to know later whether the workflow made a difference.",
        ],
      },
      {
        heading: "Report from real use",
        paragraphs: [
          "Once the workflow is live, report against the same metrics on a regular cadence, using the system's own logs and the approval data. Include what did not improve. A report that only shows good news is a sales document, not an operating tool, and the teams who rely on the workflow will notice the difference.",
        ],
      },
    ],
  }),
  post({
    slug: "what-document-ai-can-read-today",
    title: "Document intelligence: what AI can reliably read today, and what it cannot",
    excerpt:
      "Purchase orders, invoices, packing slips, and specifications are now readable in almost any layout. Handwriting, poor scans, and implied context still need care.",
    category: "Documents",
    dateDisplay: "Feb 7, 2026",
    dateISO: "2026-02-07",
    sections: [
      {
        paragraphs: [
          "Industrial businesses run on documents: purchase orders, invoices, packing slips, bills of lading, certificates of conformance, specifications, drawings, and submittals. For years, automating document handling meant building templates for each layout and accepting that anything unusual would fall back to a person. Language and vision models have changed what is practical, but not everything has become easy.",
        ],
      },
      {
        heading: "What works reliably",
        paragraphs: [
          "Typed business documents in varied layouts are now well within reach. A model can read purchase orders, invoices, and packing slips from different customers and suppliers and extract the fields you care about without a template for each one. It can read tables that span pages, recognize that a line describes a quantity and a unit, and summarize long specifications into the requirements that matter for a given trade or part.",
          "Models are also good at classification: deciding whether an incoming attachment is an order, an invoice, a quote request, or a certificate, and routing it accordingly.",
        ],
      },
      {
        heading: "What still needs care",
        paragraphs: [
          "Handwritten notes, low-quality scans, and faxes remain harder. They can often be read, but confidence is lower and review matters more. Engineering drawings can be read for title block information, notes, and callouts, but interpreting geometry still belongs with an engineer or estimator.",
          "The subtler challenge is implied context. A customer who writes \"same as last time\" or uses their own part numbers is relying on history that is not in the document. Resolving that requires your ERP data and cross-reference tables, which is why document reading is only half of a useful workflow.",
        ],
      },
      {
        heading: "Confidence, not just extraction",
        paragraphs: [
          "The practical question is not whether a model can read a document, but whether the workflow knows when it might be wrong. Every extracted field should carry a confidence signal, and every business rule should be checked against your systems. Low-confidence fields and rule violations go to a person; everything else is prepared for approval. That is what turns impressive extraction into dependable operations.",
        ],
      },
    ],
  }),
  post({
    slug: "from-assessment-to-pilot",
    title: "From assessment to pilot: what the first engagement looks like",
    excerpt:
      "Six steps from the workflow you have today to a measured deployment: discover, design, build, integrate, validate, then deploy and improve.",
    category: "Getting Started",
    dateDisplay: "Jan 22, 2026",
    dateISO: "2026-01-22",
    sections: [
      {
        paragraphs: [
          "Companies considering AI in their operations often ask what the first project actually involves. The honest answer is that it looks less like installing software and more like an engineering project with a defined scope. Here is how we approach it.",
        ],
      },
      {
        heading: "Discover",
        paragraphs: [
          "We start by mapping one workflow end to end with the people who do it. That includes the systems involved, the documents that arrive, the decisions made along the way, and, most importantly, the exceptions. The exceptions are where most of the real effort hides, and a design that ignores them will not survive contact with production.",
        ],
      },
      {
        heading: "Design",
        paragraphs: [
          "Design decides what AI should do, what your existing software should do, and what should stay with people. It also sets the metric the pilot will be judged on and the baseline to compare against. The output is a short, specific plan rather than a strategy document.",
        ],
      },
      {
        heading: "Build and integrate",
        paragraphs: [
          "We build the workflow with the models and tools that suit the problem; we are not tied to a single provider. Integration connects it to your ERP, CRM, email, and file storage with appropriate permissions. Wherever an action is critical, an approval step is built in from the beginning.",
        ],
      },
      {
        heading: "Validate",
        paragraphs: [
          "Before anything touches production, the workflow is tested on real historical examples from your business, including the difficult ones. Validation shows where the workflow is reliable, where it needs review, and where it should not be used yet.",
        ],
      },
      {
        heading: "Deploy and improve",
        paragraphs: [
          "The pilot goes live with a defined scope and the agreed metric. We monitor it, collect feedback from the people using it, and improve it from real use. At the end of the pilot, you have a measured result and the information to decide whether to expand the workflow, start the next one, or stop.",
        ],
      },
    ],
  }),
  post({
    slug: "knowledge-search-for-operations-teams",
    title: "Finding answers in SOPs, manuals, and past jobs: knowledge search for operations teams",
    excerpt:
      "The answer usually exists somewhere in a binder, a shared drive, or an old job folder. Knowledge search finds it and shows where it came from.",
    category: "Knowledge",
    dateDisplay: "Jan 12, 2026",
    dateISO: "2026-01-12",
    sections: [
      {
        paragraphs: [
          "Every industrial company has institutional knowledge spread across standard operating procedures, equipment manuals, quality records, past job folders, and the memories of long-tenured employees. When someone needs an answer (how a machine is set up for a specific part, what a customer's packaging requirements are, how a similar job was priced), they search a shared drive, ask a colleague, or give up and work it out again.",
          "As experienced people retire or move on, that knowledge becomes harder to reach.",
        ],
      },
      {
        heading: "Search that answers, with sources",
        paragraphs: [
          "Knowledge search uses language models to answer questions in plain language from your own documents. The important design choice is that every answer cites the documents it came from, with a link to the exact page or section. Operations teams should never have to trust an answer they cannot verify, especially for procedures that affect safety or quality.",
          "When the documents do not contain an answer, the system should say so rather than guess.",
        ],
      },
      {
        heading: "Permissions and freshness",
        paragraphs: [
          "Not every document should be visible to every employee. Knowledge search has to respect the permissions already set on your file storage and systems, so that a question from the shop floor does not surface a pricing file meant for sales leadership.",
          "It also has to stay current. When a procedure is revised, the old version should stop appearing in answers. Connecting search directly to the systems where documents live, rather than copying them into a separate tool, keeps the answers aligned with the current version.",
        ],
      },
      {
        heading: "Where it helps most",
        paragraphs: [
          "Knowledge search tends to deliver value fastest where questions are frequent and the answers are documented but hard to find: onboarding new employees, supporting customer service with product information, helping estimators find similar past jobs, and giving technicians quick access to equipment procedures. Measure it by the time it takes to find an answer and how often people find one at all.",
        ],
      },
    ],
  }),
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0]
}
