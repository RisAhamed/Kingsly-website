# Kingslyn Dental Care — AGENTS.md

## Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS 3
- Framer Motion (UI transitions, 3D card tilt, magnetic buttons, cursor)
- GSAP + ScrollTrigger (scroll-triggered parallax, count-up animation)
- Lenis (global smooth scroll, duration: 1.2)
- No test framework — `npm run build` is the sole verification command

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build (run to verify all changes) |
| `npm run lint` | ESLint check |
| `npm start` | Start production server |

Always run `npm run build` after changes. It catches type errors, compilation failures, and missing pages.

## Project Layout
- `app/` — Next.js pages (Home `/`, About, Contact, Doctors listing, Doctor profile `[slug]`, Services)
- `components/` — Reusable UI: Navbar, Footer, DoctorCard, ServiceCard, MagneticButton, CustomCursor, VideoBackground, SmoothScrollProvider
- `lib/doctors.tsx` — **Single data file** exporting doctors[], services[], clinicInfo, facilityImages, filterCategories
- `app/globals.css` — All custom component classes (`.section-kicker`, `.section-title`, `.section-subtitle`, `.text-accent-italic`, `.btn-gold`, `.btn-outline`, `.glass-card`, `.hero-text-shield`, `.stat-number`, etc.)

## Key Conventions
- **Path alias**: `@/*` maps to project root (e.g. `@/components/DoctorCard`)
- **Data**: Never duplicate data. `lib/doctors.tsx` is the single source of truth. File is `.tsx` (not `.ts`) because it contains inline SVG icons as JSX.
- **Premium easing**: `[0.16, 1, 0.3, 1]` used on all card animations and entrances
- **Spring physics** for magnetic buttons: `stiffness: 150, damping: 15, mass: 0.1`
- **Cursor spring**: `stiffness: 300, damping: 20, mass: 0.5` — auto-disabled on touch via `(pointer: coarse)`

## Component Patterns
- **MagneticButton**: Wrap all CTAs (`btn-gold`, `btn-outline`). Uses `motion.div` with spring physics. 13 instances across site.
- **DoctorCard / ServiceCard**: 3D cursor tilt (6° max) via `rotateX`/`rotateY` on `onMouseMove`. Both use `whileInView` fade-up entry.
- **VideoBackground**: Auto-play muted loop video with gradient fallback on error. `overlay` prop adds dark gradient.
- **CustomCursor**: Spring-loaded follower. Renders at `z-[999]`, `pointer-events: none`. Expands over `<article>`, buttons, links. Shows "View" label on cards.

## Navbar
Two visual states controlled by `window.scrollY > 80`:
- **Default** (over video): `bg-white/10 backdrop-blur-sm`, white text, logo inverted via `brightness-0 invert`
- **Scrolled**: `bg-white/90 backdrop-blur-xl`, dark text, normal logo

## Design System
- **Colors**: `brand-gold: #0891B2` (primary accent), `brand-warm-accent: #D4A574` (sparing use — italic words only)
- **Fonts**: Outfit (display), Plus Jakarta Sans (body)
- **Body bg**: Multi-layered gradient (cyan radial + teal radial + linear)
- **Body text**: `text-brand-muted` (`#5E7480`), headings: `text-brand-light` (`#123B46`)
- **Cards**: `.glass-card` / `.surface-card` — white/82 bg, `rounded-[2rem]`, gold border on hover, -4px lift

## Routing
- `/` — Homepage (hero parallax + stats count-up + doctor/service cards + testimonials + CTA)
- `/about` — About page (video hero + story + facilities grid + why-choose-us)
- `/contact` — Contact form (borderless underlined inputs on video bg) + info + live Google Maps
- `/doctors` — Doctor listing with filter pills
- `/doctors/[slug]` — Dynamic doctor profile (specialties, education timeline, CTA)
- `/services` — Services accordion
- **No `/booking` route** — all CTAs go to `/contact`

## Assets
- Images: `public/images/` (15 PNGs: 7 doctors + 7 facilities + 1 logo)
- Videos: `public/videos/` (9 MP4s: hero, about, contact, services, doctors, cta, testimonials)
- `images/` at root is unprocessed source — always reference from `public/images/`

## Animation Inventory
| Library | Used For |
|---------|----------|
| Framer Motion | Page entries, card tilt, magnetic buttons, cursor, accordion, filter popLayout, mobile menu, floating call button pulse |
| GSAP | Hero parallax (video: `yPercent:20`, headline: `yPercent:-40` + `opacity:0.65`), stats count-up, About stagger, Doctor profile stagger/timeline |
| Lenis | Global smooth scroll wrapper |
| Tailwind | `group-hover:scale-110`, `group-hover:translate-x-1`, `hover:translateY(-2px)` |

## Gotchas
- `prefers-reduced-motion` is respected by Lenis (dynamic destroy/reattach), GSAP, and global CSS
- Contact page video (`contact page.mp4`) exists in `public/videos/`
- Facility images on homepage use `aspect-[3/4]` containers with `object-cover` to prevent white space
- Stats bar uses `max-w-[140px]` on labels for controlled text wrap
