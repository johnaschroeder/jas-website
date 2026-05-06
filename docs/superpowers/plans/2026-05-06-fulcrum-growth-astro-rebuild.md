# Fulcrum Growth Astro Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild fulcrumgrowth.com as an Astro static site with pixel-perfect fidelity - all content, styling, and images reproduced exactly.

**Architecture:** Static Astro site with Tailwind CSS, copying original images from Wayback Machine and local Dropbox assets.

**Tech Stack:** Astro 5.x, Tailwind CSS, Node.js

---

## File Structure

```
jas-website/
├── public/
│   ├── images/          # Downloaded from Wayback
│   ├── logos/           # From Dropbox branding
│   ├── apple-icon-*.png # Favicons
│   ├── android-icon-*.png
│   └── favicon-*.png
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.astro
│   │   ├── About.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── contact.astro
│   │   └── blog.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

---

## Task 1: Initialize Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "fulcrum-growth",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

- [ ] **Step 2: Create astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://fulcrumgrowth.com'
});
```

- [ ] **Step 3: Create tailwind.config.mjs**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#293c63',
        text: '#080505',
        offWhite: '#f7f7f7',
        mainBlack: '#222',
        mainGrey: '#ececec',
        darkGrey: '#afafaf',
        mainWhite: '#fff',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 5: Install dependencies**

```bash
cd ~/dev/jas-website
npm install
```

- [ ] **Step 6: Commit**

```bash
git init
git add package.json astro.config.mjs tailwind.config.mjs tsconfig.json
git commit -m "init: Astro project with Tailwind"
```

---

## Task 2: Download Images from Wayback Machine

**Files:**
- Create: `public/images/women-rowing.jpg`
- Create: `public/images/jas-koba.jpg`
- Create: `public/images/logo.png`
- Create: `public/apple-icon-57x57.png` (and all apple icons)
- Create: `public/android-icon-192x192.png`
- Create: `public/favicon-32x32.png` (and all favicons)

- [ ] **Step 1: Create public directory structure**

```bash
mkdir -p ~/dev/jas-website/public/images
mkdir -p ~/dev/jas-website/public/fonts
```

- [ ] **Step 2: Download hero image (women rowing)**

```bash
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/static/women-rowing-8a876bbfc4b51f2b217199dac52e6242.jpg" -o ~/dev/jas-website/public/images/women-rowing.jpg
```

- [ ] **Step 3: Download JAS+Koba photo**

```bash
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/static/jas-koba.jpg" -o ~/dev/jas-website/public/images/jas-koba.jpg
```

- [ ] **Step 4: Download logo**

```bash
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/static/logo-87584b4671cae21a259fb49b56b74245.png" -o ~/dev/jas-website/public/images/logo.png
```

- [ ] **Step 5: Download apple touch icons**

```bash
cd ~/dev/jas-website/public
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-57x57.png" -o apple-icon-57x57.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-60x60.png" -o apple-icon-60x60.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-72x72.png" -o apple-icon-72x72.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-76x76.png" -o apple-icon-76x76.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-114x114.png" -o apple-icon-114x114.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-120x120.png" -o apple-icon-120x120.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-144x144.png" -o apple-icon-144x144.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-152x152.png" -o apple-icon-152x152.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/apple-icon-180x180.png" -o apple-icon-180x180.png
```

- [ ] **Step 6: Download Android icons**

```bash
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/android-icon-192x192.png" -o android-icon-192x192.png
```

- [ ] **Step 7: Download favicons**

```bash
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/favicon-32x32.png" -o favicon-32x32.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/favicon-96x96.png" -o favicon-96x96.png
curl -L "https://web.archive.org/web/20250101023435im_/https://www.fulcrumgrowth.com/favicon-16x16.png" -o favicon-16x16.png
```

- [ ] **Step 8: Commit**

```bash
git add public/
git commit -m "feat: download all images from Wayback Machine"
```

---

## Task 3: Copy Logo Assets from Dropbox

**Files:**
- Create: `public/logos/Fulcrum_Growth_Logo_Colour_Horizontal.png`
- Create: `public/logos/Fulcrum_Growth_Logo_Colour_Vertical.png`
- Create: `public/logos/Fulcrum_Growth_Logo_Grey_Horizontal.png`
- Create: `public/logos/Fulcrum_Growth_Logo_Icon_Blue.png`
- Create: `public/logos/Fulcrum_Growth_Logo_Icon_White.png`

