# Kingslyn Dental Care — Website Documentation

> **Project:** Kingslyn Dental Care — Premium Dental Clinic Website
> **Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Framer Motion, GSAP, Lenis
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
11. [V2 Premium UI/UX Upgrade](#11-v2-premium-uiux-upgrade)
12. [Changelog](#12-changelog)
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
│   │   └── page.tsx                          # About page
│   ├── contact/
│   │   └── page.tsx                          # Contact form + info
│   ├── doctors/
│   │   ├── [slug]/
│   │   │   └── page.tsx                      # Dynamic doctor profile
│   │   └── page.tsx                          # Doctors listing grid
│   ├── services/
│   │   └── page.tsx                          # Services accordion
│   ├── globals.css                           # Global Tailwind + component styles
│   ├── layout.tsx                            # Root layout (Navbar + Footer)
│   └── page.tsx                              # Homepage
│
├── components/                               # Reusable React components
│   ├── CustomCursor.tsx                      # Custom cursor follower (V2)
│   ├── DoctorCard.tsx                        # Doctor profile card (V2 rewrite)
│   ├── Footer.tsx                            # Site footer with clinic hours
│   ├── MagneticButton.tsx                    # Magnetic spring-button wrapper (V2)
│   ├── Navbar.tsx                            # Responsive navigation header
│   ├── ServiceCard.tsx                       # Service offering card (V2 upgraded)
│   ├── SmoothScrollProvider.tsx              # Lenis smooth scroll wrapper
│   └── VideoBackground.tsx                   # HTML5 video with fallback
│
├── images/                                   # Duplicate of public/images
│
├── lib/
│   └── doctors.tsx                           # All data (doctors, services, etc.)
│
├── public/
│   ├── images/                               # Static images (PNG)
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
│   └── videos/                               # Background videos (MP4)
│       ├── About Us page hero background.mp4
│       ├── cta-bg.mp4
│       ├── doctors-listing-bg.mp4
│       ├── hero-bg.mp4
│       ├── Homepage hero background.mp4
│       ├── services-bg.mp4
│       ├── services-hero-bg.mp4
│       └── testimonials.mp4
│
├── .gitignore
├── info.txt                                  # Raw doctor/clinic info
├── master_vibe_coding_prompt.txt             # Original build prompt
├── next-env.d.ts                             # Next.js TS declarations
├── next.config.js                            # Next.js config
├── package.json                              # Dependencies & scripts
├── package-lock.json
├── postcss.config.js                         # PostCSS (Tailwind + Autoprefixer)
├── premium-ui-audit.md                       # UI/UX audit report
├── README.md                                 # This file
├── skills-lock.json                          # Installed agent skills lock
├── tailwind.config.ts                        # Tailwind theme config
├── testimonials.md                           # Structured testimonials
├── testimonials.txt                          # Raw Google reviews data
└── tsconfig.json                             # TypeScript config
```

---

## 2. Configuration Files

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\package.json`

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
- `gsap` / `@gsap/react` — GreenSock Animation Platform for scroll-triggered animations
- `framer-motion` — Motion library for page transitions, staggered reveals, hover effects, 3D card tilt, magnetic buttons, custom cursor
- `lenis` — Smooth scroll engine with native-like inertia (duration: 1.2s)

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
module.exports = nextConfig
```

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Key: `@/*` path alias maps to project root.

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\tailwind.config.ts`

Full Tailwind theme with custom brand colors, fonts, animations, and breakpoints. See [Section 8 — Tailwind Theme](#8-tailwind-theme).

---

## 3. App Directory (Pages)

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\layout.tsx` (Root Layout)

```tsx
import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Kingslyn Dental Care | Premium Dental Clinic in Tamil Nadu',
  description: 'Expert cosmetic, restorative, pediatric, orthodontic, implant, and preventive dentistry from Kingslyn Dental Care.',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-primary font-sans text-brand-light antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
```

**Structure:** Wraps every page with smooth scroll (Lenis), custom cursor (spring-loaded, disabled on touch devices via `(pointer: coarse)`), sticky Navbar at top, Footer at bottom. Global metadata for SEO. All pages use `bg-brand-primary` (`#F5FCFD`) with a multi-layered gradient body background.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\page.tsx` (Homepage)

**Route:** `/`

**Sections (in order):**
1. **Hero** — Full-viewport video background (`hero-bg.mp4`) with GSAP parallax (video `yPercent: 20` at 0.5x scroll speed, headline `yPercent: -40` at 1.2x scroll speed with `opacity: 0.3` fade), gradient overlay (`from-[#063947]/90 via-[#063947]/62 to-[#063947]/20`), headline "Your Smile, Our Priority" (`.text-hero`: `clamp(3.6rem, 10vw, 8rem)`, `line-height: 0.95`), sub-tagline, magnetic CTAs ("Contact Us" via `MagneticButton` wrapper with spring physics / "Meet Our Doctors" via `btn-outline`), and a floating dental chair image card with "Sterile care model" caption inside a `rounded-[2.5rem]` glass frame.
2. **Stats Bar** — 4 responsive metric cards with GSAP number count-up animation on scroll into view.
3. **Expert Team** — Section kicker "Expert team", H2 "Seven specialists. One standard of care.", horizontal-scrolling row of 6 DoctorCards (with 3D tilt + hover reveal interactions) and "View All Doctors" link.
4. **Treatment Lines** — Floating blue orb decoration, section kicker "Treatment lines", H2 "Every treatment, under one roof.", 3-column grid of ServiceCards (with 3D tilt interaction).
5. **Clinic Environment** — Section kicker "Clinic environment", H2 "Built on sterilization. Designed for calm.", 4-column facility image grid with captions.
6. **Testimonials** — Dark-themed container, section kicker "Patient words", H2 "What patients notice first — and remember longest.", 3 testimonial cards with patient quotes.
7. **CTA** — Video background (`cta-bg.mp4`) with dark overlay, section kicker "Get in touch", H2 "Your next appointment starts here.", magnetic CTAs ("Contact Us" via `/contact` / phone number via `tel:`).

**Data sources:** `clinicInfo`, `doctors`, `facilityImages`, `services` from `@/lib/doctors`

**Animations:** Framer Motion `fadeUp` variant (opacity 0→1, y: 32→0) with staggered children and `whileInView` triggers. GSAP parallax on hero section. GSAP count-up on stats.

**V2 Upgrades:**
- Hero parallax (video + headline on independent scroll axes via GSAP ScrollTrigger)
- Stats count-up animation (GSAP `textContent` from 0→target with `+` / `%` suffix handling)
- Magnetic buttons on all CTAs (13 instances across site, spring physics `stiffness: 150, damping: 15, mass: 0.1`)
- Editorial copy with italic accent words (`text-accent-italic` → `#D4A574`)
- All `/booking` CTAs redirected to `/contact` (booking page removed)

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\about\page.tsx` (About Page)

**Route:** `/about`

**Sections:**
1. **Hero** — Full-width parallax image of clinic exterior with gold line accent, title "About Kingslyn Dental Care".
2. **Our Story** — Gold line accent, H2 "Our Story", 3 paragraphs tracing clinic history from 2007 founding by Dr. C. Kingston through current 7-specialist team.
3. **Our Facilities** — Gold line, H2 "Our Facilities", GSAP-staggered grid of all 7 facility images with hover-reveal captions.
4. **Why Choose Us** — Gold line, H2 "Why Choose Us", 4-column grid of glass cards: Sterilization Standards, Affordable Care, Experienced Team, Modern Technology. Each with SVG icon.

**Animations:** GSAP parallax on hero image, ScrollTrigger stagger on facility items and why-choose cards.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\services\page.tsx` (Services Page)

**Route:** `/services`

**Sections:**
1. **Hero** — Full-viewport video background (`services-hero-bg.mp4`), title "Our Services", subtitle "Comprehensive dental care for every need".
2. **Accordion** — All 9 services as expandable accordion items (glass cards). Each shows SVG icon, title, chevron toggle. On expand: description + "Handled by" doctor pills linking to doctor profiles.
3. **CTA** — "Can't find what you're looking for?" magnetic "Contact Us" link.

**Animations:** Framer Motion `AnimatePresence` for accordion height transitions (0→auto), GSAP stagger on accordion items.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\doctors\page.tsx` (Doctors Listing)

**Route:** `/doctors`

**Sections:**
1. **Hero** — Video background (`doctors-listing-bg.mp4`), title "Our Expert Team", subtitle about world-class specialists.
2. **Filter Pills** — 7 filter categories (All, Cosmetic, Orthodontics, Pediatric, Implants, Periodontics, General). Active state uses `pill-active` class (gold background).
3. **Doctor Grid** — 3-column responsive grid. Filtered by active category. Uses Framer Motion `AnimatePresence` with `popLayout` mode for smooth filter transitions. Empty state message for no matches.

**Animations:** GSAP `from()` for header text and filter pills on mount, Framer Motion layout animations on filter change.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\doctors\[slug]\page.tsx` (Doctor Profile)

**Route:** `/doctors/[slug]` (dynamic)

**Sections:**
1. **Breadcrumb** — Home / Doctors / Dr. Name
2. **Hero Split** — Left: doctor name (H1), title, specialty pills, languages, experience, magnetic "Book Appointment" CTA. Right: doctor photo in 3:4 aspect ratio.
3. **Specialties** — Gold line, H2 "Specialties", all specialty pills with GSAP stagger animation.
4. **About** — Gold line, H2 "About", bio split into 4-sentence paragraphs.
5. **Education Timeline** — Gold line, H2 "Education" (if education data exists). Vertical timeline with gradient line, circle markers, institution/degree/year.
6. **CTA** — Glass card with "Book an Appointment with {doctor.name}", magnetic CTA button.

**Data:** `doctors[]` from `@/lib/doctors`, matched by `slug` param.

**Animations:** GSAP ScrollTrigger for specialties stagger, timeline line draw, timeline items stagger, CTA fade-in.

---

---

> **⚠️ Booking page removed.** All `href="/booking"` links were replaced with `href="/contact"`. See [Contact Page](#cusersriswadesktoppaclientkingstly-websiteappcontactpage.tsx-contact-page) for the replacement CTA destination.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\contact\page.tsx` (Contact Page)

**Route:** `/contact`

**Serving as:** Primary CTA destination after booking page removal. All `Book Appointment` links across the site now point here.

**Sections:**
1. **Hero** — Image background (`/images/waitingarea.png`), gradient overlay (`bg-brand-primary/70`), gold line accent, title "Contact Us" (`.section-title`, `text-accent-italic` on "Contact").
2. **Contact Form** — Glass card with name, email, phone, message fields. Magnetic "Send Message" submit button (`MagneticButton as="button"`). Submit shows animated "Message Sent!" confirmation (with OK icon in `rounded-full` circle).
3. **Contact Info** — Glass card with:
   - **Phone** — Clickable `tel:+919976658340`, displayed at `text-2xl font-display font-bold text-brand-gold` with phone SVG icon in gold-tinted circle.
   - **Social Media** — Facebook and Instagram links with Framer Motion `whileHover={{ y: -4, scale: 1.05 }}`.
   - **Address** — Full address displayed: `"112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tambaram, Tamil Nadu 600045, India"`.
   - **Working Hours** — Mon–Thu: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM; Fri: 10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM; Sat: 06:00 PM - 09:00 PM; Sun: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM.
4. **Google Maps** — Live Google Maps iframe embed with real coordinates (`12.9252833, 80.1246316`) for the clinic address. Full-width `rounded-2xl overflow-hidden border border-brand-border`. No CSS filter (clean embed).
5. **Floating Call Button** — Fixed `bottom-6 right-6 z-40` round gold button (`w-14 h-14`, `rounded-full bg-brand-gold`) visible on **all screen sizes** (no `md:hidden`). Opens phone dialer via `tel:+919976658340`. Pulsing shadow animation via Framer Motion `animate` with repeating `boxShadow` keyframes. Phone SVG icon in `stroke-[#0a0e17]`.

---

## 4. Components

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\Navbar.tsx`

**Purpose:** Fixed sticky header with glassmorphism (`sticky-header` class: `backdrop-blur-xl`, `bg-white/88`).

**Features:**
- Rounded pill-shaped container (16px padding, `rounded-full`)
- Logo (clickable to home) with hover scale animation
- Desktop nav: 5 links (Home, Doctors, Services, About, Contact) with active state highlighting
- Desktop right side: phone number + magnetic gold "Contact Us" CTA (via `MagneticButton` wrapper, links to `/contact`)
- Mobile: hamburger button (animated to X via 3 independent `<span>` bars with `translate-y` + `rotate` transforms), full-screen overlay menu with staggered link animations (`AnimatePresence` + `motion.div` with `delay: 0.04 * index`), quick contact card with phone number + "Contact Us" CTA (via `MagneticButton`, links to `/contact`)
- Closes mobile menu on route change via `usePathname()`

**Nav links data:**
```ts
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
```

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\Footer.tsx`

**Purpose:** 3-column site footer with brand info, quick links, and clinic hours.

**Columns:**
1. **Brand** — Logo, clinic name, tagline, two CTAs (magnetic "Call Clinic" via `tel:`, "Contact Us" via `/contact` using `btn-outline`)
2. **Explore** — Quick links to 4 pages (Home (via logo), Doctors, Services, About, Contact) — Booking link removed. Facebook & Instagram social buttons.
3. **Clinic Hours** — 7-day schedule as flex rows with day/time alignment using `flex justify-between items-center w-full border-b border-gray-200 py-2`

**Hours data:**
```
Monday–Thursday: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM
Friday:          10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM
Saturday:        06:00 PM - 09:00 PM
Sunday:          10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM
```

**Copyright:** Dynamic year via `new Date().getFullYear()`

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\ServiceCard.tsx` (V2 Upgraded)

**Purpose:** Reusable service offering card with premium 3D tilt hover interaction.

**Props:**
```ts
interface ServiceCardProps {
  service: { id: number; title: string; icon: React.ReactNode; description: string; category: string };
  index: number;
}
```

**Rendering:**
- `<motion.article>` with 3D cursor-reactive tilt (max 6° via Framer Motion `rotateX/rotateY`)
- Custom cubic-bezier easing `[0.16, 1, 0.3, 1]` for premium deceleration feel
- SVG icon in brand-secondary rounded square
- Category label (uppercase, `tracking-[0.25em]`, muted)
- Service title (H3, Outfit font, black weight)
- Description paragraph
- "Explore treatment" CTA with `+` in circle that slides right on hover (`group-hover:translate-x-1`)
- Hover: `shadow-sm` → `shadow-2xl`
- Background: white with `shadow-sm`

**V2 Upgrades:** 3D tilt on mouse move, refined shadow transition, custom easing curve.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\DoctorCard.tsx` (V2 Rewrite)

**Purpose:** Reusable doctor profile card with layered premium hover interactions.

**Props:**
```ts
interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}
```

**Rendering:**
- `<motion.article>` with `ref` and `transformStyle: 'preserve-3d'`
- 3D cursor-reactive tilt (max 6°) via `onMouseMove`/`onMouseLeave`
- Custom cubic-bezier easing `[0.16, 1, 0.3, 1]`
- **Image:** Independent scale on hover (`whileHover: scale(1.08)`) for parallax depth illusion
- **Gradient overlay:** `from-black/70 via-black/10 to-transparent`, intensifies on hover (`opacity 70% → 90%`)
- **Specialty pills:** Hidden by default; slide up + fade in exclusively on hover (`translate-y-2 → translate-y-0`, `opacity-0 → opacity-100`)
- **Circular arrow CTA:** Scales in from 0 on hover at top-right, arrow rotates from -45° → 0°
- Doctor name (white text over gradient), title/role
- Hover: `shadow-sm` → `shadow-2xl`

**V2 Upgrades (complete rewrite):** 3D tilt, independent image scale, hover-reveal specialty pills, circular arrow button, dark gradient overlay, premium easing.

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\VideoBackground.tsx`

**Purpose:** Full-size HTML5 video component with gradient fallback and loading state.

**Props:**
```ts
interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
  className?: string;
}
```

**Behavior:**
- Renders fallback dark gradient immediately (behind video)
- Video loads with `opacity` transition (0→1 on `canPlay`)
- On error: hides video element, shows only fallback gradient
- Overlay: `bg-gradient-to-b from-black/50 to-black/20` at `z-[1]`
- Uses `autoPlay`, `muted`, `loop`, `playsInline` for reliable autoplay

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\SmoothScrollProvider.tsx`

**Purpose:** Client-side smooth scroll using Lenis library.

**Behavior:**
- Initializes Lenis with `duration: 1.2`, smooth wheel scrolling
- Attaches to `requestAnimationFrame` loop
- Respects `prefers-reduced-motion` — skips initialization if user prefers reduced motion
- Listens for runtime media query changes and destroys/reattaches Lenis
- Proper cleanup on unmount

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\MagneticButton.tsx` (V2 New)

**Purpose:** Spring-physics magnetic button wrapper that attracts cursor on hover.

**Props:**
```ts
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
```

**Behavior:**
- Wraps any button/link element with a `motion.div`
- On mouse move: calculates cursor position relative to element center, translates toward cursor by 30% of offset
- Spring physics: `stiffness: 150, damping: 15, mass: 0.1` for premium tactile feel
- Returns to origin on mouse leave
- Used on all primary CTAs across the site (13 instances)

---

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\components\CustomCursor.tsx` (V2 New)

**Purpose:** Custom cursor follower providing premium tactile feedback.

**Behavior:**
- Spring-loaded circular cursor follower (`stiffness: 300, damping: 20, mass: 0.5`)
- Base size: 16px diameter; expands to 64px on hover over cards/buttons/links
- Displays "View" label when hovering over `<article>` elements (doctor/service cards)
- Auto-disables on touch devices via `window.matchMedia('(pointer: coarse)')`
- Rendered at `z-[999]` with `pointer-events: none`
- Warm accent (`brand-warm-accent`) border and background

---

## 5. Data Layer (lib)

### `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\lib\doctors.tsx`

**Central data file** — exports 7 data structures used across the application. Note: file renamed from `.ts` to `.tsx` to support JSX (inline SVG icons).

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

| # | Name | Slug | Title | Specialties |
|---|------|------|-------|-------------|
| 1 | Dr. C. Kingston | `dr-c-kingston` | Kingslyn Dental Care \| Expert Cosmetic Dentistry | Restorative, Root Canal, Aesthetic |
| 2 | Dr. Janlyn Kingston | `dr-janlyn-kingston` | Chief Dental Surgeon, BDS | Scaling, Extraction, Preventive, Aesthetic, Prosthetics |
| 3 | Dr. Anand Kasi | `dr-anand-kasi` | Pedodontist (Pediatric Dentist) | Pediatric Dentistry |
| 4 | Dr. Praveen | `dr-praveen` | Orthodontist | Braces & Orthodontic Services |
| 5 | Dr. Aravind V | `dr-aravind-v` | Periodontist | Gum Disease Treatment |
| 6 | Dr. Sethuraman | `dr-sethuraman` | Prosthodontist & Implantologist | Implants, Prosthodontics |
| 7 | Dr. R. Snega Latha | `dr-r-snega-latha` | General Dentist, BDS | Extraction, Preventive, Scaling |

#### 9 Services (with SVG Icons)

Each service has a custom inline SVG icon (24×24, stroke-based line art in dental shapes) replacing the original 2-letter text abbreviations.

| # | Title | Category | Doctors |
|---|-------|----------|---------|
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
`["All", "Cosmetic", "Orthodontics", "Pediatric", "Implants", "Periodontics", "General"]`

---

## 6. Public Assets

### Images (`public/images/`)
15 PNG images: doctor portraits (7), facility photos (7), logo (1)

### Videos (`public/videos/`)
8 MP4 video files for hero backgrounds and section backgrounds

---

## 7. Global Styles (globals.css)

**File:** `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\app\globals.css`

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
Multi-layered gradient with two radial spots (cyan and teal) over a linear gradient from `#F5FCFD` through `#EEFAFB` to `#F8FEFF`.

### Component Classes (`@layer components`)

| Class | Purpose | Key Styles |
|-------|---------|------------|
| `.page-shell` | Page wrapper | `relative overflow-hidden` |
| `.section-kicker` | Editorial section eyebrow | `inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold-dark`, `::before` 24px horizontal rule |
| `.section-title` | H2 section heading | `font-display text-[clamp(2.6rem,7vw,6.5rem)] font-black tracking-[-0.02em] leading-[0.98] text-brand-light` |
| `.section-subtitle` | Section description | `max-w-xl text-[15px] leading-8 md:text-lg text-brand-muted/80 font-medium` |
| `.text-accent-italic` | Editorial emphasis (V2) | `italic font-light text-brand-warm-accent` |
| `.text-hero` | Hero H1 | `font-size: clamp(3.6rem, 10vw, 8rem); line-height: 0.95` |
| `.text-hero-sub` | Hero subtitle | `font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.75` |
| `.surface-card` / `.glass-card` | Card container | `rounded-[2rem] border shadow transition-all duration-500`, hover: `translateY(-4px)`, gold border |
| `.btn-gold` / `.btn-primary` | Primary button | `rounded-full bg-brand-gold px-7 py-3 font-extrabold white text`, hover: `translateY(-2px)` |
| `.btn-outline` / `.btn-secondary` | Outline button | `rounded-full border bg-white/80`, hover: gold border |
| `.pill` | Filter/tag pill | `rounded-full border bg-white px-4 py-2 text-xs font-bold` |
| `.pill-active` | Active filter | `border-brand-gold bg-brand-gold text-white` |
| `.gold-line` | Section divider | `h-1 w-20 rounded-full bg-brand-gold mb-6` |
| `.stat-number` | Stats value | `font-display text-[clamp(2.8rem,6vw,5rem)] font-black text-brand-gold` |
| `.video-overlay` | Video gradient overlay | Dark gradient for readability |
| `.orb` / `.orb-gold` / `.orb-teal` / `.orb-blue` | Decorative blobs | `border-radius: 9999px; filter: blur(70px)` |
| `.noise-overlay` | Subtle grain texture | Fixed SVG noise at `opacity: 0.018` |
| `.sticky-header` | Navbar scroll state | `backdrop-filter: blur(12px)` with semi-transparent background |
| `.horizontal-scroll` | Horizontal scroll container | Flexbox with scroll-snap, hidden scrollbar |

**V2 Changes:**
- `.section-kicker`: Removed pill shape (`bg-blue-50 rounded-full`), changed to editorial `::before` line + smaller `11px` text with loose `tracking-[0.25em]`
- `.section-title`: Increased size ceiling to `6.5rem`, added `tracking-[-0.02em]`, tighter `leading-[0.98]`
- `.section-subtitle`: Reduced max-width to `max-w-xl`, lighter `font-medium` weight, `text-brand-muted/80`
- New `.text-accent-italic` class for editorial emphasis words using `text-brand-warm-accent`

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Tailwind Theme

**File:** `C:\Users\riswa\Desktop\AAA\client\Kingstly-website\tailwind.config.ts`

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | `#F5FCFD` | Page background |
| `brand-secondary` | `#E8F7F9` | Icon/button backgrounds |
| `brand-card` | `#FFFFFF` | Card surfaces |
| `brand-card-hover` | `#F0FBFC` | Card hover state |
| `brand-gold` | `#0891B2` | Primary accent (buttons, highlights) |
| `brand-gold-light` | `#22D3EE` | Lighter accent |
| `brand-gold-dark` | `#0E5F73` | Dark accent (text, hover states) |
| `brand-teal` | `#059669` | Secondary accent |
| `brand-muted` | `#5E7480` | Body/secondary text |
| `brand-light` | `#123B46` | Heading/primary text |
| `brand-border` | `rgba(8,145,178,0.16)` | Borders, dividers |
| `brand-warm-accent` | `#D4A574` | **V2:** Warm sand/gold for italic emphasis, checkmark, sparing use |

### Fonts
- **Sans:** `"Plus Jakarta Sans"`, `"Aptos"`, `system-ui`, `sans-serif`
- **Display:** `"Outfit"`, `"Plus Jakarta Sans"`, `system-ui`, `sans-serif`

### Custom Animations
| Key | Duration | Iteration |
|-----|----------|-----------|
| `float` | 6s | infinite |
| `pulse-slow` | 4s | infinite |
| `shimmer` | 2s | linear infinite |
| `bounce-slow` | 2.5s | infinite |
| `spin-slow` | 8s | linear infinite |
| `glow-pulse` | 3s | infinite |

### Custom Breakpoints
- `xs`: 400px
- `3xl`: 1920px

---

## 9. Animation System

### Framer Motion (Per-Component)
- **Homepage:** `fadeUp` variants (opacity + translateY), staggered on hero content, `whileInView` on stats/services/facilities
- **Services accordion:** `AnimatePresence` with height 0→auto transitions
- **Doctors filter:** `AnimatePresence` with `popLayout` + scale transitions
- **Navbar mobile:** Slide-down overlay with staggered children
- **Doctor/Service cards:** 3D tilt via `rotateX/rotateY` bound to cursor position; `whileInView` fade-up; premium easing `[0.16, 1, 0.3, 1]`
- **Magnetic buttons:** Spring physics (`stiffness: 150, damping: 15, mass: 0.1`) for cursor attraction
- **Custom cursor:** `useSpring` (`stiffness: 300, damping: 20`) with smooth lag-follow; scale transitions on hover targets

### GSAP (Scroll-Triggered)
- **Homepage hero:** Parallax — video `yPercent: 20`, headline `yPercent: -40 + opacity: 0.3`
- **Homepage stats:** Number count-up from 0 to target value with suffix handling (`+`, `%`)
- **About page:** Parallax hero image, facility items stagger, why-choose cards stagger
- **Doctor profile:** Specialties stagger, timeline line draw, timeline items stagger, CTA fade-in
- **Doctors listing:** Header text stagger, filter pills stagger
- **Services page:** Accordion items stagger
- **Booking success (deprecated):** Circle checkmark stroke-dashoffset animation (booking page removed)

### Lenis (Smooth Scroll)
- Global smooth scrolling with `duration: 1.2`
- Respects `prefers-reduced-motion` with runtime monitoring

### Tailwind Hover Effects (V2 Updated)
- **Doctor cards:** 3D cursor tilt (6° max) + image scale (1.08) + specialty pills slide-up + arrow CTA scale-in
- **Service cards:** 3D cursor tilt (6° max)
- **CTA buttons (`+`):** `group-hover:translate-x-1 transition-transform duration-300`
- **Images:** `group-hover:scale-[1.04]` (doctor cards), `group-hover:scale-110` (facility grid)
- **Buttons:** Magnetic spring attraction via `MagneticButton` wrapper; `hover:translateY(-2px)` via CSS

---

## 10. Content Inventory

### Text Content by Page

#### Homepage
- **Kickers:** "Kingslyn Dental Care", "Expert team", "Treatment lines", "Clinic environment", "Patient words", "Appointments"
- **H1:** "Your Smile, Our Priority"
- **H2s (V2 editorial rewrite):** "Seven specialists. One standard of care.", "Every treatment, under one roof.", "Built on sterilization. Designed for calm.", "What patients notice first — and remember longest.", "Your next appointment starts here."
- **Stats:** 7 Specialist doctors, 17+ Years of clinical leadership, 9 Core dental service lines, 100% Sterilization-first protocols
- **Testimonials:** Priya S., Rajesh M., Lakshmi V.

#### About Page
- **H1:** "About Kingslyn Dental Care"
- **H2s:** "Our Story", "Our Facilities", "Why Choose Us"
- **Story:** Founded 2007 by Dr. C. Kingston, 17 years of growth to 7 specialists
- **Why Choose Us:** Sterilization Standards, Affordable Care, Experienced Team, Modern Technology

#### Services Page
- **H1:** "Our Services"
- **Service titles:** Cosmetic Dentistry, Root Canal Therapy, Orthodontics (Braces), Pediatric Dentistry, Periodontics (Gum Treatment), Dental Implants, Prosthodontics, Preventive Care & Scaling, Tooth Extraction

#### Doctors Pages
- **Listing H1:** "Our Expert Team"
- **7 Doctor profiles** with specialties, education, experience, bios
- **Filter categories:** All, Cosmetic, Orthodontics, Pediatric, Implants, Periodontics, General

#### Contact Page
- **H1:** "Contact Us" (`text-accent-italic` on "Contact")
- **H2s:** "Send us a Message" (`text-accent-italic` on "Message"), "Get in Touch" (`text-accent-italic` on "Touch")
- **Contact info:** Phone (`+91 99766 58340`), Facebook, Instagram, Address (`112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India`), Working Hours
- **Google Maps:** Live embed at `12.9252833, 80.1246316`
- **Floating call button:** Always visible, auto-dials on click

### Social Media
- Facebook: `https://www.facebook.com/share/1HJcck1h3L/`
- Instagram: `https://www.instagram.com/kingstonchellapandian`

### Phone
- `+91 99766 58340`

---

## 11. V2 Premium UI/UX Upgrade

The following upgrades were applied in the V2 pass to eliminate the "AI-generated" generic feel and add premium, tactile, high-end motion quality:

| Task | File(s) | What Changed |
|------|---------|--------------|
| **1. Typography System** | `app/globals.css`, all page files | Editorial section kickers (`::before` rule, `11px`, `tracking-[0.25em]`), larger titles (`6.5rem` cap, `-0.02em` tracking, `0.98` leading), lighter subtitles, `.text-accent-italic` utility with warm accent for single-word emphasis in every H2/H1 |
| **2. Doctor/Service Card Hover** | `components/DoctorCard.tsx`, `components/ServiceCard.tsx` | Complete rewrite: 3D cursor tilt (6° max), independent image scale, hover-reveal specialty pills, circular arrow CTA, premium cubic-bezier easing `[0.16, 1, 0.3, 1]` |
| **3. Magnetic Buttons** | `components/MagneticButton.tsx`, 9 page files | New spring-physics button wrapper; applied to all 13 `btn-gold` instances across site |
| **4. Copy Rewrite** | `app/page.tsx` | All 5 homepage H2s rewritten with editorial rhythm variation (short fragments, varied cadence) |
| **5. Parallax Hero** | `app/page.tsx` | GSAP ScrollTrigger: video background at 0.5x scroll, headline at 1.2x scroll with opacity fade |
| **6. Stats Count-Up** | `app/page.tsx` | GSAP `textContent` animation from 0→target with suffix handling on scroll into view |
| **7. Custom Cursor** | `components/CustomCursor.tsx`, `app/layout.tsx` | Spring-loaded cursor follower (`stiffness: 300, damping: 20, mass: 0.5`); scales from 16px→64px on hover over cards/buttons/links; "View" label on `<article>` elements; disabled on touch via `(pointer: coarse)` |
| **8. Warm Accent Color** | `tailwind.config.ts`, `app/globals.css` | Added `brand-warm-accent: #D4A574`; applied to italic emphasis via `.text-accent-italic` |

---

## 12. Changelog

### V3 — Booking Removal & Contact Redirection
| Change | File(s) | Detail |
|--------|---------|--------|
| **Booking page deleted** | `app/booking/page.tsx` | Entire multi-step booking form removed. Route `/booking` no longer exists. |
| **All CTAs redirected to Contact** | `app/page.tsx` (2x), `components/Navbar.tsx` (2x), `components/Footer.tsx` (2x), `app/doctors/[slug]/page.tsx` (2x) | Every `href="/booking"` changed to `href="/contact"`. Button text updated from "Book Appointment" / "Book Visit" to "Contact Us". |
| **Footer quick links cleaned** | `components/Footer.tsx` | "Booking" entry removed from `QUICK_LINKS` array (now 4 links). |
| **Homepage CTA copy updated** | `app/page.tsx` | Section kicker changed from "Appointments" to "Get in touch". Body text updated to say "message us online" instead of "book online". |
| **Contact page — full address** | `app/page.tsx` | Address field updated to: `112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India`. |
| **Contact page — live Google Maps** | `app/contact/page.tsx` | Google Maps iframe `src` updated with real coordinates (`12.9252833, 80.1246316`), clean embed with no CSS filter. |
| **Contact page — floating call button** | `app/contact/page.tsx` | `md:hidden` class removed — button now visible on all screen sizes. Auto-dials `+91 99766 58340` on click. |

### V2 — Premium UI/UX Upgrade (see [Section 11](#11-v2-premium-uiux-upgrade))
Eight-task upgrade eliminating "AI-generated" generic feel: Typography, DoctorCard rewrite, Magnetic buttons, Copy rewrite, Parallax hero, Count-up stats, Custom cursor, Warm accent color.

### V1 — Initial Premium Upgrades
- Section-kicker pill badges
- H2 `tracking-tight` / `leading-snug` applied to 12 heading instances
- SVG icons replacing text abbreviations (9 services)
- Card hover effects (`bg-gray-50`, `shadow-xl`, `translate-y-1`)
- Footer clinic hours refactored to flex layout
- `group-hover` slide animation on CTA buttons

---

## 13. Build & Run Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

*Documentation generated from source code. Last updated: July 2026.*
