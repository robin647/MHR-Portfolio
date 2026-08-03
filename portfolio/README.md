# Premium Developer Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion — designed to look and feel like Apple / Stripe / Linear, with a dark-first "terminal engineer" aesthetic.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # ESLint
npm run format   # Prettier
```

Deploys to **Vercel** with zero configuration — just connect the repo.

## Editing your content (no code changes needed)

| What | File |
|---|---|
| Name, title, bio, stats, resume path, GitHub username | `config/profile.ts` |
| Social links, contact details, EmailJS keys | `config/social.ts` |
| Projects (the whole project system) | `data/projects.json` |
| Skills | `data/skills.json` |
| Services | `data/services.json` |
| Testimonials | `data/testimonials.json` |
| Experience timeline | `data/experience.json` |
| Certifications | `data/certifications.json` |

Adding a new project is just adding a new object to `data/projects.json` — the grid, filters, search, modal, pagination, and `/projects/[slug]` detail page all pick it up automatically. `slug` must be unique and URL-safe.

## Contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create a service + email template with `name`, `email`, `subject`, `message` variables.
3. Paste your Service ID, Template ID, and Public Key into `emailjsConfig` in `config/social.ts`.

Until you do this, the form will simulate a successful send so you can preview the UI — no emails will actually be sent.

## Replacing placeholder assets

- `public/resume.pdf` — swap in your real résumé (same filename, or update `resumeUrl` in `config/profile.ts`).
- `public/og-image.png`, `public/favicon.ico`, `public/icon-192.png`, `public/icon-512.png`, `public/apple-touch-icon.png` — generated placeholders; replace with your own branding.
- `config/profile.ts` → `profileImage` — currently a stock placeholder URL; point it at `/images/profile.jpg` once you add your own photo to `public/images/`.
- GitHub stats section (`components/sections/github-stats.tsx`) pulls live from `github-readme-stats.vercel.app` for whatever `githubUsername` you set in `config/profile.ts` — no extra setup needed.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · React Hook Form + Zod · EmailJS · next-themes · cmdk (command palette) · Sonner (toasts)

## Features included

Dark/light theme with persistence · animated grid + blob background · glassmorphism cards · gradient borders/text · custom cursor (desktop) · scroll progress bar · back-to-top · magnetic buttons · scroll-spy navbar · command palette (⌘K / Ctrl+K) · animated counters · project filter + search + pagination + modal · testimonial slider · animated skills bars · animated timeline · live GitHub stats · SEO metadata, OpenGraph, Twitter cards, Schema.org, sitemap.xml, robots.txt · custom 404 and loading states · reduced-motion support.

## Notes

- All animation respects `prefers-reduced-motion`.
- The custom cursor only activates on fine-pointer (desktop) devices.
- Project and stock images currently point to Unsplash for preview purposes — replace with your own project screenshots for production.
