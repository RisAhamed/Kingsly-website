'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { doctors } from '@/lib/doctors'

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
]

const stepLabels = ['Select Doctor', 'Date & Time', 'Your Details', 'Confirm']

const slideVariants = {
  enter: { x: 80, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -80, opacity: 0 },
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', reason: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const checkRef = useRef<SVGCircleElement>(null)
  const checkPathRef = useRef<SVGPathElement>(null)

  const selectedDoctorData = doctors.find(d => d.slug === selectedDoctor)

  // Get tomorrow's date as min date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!selectedDoctor
      case 2: return !!selectedDate && !!selectedTime
      case 3: return formData.name.trim() !== '' && formData.phone.trim() !== ''
      case 4: return true
      default: return false
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    // Animate checkmark
    setTimeout(() => {
      if (checkRef.current && checkPathRef.current) {
        gsap.fromTo(checkRef.current,
          { strokeDashoffset: 283 },
          { strokeDashoffset: 0, duration: 0.8, ease: 'power3.out' }
        )
        gsap.fromTo(checkPathRef.current,
          { strokeDashoffset: 50 },
          { strokeDashoffset: 0, duration: 0.5, delay: 0.5, ease: 'power3.out' }
        )
      }
    }, 100)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          className="text-center max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
              <circle
                ref={checkRef}
                cx="60" cy="60" r="45"
                fill="none" stroke="#c8a96e" strokeWidth="3"
                strokeDasharray="283" strokeDashoffset="283"
              />
              <path
                ref={checkPathRef}
                d="M38 62 L52 76 L82 46"
                fill="none" stroke="#c8a96e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="50" strokeDashoffset="50"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Appointment Booked!</h2>
          <div className="glass-card p-6 rounded-2xl mb-8 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-brand-muted">Doctor</span>
              <span className="text-brand-gold font-medium">{selectedDoctorData?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted">Date</span>
              <span className="text-white">{selectedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted">Time</span>
              <span className="text-white">{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted">Patient</span>
              <span className="text-white">{formData.name}</span>
            </div>
          </div>
          <p className="text-brand-muted mb-6 text-sm">We will contact you at {formData.phone} to confirm your appointment.</p>
          <Link href="/" className="btn-gold inline-block">Back to Home</Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto" />
          <h1 className="section-title text-4xl md:text-5xl">Book Your Appointment</h1>
          <p className="section-subtitle mx-auto mt-4">Schedule your visit in just a few steps</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 px-4">
          {stepLabels.map((label, i) => {
            const step = i + 1
            const isActive = step === currentStep
            const isCompleted = step < currentStep
            return (
              <div key={i} className="flex flex-col items-center relative flex-1">
                {i > 0 && (
                  <div className="absolute top-4 -left-1/2 w-full h-0.5 -z-10">
                    <div className={`h-full transition-all duration-500 ${isCompleted || isActive ? 'bg-brand-gold' : 'bg-brand-card'}`} />
                  </div>
                )}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isCompleted ? 'bg-brand-gold text-brand-primary' :
                  isActive ? 'bg-brand-gold text-brand-primary' :
                  'bg-brand-card text-brand-muted border border-brand-border'
                }`}>
                  {isCompleted ? '✓' : step}
                </div>
                <span className={`text-xs mt-2 text-center hidden sm:block ${isActive ? 'text-brand-gold' : 'text-brand-muted'}`}>
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Select Doctor */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-display font-bold mb-6">Choose Your Doctor</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {doctors.map((doc) => (
                    <button
                      key={doc.slug}
                      onClick={() => setSelectedDoctor(doc.slug)}
                      className={`glass-card p-4 rounded-xl text-center transition-all duration-300 ${
                        selectedDoctor === doc.slug
                          ? 'border-brand-gold border-2 glow-gold'
                          : 'hover:border-brand-gold/30'
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                        <Image src={doc.image} alt={doc.name} fill className="object-cover" sizes="64px" />
                      </div>
                      <p className="text-sm font-bold text-white truncate">{doc.name}</p>
                      <p className="text-xs text-brand-muted truncate">{doc.title.split(',')[0]}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-display font-bold mb-6">Select Date & Time</h2>
                <div className="mb-8">
                  <label className="block text-sm text-brand-muted mb-2">Preferred Date</label>
                  <input
                    type="date"
                    min={minDate}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-muted mb-3">Preferred Time</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-brand-gold text-brand-primary'
                            : 'bg-brand-card border border-brand-border text-white hover:border-brand-gold/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Patient Details */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-display font-bold mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-brand-muted mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-brand-muted mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-brand-muted mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-brand-muted mb-2">Reason for Visit</label>
                    <textarea
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Briefly describe your dental concern..."
                      rows={4}
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-display font-bold mb-6">Confirm Your Appointment</h2>
                <div className="glass-card p-6 md:p-8 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-brand-muted">Doctor</span>
                    <div className="flex items-center gap-3">
                      {selectedDoctorData && (
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image src={selectedDoctorData.image} alt={selectedDoctorData.name} fill className="object-cover" sizes="32px" />
                        </div>
                      )}
                      <span className="text-brand-gold font-medium">{selectedDoctorData?.name}</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-brand-muted">Date</span>
                    <span className="text-white">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-brand-muted">Time</span>
                    <span className="text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-brand-muted">Patient</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-brand-muted">Phone</span>
                    <span className="text-white">{formData.phone}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          {currentStep > 1 ? (
            <button onClick={() => setCurrentStep(currentStep - 1)} className="btn-outline px-8 py-3">
              Back
            </button>
          ) : <div />}
          {currentStep < 4 ? (
            <button
              onClick={() => canProceed() && setCurrentStep(currentStep + 1)}
              disabled={!canProceed()}
              className={`btn-gold px-8 py-3 ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn-gold px-8 py-3">
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
