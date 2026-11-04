# Zain Irfan — Portfolio

Personal portfolio of **Zain Irfan**, Full Stack Developer specialising in Laravel and Shopify app development.

**Live site:** [zain-irfan.vercel.app](https://zain-irfan.vercel.app)

![Portfolio preview](https://zain-irfan.vercel.app/opengraph-image)

## Features

- **Animated system diagram** in the hero showing a Shopify order flowing through a webhook, a Laravel API and an admin dashboard to a driver app
- **Project case studies** — every project has its own statically generated page with the challenge, approach, results, feature list and screenshots
- **Filterable projects** (Web Apps, Shopify, Websites)
- **Services, skills, experience timeline** and a scrolling tech strip
- **Contact form** backed by a Next.js API route that emails submissions through [Resend](https://resend.com), with validation and a honeypot for spam
- **Dark / light theme** with no flash on load
- **SEO & sharing** — generated Open Graph image, favicon and Apple touch icon
- Fully responsive, with reduced-motion support

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) and React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev) icons
- Deployed on [Vercel](https://vercel.com)

## Project structure

```text
src/
├── app/
│   ├── page.tsx                  # Home page
│   ├── projects/[slug]/page.tsx  # Project case study pages
│   ├── api/contact/route.ts      # Contact form endpoint (Resend)
│   ├── opengraph-image.tsx       # Generated link preview image
│   ├── icon.svg, apple-icon.tsx  # Favicons
│   └── layout.tsx, globals.css   # Theme tokens and metadata
├── components/                   # Hero, SystemFlow, Services, Projects, …
└── data/portfolio.ts             # All site content in one file
```

All text, projects, skills and experience live in [`src/data/portfolio.ts`](src/data/portfolio.ts), so updating the site means editing one file.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for sending contact form emails |
| `CONTACT_TO_EMAIL` | Address that receives contact form messages |
| `CONTACT_FROM_EMAIL` | Optional sender on a domain verified in Resend |
| `NEXT_PUBLIC_SITE_URL` | Optional public URL used for link previews |

Without the Resend settings, contact form submissions are logged to the console in development.

## Contact

- Portfolio: [zain-irfan.vercel.app](https://zain-irfan.vercel.app)
- LinkedIn: [Zain Irfan](https://www.linkedin.com/in/zain-irfan-3356001aa/)
- Email: [zain.irfan4442@gmail.com](mailto:zain.irfan4442@gmail.com)

© Zain Irfan. The code is shared for reference; project content, screenshots and photos are not licensed for reuse.
