'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
    category: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: Math.min(index * 0.04, 0.28), duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-white p-7 md:p-8 shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary text-brand-gold-dark transition-transform duration-300 group-hover:scale-105">
        {service.icon}
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-brand-muted">{service.category}</p>
      <h3 className="mt-3 font-display text-2xl font-black text-brand-light">{service.title}</h3>
      <p className="mt-4 leading-7 text-brand-muted/80">{service.description}</p>
      <div className="group mt-7 inline-flex items-center gap-3 text-sm font-black text-brand-gold-dark">
        Explore treatment
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary transition-transform duration-300 group-hover:translate-x-1">
          +
        </span>
      </div>
    </motion.article>
  );
}
