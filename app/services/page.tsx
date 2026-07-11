'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import VideoBackground from '@/components/VideoBackground'
import MagneticButton from '@/components/MagneticButton'
import { services, doctors } from '@/lib/doctors'

function getDoctorName(slug: string): string {
  const doc = doctors.find(d => d.slug === slug)
  return doc ? doc.name : slug
}

const accordionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <VideoBackground src="/videos/services-hero-bg.mp4" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mx-auto" />
            <h1 className="section-title hero-text-shield text-white">Our <span className="text-accent-italic">Services</span></h1>
            <p className="section-subtitle hero-text-shield mx-auto mt-4 !text-white/80">Comprehensive dental care for every need</p>
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={accordionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="service-accordion-item glass-card rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl bg-brand-gold/10 flex-shrink-0">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-display font-bold">{service.title}</h3>
                </div>
                <motion.svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="text-brand-gold flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="border-t border-brand-border pt-6">
                        <p className="text-brand-muted leading-relaxed mb-6">{service.description}</p>
                        <div>
                          <span className="text-sm text-brand-muted">Handled by: </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {service.doctors.map((slug) => (
                              <Link
                                key={slug}
                                href={`/doctors/${slug}`}
                                className="pill hover:bg-brand-gold/20 transition-colors"
                              >
                                {getDoctorName(slug)}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center px-6 pb-20">
        <p className="text-brand-muted mb-6">Can&apos;t find what you&apos;re looking for?</p>
        <MagneticButton>
          <Link href="/contact" className="btn-gold">Contact Us</Link>
        </MagneticButton>
      </section>
    </>
  )
}
