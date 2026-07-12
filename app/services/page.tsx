'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import VideoBackground from '@/components/VideoBackground'
import MagneticButton from '@/components/MagneticButton'
import { services, doctors } from '@/lib/doctors'

function getDoctorName(slug: string): string {
  const doc = doctors.find(d => d.slug === slug)
  return doc ? doc.name : slug
}

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

function ImageSlider({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} Image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-brand-gold' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ServiceAccordionItem({ service, index }: { service: any, index: number }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      id={`service-${service.id}`}
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-3xl border border-brand-border bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center gap-5 p-6 md:p-8 cursor-pointer select-none">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${isActive ? 'bg-brand-gold text-white shadow-md' : 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold/20'}`}>
          {service.icon}
        </div>
        <h2 className={`text-2xl md:text-3xl font-display font-black transition-colors duration-500 ${isActive ? 'text-brand-gold-dark' : 'text-brand-light group-hover:text-brand-gold-dark'}`}>
          {service.title}
        </h2>
        <div className="ml-auto">
          <motion.div 
            animate={{ rotate: isActive ? 180 : 0 }} 
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-brand-gold/10 text-brand-gold' : 'bg-transparent text-brand-muted border border-brand-border'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 flex flex-col gap-6 pt-2 border-t border-brand-border">
                <p className="text-lg text-brand-muted leading-relaxed">
                  {service.description}
                </p>

                {service.doctors && service.doctors.length > 0 && (
                  <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark block mb-3">
                      Handled by Specialists
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.doctors.map((docSlug: string) => (
                        <Link
                          key={docSlug}
                          href={`/doctors/${docSlug}`}
                          className="bg-brand-primary/60 border border-brand-border px-4 py-2 rounded-full text-sm font-bold text-brand-light hover:bg-brand-gold hover:text-white transition-colors duration-300"
                        >
                          {getDoctorName(docSlug)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <MagneticButton>
                    <Link href="/contact" className="btn-outline !px-6 !py-2.5">
                      Book an Appointment
                    </Link>
                  </MagneticButton>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {service.images && service.images.length > 0 ? (
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-border/50">
                    <ImageSlider images={service.images} title={service.title} />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                    <span className="text-brand-gold opacity-50 scale-[3]">
                      {service.icon}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const idMatch = hash.match(/service-(\d+)/);
      if (idMatch) {
        const id = parseInt(idMatch[1], 10);
        setTimeout(() => {
          const el = document.getElementById(`service-${id}`);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, []);

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

      {/* Services Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-4">
        {services.map((service, index) => {
          return <ServiceAccordionItem key={service.id} service={service} index={index} />;
        })}
      </section>

      {/* Bottom CTA */}
      <section className="text-center px-6 pb-24">
        <div className="max-w-2xl mx-auto glass-card rounded-[2.5rem] p-12 shadow-xl border border-brand-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h3 className="text-3xl font-display font-bold text-brand-light mb-4 relative z-10">
            Ready for your transformation?
          </h3>
          <p className="text-brand-muted mb-8 relative z-10 text-lg">
            Let our specialists guide you to optimal dental wellness.
          </p>
          <MagneticButton>
            <Link href="/contact" className="btn-gold relative z-10">Contact Us</Link>
          </MagneticButton>
        </div>
      </section>
    </>
  )
}
