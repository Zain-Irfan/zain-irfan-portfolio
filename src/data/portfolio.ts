// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Zain Irfan",
  shortName: "Zain",
  role: "Full Stack Developer",
  tagline:
    "Laravel developer for 6 years and Shopify app builder for 4. I build web apps and Shopify apps end to end — from polished interfaces to the APIs and dashboards that run the business.",
  location: "Lahore, Pakistan",
  email: "zain.irfan4442@gmail.com",
  photo: "/profile.jpg",
  available: true,
  socials: {
    github: "https://github.com/Zain-Irfan",
    linkedin: "https://www.linkedin.com/in/zain-irfan-3356001aa/",
  },
};

export const about = {
  paragraphs: [
    "I'm a full stack developer from Lahore who enjoys turning ideas into products people actually use. For the last 6 years I've built Laravel applications — APIs, admin portals and business systems with real roles, permissions and audit trails.",
    "For the last 4 years I've also built Shopify apps and integrations that connect stores to real operations: dispatch and delivery, estimates that turn into orders, inventory and commissions. On the frontend I work with React and Next.js.",
  ],
  stats: [
    { value: "6+", label: "Years with Laravel" },
    { value: "4+", label: "Years building Shopify apps" },
    { value: "7+", label: "Client projects live" },
    { value: "2", label: "Software companies" },
  ],
};

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery / AJAX"],
  },
  {
    title: "Backend",
    items: [
      "Laravel",
      "PHP",
      "REST API Design",
      "API Integration",
      "Auth & RBAC",
      "Queues, Jobs & Cron",
      "Livewire / Blade",
    ],
  },
  {
    title: "Shopify & E-commerce",
    items: [
      "Shopify Apps",
      "Shopify Admin API",
      "Webhooks",
      "Polaris",
      "App Bridge",
      "Payment Gateways",
    ],
  },
  {
    title: "Database & Tools",
    items: ["MySQL", "Git & GitHub", "WordPress", "cPanel / VPS Deployment"],
  },
];

export const services = [
  {
    icon: "layout",
    title: "Laravel Web Applications",
    description:
      "Business portals, admin panels and internal tools with authentication, roles, permissions and audit trails.",
  },
  {
    icon: "bag",
    title: "Shopify App Development",
    description:
      "Custom and public Shopify apps built on the Admin API, webhooks, Polaris and App Bridge.",
  },
  {
    icon: "plug",
    title: "API Integrations",
    description:
      "Connecting Shopify, payment gateways and third-party services to your systems through REST APIs and webhooks.",
  },
  {
    icon: "chart",
    title: "Dashboards & Portals",
    description:
      "Dashboards that turn spreadsheets into one system — orders, inventory, sales and commissions in one place.",
  },
  {
    icon: "code",
    title: "React & Next.js Frontends",
    description: "Fast, responsive single-page apps and frontends on top of Laravel APIs.",
  },
  {
    icon: "globe",
    title: "WordPress Websites",
    description:
      "Conversion-focused business websites with custom themes, quote forms and local SEO.",
  },
] as const;

export const techStrip = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "Shopify Apps",
  "Shopify Admin API",
  "Webhooks",
  "Polaris",
  "REST APIs",
  "MySQL",
  "Livewire",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "WordPress",
  "Git",
];

export const projectCategories = ["Web Apps", "Shopify", "Websites"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  summary: string;
  tags: string[];
  categories: ProjectCategory[];
  highlight?: { value: string; label: string };
  image?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  featured?: boolean;
  challenge: string[];
  approach: string[];
  results: { value: string; label: string; detail: string }[];
  shipped: string[];
  gallery: { src: string; caption: string }[];
};

const shots = "/projects";
const appStore =
  "https://cdn.shopify.com/app-store/listing_images/d5e01cfe3d31da69051a14108ade9a62";

