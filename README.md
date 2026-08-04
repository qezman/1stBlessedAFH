# 1st Blessed Adult Family Home

A modern, responsive, and performance-optimized React + Vite single-page application (SPA) for **1st Blessed Adult Family Home** in Everett, WA.

## Features

- **Design System**: Navy & Gold high-contrast responsive design system built with TailwindCSS.
- **Masonry Gallery**: Responsive 4-column Pinterest-style gallery with backdrop-blurred Lightbox modal.
- **Interactive FAQ**: Sidebar category filtering and expandable accordion questions.
- **Fast & Lightweight**: Built with Vite, React 18, React Router 6, and Lucide React icons.

## Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
```

## Contact form email

The contact form sends email through Resend. Copy `.env.example` to `.env.local`,
set `RESEND_API_KEY`, and use a Resend-verified sender in `CONTACT_FROM_EMAIL`.

## Accessibility widget

Set `NEXT_PUBLIC_USERWAY_ACCOUNT` to the account ID in your UserWay embed code.
The accessibility menu then loads across the site.
