// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Zain Irfan",
  shortName: "Zain",
  role: "Full Stack Developer",
  tagline:
    "With 6+ years of Laravel and 4+ years of Shopify app development, I build web apps, Shopify apps and AI automations end to end — from polished interfaces to the APIs and dashboards that run the business.",
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
    "I also build AI automation into the products I deliver — for example an OpenAI module that writes SEO titles, descriptions and product specs for a Shopify catalog from product data and datasheet PDFs, with a human review step before anything goes live. Day to day I use Claude Code and Cursor to ship faster, while I own the architecture, code review and quality of everything I deliver.",
  ],
  stats: [
    { value: "6+", label: "Years with Laravel" },
    { value: "4+", label: "Years building Shopify apps" },
    { value: "9+", label: "Projects shipped" },
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
    title: "AI & Automation",
    items: [
      "OpenAI API",
      "AI Content Generation",
      "Prompt Design",
      "PDF & Document Inputs",
      "Human-in-the-loop Review",
      "Claude Code",
      "Cursor",
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
      "Business portals, dashboards and internal tools with authentication, roles, permissions and audit trails.",
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
    icon: "sparkles",
    title: "AI Automation",
    description:
      "OpenAI-powered features inside your apps — bulk product content, SEO and specs from your own data, with review before anything goes live.",
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
  "OpenAI API",
  "REST APIs",
  "MySQL",
  "Livewire",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "WordPress",
  "Git",
  "Claude Code",
  "Cursor",
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
    slug: "hearthline-restaurant-management",
    title: "Hearthline — Restaurant Management System",
    type: "Web App · Laravel + React",
    description:
      "Restaurant management system with a point of sale, kitchen display, recipe costing, ingredient inventory and purchasing. Selling a dish automatically deducts its recipe's ingredients from stock, and every action is behind role-based permissions.",
    summary:
      "An open-source restaurant management system built with Laravel 12, React and Inertia — POS, kitchen display, recipe costing, ingredient inventory and purchasing in one app.",
    tags: ["Laravel 12", "React", "Inertia.js", "TypeScript", "RBAC"],
    categories: ["Web Apps"],
    highlight: { value: "257", label: "automated tests passing" },
    image: `${shots}/hearthline/kitchen.webp`,
    repoUrl: "https://github.com/Zain-Irfan/restaurant-management-system",
    featured: true,
    challenge: [
      "Restaurants often run orders, kitchen tickets, stock and supplier purchases in separate tools — or on paper. Ingredient usage is guessed, food cost per dish is unknown, and nobody can say exactly where stock went.",
      "I wanted one system where taking an order, cooking it, using up ingredients and buying more are all connected, with each staff member seeing only what their role needs.",
    ],
    approach: [
      "I built Hearthline with Laravel 12 on the backend and React with Inertia and TypeScript on the frontend. Cashiers take dine-in, takeaway and delivery orders on a POS screen with variations and add-ons; the kitchen sees tickets move from new to preparing to ready; and payments, discounts, cancellations and refunds each have their own permission.",
      "Every menu item has a recipe, so the app knows each dish's food cost and estimated profit. Selling a dish deducts its ingredients from stock automatically, and every change — purchases received, sales, wastage, stock counts and adjustments — is written to a stock movement ledger with weighted-average costing. Five staff roles and 35 permissions control what each person can see and do.",
    ],
    results: [
      { value: "257", label: "Automated tests", detail: "Feature tests cover every module, from POS pricing to stock consumption." },
      { value: "Auto", label: "Recipe-based stock", detail: "Each sale deducts exactly the ingredients its recipe uses." },
      { value: "5 roles", label: "35 permissions", detail: "Administrator, Manager, Cashier, Kitchen and Inventory staff." },
    ],
    shipped: [
      "POS for dine-in, takeaway and delivery with variations and add-ons",
      "Kitchen display with new, preparing and ready columns",
      "Payments, discounts, cancellations and refunds with full status history",
      "Recipes with food cost, cost percentage and estimated gross profit",
      "Ingredient inventory with a stock movement ledger and weighted-average cost",
      "Wastage, stock counts and adjustments with reasons",
      "Suppliers and purchase orders that add stock when received",
      "Role-based access with 5 roles and 35 fine-grained permissions",
    ],
    gallery: [
      { src: `${shots}/hearthline/kitchen.webp`, caption: "Kitchen display — orders move from new to preparing to ready" },
      { src: `${shots}/hearthline/pos.webp`, caption: "Point of sale with table selection" },
      { src: `${shots}/hearthline/order-detail.webp`, caption: "Order detail with totals, payments and status history" },
      { src: `${shots}/hearthline/recipe.webp`, caption: "Recipe costing — food cost and estimated profit per dish" },
      { src: `${shots}/hearthline/inventory.webp`, caption: "Inventory with stock levels and value at average cost" },
      { src: `${shots}/hearthline/stock-movements.webp`, caption: "Stock movement ledger — every sale deducts its ingredients" },
      { src: `${shots}/hearthline/purchases.webp`, caption: "Purchases from suppliers, received into stock" },
    ],
  },
  {
    slug: "estimate-app",
    title: "Estimate App — Shopify Operations Platform with AI",
    type: "Web App · React + Laravel + OpenAI",
    description:
      "React + Laravel operations platform connected to Shopify: estimates that become Shopify orders, commissions, purchasing, inventory, a CRM pipeline and appointments — plus an OpenAI module that writes product SEO, descriptions and metafields from product data and datasheet PDFs.",
    summary:
      "A React + Laravel platform that runs a Shopify retailer's day-to-day operations — estimates, orders, commissions, purchasing, inventory, sales pipeline and appointments — with an OpenAI automation module that writes catalog content in bulk.",
    tags: ["React", "Laravel", "Shopify Admin API", "OpenAI API", "AI Automation", "RBAC"],
    categories: ["Web Apps", "Shopify"],
    highlight: { value: "AI", label: "catalog content with OpenAI + human review" },
    image: `${shots}/estimate-app/main1.webp`,
    featured: true,
    challenge: [
      "The team ran its business across spreadsheets, email and the Shopify admin. Estimates were built by hand and re-typed into Shopify as orders, commissions were calculated separately and often disputed, and purchasing, stock transfers, follow-ups and installation appointments all lived in different places.",
      "The product catalog had a second problem: thousands of products needed proper SEO titles, meta descriptions, specs and category attributes, and writing them by hand from supplier datasheets was slow and inconsistent.",
    ],
    approach: [
      "I built a React single-page app on a Laravel API that ties it all together. Users build estimates that become Shopify orders with the right customer and B2B company attached; commissions are calculated from profit using per-user rules, with separate installer and upsell commissions, payouts and a balance ledger. Around that sit purchase orders with live shipment tracking, suppliers and a supplier portal, inventory with transfers and barcode-based order packing, product bundles with automatic pricing, customer price catalogs, a CRM pipeline with reminders, and an appointment calendar synced from GoHighLevel — all behind roles and per-user permissions, with real-time updates and web push notifications.",
      "For the catalog I added an AI automation module built on the OpenAI API. Staff pick products (by hand, collection or filters), choose what the AI may read — title, description, metafields, and the product's datasheet PDF, which is attached as a file — and choose what to fill: SEO title, meta description, tags, product type, metafields or Shopify category attributes. Prompts come from a saved prompt library, the model is selectable, and tasks run in the background every minute. Results go to a review queue before anything updates Shopify (or apply automatically if chosen), the previous value is kept, and token usage and cost are tracked per product. The prompts instruct the model to use only the supplied data and never invent specs or claims.",
    ],
    results: [
      { value: "1", label: "Connected platform", detail: "Estimates, orders, commissions, purchasing, inventory, CRM and appointments in one app." },
      { value: "AI", label: "Bulk catalog content", detail: "SEO, descriptions, metafields and category attributes generated from real product data and datasheets." },
      { value: "Review", label: "Human in the loop", detail: "Every AI result can be approved before it touches Shopify, with cost tracked per product." },
    ],
    shipped: [
      "Estimates and invoices that create Shopify orders with customer and B2B company context",
      "Commission engine — sales, installer and upsell commissions, payouts and balance ledger",
      "AI product content with OpenAI — SEO titles, meta descriptions, tags, metafields and category attributes",
      "Datasheet PDFs sent to the AI as file inputs, with a fallback for models without file support",
      "Saved prompt library, model choice, review queue and per-product token and cost tracking",
      "Purchase orders with UPS / AfterShip shipment tracking, suppliers and a supplier portal",
      "Inventory, stock transfers and barcode-based order packing",
      "Product bundles with hourly price sync and customer price catalogs",
      "CRM pipeline with stages, notes and reminders, and a GoHighLevel-synced appointment calendar",
      "Roles and per-user permissions, analytics, real-time updates and web push notifications",
    ],
    gallery: [
      { src: `${shots}/estimate-app/dashboard.png`, caption: "Admin dashboard — estimates, invoices and revenue" },
      { src: `${shots}/estimate-app/estimate1.webp`, caption: "Estimates and invoicing workflow" },
      { src: `${shots}/estimate-app/main1.webp`, caption: "Estimate & profit overview" },
    ],
  },
  {
    slug: "b2b-order-prefix-app",
    title: "B2B Order Prefix — Custom Shopify App",
    type: "Shopify App · Custom App",
    description:
      "Custom Shopify app that adds a WO- prefix only to selected B2B company orders. Because Shopify can't rename an order after it's placed, the app cancels the original and recreates it under the new name with every detail intact.",
    summary:
      "A custom Shopify app for a B2B merchant that prefixes only the orders that need it — automatically cancelling and recreating qualifying company orders as #WO-orders, with every detail preserved.",
    tags: ["Shopify App", "Laravel", "Shopify B2B", "GraphQL Admin API", "Webhooks", "Queues"],
    categories: ["Shopify"],
    highlight: { value: "#WO-", label: "prefix on selected B2B orders only" },
    image: `${shots}/order-prefix/flow.webp`,
    challenge: [
      "The client sells both to regular customers and to B2B companies through Shopify. Their team needed wholesale orders from B2B companies to stand out with a WO- prefix (#WO-1052 instead of #1052), so warehouse and accounts could spot them instantly — but every other order had to keep its normal number.",
      "Shopify's built-in order ID prefix doesn't help here: it applies to every order in the store, with no way to target only some of them. And Shopify doesn't allow an order's name to be changed once it has been created, so there was no simple way to rename just the B2B orders after the fact.",
    ],
    approach: [
      "I built a custom Laravel Shopify app that listens for new orders through webhooks and decides, order by order, whether it should be prefixed: the prefix setting must be on, the order must come from a B2B company, the company must not be on the admin's exclusion list, and the order must not be refunded, cancelled or already prefixed.",
      "For qualifying orders, the app saves a complete copy of the order — customer, addresses, line items, discounts, taxes, shipping, company, tags, note and PO number — then cancels the original through the GraphQL Admin API with restocking. A queued job then recreates the order as #WO-1052 with the same details, storing the PO number in a custom metafield. Every step is logged, so any failure can be traced and retried.",
    ],
    results: [
      { value: "Selective", label: "Prefix where it's needed", detail: "Only qualifying B2B company orders get the WO- prefix; every other order is untouched." },
      { value: "Auto", label: "No manual renaming", detail: "Orders are checked and recreated automatically as they come in." },
      { value: "Logged", label: "Traceable", detail: "Each order's outcome and any error is recorded for the team to review." },
    ],
    shipped: [
      "Order webhook handling with queued background jobs",
      "Rules engine: prefix on/off, B2B-only and per-company exclusions",
      "Full order snapshot — items, customer, addresses, discounts, taxes, shipping",
      "Order cancellation with restock through the GraphQL Admin API",
      "Recreated #WO- orders with tags, note and PO number metafield",
      "Admin pages for orders, B2B companies and settings inside Shopify",
      "Order sync and filtering for the store's order history",
      "Per-order logs and error tracking",
    ],
    gallery: [],
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
