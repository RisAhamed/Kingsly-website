'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/waitingarea.png" alt="Kingslyn Dental Care" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-brand-primary/70" />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line mx-auto" />
          <h1 className="section-title text-5xl md:text-6xl">Contact Us</h1>
          <p className="section-subtitle mx-auto mt-4">We&apos;d love to hear from you</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>
            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary text-2xl font-black text-brand-gold-dark">
                  OK
                </div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">Message Sent!</h3>
                <p className="text-brand-muted">We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-brand-muted mb-2">Your Name</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-brand-primary border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-muted mb-2">Email Address</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full bg-brand-primary border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-muted mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-brand-primary border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-muted mb-2">Your Message</label>
                  <textarea
                    required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full bg-brand-primary border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full py-4">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-brand-muted text-sm">Phone</span>
                </div>
                <a href="tel:+919976658340" className="text-2xl font-display font-bold text-brand-gold hover:text-brand-gold-light transition-colors">
                  +91 99766 58340
                </a>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-brand-muted text-sm mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.facebook.com/share/1HJcck1h3L/"
                    target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center border border-brand-border hover:border-brand-gold/30 transition-colors"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-gold">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/kingstonchellapandian"
                    target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center border border-brand-border hover:border-brand-gold/30 transition-colors"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-brand-muted text-sm">Address</span>
                </div>
                <p className="text-white">Tamil Nadu, India</p>
              </div>

              {/* Working Hours */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-brand-muted text-sm">Working Hours</span>
                </div>
                <p className="text-white">Mon - Thu: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM</p>
                <p className="text-brand-muted text-sm mt-1">Fri: 10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM</p>
                <p className="text-brand-muted text-sm mt-1">Sat: 06:00 PM - 09:00 PM</p>
                <p className="text-brand-muted text-sm mt-1">Sun: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-brand-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d77.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kingslyn Dental Care Location"
          />
        </div>
      </section>

      {/* Mobile Floating Call Button */}
      <motion.a
        href="tel:+919976658340"
        className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(200,169,110,0.4)', '0 0 0 20px rgba(200,169,110,0)', '0 0 0 0 rgba(200,169,110,0.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0e17" strokeWidth="2.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.a>
    </>
  )
}
