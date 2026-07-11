import Image from 'next/image';
import Link from 'next/link';

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
  { label: 'Booking', href: '/booking' },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.15fr_0.85fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" aria-label="Kingslyn Dental Care Home" className="inline-flex">
            <Image src="/images/logo.png" alt="Kingslyn Dental Care" width={160} height={52} className="h-12 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-2xl font-black text-brand-light">Kingslyn Dental Care</p>
          <p className="mt-3 max-w-md leading-7 text-brand-muted">
            Specialist-led dental care with a focus on sterilization, comfort, restorative precision, and accessible treatment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+919976658340" className="btn-gold transition-all duration-300">
              Call Clinic
            </a>
            <Link href="/booking" className="btn-outline">
              Book Visit
            </Link>
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
          <div className="mt-7 flex gap-3">
            <a
              href="https://www.facebook.com/share/1HJcck1h3L/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-border px-4 py-2 text-sm font-extrabold text-brand-gold-dark hover:bg-brand-secondary"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/kingstonchellapandian"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-border px-4 py-2 text-sm font-extrabold text-brand-gold-dark hover:bg-brand-secondary"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold-dark">Clinic Hours</h3>
          <div className="mt-5 space-y-1">
            {HOURS.map(([day, time]) => (
              <div key={day} className="flex justify-between items-center w-full border-b border-gray-200 py-2 text-sm">
                <span className="font-black text-brand-light">{day}</span>
                <span className="text-brand-muted text-right">{time}</span>
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
