import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`section-header text-${align} ${className}`}
    >
      {badge && <span className="badge">{badge}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
