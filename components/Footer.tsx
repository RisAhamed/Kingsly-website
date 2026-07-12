import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';

const HOURS = [
  ['Monday', '10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM'],
  ['Tuesday', '10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM'],
  ['Wednesday', '10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM'],
  ['Thursday', '10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM'],
  ['Friday', '10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM'],
  ['Saturday', '06:00 PM - 09:00 PM'],
  ['Sunday', '10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM'],
] as const;

const QUICK_LINKS = [
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.15fr_0.85fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" aria-label="Kingslyn Dental Care Home" className="inline-flex relative group p-2 -ml-2 mb-2">
            <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/images/logo.png" 
              alt="Kingslyn Dental Care" 
              width={200} height={65} 
              className="h-20 sm:h-24 w-auto mix-blend-multiply contrast-125 relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 drop-shadow-sm" 
            />
          </Link>
          <p className="mt-5 max-w-sm text-2xl font-black text-brand-light">Kingslyn Dental Care</p>
          <p className="mt-3 max-w-md leading-7 text-brand-muted">
            Specialist-led dental care with a focus on sterilization, comfort, restorative precision, and accessible treatment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 mb-6">
            <MagneticButton>
              <a href="tel:+919976658340" className="btn-gold transition-all duration-300">
                Call Clinic
              </a>
            </MagneticButton>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Connect With Us</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1HJcck1h3L/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:bg-black/5 p-2 pr-4 rounded-xl transition-all duration-300 border border-transparent hover:border-black/5"
              >
                <div className="h-10 w-10 rounded-lg bg-[#1877F2] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1877F2]">Facebook</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kingstonchellapandian"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:bg-black/5 p-2 pr-4 rounded-xl transition-all duration-300 border border-transparent hover:border-black/5"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#E1306C]">Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold-dark">Explore</h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-bold text-brand-muted transition-colors hover:text-brand-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold-dark">Clinic Hours</h3>
          <div className="mt-5 space-y-1">
            {HOURS.map(([day, time]) => (
              <div 
                key={day} 
                className="group flex justify-between items-center w-full border-b border-gray-100 py-2.5 px-2 text-sm transition-all duration-300 hover:bg-brand-gold/5 hover:border-brand-gold/30 hover:scale-[1.02] hover:shadow-sm rounded-lg cursor-default"
              >
                <span className="font-black text-brand-light transition-colors group-hover:text-brand-gold-dark">{day}</span>
                <span className="text-brand-muted text-right transition-colors group-hover:text-brand-light">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-brand-border px-6 py-5 text-center text-sm text-brand-muted">
        © {new Date().getFullYear()} Kingslyn Dental Care. All rights reserved.
      </div>
    </footer>
  );
}
