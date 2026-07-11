'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [label, setLabel] = useState('');

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsVisible(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function handleHoverIn(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('article, button, a, .btn-gold, .btn-outline');
      if (target) {
        setIsHovering(true);
        if (target.closest('article')) setLabel('View');
        else setLabel('');
      }
    }

    function handleHoverOut() {
      setIsHovering(false);
      setLabel('');
    }

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleHoverIn);
    document.addEventListener('mouseout', handleHoverOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
    };
  }, [x, y]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] pointer-events-none flex items-center justify-center"
      style={{ x, y }}
      animate={{
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
    >
      <div className="w-full h-full rounded-full bg-brand-warm-accent/20 border border-brand-warm-accent/40 flex items-center justify-center">
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-warm-accent">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
