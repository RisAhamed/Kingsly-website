'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import MagneticButton from '@/components/MagneticButton'
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
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!doctor) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

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
        <MagneticButton>
          <Link href="/doctors" className="btn-gold">View All Doctors</Link>
        </MagneticButton>
      </div>
    )
  }

  const paragraphs = splitBioIntoParagraphs(doctor.bio)
  const summary = paragraphs[0]
  const remainingParagraphs = paragraphs.slice(1)

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-[-0.02em] leading-[0.98]">{doctor.name}</h1>
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
            <MagneticButton>
              <Link href="/contact" className="btn-gold inline-block">
                Contact Us
              </Link>
            </MagneticButton>
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

      {/* Summary Text (Between Hero and About) */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-light/90 text-center md:text-left">
          {summary}
        </p>
      </section>

      {/* Quote Section */}
      {doctor.quote && (
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <motion.div 
            className="glass-card p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center shadow-lg border border-brand-gold/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none" />
            
            <svg
              width="64" height="64" viewBox="0 0 24 24" fill="currentColor"
              className="text-brand-gold/20 mx-auto mb-6 relative z-10"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium italic text-brand-light leading-snug md:leading-snug relative z-10">
              &quot;{doctor.quote}&quot;
            </h3>
          </motion.div>
        </section>
      )}

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="gold-line" />
        <h2 className="text-2xl font-display font-bold mb-6 tracking-[-0.02em] leading-[0.98]"><span className="text-accent-italic">About</span></h2>
        <div className="space-y-5">
          {remainingParagraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-brand-light/80">{p}</p>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      {doctor.education && doctor.education.length > 0 && (
        <section ref={timelineRef} className="max-w-4xl mx-auto px-6 mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-display font-bold mb-8 tracking-[-0.02em] leading-[0.98]"><span className="text-accent-italic">Education</span></h2>
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
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-[-0.02em] leading-[0.98]">
            Book an <span className="text-accent-italic">Appointment</span> with {doctor.name}
          </h2>
          <p className="text-brand-muted mb-8">
            Experience personalized dental care from one of the best specialists in Tamil Nadu
          </p>
          <MagneticButton>
            <Link href="/contact" className="btn-gold text-lg px-10 py-4">
              Contact Us
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
