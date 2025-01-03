import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start triggering a little earlier for smoother transitions
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95, rotate: 2 }} // Slight rotation for elegance
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : { opacity: 0, y: 50, scale: 0.95, rotate: 2 }}
      transition={{
        duration: 0.8, // Slightly longer duration for more graceful transitions
        ease: [0.25, 0.8, 0.25, 1], // Ease function for smooth and elegant transition
      }}
      className={`${className} transform transition-all`}
    >
      {children}
    </motion.div>
  );
}