- [ ] **Step 1: Create logos directory**

```bash
mkdir -p ~/dev/jas-website/public/logos
```

- [ ] **Step 2: Copy key logo files from Dropbox**

```bash
cp ~/Dropbox/Work/Fulcrum/Website/Branding/Logos\ -\ Fulcrum\ Growth/Fulcrum_Growth_Logo_Colour_Horizontal.png ~/dev/jas-website/public/logos/
cp ~/Dropbox/Work/Fulcrum/Website/Branding/Logos\ -\ Fulcrum\ Growth/Fulcrum_Growth_Logo_Colour_Vertical.png ~/dev/jas-website/public/logos/
cp ~/Dropbox/Work/Fulcrum/Website/Branding/Logos\ -\ Fulcrum\ Growth/Fulcrum_Growth_Logo_Grey_Horizontal.png ~/dev/jas-website/public/logos/
cp ~/Dropbox/Work/Fulcrum/Website/Branding/Logos\ -\ Fulcrum\ Growth/Fulcrum_Growth_Logo_Icon_Blue.png ~/dev/jas-website/public/logos/
cp ~/Dropbox/Work/Fulcrum/Website/Branding/Logos\ -\ Fulcrum\ Growth/Fulcrum_Growth_Logo_Icon_White.png ~/dev/jas-website/public/logos/
```

- [ ] **Step 3: Commit**

```bash
git add public/logos/
git commit -m "feat: copy logo assets from Dropbox"
```

---

## Task 4: Create Base Layout

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create src directory structure**

```bash
mkdir -p ~/dev/jas-website/src/layouts
mkdir -p ~/dev/jas-website/src/components
mkdir -p ~/dev/jas-website/src/pages
mkdir -p ~/dev/jas-website/src/styles
```

- [ ] **Step 2: Create global.css with exact original styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primaryColor: #293c63;
  --text: #080505;
  --mainWhite: #fff;
  --offWhite: #f7f7f7;
  --mainBlack: #222;
  --linkColor: rgba(35, 35, 35, 0.9);
  --mainGrey: #ececec;
  --darkGrey: #afafaf;
  --mainTransition: all 0.3s linear;
  --mainSpacing: 3px;
  --headerSpacing: 1px;
  --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}

@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--text);
    background: var(--mainWhite);
    line-height: 1.4;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    letter-spacing: var(--headerSpacing);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 1.25rem;
  }

  a {
    text-decoration: none;
  }
}

.defaultHero {
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(240, 208, 212, 0.9), rgba(0, 0, 0, 0.9)),
    url('/images/women-rowing.jpg') 50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary,
.btn-white {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
}

.btn-white:hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}

.btn-primary {
  background: var(--primaryColor);
  color: var(--mainWhite);
  border: 2px solid var(--primaryColor);
}

.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

- [ ] **Step 3: Create BaseLayout.astro**

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Turnkey projects & ongoing assistance for young, growing companies" } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="author" content="John Schroeder" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@johnaschroeder" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300&family=Raleway:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global src="../styles/global.css"></style>
```

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat: create base layout with global styles"
```

---

## Task 5: Create Navbar Component

**Files:**
- Create: `src/components/Navbar.astro`

- [ ] **Step 1: Create Navbar.astro**

```astro
---
interface Props {
  currentPath?: string;
}

const { currentPath = "/" } = Astro.props;

const navLinks = [
  { href: "/projects", label: "Our Work" },
  { href: "/contact", label: "Contact" },
  { href: "https://fulcrumgrowth.zohorecruit.com/jobs/Careers", label: "Jobs", external: true }
];
---

<nav class="navbar">
  <div class="nav-center">
    <div class="nav-header">
      <a href="/" class="logo-btn" aria-label="Home">
        <img src="/images/logo.png" alt="logo" class="logo-icon" />
      </a>
      <button type="button" class="mobile-button" aria-label="Toggle menu">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" size="20" height="20" width="20">
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </button>
    </div>
    <ul class="nav-links">
      {navLinks.map(link => (
        <li>
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background-color: #fafbfc;
    box-shadow: 0 0 2px rgba(60, 60, 60, 0.3);
  }

  .nav-center {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
  }

  .logo-btn {
    background: transparent;
    border: none;
    outline: none;
  }

  .logo-btn:hover {
    cursor: pointer;
  }

  .logo-icon {
    height: 45px;
    margin: 10px 0;
  }

  .nav-links {
    list-style-type: none;
    transition: var(--mainTransition);
    height: 0;
    overflow: hidden;
  }

  .nav-links a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--linkColor);
    transition: var(--mainTransition);
    font-weight: 500;
    letter-spacing: var(--mainSpacing);
  }

  .nav-links a:hover {
    color: var(--primaryColor);
  }

  .mobile-button {
    display: block;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .logo-icon {
      height: 50px;
      margin: 12px 0;
    }

    .mobile-button {
      display: none;
    }

    .nav-center {
      display: flex;
    }

    .nav-links {
      height: auto;
      display: flex;
    }
  }
</style>

<script>
  const mobileButton = document.querySelector('.mobile-button');
  const navLinks = document.querySelector('.nav-links');

  mobileButton?.addEventListener('click', () => {
    navLinks?.classList.toggle('show-nav');
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.astro
git commit -m "feat: create Navbar component"
```

