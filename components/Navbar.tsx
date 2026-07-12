'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(6,57,71,0.35)',
            borderColor: scrolled ? 'rgba(8,145,178,0.16)' : 'rgba(255,255,255,0.25)',
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-full backdrop-blur-xl border px-4 md:px-5 py-3 flex items-center justify-between ${
            scrolled ? 'shadow-lg' : 'shadow-none'
          }`}
        >
          <Link href="/" aria-label="Kingslyn Dental Care Home" className="flex items-center gap-3">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="block">
              <span className={`text-lg md:text-xl font-black tracking-tight transition-all duration-500 ${
                scrolled ? 'text-brand-light' : 'text-white'
              }`}>
                Kingslyn Dental Care
              </span>
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive(href)
                    ? scrolled
                      ? 'bg-brand-secondary text-brand-gold-dark'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-brand-muted hover:bg-brand-card-hover hover:text-brand-light'
                      : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919976658340"
              className={`rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-300 hover:text-brand-teal ${
                scrolled ? 'text-brand-gold-dark' : 'text-white'
              }`}
            >
              +91 99766 58340
            </a>
            <MagneticButton>
              <Link href="/contact" className={`btn-gold !min-h-11 !px-5 !py-2.5 ${
                scrolled ? '' : '!bg-white !text-brand-light hover:!bg-cyan-50'
              }`}>
                Contact Us
              </Link>
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              scrolled
                ? 'border-brand-border bg-brand-secondary text-brand-light'
                : 'border-white/30 bg-white/15 text-white'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 bg-brand-primary/96 px-5 pt-28 lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-3">
              {NAV_LINKS.map(({ label, href }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <Link
                    href={href}
                    className={`flex min-h-14 items-center justify-between rounded-2xl border px-5 text-xl font-black ${
                      isActive(href)
                        ? 'border-brand-gold bg-brand-secondary text-brand-gold-dark'
                        : 'border-brand-border bg-white text-brand-light'
                    }`}
                  >
                    {label}
                    <span className="text-brand-gold">+</span>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 rounded-[2rem] border border-brand-border bg-white p-5 shadow-[0_24px_70px_rgba(14,95,115,0.12)]">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-muted">
                  Contact us
                </p>
                <a href="tel:+919976658340" className="mt-3 block text-2xl font-black text-brand-light transition-all duration-300 hover:text-brand-gold">
                  +91 99766 58340
                </a>
                <MagneticButton>
                  <Link href="/contact" className="btn-gold mt-5 w-full">
                    Contact Us
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}