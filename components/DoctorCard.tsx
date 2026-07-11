'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Doctor } from '@/lib/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

export default function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className="group h-full"
    >
      <Link href={`/doctors/${doctor.slug}`} className="surface-card block h-full p-2 bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative overflow-hidden rounded-[1.55rem] bg-brand-secondary">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              sizes="(max-width: 768px) 90vw, 360px"
              priority={index < 3}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-light/70 to-transparent" />
          </div>
        </div>
        <div className="px-5 py-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {doctor.specialties.slice(0, 2).map((specialty) => (
              <span key={specialty} className="pill !min-h-8 !px-3 !py-1 text-[0.68rem]">
                {specialty}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl font-black text-brand-light">{doctor.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-brand-muted">{doctor.title}</p>
          <div className="group mt-6 inline-flex items-center gap-3 text-sm font-black text-brand-gold-dark">
            View profile
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary transition-transform duration-300 group-hover:translate-x-1">
              +
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