---

## Task 6: Create Hero Component

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1: Create Hero.astro**

```astro
<section class="hero">
  <div class="background-screen">
    <div class="banner">
      <h1>Full Stack</h1>
      <p>Technology Services</p>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 200px;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
  }

  .background-screen {
    background-color: rgba(41, 60, 99, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .banner {
    text-align: left;
    letter-spacing: var(--mainSpacing);
    color: #fff;
    position: relative;
    z-index: 1;
  }

  .banner h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-shadow: 12px 4px 71px hsla(0, 0%, 45.9%, 0);
    margin: 1.25rem 1.25rem 0.25rem;
    line-height: 1.5rem;
  }

  .banner p {
    text-align: left;
    margin: 0 1.25rem;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1.5px;
  }

  @media screen and (min-width: 768px) {
    .hero {
      min-height: 450px;
    }

    .banner h1 {
      margin: 4rem 1rem 1rem 4rem;
      font-size: 3.5rem;
    }

    .banner p {
      margin: 0 4rem;
      font-size: 2rem;
    }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: create Hero component"
```

---

## Task 7: Create ServiceCard and Services Components

**Files:**
- Create: `src/components/ServiceCard.astro`
- Create: `src/components/Services.astro`

- [ ] **Step 1: Create ServiceCard.astro**

```astro
---
interface Props {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = Astro.props;
---

<article class="service-card">
  <span class="service-icon" set:html={icon} />
  <div class="service-info">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</article>

<style>
  .service-card {
    display: grid;
    grid-template-columns: auto 3fr;
  }

  .service-icon {
    justify-self: end;
    padding-right: 1rem;
    font-size: 2rem;
    font-weight: 200;
    color: var(--primaryColor);
  }

  .service-info h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  @media screen and (min-width: 780px) {
    .service-info h3 {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
</style>
```

- [ ] **Step 2: Create Services.astro**

