# Zyene Website

Marketing and operations automation website built with Next.js App Router.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel Analytics

## Main Areas

- Site pages: home, about, contact, careers, use-cases, legal pages
- Contact flow:
  - Cloudflare Turnstile validation
  - Abstract email reputation check
  - Zoho Sheet sync
- Careers talent-pool flow with Turnstile + Zoho sync

## Project Structure

- `src/app`: routes and API handlers
- `src/components`: UI sections, layout, and shared components
- `src/lib`: shared client/server helpers and validators
- `public`: static assets (images, favicon set)

## Environment Variables

Create `.env.local` and configure required keys:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `ABSTRACT_EMAIL_REPUTATION_API_KEY`
- `ZOHO_OAUTH_CLIENT_ID`
- `ZOHO_OAUTH_CLIENT_SECRET`
- `ZOHO_OAUTH_REFRESH_TOKEN` (or `ZOHO_REFRESH_TOKEN`)
- `ZOHO_CONTACT_SHEET_API_URL`
- `ZOHO_CONTACT_WORKSHEET`
- `ZOHO_CONTACT_APPEND_METHOD`
- `ZOHO_SHEET_API_URL`
- `ZOHO_SHEET_WORKSHEET`
- `ZOHO_SHEET_APPEND_METHOD`
- `NEXT_PUBLIC_CAL_SCHEDULE_URL`
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (if using Web3Forms client send)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

Deploy on Vercel and ensure all required environment variables are set in Project Settings.
