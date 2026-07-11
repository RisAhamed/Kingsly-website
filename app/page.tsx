'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DoctorCard from '@/components/DoctorCard';
import ServiceCard from '@/components/ServiceCard';
import VideoBackground from '@/components/VideoBackground';
import { clinicInfo, doctors, facilityImages, services } from '@/lib/doctors';

const stats = [
  { value: '7', label: 'Specialist doctors' },
  { value: '17+', label: 'Years of clinical leadership' },
  { value: '9', label: 'Core dental service lines' },
  { value: '100%', label: 'Sterilization-first protocols' },
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
  return (
    <div className="noise-overlay page-shell">
      <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden px-6 pb-16 pt-28">
        <VideoBackground src="/videos/hero-bg.mp4" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#063947]/90 via-[#063947]/62 to-[#063947]/20" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
            <motion.span variants={fadeUp} className="section-kicker !border-white/20 !bg-white/12 !text-white">
              Kingslyn Dental Care
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-hero font-display font-black tracking-normal text-white">
              Your Smile, Our Priority
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-hero-sub font-medium text-cyan-50/86">
              {clinicInfo.subTagline}. Specialist-led dentistry with precise treatment planning, strict sterilization,
              and calm patient care.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/booking" className="btn-gold !bg-white !text-brand-light hover:!bg-cyan-50">
                Book Appointment
              </Link>
              <Link href="/doctors" className="btn-outline !border-white/25 !bg-white/10 !text-white hover:!bg-white/18">
                Meet Our Doctors
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-[2.5rem] border border-white/18 bg-white/12 p-2 shadow-[0_34px_110px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/dentalchair.png"
                  alt="Modern treatment chair at Kingslyn Dental Care"
                  fill
                  priority
                  className="object-cover"
                  sizes="42vw"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] bg-white/92 p-5 text-brand-light shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-gold-dark">Sterile care model</p>
                  <p className="mt-2 text-xl font-black">Safe instruments. Clear plans. Comfortable visits.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              className="surface-card p-7"
            >
              <p className="stat-number">{stat.value}</p>
              <p className="mt-3 font-bold leading-6 text-brand-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-kicker">Expert team</span>
            <h2 className="section-title tracking-tight leading-snug">Meet the specialists behind every confident smile.</h2>
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
              <h2 className="section-title tracking-tight leading-snug">Complete dental care in one coordinated clinic.</h2>
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
              <h2 className="section-title tracking-tight leading-snug">Designed for hygiene, comfort, and confidence.</h2>
            </div>
            <Link href="/about" className="btn-outline md:mb-2">
              Step Inside
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {facilityImages.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.04, duration: 0.5 }}
                className={`surface-card p-2 ${index === 0 || index === 5 ? 'md:col-span-2' : ''}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-black text-brand-light">
                    {item.caption}
                  </div>
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
              <span className="section-kicker !border-white/15 !bg-white/10 !text-cyan-100">Patient words</span>
              <h2 className="font-display text-[clamp(2.3rem,5vw,4.6rem)] font-black tracking-tight leading-snug">
                Care that feels composed from arrival to follow-up.
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

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <VideoBackground src="/videos/cta-bg.mp4" overlay={false} />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 to-black/20" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="section-kicker">Appointments</span>
          <h2 className="section-title tracking-tight leading-snug">Ready for a healthier smile?</h2>
          <p className="section-subtitle mx-auto mt-5">
            Call the clinic or book online. The team will help match your concern with the right doctor.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/booking" className="btn-gold">
              Book Appointment
            </Link>
            <a href={clinicInfo.phoneLink} className="btn-outline">
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
