'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { doctors } from '@/lib/doctors'

function splitBioIntoParagraphs(bio: string): string[] {
  const sentences = bio.split(/(?<=\.)\s+/)
  const paragraphs: string[] = []
  for (let i = 0; i < sentences.length; i += 4) {
    paragraphs.push(sentences.slice(i, i + 4).join(' '))
  }
  return paragraphs
}

export default function DoctorProfilePage() {
  const params = useParams()
  const slug = params?.slug as string
  const doctor = doctors.find(d => d.slug === slug)
  const specialtiesRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!doctor) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    // Specialties stagger
    if (specialtiesRef.current) {
      const pills = specialtiesRef.current.querySelectorAll('.spec-pill')
      gsap.from(pills, {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: specialtiesRef.current, start: 'top 85%' },
      })
    }

    // Education timeline line draw
    if (timelineLineRef.current && timelineRef.current) {
      gsap.from(timelineLineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
      })
      const items = timelineRef.current.querySelectorAll('.timeline-item')
      gsap.from(items, {
        x: 30, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
      })
    }

    // CTA fade in
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' },
      })
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [doctor])

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-display font-bold mb-4">Doctor Not Found</h1>
        <p className="text-brand-muted mb-8">The doctor profile you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/doctors" className="btn-gold">View All Doctors</Link>
      </div>
    )
  }

  const paragraphs = splitBioIntoParagraphs(doctor.bio)

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="text-sm text-brand-muted flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/doctors" className="hover:text-brand-gold transition-colors">Doctors</Link>
          <span>/</span>
          <span className="text-brand-light">{doctor.name}</span>
        </nav>
      </div>

      {/* Hero Split */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            className="flex-1"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight leading-snug">{doctor.name}</h1>
            <p className="text-xl text-brand-gold mb-6">{doctor.title}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {doctor.specialties.map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
            {doctor.languages && (
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-muted text-sm">Languages:</span>
                <div className="flex gap-2">
                  {doctor.languages.map((l, i) => (
                    <span key={i} className="text-sm text-brand-light bg-brand-card px-3 py-1 rounded-full">{l}</span>
                  ))}
                </div>
              </div>
            )}
            {doctor.experience && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-brand-muted text-sm">Experience:</span>
                <span className="text-sm text-brand-gold font-medium">{doctor.experience}</span>
              </div>
            )}
            <Link href="/booking" className="btn-gold inline-block">
              Book Appointment
            </Link>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="w-full md:w-[40%] flex-shrink-0"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glow-gold">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section ref={specialtiesRef} className="max-w-4xl mx-auto px-6 mb-16">
        <div className="gold-line" />
        <h2 className="text-2xl font-display font-bold mb-6 tracking-tight leading-snug">Specialties</h2>
        <div className="flex flex-wrap gap-3">
          {doctor.specialties.map((s, i) => (
            <span key={i} className="spec-pill pill text-base px-5 py-2">{s}</span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="gold-line" />
        <h2 className="text-2xl font-display font-bold mb-6 tracking-tight leading-snug">About</h2>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-brand-light/80">{p}</p>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      {doctor.education && doctor.education.length > 0 && (
        <section ref={timelineRef} className="max-w-4xl mx-auto px-6 mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-display font-bold mb-8 tracking-tight leading-snug">Education</h2>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div
              ref={timelineLineRef}
              className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-gold to-brand-gold-light"
            />
            <div className="space-y-8">
              {doctor.education.map((edu, i) => (
                <div key={i} className="timeline-item relative flex items-start gap-4">
                  {/* Circle marker */}
                  <div className="absolute -left-8 top-1.5 w-[10px] h-[10px] rounded-full bg-brand-gold border-2 border-brand-primary" />
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                    <p className="text-brand-muted">{edu.degree}</p>
                    {edu.year && <p className="text-brand-gold text-sm font-medium mt-1">{edu.year}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section ref={ctaRef} className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="glass-card p-12 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight leading-snug">
            Book an Appointment with {doctor.name}
          </h2>
          <p className="text-brand-muted mb-8">
            Experience personalized dental care from one of the best specialists in Tamil Nadu
          </p>
          <Link href="/booking" className="btn-gold text-lg px-10 py-4">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
