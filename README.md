# Kingslyn Dental Care — Website Blueprint

> **Project:** Kingslyn Dental Care — Premium Dental Clinic Website
> **Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Framer Motion, GSAP (`@gsap/react`), Lenis
> **Status:** Production Ready
> **Root:** `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\`

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Configuration Files](#2-configuration-files)
3. [App Directory (Pages)](#3-app-directory-pages)
4. [Components](#4-components)
5. [Data Layer (lib)](#5-data-layer-lib)
6. [Public Assets](#6-public-assets)
7. [Global Styles (globals.css)](#7-global-styles-globalscss)
8. [Tailwind Theme](#8-tailwind-theme)
9. [Animation System](#9-animation-system)
10. [Content Inventory](#10-content-inventory)
11. [Changelog](#11-changelog)
12. [AGENTS.md Reference](#12-agentsmd-reference)
13. [Build & Run Commands](#13-build--run-commands)

---

## 1. Project Structure

```
C:\Users\riswa\Desktop\AAA\client\Kingstly-website\
│
├── .agents/
│   └── skills/
│       └── web-design-guidelines/
│           └── SKILL.md                     # Agent skill for UI/UX review
│
├── app/                                      # Next.js App Router pages
│   ├── about/
│   │   └── page.tsx                          # About page (/about)
│   ├── contact/
│   │   └── page.tsx                          # Contact form + info (/contact)
│   ├── doctors/
│   │   ├── [slug]/
│   │   │   └── page.tsx                      # Dynamic doctor profile (/doctors/[slug])
│   │   └── page.tsx                          # Doctors listing grid (/doctors)
│   ├── services/
│   │   └── page.tsx                          # Services accordion (/services)
│   ├── globals.css                           # Global Tailwind + custom component classes
│   ├── layout.tsx                            # Root layout (Navbar + Footer + Cursor + Lenis)
│   └── page.tsx                              # Homepage (/)
│
├── components/                               # Reusable React components
│   ├── CustomCursor.tsx                      # Spring-loaded cursor follower
│   ├── DoctorCard.tsx                        # Doctor profile card with 3D tilt
│   ├── Footer.tsx                            # 3-column site footer with clinic hours
│   ├── MagneticButton.tsx                    # Spring-physics magnetic wrapper
│   ├── Navbar.tsx                            # Two-state responsive nav (hero/scrolled)
│   ├── ServiceCard.tsx                       # Service offering card with 3D tilt
│   ├── SmoothScrollProvider.tsx              # Lenis smooth scroll wrapper
│   └── VideoBackground.tsx                   # HTML5 video with guaranteed dark fallback
│
├── images/                                   # Unprocessed source images (duplicate)
│
├── lib/
│   └── doctors.tsx                           # Single source of truth (all data)
│
├── public/
│   ├── images/                               # Static images (15 PNGs)
│   │   ├── clinicouterlook.png
│   │   ├── dentalchair.png
│   │   ├── Dr Anand kasi.png
│   │   ├── Dr Aravind.png
│   │   ├── Dr Praveen.png
│   │   ├── Dr. C. Kingston.png
│   │   ├── Dr. Janlyn Kingston.png
│   │   ├── Dr. R. Snega Latha.png
│   │   ├── Dr. Sethuraman.png
│   │   ├── logo.png
│   │   ├── operatory1.png
│   │   ├── operatory2.png
│   │   ├── reception.png
│   │   ├── sterilazationroom.png
│   │   └── waitingarea.png
│   └── videos/                               # Background videos (9 MP4s)
│       ├── About Us page hero background.mp4
│       ├── contact-page.mp4
│       ├── cta-bg.mp4
│       ├── doctors-listing-bg.mp4
│       ├── hero-bg.mp4
│       ├── Homepage hero background.mp4
│       ├── services-bg.mp4
│       ├── services-hero-bg.mp4
│       └── testimonials.mp4
│
├── AGENTS.md                                 # Agent instruction file for this project
├── .gitignore
├── info.txt                                  # Raw doctor/clinic info
├── master_vibe_coding_prompt.txt             # Original build prompt
├── next-env.d.ts                             # Next.js TS declarations
├── next.config.js                            # Next.js configuration
├── package.json                              # Dependencies & scripts
├── package-lock.json
├── postcss.config.js                         # PostCSS (Tailwind + Autoprefixer)
├── premium-ui-audit.md                       # UI/UX audit report
├── README.md                                 # This file
├── skills-lock.json                          # Installed agent skills lock
├── tailwind.config.ts                        # Tailwind theme configuration
├── testimonials.md                           # Structured testimonial data
├── testimonials.txt                          # Raw Google reviews data
├── tsconfig.json                             # TypeScript configuration
├── v4_bugfix_prompt.txt                      # V4 bug-fix specification
└── v5_bug_fixing_prompt.txt                  # V5 bug-fix specification
```

---

## 2. Configuration Files

### `package.json`

```json
{
  "name": "kingslyn-dental-care",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "gsap": "^3.15.0",
    "@gsap/react": "^2.1.2",
    "framer-motion": "^12.42.2",
    "lenis": "^1.3.25"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/node": "^22.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

**Dependencies explained:**
- `next` — React framework with App Router, SSR, static generation
- `react` / `react-dom` — UI library
- `gsap` / `@gsap/react` — GreenSock Animation Platform for scroll-triggered parallax, count-up, stagger animations
- `framer-motion` — Motion library for page transitions, staggered reveals, hover effects, 3D card tilt, magnetic buttons, custom cursor, AnimatePresence
- `lenis` — Smooth scroll engine with native-like inertia (duration: 1.2s)

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
module.exports = nextConfig
```

### `tsconfig.json` — Key settings

- `target: ES2017`, `strict: true`, `jsx: preserve`
- Path alias `@/*` maps to project root (`./*`)
- `moduleResolution: bundler`

### `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `tailwind.config.ts`

Full theme with custom brand colors, fonts, animations, and breakpoints. See [Section 8 — Tailwind Theme](#8-tailwind-theme).

---

## 3. App Directory (Pages)

### `app/layout.tsx` (Root Layout)

**Route:** All pages

**Structure:**
- HTML `<html lang="en">` wrapping `<body>` with `bg-brand-primary font-sans text-brand-light antialiased`
- `SmoothScrollProvider` (Lenis) wraps all children
- `CustomCursor` — spring-loaded follower, disabled on touch
- `Navbar` — fixed sticky header with two-state transparency
- `<main>` — page content slot
- `Footer` — 3-column clinic info/links/hours

**Metadata:**
- Title: `Kingslyn Dental Care | Premium Dental Clinic in Tamil Nadu`
- Description: `Expert cosmetic, restorative, pediatric, orthodontic, implant, and preventive dentistry from Kingslyn Dental Care.`
- Icon: `/images/logo.png`

---

### `app/page.tsx` (Homepage — `/`)

**Sections (in order):**

| Section | Content | Animations |
|---------|---------|------------|
| **1. Hero** | Full-viewport video (`hero-bg.mp4`), three-layer dark gradient overlay (`from-[#02141a]/75 via-[#02141a]/55 to-[#02141a]/35`), dot-grid pattern overlay (`dot-grid-bg`) that fades on scroll, `.hero-text-shield` for guaranteed text legibility, H1 "Your Smile, Our Priority", subtitle, Magnetic "Contact Us" CTA, "Meet Our Doctors" outline link, floating dental chair image | GSAP parallax: video `yPercent:20`, headline `yPercent:-30` + opacity floor `0.55`, dot-grid opacity 0→fade; Framer Motion fadeUp on kicker + subtitle |
| **2. Stats Bar** | 4-column grid: 7 Specialist Doctors, 17+ Years Experience, 9 Core Treatments, 100% Sterilized Care. `max-w-[140px]` labels, `leading-none` numbers, semi-transparent card bg | GSAP `textContent` count-up on scroll into view |
| **3. Expert Team** | Section kicker "Expert team", H2 "Seven specialists. One standard of care.", horizontal-scroll row (mobile) / 3-column grid (desktop) of DoctorCards, "View All Doctors" outline link | Framer Motion `whileInView` + 3D tilt per card |
| **4. Treatment Lines** | Decorative blue orb, section kicker "Treatment lines", H2 "Every treatment, under one roof.", 3-column grid of ServiceCards | Framer Motion `whileInView` + 3D tilt per card |
| **5. Clinic Environment** | Section kicker "Clinic environment", H2 "Built on sterilization. Designed for calm.", 4-column grid of 6 facility images in `aspect-[3/4]` with `object-cover`, hover-reveal captions, "Step Inside" link | Framer Motion left→right slide-in stagger (`x: -40`, delay `0.15s` per item) |
| **6. Testimonials** | Dark container (`bg-brand-light`), section kicker "Patient words", H2 "What patients notice first — and remember longest.", 3 testimonial quote cards (Priya S., Rajesh M., Lakshmi V.) | Static (no entrance animation) |
| **7. CTA** | Video background (`cta-bg.mp4`), section kicker "Get in touch", H2 "Your next appointment starts here.", Magnetic "Contact Us" + phone link | Scroll-triggered GSAP fade-in |

**Data sources:** `clinicInfo`, `doctors`, `facilityImages`, `services` from `@/lib/doctors`

---

### `app/about/page.tsx` (About Page — `/about`)

**Sections:**

| Section | Content | Animations |
|---------|---------|------------|
| **1. Hero** | Video background (`About Us page hero background.mp4`), 70vh height, `hero-text-shield`, H1 "About Kingslyn Dental Care" | Framer Motion fade-up |
| **2. Our Story** | Gold line, H2 "Our Story", 3 paragraphs tracing clinic history from 2007 founding to today's 7-specialist team | Static |
| **3. Our Facilities** | Gold line, H2 "Our Facilities", 7 facility images in `aspect-[16/9]` grid, hover-reveal captions | Static |
| **4. Why Choose Us** | Gold line, H2 "Why Choose Us", 4-column grid of glass cards with SVG icons: Sterilization Standards, Affordable Care, Experienced Team, Modern Technology. Cards have `min-h-[220px]` | GSAP stagger (`y: 50, opacity: 0, stagger: 0.15`) |

---

### `app/services/page.tsx` (Services Page — `/services`)

**Sections:**

| Section | Content | Animations |
|---------|---------|------------|
| **1. Hero** | Video background (`services-hero-bg.mp4`), 50vh, gold line, H1 "Our Services" | Framer Motion fade-up |
| **2. Accordion** | 9 service items as `service-accordion-item` glass cards. Each has SVG icon, title, chevron toggle. Expanded panel shows description + "Handled by" doctor pills linking to `/doctors/[slug]` | GSAP per-item slide-in on scroll (`y: 50, opacity: 0, power4.out`); Framer Motion `AnimatePresence` height transition (0→auto) |
| **3. CTA** | "Can't find what you're looking for?" + Magnetic "Contact Us" | Static |

---

### `app/doctors/page.tsx` (Doctors Listing — `/doctors`)

**Sections:**

| Section | Content | Animations |
|---------|---------|------------|
| **1. Hero** | Video background (`doctors-listing-bg.mp4`), H1 "Our Expert Team" | GSAP stagger on header elements |
| **2. Filter Pills** | 7 filter buttons (All, Cosmetic, Orthodontics, Pediatric, Implants, Periodontics, General). Active state uses `pill-active` (gold background) | GSAP stagger on pills |
| **3. Doctor Grid** | 3-column responsive grid. Filtered by active category. Empty state message for no matches | Framer Motion `AnimatePresence` with `popLayout` mode, smooth exit/enter scale transitions |

---

### `app/doctors/[slug]/page.tsx` (Doctor Profile — `/doctors/[slug]`)

**Sections (in order after V5 cleanup):**
1. **Breadcrumb** — Home / Doctors / Dr. Name
2. **Hero Split** — Left: doctor name (H1), title, specialty pills, languages, experience, Magnetic "Contact Us" CTA. Right: doctor photo in `aspect-[3/4]` with golden glow.
3. **About** — Gold line, H2 "About", bio split into 4-sentence paragraphs
4. **Education Timeline** — (conditional) Gold line, H2 "Education", vertical timeline with gradient line, circle markers, institution/degree/year. GSAP line draw + stagger.
5. **CTA** — Glass card with "Book an Appointment with {name}", Magnetic "Contact Us" button. GSAP fade-in.

**Data:** `doctors[]` from `@/lib/doctors`, matched by `slug` param. 404 state if not found.

**V5 Changes:** Specialties section removed (specialty pills already in hero split).

---

### `app/contact/page.tsx` (Contact Page — `/contact`)

**Primary CTA destination** — all "Book Appointment" links across the site point here (no `/booking` route).

**Sections:**

| Section | Content | Animations |
|---------|---------|------------|
| **1. Hero** | Gold line, H1 "Contact Us" | Framer Motion fade-up |
| **2. Form** | Borderless underlined inputs (`bg-transparent border-b border-white/30`, `focus:border-brand-warm-accent`), name/email/phone/message fields, Magnetic "Send Message" submit. Shows animated "Message Sent!" confirmation on submit | Framer Motion x-slide (−40→0) |
| **3. Contact Info** | Phone (`+91 99766 58340` in `text-2xl font-bold text-brand-gold`), Facebook (label + handle), Instagram (label + handle), full address (`112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India`), working hours (Mon-Sun). All icons in `bg-white/10` circles. Info text uses `ml-[52px]` alignment | Framer Motion x-slide (40→0) |
| **4. Google Maps** | Live embed at `12.9252833, 80.1246316`, full-width `rounded-2xl overflow-hidden border border-white/20`, no CSS filter | Static |
| **5. Floating Call Button** | Fixed `bottom-6 right-6 z-40`, `w-14 h-14 rounded-full bg-brand-gold`, visible on ALL screen sizes, auto-dials `+91 99766 58340`. Animated pulsating `boxShadow` via Framer Motion `animate` | Framer Motion pulse loop + spring scale hover |

**Background:** Full-page video (`contact-page.mp4`) with dark overlay. VideoBackground fallback is a guaranteed dark gradient (`linear-gradient(180deg, #02141a 0%, #0a3341 100%)`) — text always legible.

---

## 4. Components

### `components/Navbar.tsx`

**Purpose:** Fixed sticky pill-shaped navbar with two distinct visual states via Framer Motion color interpolation.

**Two States (scrollY > 100):**
- **Hero state** (default on video): `rgba(6,57,71,0.35)` background, `rgba(255,255,255,0.25)` border, white nav text, logo inverted via `brightness-0 invert`, white/15 hamburger. Contact CTA becomes `!bg-white !text-brand-light`.
- **Scrolled state** (past hero): `rgba(255,255,255,0.92)` background, gold-tinted border, dark nav text, normal logo, gold phone number, dark hamburger.

**Entrance animation:** Slide down from `y:-100` with opacity 0→1, `duration: 0.8`, premium easing `[0.16, 1, 0.3, 1]`.

**Features:**
- Desktop nav: 5 links (Home, Doctors, Services, About, Contact) with scroll-aware active highlighting
- Desktop right: phone number + Magnetic "Contact Us" CTA (links to `/contact`)
- Mobile: hamburger (animated X via 3 `<span>` bars), full-screen overlay with staggered link animations (`delay: 0.04 * index`), quick contact card with phone + CTA
- Closes on route change via `usePathname()`
- `AnimatePresence` for mobile menu exit animation

### `components/Footer.tsx`

**Purpose:** 3-column site footer.

**Columns:**
1. **Brand** — Logo, clinic name, tagline, 2 CTAs (Magnetic "Call Clinic" via `tel:`, "Contact Us" via `/contact` using `btn-outline`)
2. **Explore** — 4 quick links (Doctors, Services, About, Contact — Booking removed), Facebook & Instagram social buttons (pill-style with border)
3. **Clinic Hours** — 7-day schedule as `flex justify-between` rows with day/time alignment

**Hours data:**
```
Monday–Thursday: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM
Friday:          10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM
Saturday:        06:00 PM - 09:00 PM
Sunday:          10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM
```

**Copyright:** Dynamic year via `new Date().getFullYear()`

### `components/DoctorCard.tsx`

**Props:** `doctor: Doctor, index: number`

**Rendering:**
- `<motion.article>` with `ref` and `transformStyle: 'preserve-3d'`
- 3D cursor-reactive tilt (max 6°) via `onMouseMove`/`onMouseLeave`, `rotateX`/`rotateY` on Framer Motion `animate`
- Premium easing `[0.16, 1, 0.3, 1]`
- `whileInView` fade-up entry (opacity + y: 32)
- **Image:** Independent scale on hover (`whileHover: scale(1.08)`)
- **Gradient overlay:** `from-black/70 via-black/10 to-transparent`, 70%→90% on hover
- **Specialty pills:** Hidden by default; slide-up + fade-in on hover via `translate-y-2 → 0`, `opacity-0 → 100`
- **Circular arrow CTA:** Scales from 0 on hover at top-right, arrow rotates from −45°→0°
- Doctor name + title (white text over gradient)
- Hover: `shadow-sm` → `shadow-2xl`

### `components/ServiceCard.tsx`

**Props:** `service: { id, title, icon, description, category }, index: number`

**Rendering:**
- `<motion.article>` with 3D cursor tilt (max 6°)
- `whileInView` fade-up with staggered delay: `delay: Math.min(index * 0.04, 0.28)`
- SVG icon in `brand-secondary` rounded square
- Category label (uppercase, `tracking-[0.25em]`, muted)
- Service title (H3, Outfit font, black weight)
- Description paragraph
- "Explore treatment" CTA with `+` in circle — slides right on hover via `group-hover:translate-x-1`
- Background: white with `shadow-sm` → `shadow-2xl` on hover

### `components/VideoBackground.tsx`

**Props:** `src: string, overlay?: boolean (default true), className?: string`

**Behavior:**
- Renders fallback dark gradient immediately (guaranteed dark — `linear-gradient(180deg, #02141a 0%, #0a3341 100%)`)
- Video loads with `opacity` transition (0→1 on `canPlay`)
- On error: hides video element, shows only fallback gradient (never white)
- Overlay: `bg-gradient-to-b from-black/50 to-black/20` at `z-[1]`
- Uses `autoPlay`, `muted`, `loop`, `playsInline` for reliable autoplay

### `components/SmoothScrollProvider.tsx`

**Purpose:** Client-side smooth scroll using Lenis.

**Behavior:**
- Initializes Lenis with `duration: 1.2`, smooth wheel scrolling
- Attaches to `requestAnimationFrame` loop
- Respects `prefers-reduced-motion` — skips init if user prefers reduced motion
- Listens for runtime media query changes and destroys/reattaches Lenis
- Proper cleanup on unmount

### `components/MagneticButton.tsx`

**Props:** `children, className?, as?, href?, onClick?, type?`

**Behavior:**
- Wraps elements in a `motion.div`
- On mouse move: calculates cursor position relative to element center, translates toward cursor by 30% of offset
- Spring physics: `stiffness: 150, damping: 15, mass: 0.1`
- Returns to origin on mouse leave
- Used on all primary CTAs across the site (13+ instances)

### `components/CustomCursor.tsx`

**Behavior:**
- Spring-loaded circular cursor follower (`stiffness: 300, damping: 20, mass: 0.5`)
- Base size: 16px diameter; expands to 64px on hover over cards/buttons/links
- Displays "View" label when hovering over `<article>` elements (doctor/service cards)
- Auto-disabled on touch devices via `window.matchMedia('(pointer: coarse)')`
- Rendered at `z-[999]` with `pointer-events: none`
- Warm accent (`brand-warm-accent`) border and background

---

## 5. Data Layer (lib)

### `lib/doctors.tsx`

**Single source of truth** — file is `.tsx` (not `.ts`) because it contains inline SVG icons as JSX.

#### `Doctor` Interface

```ts
export interface Doctor {
  id: number;
  name: string;
  slug: string;
  image: string;
  title: string;
  languages?: string[];
  specialties: string[];
  experience?: string;
  education?: { institution: string; degree: string; year?: string }[];
  bio: string;
  filterTags: string[];
}
```

#### 7 Doctors

| # | Name | Slug | Title | Specialties | Filter Tags |
|---|------|------|-------|-------------|-------------|
| 1 | Dr. C. Kingston | `dr-c-kingston` | Expert Cosmetic Dentistry | Restorative, Root Canal, Aesthetic | Cosmetic, General |
| 2 | Dr. Janlyn Kingston | `dr-janlyn-kingston` | Chief Dental Surgeon, BDS | Scaling, Extraction, Preventive, Aesthetic, Prosthetics | General, Cosmetic |
| 3 | Dr. Anand Kasi | `dr-anand-kasi` | Pedodontist (Pediatric Dentist) | Pediatric Dentistry | Pediatric |
| 4 | Dr. Praveen | `dr-praveen` | Orthodontist | Braces & Orthodontic Services | Orthodontics |
| 5 | Dr. Aravind V | `dr-aravind-v` | Periodontist | Gum Disease Treatment | Periodontics |
| 6 | Dr. Sethuraman | `dr-sethuraman` | Prosthodontist & Implantologist | Implants, Prosthodontics | Implants |
| 7 | Dr. R. Snega Latha | `dr-r-snega-latha` | General Dentist, BDS | Extraction, Preventive, Scaling | General |

#### 9 Services (with Inline SVG Icons)

Each service has a custom inline SVG icon (24×24, stroke-based line art).

| # | Title | Category | Assigned Doctors |
|---|-------|----------|-----------------|
| 1 | Cosmetic Dentistry | Cosmetic | Dr. C. Kingston, Dr. Janlyn Kingston |
| 2 | Root Canal Therapy | Cosmetic | Dr. C. Kingston |
| 3 | Orthodontics (Braces) | Orthodontics | Dr. Praveen |
| 4 | Pediatric Dentistry | Pediatric | Dr. Anand Kasi |
| 5 | Periodontics (Gum Treatment) | Periodontics | Dr. Aravind V |
| 6 | Dental Implants | Implants | Dr. Sethuraman, Dr. Aravind V |
| 7 | Prosthodontics | Implants | Dr. Sethuraman, Dr. Janlyn Kingston |
| 8 | Preventive Care & Scaling | General | Dr. Janlyn Kingston, Dr. R. Snega Latha |
| 9 | Tooth Extraction | General | Dr. Janlyn Kingston, Dr. R. Snega Latha |

#### `clinicInfo`

```ts
{
  name: "Kingslyn Dental Care",
  phone: "+91 99766 58340",
  phoneLink: "tel:+919976658340",
  facebook: "https://www.facebook.com/share/1HJcck1h3L/",
  instagram: "https://www.instagram.com/kingstonchellapandian",
  tagline: "Your Smile, Our Priority",
  subTagline: "Trusted Dental Excellence in Tamil Nadu",
}
```

#### 7 Facility Images

| File | Caption |
|------|---------|
| `clinicouterlook.png` | Kingslyn Dental Care - Welcome |
| `reception.png` | Modern Reception - Warm Welcome |
| `operatory1.png` | State-of-the-Art Operatory |
| `operatory2.png` | Advanced Treatment Suite |
| `dentalchair.png` | Comfortable Treatment Chair |
| `sterilazationroom.png` | Sterilization Room - Safety First |
| `waitingarea.png` | Relaxing Waiting Lounge |

#### Filter Categories

```
["All", "Cosmetic", "Orthodontics", "Pediatric", "Implants", "Periodontics", "General"]
```

---

## 6. Public Assets

### Images (`public/images/`)
15 PNG images:
- 7 doctor portraits (Dr. C. Kingston, Dr. Janlyn Kingston, Dr. Anand Kasi, Dr. Praveen, Dr. Aravind V, Dr. Sethuraman, Dr. R. Snega Latha)
- 7 facility photos (clinicouterlook, reception, operatory1, operatory2, dentalchair, sterilazationroom, waitingarea)
- 1 logo (logo.png)

### Videos (`public/videos/`)
9 MP4 video files:
- `hero-bg.mp4` — Homepage hero background
- `Homepage hero background.mp4` — Alternative homepage hero
- `About Us page hero background.mp4` — About page hero
- `contact-page.mp4` — Contact page full-page background
- `cta-bg.mp4` — Homepage CTA section background
- `doctors-listing-bg.mp4` — Doctors listing hero
- `services-hero-bg.mp4` — Services page hero
- `services-bg.mp4` — Services section (unused)
- `testimonials.mp4` — Testimonials section (unused)

---

## 7. Global Styles (globals.css)

`app/globals.css` — Contains all custom component classes and CSS variables.

### CSS Variables (Design Tokens)

```css
--color-primary: #F5FCFD;
--color-secondary: #E8F7F9;
--color-card: #FFFFFF;
--color-card-hover: #F0FBFC;
--color-gold: #0891B2;          /* Primary accent (cyan/teal) */
--color-gold-light: #22D3EE;
--color-gold-dark: #0E5F73;
--color-teal: #059669;
--color-muted: #5E7480;
--color-light: #123B46;
--color-border: rgba(8, 145, 178, 0.16);
```

### Body Background

Multi-layered gradient:
```css
radial-gradient(circle at 10% 0%, rgba(34, 211, 238, 0.18), transparent 32rem),
radial-gradient(circle at 92% 8%, rgba(5, 150, 105, 0.12), transparent 26rem),
linear-gradient(180deg, #f5fcfd 0%, #eefafb 42%, #f8feff 100%)
```

### Component Classes (`@layer components`)

| Class | Purpose | Key Styles |
|-------|---------|------------|
| `.page-shell` | Page wrapper | `relative overflow-hidden` |
| `.section-kicker` | Editorial section eyebrow | `inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold-dark`, `::before` 24px horizontal rule |
| `.section-title` | H2 section heading | `font-display text-[clamp(2.6rem,7vw,6.5rem)] font-black tracking-[-0.02em] leading-[0.98] text-brand-light` |
| `.section-subtitle` | Section description | `max-w-xl text-[15px] leading-8 md:text-lg text-brand-muted/80 font-medium` |
| `.text-accent-italic` | Editorial emphasis | `italic font-light text-brand-warm-accent` |
| `.text-hero` | Hero H1 | `font-size: clamp(3.6rem, 10vw, 8rem); line-height: 0.95` |
| `.text-hero-sub` | Hero subtitle | `font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.75` |
| `.hero-text-shield` | Text legibility shield (V4) | `text-shadow: 0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.6)` |
| `.dot-grid-bg` | Hero dot pattern (V5) | `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 24px 24px` |
| `.surface-card` / `.glass-card` | Card container | `rounded-[2rem] border border-brand-border shadow-[0_28px_90px_rgba(14,95,115,0.10)]`, bg `rgba(255,255,255,0.82)`, hover: `translateY(-4px)`, gold border |
| `.btn-gold` / `.btn-primary` | Primary button | `rounded-full bg-brand-gold px-7 py-3 font-extrabold text-white shadow-[0_18px_40px_rgba(8,145,178,0.22)]`, hover: `translateY(-2px)` |
| `.btn-outline` / `.btn-secondary` | Outline button | `rounded-full border border-brand-border bg-white/80 px-7 py-3 font-extrabold text-brand-light`, hover: gold border |
| `.pill` | Filter/tag pill | `rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-bold text-brand-gold-dark` |
| `.pill-active` | Active filter | `border-brand-gold bg-brand-gold text-white` |
| `.gold-line` | Section divider | `h-1 w-20 rounded-full bg-brand-gold mb-6` |
| `.stat-number` | Stats value | `font-display text-[clamp(2.8rem,6vw,5rem)] font-black text-brand-gold`, `line-height: 1` |
| `.video-overlay` | Video gradient overlay | Dual gradient layer for darkening |
| `.orb` / `.orb-gold` / `.orb-teal` / `.orb-blue` | Decorative blobs | `border-radius: 9999px; filter: blur(70px)` |
| `.noise-overlay::after` | Subtle grain texture | Fixed SVG noise at `opacity: 0.018` |
| `.sticky-header` | Navbar scroll state | `backdrop-filter: blur(12px)` with semi-transparent background |
| `.horizontal-scroll` | Horizontal scroll container | Flexbox with scroll-snap, hidden scrollbar |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Tailwind Theme

`tailwind.config.ts` — Full custom theme.

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | `#F5FCFD` | Page background |
| `brand-secondary` | `#E8F7F9` | Icon/button backgrounds |
| `brand-card` | `#FFFFFF` | Card surfaces |
| `brand-card-hover` | `#F0FBFC` | Card hover state |
| `brand-gold` | `#0891B2` | Primary accent (buttons, highlights, stats) |
| `brand-gold-light` | `#22D3EE` | Lighter accent |
| `brand-gold-dark` | `#0E5F73` | Dark accent (text, hover states) |
| `brand-teal` | `#059669` | Secondary accent |
| `brand-teal-dark` | `#047857` | Darker teal |
| `brand-accent` | `#164E63` | Deep accent |
| `brand-muted` | `#5E7480` | Body/secondary text |
| `brand-light` | `#123B46` | Heading/primary text |
| `brand-border` | `rgba(8,145,178,0.16)` | Borders, dividers |
| `brand-warm-accent` | `#D4A574` | V2 sand accent for italic emphasis — sparing use |

### Fonts

- **Sans (body):** `"Plus Jakarta Sans"`, `"Aptos"`, system-ui, sans-serif
- **Display (headings):** `"Outfit"`, `"Plus Jakarta Sans"`, system-ui, sans-serif

### Custom Animations

| Key | Keyframes | Duration | Iteration |
|-----|-----------|----------|-----------|
| `float` | translateY 0→-20→0 | 6s | infinite |
| `pulse-slow` | standard pulse | 4s | infinite |
| `shimmer` | backgroundPosition -200%→200% | 2s | linear infinite |
| `bounce-slow` | standard bounce | 2.5s | infinite |
| `spin-slow` | rotate 0→360 | 8s | linear infinite |
| `glow-pulse` | opacity 0.4→0.8→0.4 | 3s | infinite |

### Custom Breakpoints

- `xs`: 400px
- `3xl`: 1920px

### Background Images

- `gradient-radial` — radial-gradient helper
- `gradient-gold` — gold linear gradient (`#c8a96e → #e8d5a8`)
- `gradient-dark` — dark linear gradient (`#050810 → #0d1117`)

---

## 9. Animation System

### Framer Motion (Per-Component)

| Component | Animation | Details |
|-----------|-----------|---------|
| **Homepage** | `fadeUp` variants | opacity 0→1, y: 32→0, staggered children via `staggerChildren: 0.08`, `whileInView` triggers |
| **Services accordion** | `AnimatePresence` | height 0→auto transitions on expand/collapse, chevron rotate 0→180 |
| **Doctors filter** | `AnimatePresence` `popLayout` | scale 0.9→1 enter, 1→0.9 exit, staggered delays per card |
| **Navbar mobile** | Slide-down overlay | Staggered children at `delay: 0.04 * index`, `AnimatePresence` exit |
| **Navbar states** | `animate` on backgroundColor | Smooth interpolation `rgba(6,57,71,0.35)` ↔ `rgba(255,255,255,0.92)`, borderColor |
| **DoctorCard** | 3D tilt | `rotateX`/`rotateY` bound to cursor position (max 6°), `whileInView` fade-up |
| **ServiceCard** | 3D tilt | `rotateX`/`rotateY` bound to cursor position (max 6°), staggered `whileInView` |
| **MagneticButton** | Spring physics | `stiffness: 150, damping: 15, mass: 0.1`, attract toward cursor by 30% offset |
| **CustomCursor** | `useSpring` | `stiffness: 300, damping: 20, mass: 0.5`, scale 16→64 on hover |
| **Floating call button** | Pulse loop | `animate` with repeating `boxShadow` keyframes, `whileHover` scale 1.1 |
| **Contact page** | x-slide | Form slides in from −40px, info from +40px |

### GSAP + ScrollTrigger

| Component | Animation | Details |
|-----------|-----------|---------|
| **Homepage hero** | Parallax | Video `yPercent: 20` (0.5x speed), headline `yPercent: -30` + opacity floor `0.55`, dot-grid opacity 0 fades on scroll. All `scrub: true`. |
| **Homepage stats** | Count-up | `textContent` from 0→target value with suffix handling (`+`, `%`), `snap: { textContent: 1 }`, trigger `top 85%` |
| **About page** | Why Choose Us stagger | `y: 50, opacity: 0, stagger: 0.15, power3.out`, trigger `top 80%` |
| **Doctor profile** | Timeline line draw | `scaleY: 0→1, transformOrigin: top, power3.out`, trigger `top 80%` |
| **Doctor profile** | Timeline items stagger | `x: 30, opacity: 0, stagger: 0.2, power3.out` |
| **Doctor profile** | CTA fade-in | `y: 40, opacity: 0, power3.out`, trigger `top 90%` |
| **Doctors listing** | Header stagger | `y: 40, opacity: 0, stagger: 0.15, power3.out` |
| **Doctors listing** | Filter pills stagger | `y: 20, scale: 0.85, stagger: 0.07, back.out(1.7)` |
| **Services page** | Accordion items | Per-item scroll-triggered: `y: 50, opacity: 0, power4.out`, each with its own ScrollTrigger at `top 85%` |

### Lenis (Smooth Scroll)

- Global smooth scrolling with `duration: 1.2`
- `smoothWheel: true`, `wheelMultiplier: 1`, `touchMultiplier: 2`
- Respects `prefers-reduced-motion` — skips on init, dynamic destroy/reattach at runtime

### Tailwind Hover Effects

- **Doctor cards:** 3D tilt + image scale (1.08) + specialty pills slide-up + arrow CTA scale-in + overlay opacity 70→90%
- **Service cards:** 3D tilt + shadow `sm→2xl`
- **CTA buttons (`+`):** `group-hover:translate-x-1 transition-transform duration-300`
- **Images:** `group-hover:scale-[1.04]` (doctor cards), `group-hover:scale-110` (facility grid)
- **Buttons:** Magnetic spring attraction via `MagneticButton` wrapper; `hover:translateY(-2px)` via CSS

### Premium Easing Curve

`[0.16, 1, 0.3, 1]` — used on all card animations, entrances, Navbar transitions.

---

## 10. Content Inventory

### Text Content by Page

#### Homepage
- **Kickers:** "Kingslyn Dental Care", "Expert team", "Treatment lines", "Clinic environment", "Patient words", "Get in touch"
- **H1:** "Your Smile, Our Priority"
- **H2s:** "Seven specialists. One standard of care.", "Every treatment, under one roof.", "Built on sterilization. Designed for calm.", "What patients notice first — and remember longest.", "Your next appointment starts here."
- **Stats:** 7 Specialist Doctors, 17+ Years Experience, 9 Core Treatments, 100% Sterilized Care
- **Testimonials:** Priya S., Rajesh M., Lakshmi V.

#### About Page
- **H1:** "About Kingslyn Dental Care"
- **H2s:** "Our Story", "Our Facilities", "Why Choose Us"
- **Story:** Founded 2007 by Dr. C. Kingston, 17 years of growth to 7 specialists
- **Why Choose Us:** Sterilization Standards, Affordable Care, Experienced Team, Modern Technology

#### Services Page
- **H1:** "Our Services"
- **9 service titles** with descriptions

#### Doctors Pages
- **Listing H1:** "Our Expert Team"
- **7 Doctor profiles** with specialties, education, experience, bios
- **Filter categories:** All, Cosmetic, Orthodontics, Pediatric, Implants, Periodontics, General

#### Contact Page
- **H1:** "Contact Us"
- **H2s:** "Send us a Message", "Get in Touch"
- **Contact info:** Phone (`+91 99766 58340`), Facebook (Kingslyn Dental Care), Instagram (@kingstonchellapandian), Address (`112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India`), Working Hours (Mon–Sun)
- **Google Maps:** Live embed at `12.9252833, 80.1246316`
- **Floating call button:** Always visible, auto-dials on click

### Social Media
- Facebook: `https://www.facebook.com/share/1HJcck1h3L/`
- Instagram: `https://www.instagram.com/kingstonchellapandian`

### Phone
- `+91 99766 58340`

---

## 11. Changelog

### V5 — Targeted Fixes (July 2026)

| Fix | File(s) | What Changed |
|-----|---------|--------------|
| **1 — Hero text opacity CRITICAL** | `app/page.tsx` | Removed Framer Motion `variants={fadeUp}` from hero headline/subtitle (was initial opacity 0 conflicting with GSAP). Switched to `useGSAP` with explicit `gsap.set({opacity:1, y:0})`. Opacity floor `0.55` (never fully disappears). Removed unused `heroRef`. GSAP is sole animation system on hero elements — no Framer Motion targeting same elements. |
| **2 — Dot-grid background** | `app/globals.css`, `app/page.tsx` | Added `.dot-grid-bg` class (white dots at `rgba(255,255,255,0.15)`, `24px` grid). Added dot-grid layer between video overlay and hero text. GSAP fades it out on scroll (`center top`). |
| **3 — Navbar hero-state** | `components/Navbar.tsx` | Complete rewrite with Framer Motion `animate` on `backgroundColor` (`rgba(6,57,71,0.35)` → `rgba(255,255,255,0.92)`) and `borderColor` (`rgba(255,255,255,0.25)` → `rgba(8,145,178,0.16)`). Smooth color interpolation instead of abrupt class-swap. Entrance slides down from `y:-100`. Scroll-aware active link styling, white logo invert in hero state, hero-state CTA button style. |
| **4 — Contact video + fallback** | `components/VideoBackground.tsx`, `app/contact/page.tsx`, `public/videos/` | Renamed `contact page.mp4` → `contact-page.mp4` to avoid URL-encoding issues. Changed fallback gradient to guaranteed dark (`linear-gradient(180deg, #02141a 0%, #0a3341 100%)`). Updated VideoBackground src. |
| **5 — Duplicate Specialties** | `app/doctors/[slug]/page.tsx` | Removed standalone "Specialties" `<section>` (gold line + H2 + pills + GSAP stagger). Removed `specialtiesRef` and its stagger animation. Specialty pills now appear only in the hero split section. |
| **6 — Services slide-in** | `app/services/page.tsx` | Changed className to `service-accordion-item`. Replaced container stagger with per-item ScrollTrigger: each accordion item fades/slides in individually as user scrolls (`y: 50, opacity: 0, power4.out`). |

### V4 — Bug Fix & Visual Polish (see `v4_bugfix_prompt.txt`)

| Bug | File(s) | What Changed |
|-----|---------|--------------|
| **1 — Hero text legibility** | `app/page.tsx`, `app/globals.css` | Darker gradient overlay (`from-[#02141a]/75 via-[#02141a]/55 to-[#02141a]/35`), added `.hero-text-shield` class (text-shadow), GSAP parallax fade target `0.3→0.65`, subtitle `text-cyan-50/86` → `text-white` |
| **1 — Navbar transparency** | `components/Navbar.tsx` | Complete rewrite with `scrolled` state via scroll listener (>80px). Hero state: `bg-white/10 backdrop-blur-sm border-white/20`, white text/logo. Scrolled: `bg-white/90 backdrop-blur-xl`, dark text. |
| **2 — Stats bar text wrap** | `app/page.tsx` | `leading-none` on numbers, `max-w-[140px]` + `leading-tight tracking-[0.15em]` on labels, shortened labels, `grid-cols-2 md:grid-cols-4 gap-4`, semi-transparent bg |
| **3 — Clinic images** | `app/page.tsx` | `aspect-[3/4]` containers, `object-cover` + `fill` on Image, left→right slide-in stagger (`x: -40`, `0.15s`), hover overlay |
| **4 — About page** | `app/about/page.tsx` | Video hero swap, `section-title` on all H2s, `gap-6 md:gap-8` + `min-h-[220px]` on Why Choose Us cards, fixed italic span to "Us" |
| **5 — Contact page** | `app/contact/page.tsx` | Full-page video background, borderless underlined inputs, social labels with icon+handle, white text on dark bg. |

### V3 — Booking Removal & Contact Redirection

| Change | File(s) | Detail |
|--------|---------|--------|
| **Booking page deleted** | `app/booking/page.tsx` | Entire multi-step booking form removed. Route `/booking` no longer exists. |
| **All CTAs redirected** | `app/page.tsx` (2x), `Navbar.tsx` (2x), `Footer.tsx` (2x), `doctors/[slug]/page.tsx` (2x) | Every `href="/booking"` → `href="/contact"`. Button text: "Book Appointment" → "Contact Us". |
| **Footer quick links cleaned** | `Footer.tsx` | "Booking" entry removed from `QUICK_LINKS` array. |
| **Homepage CTA copy updated** | `app/page.tsx` | Section kicker "Appointments" → "Get in touch". Body text updated. |
| **Contact page address** | `app/page.tsx` | Full address: `112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India`. |
| **Contact page maps** | `app/contact/page.tsx` | Google Maps iframe with real coordinates (`12.9252833, 80.1246316`), clean embed. |
| **Floating call button** | `app/contact/page.tsx` | `md:hidden` removed — button visible on ALL screen sizes. |

### V2 — Premium UI/UX Upgrade

Eight-task upgrade eliminating "AI-generated" generic feel:

| Task | File(s) | What Changed |
|------|---------|--------------|
| **1. Typography** | `globals.css`, all pages | Editorial section kickers (`::before` rule, `11px`, `tracking-[0.25em]`), larger titles (`6.5rem` cap, `-0.02em` tracking, `0.98` leading), `.text-accent-italic` with warm accent |
| **2. Card Hover** | `DoctorCard.tsx`, `ServiceCard.tsx` | Complete rewrite: 3D cursor tilt (6° max), independent image scale, hover-reveal specialty pills, circular arrow CTA, premium easing |
| **3. Magnetic Buttons** | `MagneticButton.tsx` | New spring-physics wrapper; applied to all 13+ `btn-gold` instances |
| **4. Copy Rewrite** | `app/page.tsx` | All 5 homepage H2s rewritten with editorial rhythm variation |
| **5. Parallax Hero** | `app/page.tsx` | GSAP ScrollTrigger parallax on video + headline |
| **6. Stats Count-Up** | `app/page.tsx` | GSAP `textContent` 0→target on scroll |
| **7. Custom Cursor** | `CustomCursor.tsx` | Spring-loaded follower, scale 16→64 on hover, "View" on articles, disabled on touch |
| **8. Warm Accent** | `tailwind.config.ts`, `globals.css` | Added `brand-warm-accent: #D4A574`, applied via `.text-accent-italic` |

### V1 — Initial Premium Upgrades

- Section-kicker pill badges
- H2 `tracking-tight` / `leading-snug` on 12 heading instances
- SVG icons replacing text abbreviations (9 services)
- Card hover effects (`bg-gray-50`, `shadow-xl`, `translate-y-1`)
- Footer clinic hours refactored to flex layout
- `group-hover` slide animation on CTA buttons

---

## 12. AGENTS.md Reference

For AI agents working on this codebase, see `AGENTS.md` at the project root. Key conventions:

- **Path alias:** `@/*` maps to project root
- **Data:** `lib/doctors.tsx` is the single source of truth (`.tsx` because it contains inline SVG JSX)
- **Premium easing:** `[0.16, 1, 0.3, 1]` on all card animations and entrances
- **Spring physics:** Magnetic buttons `stiffness: 150, damping: 15, mass: 0.1`; cursor `stiffness: 300, damping: 20, mass: 0.5`
- **No `/booking` route** — all CTAs go to `/contact`
- **Images:** Reference from `public/images/` (root `images/` is unprocessed source)
- **Framer Motion and GSAP should NOT target the same element** (causes opacity conflicts — root cause of V5 Fix 1)

---

## 13. Build & Run Commands

```bash
# Development server
npm run dev

# Production build (run to verify all changes — catches type errors, compilation failures, missing pages)
npm run build

# Start production server
npm start

# ESLint check
npm run lint
```

---

*Documentation generated from source code. Full website blueprint. Last updated: July 2026.*
