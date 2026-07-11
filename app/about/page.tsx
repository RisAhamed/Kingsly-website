'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { facilityImages } from '@/lib/doctors'

const whyChooseUs = [
  {
    title: 'Sterilization Standards',
    description: 'Every instrument is properly sterilized using hospital-grade protocols, ensuring a safe and hygienic environment for all patients.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Affordable Care',
    description: 'Quality dental care should be accessible to all. We offer competitive pricing and flexible payment options for every treatment.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Experienced Team',
    description: '7 specialist doctors with over 17 years of combined experience in every major dental discipline, from endodontics to implantology.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art equipment including digital imaging, 3D treatment planning, and laser dentistry for precise, comfortable care.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  const heroImgRef = useRef<HTMLDivElement>(null)
  const facilitiesRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    gsap.registerPlugin(ScrollTrigger)

    // Parallax hero image
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImgRef.current.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Facilities grid stagger
    if (facilitiesRef.current) {
      const items = facilitiesRef.current.querySelectorAll('.facility-item')
      gsap.from(items, {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: facilitiesRef.current, start: 'top 80%' },
      })
    }

    // Why choose us stagger
    if (whyRef.current) {
      const cards = whyRef.current.querySelectorAll('.why-card')
      gsap.from(cards, {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: whyRef.current, start: 'top 80%' },
      })
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <>
      {/* Hero with parallax */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 -top-20 -bottom-20">
          <Image
            src="/images/clinicouterlook.png"
            alt="Kingslyn Dental Care Clinic"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-brand-primary/70" />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line mx-auto" />
          <h1 className="section-title text-5xl md:text-6xl">About Kingslyn Dental Care</h1>
          <p className="section-subtitle mx-auto mt-4">Where your smile is our priority since 2007</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="gold-line" />
        <h2 className="text-3xl font-display font-bold mb-8 tracking-tight leading-snug">Our Story</h2>
        <div className="space-y-6 text-lg leading-relaxed text-brand-light/80">
          <p>
            Founded in 2007 by Dr. C. Kingston, Kingslyn Dental Care was born from a simple yet powerful vision:
            to provide world-class dental care with an unwavering commitment to proper sterilization and patient safety.
            Having witnessed the gaps in dental hygiene standards across the region, Dr. Kingston set out to build a clinic
            that would set new benchmarks — where every instrument is meticulously sterilized and every patient is treated
            like family.
          </p>
          <p>
            Over 17 years later, that vision has grown into one of Tamil Nadu&apos;s most trusted dental practices. Today,
            Kingslyn Dental Care is home to a team of 7 specialist doctors, each a leader in their respective fields — from
            endodontics and orthodontics to pediatric dentistry, periodontics, prosthodontics, and implantology. Together,
            they bring decades of combined expertise and a shared passion for transforming smiles.
          </p>
          <p>
            What sets Kingslyn apart is not just clinical excellence, but the belief that quality dental care should be
            affordable and accessible to everyone. From routine check-ups to complex restorative procedures, the clinic
            is equipped with state-of-the-art technology — including digital imaging, 3D treatment planning, and laser
            dentistry — all within a warm, welcoming environment designed to put patients at ease.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto" />
          <h2 className="section-title tracking-tight leading-snug">Our Facilities</h2>
          <p className="section-subtitle mx-auto">Modern spaces designed for your comfort and care</p>
        </div>
        <div ref={facilitiesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityImages.map((img, i) => (
            <div key={i} className="facility-item relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto" />
          <h2 className="section-title tracking-tight leading-snug">Why Choose Us</h2>
          <p className="section-subtitle mx-auto">What makes Kingslyn Dental Care the right choice</p>
        </div>
        <div ref={whyRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="why-card glass-card p-8 rounded-2xl text-center group">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-3">{item.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
