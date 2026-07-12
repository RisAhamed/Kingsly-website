'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DoctorCard from '@/components/DoctorCard';
import ServiceCard from '@/components/ServiceCard';
import VideoBackground from '@/components/VideoBackground';
import MagneticButton from '@/components/MagneticButton';
import { clinicInfo, doctors, facilityImages, services } from '@/lib/doctors';

const stats = [
  { value: '7', label: 'Specialist Doctors' },
  { value: '17+', label: 'Years Experience' },
  { value: '9', label: 'Core Treatments' },
  { value: '100%', label: 'Sterilized Care' },
];

const testimonials = [
  {
    name: 'Priya S.',
    quote: 'The clinic felt calm, spotless, and organized. Dr. Kingston explained every step clearly.',
  },
  {
    name: 'Rajesh M.',
    quote: 'My child was nervous before the visit. The pediatric care team made the appointment easy.',
  },
  {
    name: 'Lakshmi V.',
    quote: 'The orthodontic planning was precise and the team was patient through the full process.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set('.hero-headline', { opacity: 1, y: 0 });

    gsap.to('.hero-video-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-headline', {
      yPercent: -30,
      opacity: 0.55,
      ease: 'none',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-dot-grid', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'center top', scrub: true },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    document.querySelectorAll('.stat-number').forEach((el) => {
      const raw = el.textContent || '0';
      const num = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      const suffix = raw.replace(/[0-9]/g, '');
      if (isNaN(num) || num === 0) return;
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: num,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: () => {
            const current = parseInt(el.textContent || '0', 10);
            el.textContent = current + suffix;
          },
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });
  }, []);

  return (
    <div className="noise-overlay page-shell">
      <section className="hero-section relative isolate flex min-h-[100dvh] items-center overflow-hidden px-6 pb-16 pt-28">
        <div className="hero-video-bg absolute inset-0">
          <VideoBackground src="/videos/hero-bg.mp4" />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#02141a]/75 via-[#02141a]/55 to-[#02141a]/35" />
        <div className="dot-grid-bg absolute inset-0 z-[3] hero-dot-grid" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }} className="flex flex-col items-center">
            <motion.span variants={fadeUp} className="section-kicker !text-white/80">
              Kingslyn Dental Care
            </motion.span>
            <h1 className="hero-headline hero-text-shield text-hero font-display font-black tracking-normal text-white">
              Your Smile, Our Priority
            </h1>
            <p className="hero-text-shield mt-6 max-w-2xl text-hero-sub font-medium text-white">
              {clinicInfo.subTagline}. Specialist-led dentistry with precise treatment planning, strict sterilization,
              and calm patient care.
            </p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row justify-center">
              <MagneticButton>
                <Link href="/contact" className="btn-gold !bg-white !text-brand-light hover:!bg-cyan-50">
                  Contact Us
                </Link>
              </MagneticButton>
              <Link href="/doctors" className="btn-outline !border-white/25 !bg-white/10 !text-white hover:!bg-white/18">
                Meet Our Doctors
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              className="flex flex-col items-start gap-2 p-6 rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-sm border border-brand-border"
            >
              <span className="stat-number font-display text-[clamp(2.8rem,6vw,5rem)] font-black text-brand-gold leading-none">
                {stat.value}
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-brand-muted leading-tight max-w-[140px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="px-6 py-20 md:py-28 relative overflow-hidden bg-brand-gold/5 border-y border-brand-gold/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <motion.div 
              className="w-full lg:w-5/12 flex-shrink-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 glow-gold">
                <Image
                  src="/images/Dr. C. Kingston.png"
                  alt="Dr. C. Kingston, Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02141a]/90 via-[#02141a]/60 to-transparent p-8 pt-24 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-gold">Founder & Chief Dental Surgeon</p>
                  <p className="mt-2 text-2xl font-display font-bold">Dr. C. Kingston</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="w-full lg:w-7/12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg
                width="48" height="48" viewBox="0 0 24 24" fill="currentColor"
                className="text-brand-gold/30 mb-8"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium italic text-brand-light leading-snug lg:leading-tight mb-8">
                &quot;Excellence in dentistry is not just about treating teeth; it&apos;s about restoring confidence and changing lives with compassion and precision.&quot;
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-lg text-brand-muted leading-relaxed mb-8">
                With over two decades of expertise spanning general dentistry and elite endodontics, Dr. Kingston founded Kingslyn Dental Care with a singular vision: to deliver world-class, painless treatments in an absolutely sterile environment. His visionary leadership sets the standard for every specialist in our clinic.
              </p>
              <MagneticButton>
                <Link href="/doctors/dr-c-kingston" className="btn-outline">
                  Read Full Profile
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-kicker">Expert team</span>
            <h2 className="section-title">Seven specialists. <span className="text-accent-italic">One</span> standard of care.</h2>
            <p className="section-subtitle mt-5">
              Cosmetic dentistry, root canals, orthodontics, pediatric care, implants, prosthodontics, and preventive
              dentistry are handled by focused clinicians.
            </p>
          </div>
          <div className="horizontal-scroll -mx-6 px-6 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:px-0">
            {doctors.slice(0, 6).map((doctor, index) => (
              <div key={doctor.slug} className="w-[310px] lg:w-auto">
                <DoctorCard doctor={doctor} index={index} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/doctors" className="btn-outline">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="orb orb-blue left-[-10rem] top-10 h-[28rem] w-[28rem]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="section-kicker">Treatment lines</span>
              <h2 className="section-title">Every treatment, under <span className="text-accent-italic">one</span> roof.</h2>
            </div>
            <p className="section-subtitle lg:justify-self-end">
              From routine scaling to complex implant restorations, services are organized around clarity,
              comfort, and the right specialist for each case.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-kicker">Clinic environment</span>
              <h2 className="section-title">Built on <span className="text-accent-italic">sterilization</span>. Designed for calm.</h2>
            </div>
            <Link href="/about" className="btn-outline md:mb-2">
              Step Inside
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilityImages.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-brand-light p-6 text-white shadow-[0_34px_110px_rgba(14,95,115,0.18)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="section-kicker !text-cyan-100/80">Patient words</span>
              <h2 className="font-display text-[clamp(2.3rem,5vw,4.6rem)] font-black tracking-[-0.02em] leading-[0.98]">
                What patients notice <span className="text-accent-italic">first</span> — and remember longest.
              </h2>
            </div>
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6">
                  <p className="leading-7 text-cyan-50/82">“{testimonial.quote}”</p>
                  <p className="mt-4 font-black text-white">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-light px-6 py-20 md:py-28 text-white">
        <div className="absolute inset-0 opacity-45">
          <VideoBackground src="/videos/cta-bg.mp4" overlay={true} />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="section-kicker !text-cyan-100/80">Get in touch</span>
          <h2 className="section-title text-white hero-text-shield">Your next appointment <span className="text-accent-italic">starts here</span>.</h2>
          <p className="section-subtitle mx-auto mt-5 !text-white/80 hero-text-shield">
            Call the clinic or message us online. The team will help match your concern with the right doctor.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Link href="/contact" className="btn-gold">
                Contact Us
              </Link>
            </MagneticButton>
            <a href={clinicInfo.phoneLink} className="btn-outline !border-white/25 !bg-white/10 !text-white hover:!bg-white/18">
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