export const projects: Project[] = [
  {
    slug: "haligone-shopify-delivery-platform",
    title: "Haligone — Shopify Delivery Platform",
    type: "Shopify App · Web Platform",
    description:
      "Shopify app, Laravel admin dashboard and Flutter driver app connected in real time. Shopify orders flow into dispatch, get assigned to drivers, and status syncs back to customers — with route optimisation, label printing and delivery reports.",
    summary:
      "Three connected products — a Shopify app, a Laravel admin dashboard and a driver app — that automate local delivery from Shopify order to the customer's door in real time.",
    tags: ["Shopify App", "Laravel", "Webhooks", "Flutter", "Real-time"],
    categories: ["Shopify", "Web Apps"],
    highlight: { value: "3 apps", label: "live on Shopify, App Store & Play" },
    image: `${shots}/haligone/haligone-main.webp`,
    liveUrl: "https://haligone.com",
    featured: true,
    challenge: [
      "Haligone runs local delivery for Shopify merchants in Halifax. When an order came in, the process was manual: someone checked the order, phoned a driver, read out the details and hoped for the best. There was no dispatch system, no tracking, and customers had no idea where their delivery was.",
      "The solution had to span three places — the Shopify store where orders start, the office where dispatch happens and the driver's phone where delivery happens — and keep all three in sync without phone calls in between.",
    ],
    approach: [
      "I built a Shopify app that sends any order to Haligone in one click, a Laravel admin dashboard and API where dispatchers review orders and assign them to drivers, and a driver app that receives assignments with delivery details and live status updates.",
      "Orders flow from Shopify into the dashboard automatically. When a dispatcher assigns an order, the driver sees it instantly, updates the status at pickup and delivery, and every change flows back through the system. Route optimisation sequences each driver's multi-stop run, and I added custom label printing, delivery reports and itinerary emails for the warehouse team.",
    ],
    results: [
      { value: "3", label: "Apps live", detail: "Shopify app, admin dashboard and driver app, all connected in real time." },
      { value: "Public", label: "Shopify App Store", detail: "Published for any merchant to install — not a custom build locked to one store." },
      { value: "Auto", label: "Order-to-dispatch", detail: "Shopify orders arrive in the dashboard automatically — no manual entry or phone calls." },
    ],
    shipped: [
      "Shopify app — one-click delivery submission from any Shopify store",
      "Laravel admin dashboard and API to review, assign and track deliveries and drivers",
      "Driver mobile app (iOS + Android) with assigned orders and live status",
      "Real-time status flow — ordered, picked up, in transit, delivered",
      "Route optimisation for multi-stop driver runs",
      "Custom shipping label printing and delivery reports",
      "Automated itinerary emails to staff and drivers",
      "Shopify App Store, App Store and Google Play submission and approval",
    ],
    gallery: [
      { src: `${shots}/haligone/haligone-main.webp`, caption: "Shopify app — one-click submissions, labels and itinerary emails" },
      { src: `${shots}/haligone/mobile1.webp`, caption: "Driver app — assigned deliveries" },
      { src: `${shots}/haligone/mobile2.webp`, caption: "Driver app — delivery status updates" },
    ],
  },
  {
    slug: "meta-seo-boost",
    title: "Meta SEO Boost — Public Shopify App",
    type: "Shopify App · Public App",
    description:
      "Public Shopify app that updates the SEO title and meta description of every product in a store with one click, and logs each run with its progress and status.",
    summary:
      "A public Shopify App Store app that lets merchants apply SEO titles and meta descriptions to their entire product catalog in one click — with a log of every update.",
    tags: ["Shopify App", "Laravel", "Polaris", "Shopify Admin API", "SEO"],
    categories: ["Shopify"],
    highlight: { value: "Public", label: "on the Shopify App Store" },
    image: `${appStore}/desktop_screenshot/CMab7pi7mIgDEAE=.png`,
    liveUrl: "https://apps.shopify.com/critical-sales-boost-seo",
    liveLabel: "View on Shopify App Store",
    featured: true,
    challenge: [
      "Shopify merchants have to edit SEO titles and meta descriptions one product at a time in the admin. For stores with large catalogs that takes hours, leads to inconsistent listings, and it's easy to miss products entirely.",
      "There was also no record of what had been changed, when, or whether every product had actually been updated.",
    ],
    approach: [
      "I built an embedded Shopify app with a Laravel backend and a Polaris interface, so it runs inside the merchant's admin and feels native to Shopify. The merchant fills in the SEO title and description once in a simple form, clicks Update, and the app applies it to every product in the store through the Shopify Admin API.",
      "Each run is processed across the whole catalog and recorded on a Logs page showing the total products, how many are complete and the final status, so merchants can see exactly what was updated. A setup guide walks new merchants through the first run, and the app only requests access to products.",
    ],
    results: [
      { value: "Public", label: "Shopify App Store", detail: "Reviewed, approved and published for any merchant to install." },
      { value: "1-click", label: "Catalog-wide SEO", detail: "SEO title and meta description applied to every product at once." },
      { value: "Logged", label: "Full transparency", detail: "Every run tracked with product counts, progress and status." },
    ],
    shipped: [
      "Embedded app with a Laravel backend and Polaris UI inside the Shopify admin",
      "Bulk update of SEO titles and meta descriptions for all products",
      "Shopify Admin API integration for product updates",
      "Progress tracking per run — total vs completed products",
      "Logs page with the history and status of every update",
      "Setup guideline page for new merchants",
      "Minimal permissions — product access only",
      "Shopify App Store listing, review and approval",
    ],
    gallery: [
      { src: `${appStore}/desktop_screenshot/CMab7pi7mIgDEAE=.png`, caption: "Product SEO title and description form" },
      { src: `${appStore}/desktop_screenshot/CKaQw43EqIgDEAE=.png`, caption: "Setup guideline" },
      { src: `${appStore}/desktop_screenshot/CPD_hJm7mIgDEAE=.png`, caption: "Logs — every update with progress and status" },
    ],
  },
  {
    slug: "estimate-app",
    title: "Estimate App — Quotes to Shopify Orders",
    type: "Web App · React + Laravel",
    description:
      "React SPA with a Laravel API that turns approved estimates into Shopify orders with customer context, calculates profit-based commissions per user, and audit-logs every change behind granular permissions.",
    summary:
      "A React + Laravel platform that connects estimates, customer accounts, Shopify order creation and commission tracking in one workflow.",
    tags: ["React", "Laravel", "Shopify Admin API", "RBAC", "Audit Logs"],
    categories: ["Web Apps", "Shopify"],
    highlight: { value: "Auto", label: "estimate-to-order workflow" },
    image: `${shots}/estimate-app/main1.webp`,
    featured: true,
    challenge: [
      "The team built estimates by hand, then re-typed every approved quote into Shopify as an order. Customer details were lost between the two systems, and commissions were calculated separately — often wrong and never transparent.",
      "There was also a permissions problem: not everyone should be able to see or edit cost data, but there was no way to enforce that without blocking the rest of the team.",
    ],
    approach: [
      "I built a React single-page app on top of a Laravel API. Admins onboard users and decide exactly what each person can do, including who can edit costs. Users build estimates in the app, and when one is approved the system creates the Shopify order with the right customer already attached.",
      "Commission is calculated automatically from the profit on each estimate using per-user rules that admins configure. Every user sees their own commission history in a dashboard, and an audit log records every change — what changed, who changed it and when.",
    ],
    results: [
      { value: "1", label: "Connected workflow", detail: "From estimate to Shopify order with no re-typing and no lost customer details." },
      { value: "Granular", label: "Permission control", detail: "Admins decide who can view or edit cost data, per user." },
      { value: "Auto", label: "Commission tracking", detail: "Calculated from profit with admin-defined rules, fully audit-logged." },
    ],
    shipped: [
      "React SPA for estimates, invoicing and day-to-day workflows",
      "Laravel API with users, roles, permissions and cost-edit rules",
      "Shopify integration — approved estimates become Shopify orders",
      "Commission engine with per-user rates set by admins",
      "Commission dashboards showing each user's earnings history",
      "Audit logs for every change to estimates and commissions",
    ],
    gallery: [
      { src: `${shots}/estimate-app/dashboard.png`, caption: "Admin dashboard — estimates, invoices and revenue" },
      { src: `${shots}/estimate-app/estimate1.webp`, caption: "Estimates and invoicing workflow" },
      { src: `${shots}/estimate-app/main1.webp`, caption: "Estimate & profit overview" },
    ],
  },
  {
    slug: "baytech-inventory-portal",
    title: "Baytech — Inventory & Sales Portal",
    type: "Web App · Laravel",
    description:
      "Laravel business portal replacing spreadsheets with asset and lot tracking, customer and sales records, and role-based access for admins, customers and partners.",
    summary:
      "A Laravel business portal that replaced disconnected spreadsheets with role-based asset tracking, customer management and sales records in one place.",
    tags: ["Laravel", "PHP", "MySQL", "RBAC"],
    categories: ["Web Apps"],
    highlight: { value: "1", label: "portal replacing spreadsheets" },
    image: `${shots}/baytech/main.webp`,
    challenge: [
      "Baytech managed laptop inventory in lots, customer relationships and sales records across spreadsheets and email threads. There was no central system, no clear roles and no record of who sold what to whom.",
      "As the team grew, admins couldn't share access without handing over entire files, and answering \"what did this customer buy?\" meant searching through spreadsheets.",
    ],
    approach: [
      "I built a Laravel application around two user types — customers and partners — each with their own workflows and visibility rules, managed by administrators from a central panel that also controls who can see or edit cost data.",
      "Inventory is tracked at asset and lot level and linked to the customer who bought each unit. The sales module connects asset records to customer accounts, so purchase history is one click away. The client received the full source code and documentation.",
    ],
    results: [
      { value: "1", label: "Central system", detail: "Inventory, customers and sales in one Laravel portal." },
      { value: "RBAC", label: "Role-based access", detail: "Admins, customers and partners each see only what they need." },
      { value: "Owned", label: "Full code handover", detail: "Complete source code and documentation delivered." },
    ],
    shipped: [
      "Laravel architecture with authentication and role-based authorisation",
      "Admin flows to register customers and assign granular permissions",
      "Asset management — inventory, lots and sold-to-customer linkage",
      "Separate customer and partner experiences in the same portal",
      "Sales module linking assets to customer purchase history",
      "Dashboards for stock levels, lot movements and customer history",
    ],
    gallery: [
      { src: `${shots}/baytech/dashboard.webp`, caption: "Admin dashboard — assets by manufacturer" },
      { src: `${shots}/baytech/main.webp`, caption: "Asset and customer portal" },
      { src: `${shots}/baytech/assets.webp`, caption: "Asset management" },
    ],
  },
  {
    slug: "high-grade-home-improvement",
    title: "High Grade Home Improvement",
    type: "Website · WordPress",
    description:
      "Conversion-focused custom WordPress theme for a 25-year Pittsburgh roofing contractor — trust-first layout, reviews, local SEO schema and Core Web Vitals tuning.",
    summary:
      "A conversion-focused WordPress site for a Pittsburgh roofing contractor with 25 years of reputation — built to turn visitors into quote requests.",
    tags: ["WordPress", "Custom Theme", "Local SEO", "Performance"],
    categories: ["Websites"],
    highlight: { value: "+40%", label: "quote requests" },
    image: `${shots}/highgrade/main.webp`,
    liveUrl: "https://highgradeimprovement.com",
    challenge: [
      "High Grade had been a trusted Pittsburgh roofing contractor for over two decades, but their website didn't show it: no trust signals, no clear service structure and a contact form buried at the bottom of the page.",
      "Visitors were leaving before requesting a quote. The goal was a site that converts visitors into quote requests.",
    ],
    approach: [
      "I designed the site around two goals: show 25+ years of credibility at a glance, and lead every visitor towards a quote. The homepage opens with the brand's heritage and a quote button, followed by services, real client reviews, certifications and a project gallery.",
      "Service pages follow the same trust-then-action pattern, and on mobile the click-to-call button is just as prominent as the quote form.",
    ],
    results: [
      { value: "+40%", label: "Quote requests", detail: "More inbound quote requests after launch compared with the previous year." },
      { value: "Mobile", label: "Fully responsive", detail: "Most traffic now comes from mobile, with click-to-call up front." },
      { value: "Trust", label: "Credentials up front", detail: "Reviews, certifications and 25-year history build confidence immediately." },
    ],
    shipped: [
      "Custom WordPress theme built from scratch",
      "Dedicated pages for roof repair, replacement and exterior work",
      "Reviews and testimonials section with real client feedback",
      "Certifications strip and quote calls-to-action on every page",
      "Mobile-first design with click-to-call",
      "On-page SEO, schema markup and local business structured data",
      "Core Web Vitals tuning, image compression and caching",
    ],
    gallery: [
      { src: `${shots}/highgrade/main.webp`, caption: "Homepage hero" },
      { src: `${shots}/highgrade/services.webp`, caption: "Services and project gallery" },
      { src: `${shots}/highgrade/reviews.webp`, caption: "Reviews and certifications" },
    ],
  },
  {
    slug: "hfx-reno",
    title: "HFX Reno — Renovation Website",
    type: "Website · WordPress",
    description:
      "WordPress site for a Halifax renovation company with service pages, before/after gallery, quote forms on every page and a local SEO structure.",
    summary:
      "A WordPress site for a Halifax renovation company — reached page 1 on Google within 3 months, with a quote flow that turns browsers into clients.",
    tags: ["WordPress", "Local SEO", "Responsive"],
    categories: ["Websites"],
    highlight: { value: "Page 1", label: "on Google in 3 months" },
    image: `${shots}/hfxreno/main.webp`,
    liveUrl: "https://hfxreno.com",
    challenge: [
      "HFX Reno does IKEA kitchen installs, bathroom renovations and basement conversions. Their work is high quality, but their old website didn't show it and they weren't ranking for any meaningful local searches.",
      "The site needed to work as a sales tool: send visitors to the right service, show finished projects and turn browsing into quote requests.",
    ],
    approach: [
      "I built a WordPress site that leads with the work itself. Each service — kitchen, bathroom and basement — got its own page with strong visuals and a clear path to a quote, plus a before/after gallery of real projects.",
      "The SEO structure was built in from day one: local keywords, a proper heading hierarchy and local business schema. Quote forms appear at every natural exit point.",
    ],
    results: [
      { value: "Page 1", label: "Google ranking", detail: "Ranking on page 1 for key Halifax renovation searches within 3 months." },
      { value: "↑", label: "Inbound quotes", detail: "Steady quote requests from people finding the site through search." },
      { value: "3", label: "Service pages", detail: "Kitchen, bathroom and basement — each with its own content and lead form." },
    ],
    shipped: [
      "Custom WordPress build tailored to renovation services",
      "Dedicated kitchen, bathroom and basement service pages",
      "Before/after project gallery",
      "Consultation and quote request forms",
      "Local SEO — keywords, schema markup and Google Business Profile",
      "Mobile-responsive, performance-optimised design",
    ],
    gallery: [
      { src: `${shots}/hfxreno/main.webp`, caption: "Homepage" },
      { src: `${shots}/hfxreno/pic1.webp`, caption: "Services" },
      { src: `${shots}/hfxreno/pic2.webp`, caption: "Interior pages" },
    ],
  },
  {
    slug: "haligone-website",
    title: "Haligone — Marketing Website",
    type: "Website · Marketing Site",
    description:
      "Marketing website for a Halifax same-day delivery platform — clear messaging, Shopify merchant onboarding, local SEO and fast performance.",
    summary:
      "A conversion-focused marketing website that explains Haligone's delivery platform and takes Shopify merchants from landing to app install in minutes.",
    tags: ["Web", "Shopify Onboarding", "SEO", "Performance"],
    categories: ["Websites", "Shopify"],
    highlight: { value: "Direct", label: "Shopify app install from the page" },
    image: `${shots}/haligone-website/haligone.webp`,
    liveUrl: "https://haligone.com",
    challenge: [
      "Haligone had a working product — local delivery integrated with Shopify — but no website that explained it or let merchants sign up.",
      "The site had to speak to two audiences: local customers curious about delivery, and Shopify merchants evaluating the dispatch network. Both journeys needed to end in action.",
    ],
    approach: [
      "I built haligone.com from scratch, starting with the messaging and then the design and a performance-tuned frontend. The hero explains the value straight away: same-day local delivery for Shopify stores.",
      "Merchant onboarding is built into the page, from \"how it works\" to installing the Shopify app in as few clicks as possible. The site is structured for local Halifax searches and Shopify delivery queries.",
    ],
    results: [
      { value: "Live", label: "haligone.com", detail: "Fast-loading and mobile-optimised on desktop and phone." },
      { value: "SEO", label: "Organic reach", detail: "Targets local and Shopify delivery searches." },
      { value: "Direct", label: "Merchant onboarding", detail: "Shopify app install flow built into the page." },
    ],
    shipped: [
      "Full marketing website design and development",
      "Messaging for both consumers and Shopify merchants",
      "Merchant onboarding with an embedded Shopify app install flow",
      "Step-by-step \"how it works\" section",
      "Local SEO for Halifax and Shopify delivery searches",
      "Mobile-first, accessible and performance-tuned build",
    ],
    gallery: [
      { src: `${shots}/haligone-website/haligone.webp`, caption: "Homepage" },
      { src: `${shots}/haligone-website/pic1.webp`, caption: "Marketing sections" },
      { src: `${shots}/haligone-website/pic2.webp`, caption: "Platform overview and merchant sections" },
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2020 — Present",
    points: [
      "Built Haligone's Shopify app and Laravel admin dashboard, automating order-to-driver dispatch with real-time status, route optimisation and label printing.",
      "Delivered a React + Laravel estimates platform that turns approved quotes into Shopify orders, and a Laravel inventory and sales portal with role-based access.",
      "Shipped WordPress sites for clients in the US and Canada — including +40% quote requests and Page 1 Google rankings.",
    ],
  },
  {
    role: "Laravel & Shopify App Developer",
    company: "Tetralogicx",
    period: "Dec 2021 — Nov 2025",
    points: [
      "Built dynamic web applications with Laravel and custom Shopify apps that improved e-commerce experiences and streamlined client operations.",
      "Integrated third-party and Shopify APIs, and optimised application performance for production workloads.",
      "Delivered features end to end to client requirements and industry best practices.",
    ],
  },
  {
    role: "Laravel Developer",
    company: "Brown Tech Int",
    period: "Apr 2021 — Dec 2021",
    points: [
      "Built and maintained Laravel web applications across a range of client projects.",
      "Worked with cross-functional teams to ship quality features on time and improve user experience.",
    ],
  },
];
