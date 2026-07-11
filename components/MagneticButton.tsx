'use client';

import { motion } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  className = '',
  as = 'div',
  href,
  onClick,
  type = 'button',
  ...props
}: MagneticButtonProps & Record<string, unknown>) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: () => setPos({ x: 0, y: 0 }),
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.1 },
    className,
  };

  return (
    <motion.div {...motionProps} {...props}>
      {children}
    </motion.div>
  );
}