```astro
---
import ServiceCard from './ServiceCard.astro';

const services = [
  {
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>`,
    title: "Software",
    description: "Full stack development, automated testing, dev/ops, db design, product strategy, and roadmaps."
  },
  {
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M54.438 29.793a23.808 23.808 0 0 0-1.204.012c-4.688.157-7.914 1.734-10.113 3.933-2.932 2.932-4.76 7.689-3.588 15.305 1.174 7.616 5.683 17.754 15.272 28.941 67.894 79.21 132.935 155.56 183.703 211.97 12.273 13.636 23.693 26.079 34.125 37.134 12.095-31.902 34.57-54.144 62.902-64.715-10.825-10.199-22.936-21.313-36.197-33.248C242.93 178.357 166.578 113.314 87.369 45.42c-11.186-9.59-21.325-14.098-28.941-15.272a29.555 29.555 0 0 0-3.99-.355zm375.109 1.043c-.307-.003-.6.004-.875.023-2.212.147-3.34.654-4.576 1.891l-27.58 27.58 55.156 55.154 27.578-27.58c1.238-1.236 1.745-2.362 1.89-4.574.15-2.21-.37-5.434-1.804-9.164-2.87-7.46-9.277-16.667-17.055-24.445-7.778-7.778-16.985-14.185-24.445-17.055-3.264-1.255-6.138-1.81-8.287-1.83h-.002zm-45.758 42.22l-9.9 9.901 9.9 9.898 12.727 12.729 9.9 9.898 12.729 12.729 9.898 9.9 9.9-9.9-55.154-55.154zm-22.627 22.628l-87.389 87.39 10.467 9.332 86.822-86.822-9.9-9.9zm22.627 22.629l-86.092 86.09 10.469 9.331 85.523-85.523-9.9-9.899zm22.629 22.624l-84.795 84.795 10.469 9.332 84.226-84.226-9.898-9.9h-.002zm-213.857 123.35L72.664 384.186l9.898 9.898 119.342-119.342-9.343-10.455zm157.66 12.147c-30.461 7.627-53.24 29.184-63.608 65.218 5.652 5.785 10.956 11.085 15.78 15.707 7.58 7.264 14.096 13.007 19.21 16.957 1.777-17.225 10.045-33.062 21.645-44.691 10.601-10.628 24.496-18.006 39.125-19.092-3.87-4.836-9.139-10.75-15.629-17.523-4.838-5.047-10.416-10.623-16.523-16.576zm-136.303 11.748L95.289 406.809l9.9 9.902 118.075-118.074-9.346-10.455zm21.361 23.894L117.918 429.437l9.896 9.9 116.81-116.806-9.345-10.455zm150.293 16.307c-10.397.137-20.929 5.28-29.582 13.955-11.537 11.565-18.674 28.851-16.267 45.701 5.334 37.342 23.75 65.81 49.46 81.236 22.728 13.636 51.452 17.35 83.643 6.983-24.222-4.01-46.475-30.705-48.197-50.649 10.63 12.814 23.94 24.547 38.426 31.75-9.881-22.578-9.201-45.453-11.088-64.322-1.352-13.522-3.891-24.982-11.377-35.162-7.486-10.18-20.423-19.8-44.74-27.906a31.062 31.062 0 0 0-10.278-1.586zm-322.35 71.816l-.003.002.002.002.002-.004zm-.001.004l-12.117 30.3 30.392 30.395 30.305-12.12-6.61-6.612-12.732-12.727-9.898-9.898-12.73-12.728-6.61-6.61zm-19.395 48.485l-12.992 32.476 32.478-12.992-19.486-19.485z"></path></svg>`,
    title: "Design & UX",
    description: "Branding, redesigns, usability, user testing, and design systems"
  },
  {
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61 13.741-6.312 22.766-21.693 22.771-38.81 0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767z"></path></svg>`,
    title: "IT Operations",
    description: "IT strategy, security audits, PCI and HIPAA compliance"
  },
  {
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 23v466h466v-18H41v-82.184l85.854-57.234 70.023 70.022 65.133-260.536L387.28 203.7 455.07 95.73l19.317 11.858 6.102-71.1-60.644 37.616 19.884 12.207-59.01 93.99-130.732-65.366-62.865 251.462-57.98-57.978L41 367.184V23H23z" fill-rule="evenodd"></path></svg>`,
    title: "Advisory",
    description: "Technology evaluations, financial modeling, P&L management, and fundraising support"
  }
];
---

<section class="services-container">
  <div class="title">
    <h4>
      <div class="title-text">Turnkey projects & ongoing assistance</div>
      <div>for young, growing companies</div>
    </h4>
  </div>
  <hr class="services-separator" />
  <div class="services-wrapper">
    {services.map(service => (
      <ServiceCard
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    ))}
  </div>
</section>

