# Fulcrum Growth Astro Rebuild - Design Spec

## Overview

**FAITHFUL REPRODUCTION** - Copy ALL content, styling, and images exactly from the original site.

Rebuild the existing Fulcrum Growth website (`www.fulcrumgrowth.com`) as a static Astro site. This is a pixel-perfect, content-perfect recreation - NOT placeholder content. Every text string, image, and style must match the original.

**Location:** `~/dev/jas-website`

## Tech Stack

- **Astro 5.x** - Static site generator with optional Islands for interactivity
- **Tailwind CSS** - Styling (matching original design patterns)
- **Assets** - Logo and image files from `~/Dropbox/Work/Fulcrum/Website/`

## Design Tokens (from original site)

| Token | Value |
|-------|-------|
| Primary Color | `#293c63` |
| Text | `#080505` |
| Off-White | `#f7f7f7` |
| Main Black | `#222` |
| Main Grey | `#ececec` |
| Dark Grey | `#afafaf` |
| Main White | `#fff` |

**Fonts:**
- Headings: `Raleway` (weight 700)
- Body: `Roboto` (weight 400/500)
- Quote: `Merriweather` (weight 300i)

## Pages

### 1. Homepage (`/`)

Sections (top to bottom):

1. **Navbar** - Logo left, nav links right (Our Work, Contact, Jobs)
2. **Hero** - Full-height with background image (women rowing), overlay with "Full Stack Technology Services"
3. **Services** - 4-column grid: Software, Design & UX, IT Operations, Advisory
4. **About** - Split layout: JAS+Koba photo left, "Our Company" text right
5. **CTA Section** - Navy background with "Need help moving the needle?" + Archimedes quote
6. **Footer** - Links + Copyright

### 2. Projects (`/projects`)

Exact reproduction of the original Projects page with all portfolio items.

### 3. Contact (`/contact`)

Exact reproduction of the original Contact page.

### 4. Blog (`/blog`)

Exact reproduction of the original Blog listing page.

## Assets to Download

All images from `https://web.archive.org/web/20250101023435/https://www.fulcrumgrowth.com/`:

| Asset | URL Pattern | Usage |
|-------|-------------|-------|
| Logo | `/static/logo-*.png` | Navbar |
| Hero (women rowing) | `/static/women-rowing-*.jpg` | Hero section |
| JAS+Koba photo | `/static/jas-koba.webp` | About section |
| Apple touch icons | `/apple-icon-*.png` | Favicons |
| Android icons | `/android-icon-*.png` | Favicons |
| Favicons | `/favicon-*.png` | Favicons |
| All other images | From original site CSS/HTML | Various |

Also copy from `~/Dropbox/Work/Fulcrum/Website/`:
- Full logo suite from `Branding/Logos - Fulcrum Growth/`

## Component Structure

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── ServiceCard.astro
│   ├── About.astro
│   ├── CTA.astro
│   ├── Footer.astro
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── projects.astro
│   ├── contact.astro
│   └── blog.astro
├── layouts/
│   └── BaseLayout.astro
└── styles/
    └── global.css
```

## Responsive Breakpoints

- Mobile: `< 576px`
- Tablet: `576px - 991px`
- Desktop: `> 992px`

## Out of Scope

- Deployment configuration (netlify, vercel, etc.)
- CMS integration
- Form backend functionality

## Success Criteria

- [ ] Homepage is pixel-perfect match to original (layout, text, images, colors)
- [ ] Projects page is exact match to original
- [ ] Contact page is exact match to original
- [ ] Blog page is exact match to original
- [ ] All 4 pages have working navigation between them
- [ ] All images downloaded and properly referenced
- [ ] All CSS matches original site exactly
- [ ] Mobile responsive (same breakpoints as original)
- [ ] Builds without errors
