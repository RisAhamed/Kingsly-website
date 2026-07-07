'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-brand-border bg-white/88 px-4 shadow-[0_20px_70px_rgba(14,95,115,0.14)] backdrop-blur-xl md:h-[72px] md:px-5">
          <Link href="/" aria-label="Kingslyn Dental Care Home" className="flex items-center gap-3">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="block">
              <Image
                src="/images/logo.png"
                alt="Kingslyn Dental Care"
                width={152}
                height={48}
                priority
                className="h-10 w-auto md:h-12"
              />
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive(href)
                    ? 'bg-brand-secondary text-brand-gold-dark'
                    : 'text-brand-muted hover:bg-brand-card-hover hover:text-brand-light'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919976658340"
              className="rounded-full px-4 py-2 text-sm font-extrabold text-brand-gold-dark transition-colors hover:text-brand-teal"
            >
              +91 99766 58340
            </a>
            <Link href="/booking" className="btn-gold !min-h-11 !px-5 !py-2.5">
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-brand-secondary text-brand-light transition-colors hover:border-brand-gold/50 lg:hidden"
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
        </div>
      </header>

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
                  Quick appointment
                </p>
                <a href="tel:+919976658340" className="mt-3 block text-2xl font-black text-brand-light">
                  +91 99766 58340
                </a>
                <Link href="/booking" className="btn-gold mt-5 w-full">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
