'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Doctor } from '@/lib/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

export default function DoctorCard({ doctor, index }: DoctorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setRotate({ x: y * -6, y: x * 6 });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <Link href={`/doctors/${doctor.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 360px"
              priority={index < 3}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-1.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {doctor.specialties.slice(0, 2).map((s) => (
                <span key={s} className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white border border-white/30">
                  {s}
                </span>
              ))}
            </div>
            <h3 className="font-display text-xl font-bold text-white">{doctor.name}</h3>
            <p className="text-white/70 text-sm">{doctor.title}</p>
          </div>

          <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/95 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
