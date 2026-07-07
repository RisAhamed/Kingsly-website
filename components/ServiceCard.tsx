'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    icon: string;
    description: string;
    category: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      className="surface-card group h-full p-7 md:p-8"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: Math.min(index * 0.04, 0.28), duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary text-sm font-black tracking-[0.16em] text-brand-gold-dark transition-transform duration-300 group-hover:scale-105">
        {service.icon}
      </div>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-brand-muted">{service.category}</p>
      <h3 className="mt-3 font-display text-2xl font-black text-brand-light">{service.title}</h3>
      <p className="mt-4 leading-7 text-brand-muted">{service.description}</p>
      <div className="mt-7 inline-flex items-center gap-3 text-sm font-black text-brand-gold-dark">
        Explore treatment
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary transition-transform group-hover:translate-x-1">
          +
        </span>
      </div>
    </motion.article>
  );
}
