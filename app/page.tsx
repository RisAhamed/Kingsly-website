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
    name: 'Ellen Durai',
    quote: 'I had a fantastic experience at Kingslyn dental clinic. Dr. Kingslyn is highly professional, gentle, and thorough. The practice is spotless, and the staff are always so helpful and friendly. I\'m completely happier with my treatment and highly recommend them. The entire team was incredibly warm and put me at ease from the moment I walked in. The dentist explained every step, took their time, and my procedure was entirely painless. Highly recommended! They listened carefully to all my problems, addressed my concerns, and outlined a crystal-clear treatment plan. It is rare to find a clinician who is this thorough, empathetic, and knowledgeable. I feel completely confident in my care. Thank you to the team!',
  },
  {
    name: 'Veni J',
    quote: 'The doctors were amazing with their experience over there. Clearly explained and treated well. Sneha assisting me from the very first day and was very sweet with all her advices, suggestions and gestures. Thanks to the doctors and staff for the support and guidance.',
  },
  {
    name: 'Hyacinth _chicklets',
    quote: 'The doctor was very kind and he completed the treatment at very low cost. The other clinic had suggested an implant for my mother in law, but Dr. Kingston did an excellent conservative treatment and preserved the teeth without removing it.',
  },
  {
    name: 'Pavundoss M',
    quote: 'I had been postponing my dental treatment for quite some time due to a lack of confidence. Dr. Kingston was recommended to me by a relative who had a positive experience with his services. I approached him for a dental implant procedure. From the very beginning, Dr. Kingston clearly explained the entire process, including the estimated costs, the materials used for the implant and crown/denture, and the expected timeline. My treatment spanned over four months... Every visit was well-planned and communicated in advance, allowing me to manage my travel efficiently. Each session was productive, and I felt well taken care of throughout the process. By the end of the fourth month, my dental issues were completely resolved. I regained not only a healthy smile but also a renewed sense of confidence. I highly recommend Dr. Kingston.',
  },
  {
    name: 'Koteeswaran Kannan',
    quote: 'I\'m absolutely thrilled with the dental treatment my daughter received for her tooth alignment! Dr. Kingston and Dr. Praveen are incredibly professional, kind, and patient. The clinic was clean and welcoming. The treatment process was explained clearly, and the results are amazing. Dr. Praveen\'s warm smile and friendly approach made my child feel at ease. My daughter\'s confidence has soared, and she can\'t stop smiling! Highly recommend this dental care for anyone seeking orthodontic treatment.',
  },
  {
    name: 'Arnold Joseph',
    quote: 'Really had great experience with Kingston doctor, he is so calm and composed... I have done root canel treatment... Highly recommended doctor for dental related issues..',
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

      {/* Marquee Testimonials Section */}
      <section className="py-20 md:py-28 overflow-hidden bg-brand-primary">
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <span className="section-kicker">Patient stories</span>
          <h2 className="section-title">What patients notice <span className="text-accent-italic">first</span> — and remember longest.</h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient masks for smooth edge fading */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-primary to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-[max-content] animate-marquee gap-6 px-3">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[320px] md:w-[400px] flex-shrink-0 flex flex-col justify-between rounded-[2rem] bg-slate-900 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-slate-700/50 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:z-20 cursor-default hover:shadow-[0_25px_50px_rgba(8,145,178,0.15)] hover:border-brand-gold/30 group"
              >
                <div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-gold/50 mb-6 transition-colors group-hover:text-brand-gold">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed line-clamp-[8] group-hover:line-clamp-none transition-all duration-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white tracking-wide">{testimonial.name}</p>
                    {/* <p className="text-xs text-brand-gold uppercase tracking-widest font-bold">Verified Patient</p> */}
                  </div>
                </div>
              </div>
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
