# Zain — Portfolio

Personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text, skills, projects and experience live in `src/data/portfolio.ts`.

- **Resume:** put your PDF at `public/resume.pdf`.
- **Project screenshots:** put images in `public/projects/` and set `image: "/projects/name.png"` on the project.

## Contact form

The form posts to `src/app/api/contact/route.ts`, which sends email through [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
Without these, submissions are only logged to the console in development.

## Deploy

Push to GitHub, import the repo on [Vercel](https://vercel.com), and add the same environment variables there.
