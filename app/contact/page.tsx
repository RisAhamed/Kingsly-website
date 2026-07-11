'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from '@/components/MagneticButton'
import VideoBackground from '@/components/VideoBackground'
import { clinicInfo } from '@/lib/doctors'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <VideoBackground
        src="/videos/contact-page.mp4"
        overlay={true}
        className="fixed inset-0 -z-10"
      />

      <div className="relative z-10 pt-28 pb-20 px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mx-auto" />
            <h1 className="section-title hero-text-shield text-white"><span className="text-accent-italic">Contact</span> Us</h1>
            <p className="section-subtitle hero-text-shield mx-auto mt-4 !text-white/80">We&apos;d love to hear from you</p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Borderless Form */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="gold-line" />
            <h2 className="section-title text-white hero-text-shield mb-8">Send us a <span className="text-accent-italic">Message</span></h2>
            {submitted ? (
              <motion.div
                className="py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-black text-brand-gold">
                  OK
                </div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">Message Sent!</h3>
                <p className="text-white/60">We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-brand-warm-accent outline-none transition-colors text-lg"
                />
                <input
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-brand-warm-accent outline-none transition-colors text-lg"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-brand-warm-accent outline-none transition-colors text-lg"
                />
                <textarea
                  required rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-brand-warm-accent outline-none transition-colors text-lg resize-none"
                />
                <MagneticButton as="button">
                  <button type="submit" className="btn-gold mt-4">
                    Send Message
                  </button>
                </MagneticButton>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="gold-line" />
              <h2 className="section-title text-white hero-text-shield mb-8">Get in <span className="text-accent-italic">Touch</span></h2>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Phone</span>
              </div>
              <a href="tel:+919976658340" className="text-2xl font-display font-bold text-brand-gold transition-all duration-300 hover:text-brand-gold-light ml-[52px]">
                +91 99766 58340
              </a>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white/60 text-sm mb-4">Follow Us</p>
              <div className="flex flex-col gap-4">
                <a
                  href={clinicInfo.facebook}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-gold">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">Facebook</span>
                    <span className="text-xs text-white/50">Kingslyn Dental Care</span>
                  </div>
                </a>
                <a
                  href={clinicInfo.instagram}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">Instagram</span>
                    <span className="text-xs text-white/50">@kingstonchellapandian</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Address</span>
              </div>
              <p className="text-white ml-[52px]">112/56, Gandhi Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India</p>
            </div>

            {/* Working Hours */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Working Hours</span>
              </div>
              <p className="text-white ml-[52px]">Mon - Thu: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM</p>
              <p className="text-white/60 text-sm mt-1 ml-[52px]">Fri: 10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM</p>
              <p className="text-white/60 text-sm mt-1 ml-[52px]">Sat: 06:00 PM - 09:00 PM</p>
              <p className="text-white/60 text-sm mt-1 ml-[52px]">Sun: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <div className="max-w-6xl mx-auto mt-16 rounded-2xl overflow-hidden border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.930014087931!2d80.1246316!3d12.925283399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fcbed8b8ed3%3A0x1744fc252dd9590c!2s112%2C%20Gandhi%20Rd%2C%20West%20Tambaram%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600045%2C%20India!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kingslyn Dental Care Location"
          />
        </div>
      </div>

      {/* Floating Call Button */}
      <motion.a
        href="tel:+919976658340"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(200,169,110,0.4)', '0 0 0 20px rgba(200,169,110,0)', '0 0 0 0 rgba(200,169,110,0.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0e17" strokeWidth="2.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.a>
    </section>
  )
}