<style>
  .services-container {
    padding: 5rem 1rem;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .title h4 {
    text-align: center;
    letter-spacing: 4px;
    color: var(--primaryColor);
  }

  .title .title-text {
    color: var(--mainBlack);
  }

  .title span {
    display: block;
  }

  .services-separator {
    width: 20%;
    margin: 4rem auto 0 auto;
  }

  .services-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 1rem;
    padding: 1rem;
  }

  @media screen and (min-width: 576px) {
    .title {
      font-size: 2.3rem;
      margin: 2rem 1rem;
    }

    .title span {
      display: inline;
      margin: 0 0.35rem;
    }
  }

  @media screen and (min-width: 1100px) {
    .services-wrapper {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 2rem;
      margin-top: 3rem;
    }
  }

  @media screen and (max-width: 600px) {
    .services-wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceCard.astro src/components/Services.astro
git commit -m "feat: create ServiceCard and Services components"
```

---

## Task 8: Create About Component

**Files:**
- Create: `src/components/About.astro`

- [ ] **Step 1: Create About.astro**

```astro
<section class="about-component">
  <div class="image-wrapper">
    <img src="/images/jas-koba.jpg" alt="JAS and Koba" />
  </div>
  <div class="fulcrum-text">
    <div class="about-title">Our Company</div>
    <div class="about-subtitle">Hi! <span style="margin-left:10px">I'm John Schroeder</span></div>
    <p>I bring decades of software development, digital design, product management, and IT operations experience as a startup founder, corporate executive, and consultant.</p>
    <p>You'll work directly with me. I partner with clients remotely and expand the team as needed to bring your projects to life. As startup veterans, our team can relate to the challenges you and your team face.</p>
    <p>We will make sure your project is executed on time, on budget, and with world-class quality. You'll get all the benefits of hiring a full-service development shop, without the hassle or expense.</p>
    <div class="about-button">
      <a href="/projects">Learn More</a>
    </div>
  </div>
</section>

<style>
  .about-component {
    color: #bec5cc;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    padding: 0 3rem 10rem 3rem;
    max-width: 1600px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
  }

  .image-wrapper {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 50%;
  }

  .image-wrapper img {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-style: none;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }

  .fulcrum-text {
    line-height: 1.5rem;
    background-color: #191e25;
    font-weight: 400;
    margin: 0;
    box-sizing: border-box;
    width: 50%;
    padding: 80px 60px;
    max-width: 60%;
    background-color: #191e25;
    border-radius: 0 10px 10px 0;
    position: relative;
    z-index: 1;
  }

  .about-title {
    font-family: 'Raleway', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 2.9rem;
    font-weight: 700;
    color: var(--mainWhite);
    text-align: left;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .about-subtitle {
    padding: 0;
    margin: 0 0 0.5rem 0;
    box-sizing: border-box;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--mainWhite);
    text-align: left;
  }

  .about-button {
    text-decoration: none;
    border: 2px solid var(--mainWhite);
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 2rem;
    width: 150px;
    transition: var(--mainTransition);
    margin-top: 2rem;
  }

  .about-button a {
    color: var(--mainWhite);
  }

  .about-button:hover {
    background: var(--mainWhite);
    cursor: pointer;
  }

  .about-button:hover a {
    color: var(--primaryColor) !important;
  }

  @media screen and (max-width: 959px) {
    .about-component {
      padding: 0 1rem 6rem 1rem;
    }

    .image-wrapper {
      width: 100%;
      height: 400px;
    }

    .image-wrapper img {
      object-position: top center;
      border-radius: 10px 10px 0 0;
    }

    .fulcrum-text {
      min-width: 100%;
      padding: 40px;
      border-radius: 0 0 10px 10px;
    }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: create About component"
```

---

## Task 9: Create CTA Component

**Files:**
- Create: `src/components/CTA.astro`

- [ ] **Step 1: Create CTA.astro**

```astro
<section class="cta-wrapper">
  <div class="project-cta">
    <h2>Need help moving the needle?</h2>
    <div class="subtitle">Let us be the fulcrum for your next project.</div>
  </div>
  <div class="project-contact">
    <a href="/contact">Contact</a>
  </div>
  <div class="block-quote">
    <div class="quote">"Give me a lever long enough and<br/>a fulcrum on which to place it,<br/>and I shall move the world."</div>
    <div class="attribution">- Archimedes</div>
  </div>
</section>

<style>
  .cta-wrapper {
    background: var(--primaryColor);
    color: var(--mainWhite);
    display: grid;
    font-size: 18px;
    text-align: center;
    align-items: center;
    padding: 5rem 1rem 0 1rem;
  }

  .project-cta h2 {
    font-size: 46px;
    margin-bottom: 1rem;
  }

  .project-cta .subtitle {
    font-size: 30px;
  }

  .project-contact a {
    text-decoration: none;
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 2rem;
    width: 150px;
    transition: var(--mainTransition);
  }

  .project-contact a:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }

  .block-quote {
    grid-column-start: 1;
    grid-column-end: 25;
    padding-top: 6rem;
    font-size: 18px;
  }

  .quote {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
  }

  .attribution {
    padding-right: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 991px) {
    .cta-wrapper {
      grid-template-columns: 1fr;
    }

    .project-cta {
      grid-column-start: 1;
      grid-column-end: 1;
    }

    .project-cta .subtitle {
      font-size: 22px;
    }

    .project-contact {
      grid-column-start: 1;
      grid-column-end: 1;
      padding-top: 3rem;
    }

    .block-quote {
      grid-column-start: 1;
      grid-column-end: 1;
    }
  }

  @media (max-width: 660px) {
    .project-cta h2 {
      font-size: 30px;
      margin-bottom: 0.5rem;
    }

    .project-cta .subtitle {
      font-size: 18px;
    }

    .project-contact {
      padding-top: 3rem;
    }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CTA.astro
git commit -m "feat: create CTA component"
```

---

## Task 10: Create Footer Component

**Files:**
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Create Footer.astro**

```astro
<footer class="footer">
  <div class="links">
    <a href="/projects">Our Work</a>
    <a href="/contact">Contact</a>
  </div>
  <div class="copyright">©2021 Fulcrum Growth</div>
</footer>

<style>
  .footer {
    margin-top: auto;
    padding: 10rem 0 4rem;
    text-align: center;
  }

  .links a {
    display: inline-block;
    text-decoration: none;
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: 700;
  }

  .links a:hover {
    color: var(--primaryColor);
  }

  .copyright {
    letter-spacing: var(--mainSpacing);
    line-height: 1;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    .footer {
      padding: 6rem 0 4rem;
      text-align: center;
    }

    .links a {
      letter-spacing: 1px;
    }

    .copyright {
      line-height: 1;
      margin-top: 1rem;
      letter-spacing: 1px;
    }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: create Footer component"
```

---

## Task 11: Create Homepage

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Create index.astro**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import About from '../components/About.astro';
import CTA from '../components/CTA.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Home | Fulcrum Growth Technology Services">
  <main>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <CTA />
    <Footer />
  </main>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: create homepage"
```

---

## Task 12: Create Projects Page

**Files:**
- Create: `src/pages/projects.astro`

First, fetch the original projects page HTML to get exact content.

- [ ] **Step 1: Fetch original projects page**

```bash
curl -sL "https://web.archive.org/web/20250101023435/https://www.fulcrumgrowth.com/projects" > /tmp/projects-original.html
```

- [ ] **Step 2: Create projects.astro**

Based on the original page structure, create:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout
  title="Our Work | Fulcrum Growth"
  description="Portfolio of client projects"
>
  <main>
    <Navbar />
    <section class="projects-hero">
      <div class="banner">
        <h1>Our Work</h1>
      </div>
    </section>
    <section class="projects-content">
      <!-- Projects grid - exact content from original site -->
    </section>
    <CTA />
    <Footer />
  </main>
</BaseLayout>

<style>
  /* Exact styling from original */
</style>
```

Note: Full content will be extracted from the Wayback Machine HTML to ensure pixel-perfect match.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects.astro
git commit -m "feat: create projects page"
```

---

## Task 13: Create Contact Page

**Files:**
- Create: `src/pages/contact.astro`

- [ ] **Step 1: Fetch original contact page**

```bash
curl -sL "https://web.archive.org/web/20250101023435/https://www.fulcrumgrowth.com/contact" > /tmp/contact-original.html
```

- [ ] **Step 2: Create contact.astro**

Based on the original page structure.

- [ ] **Step 3: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: create contact page"
```

---

## Task 14: Create Blog Page

**Files:**
- Create: `src/pages/blog.astro`

- [ ] **Step 1: Fetch original blog page**

```bash
curl -sL "https://web.archive.org/web/20250101023435/https://www.fulcrumgrowth.com/blog" > /tmp/blog-original.html
```

- [ ] **Step 2: Create blog.astro**

Based on the original page structure.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog.astro
git commit -m "feat: create blog page"
```

---

## Task 15: Build and Verify

- [ ] **Step 1: Run build**

```bash
cd ~/dev/jas-website
npm run build
```

- [ ] **Step 2: Verify build output**

Check that `dist/` folder contains all assets and pages.

- [ ] **Step 3: Test locally**

```bash
npm run preview
```

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Fulcrum Growth site rebuild"
```

---

## Success Criteria

- [ ] Homepage matches original layout exactly
- [ ] Projects page matches original
- [ ] Contact page matches original
- [ ] Blog page matches original
- [ ] All navigation links work
- [ ] All images display correctly
- [ ] Mobile responsive
- [ ] Builds without errors
