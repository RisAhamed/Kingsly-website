'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { doctors, filterCategories } from '@/lib/doctors';
import DoctorCard from '@/components/DoctorCard';
import VideoBackground from '@/components/VideoBackground';

const pillStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};
const pillItem = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  /* ── GSAP fade-in for header ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-header-anim]', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* Filter pills now use Framer Motion staggerChildren (see JSX below) */

  /* ── Filter logic ── */
  const filteredDoctors =
    activeFilter === 'All'
      ? doctors
      : doctors.filter((d) => d.filterTags.includes(activeFilter));

  return (
    <>
      {/* ════════════════════════ HERO HEADER ════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <VideoBackground src="/videos/doctors-listing-bg.mp4" />

        <div
          ref={headerRef}
          className="relative z-10 text-center px-6 py-28 max-w-3xl mx-auto"
        >
          <h1 data-header-anim className="section-title hero-text-shield text-white">
            Our <span className="text-accent-italic">Expert</span> Team
          </h1>
          <p
            data-header-anim
            className="section-subtitle hero-text-shield mx-auto mt-4 !text-white/80"
          >
            World-class dental specialists dedicated to crafting your perfect
            smile with precision, compassion, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* ════════════════════════ FILTERS + GRID ════════════════════════ */}
      <section className="relative bg-brand-primary py-16 px-6 md:px-12 lg:px-20">
        {/* Subtle top gradient bleed */}
        <div
          className="absolute inset-x-0 -top-24 h-24 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, var(--color-primary) 0%, transparent 100%)',
          }}
        />

        {/* Filter pills */}
        <motion.div
          ref={pillsRef}
          variants={pillStagger}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-3 mb-14 max-w-4xl mx-auto"
        >
          {filterCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={pillItem}
              onClick={() => setActiveFilter(cat)}
              className={`pill cursor-pointer transition-all duration-300 ${
                activeFilter === cat ? 'pill-active' : ''
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Doctors grid */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredDoctors.map((doctor, i) => (
                <motion.div
                  key={doctor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.08,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.25 },
                  }}
                >
                  <DoctorCard doctor={doctor} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredDoctors.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-brand-muted text-lg mt-12"
            >
              No doctors found for this specialty. Try a different filter.
            </motion.p>
          )}
        </div>

        {/* Decorative bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)',
          }}
        />
      </section>
    </>
  );
}
