'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import VideoBackground from '@/components/VideoBackground'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'

const treatments = [
  {
    title: 'Full Mouth Rehabilitation (All-on-4 / All-on-6 Implants)',
    layout: 'three',
    images: [
      { src: '/images/treatements/Full mouth Rehabilitation with All on 4 implants in upper arch and All on 6 implants in lower arch-1.jpeg' },
      { src: '/images/treatements/Full mouth Rehabilitation with All on 4 implants in upper arch and All on 6 implants in lower arch-2.jpeg' },
      { src: '/images/treatements/Full mouth Rehabilitation with All on 4 implants in upper arch and All on 6 implants in lower arch-3.jpeg' },
    ],
  },
  {
    title: 'Crowns and Bridges',
    layout: 'two',
    images: [
      { src: '/images/treatements/crowns and bridges pre.jpeg', label: 'Before' },
      { src: '/images/treatements/crowns and bridges post.jpeg', label: 'After' },
    ],
  },
  {
    title: 'Ceramic Crowns',
    layout: 'two',
    images: [
      { src: '/images/treatements/crowns pre.jpeg' },
      { src: '/images/treatements/crowns post.jpeg' },
    ],
  },
  {
    title: 'Esthetic Crowns',
    layout: 'two',
    images: [
      { src: '/images/treatements/crowns another pre.jpeg' },
      { src: '/images/treatements/crowns another post.jpeg' },
    ],
  },
  {
    title: 'Cosmetic Composite Filling',
    layout: 'two',
    images: [
      { src: '/images/treatements/cosmetic filling pre.jpeg' },
      { src: '/images/treatements/cosmetic filling post.jpeg' },
    ],
  },
  {
    title: 'Esthetic Tooth Restoration',
    layout: 'two',
    images: [
      { src: '/images/treatements/cosmitic filling pre.jpeg' },
      { src: '/images/treatements/cosmitic filling post.jpeg' },
    ],
  },
  {
    title: 'Root Canal Treatment',
    layout: 'two',
    images: [
      { src: '/images/treatements/rootcanal iamge-1.jpeg' },
      { src: '/images/treatements/rootcanal image -2.jpeg' },
    ],
  },
  {
    title: 'Complete Dentures',
    layout: 'two',
    images: [
      { src: '/images/treatements/complete dentures pre.jpeg' },
      { src: '/images/treatements/complete dentures post.jpeg' },
    ],
  },
  {
    title: 'Removable Partial Dentures',
    layout: 'two',
    images: [
      { src: '/images/treatements/removable partial dentures pre.jpeg', label: 'Before' },
      { src: '/images/treatements/removable partial dentures post.jpeg', label: 'After' },
    ],
  },
  {
    title: 'Dental Bridges',
    layout: 'two',
    images: [
      { src: '/images/treatements/bridges pre.jpeg' },
      { src: '/images/treatements/bridges post.jpeg' },
    ],
  },
  {
    title: 'Metal Braces Orthodontics',
    layout: 'three',
    images: [
      { src: '/images/treatements/metalbraces pre.jpeg', label: 'Before' },
      { src: '/images/treatements/metalbraces post.jpeg', label: 'During' },
      { src: '/images/treatements/metalbraces after.jpeg', label: 'After' },
    ],
  },
  {
    title: 'Orthodontic Alignment',
    layout: 'one',
    images: [
      { src: '/images/treatements/Malalignment of teeth with braces.jpeg' },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

export default function TreatmentsPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <VideoBackground src="/videos/treatements.mp4" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mx-auto" />
            <h1 className="section-title hero-text-shield text-white">Our <span className="text-accent-italic">Transformations</span></h1>
            <p className="section-subtitle hero-text-shield mx-auto mt-4 !text-white/80">Real results from our specialized treatments</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-light py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(14,95,115,0.08)] border border-brand-border"
            >
              <h2 className="text-2xl md:text-3xl font-display font-black text-brand-light mb-8 text-center">
                {treatment.title}
              </h2>
              
              <div className={`grid gap-4 md:gap-6 ${
                treatment.layout === 'three' ? 'grid-cols-1 md:grid-cols-3' : 
                treatment.layout === 'two' ? 'grid-cols-1 md:grid-cols-2' : 
                'grid-cols-1 max-w-2xl mx-auto'
              }`}>
                {treatment.images.map((img, idx) => (
                  <div key={idx} className="flex flex-col gap-3 group relative">
                    {treatment.layout === 'one' ? (
                      <div className="w-full relative shadow-sm rounded-2xl overflow-hidden">
                        <Image
                          src={img.src}
                          alt={`${treatment.title}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 80vw"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src={img.src}
                          alt={`${treatment.title}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    {'label' in img && img.label && (
                      <div className="absolute top-4 left-4 bg-brand-gold/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                        {img.label}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center px-6 py-24 bg-brand-light">
        <div className="max-w-2xl mx-auto glass-card rounded-[2.5rem] p-12 shadow-xl border border-brand-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h3 className="text-3xl font-display font-bold text-brand-light mb-4 relative z-10">
            Ready for your transformation?
          </h3>
          <p className="text-brand-muted mb-8 relative z-10 text-lg">
            Schedule a consultation and see what we can do for your smile.
          </p>
          <MagneticButton>
            <Link href="/contact" className="btn-gold relative z-10">Contact Us</Link>
          </MagneticButton>
        </div>
      </section>
    </>
  )
}
