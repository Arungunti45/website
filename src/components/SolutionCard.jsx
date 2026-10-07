import React from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Coins,
  ShoppingBag,
  GraduationCap,
  Activity,
  Users,
  Briefcase,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  CreditCard,
  Coins,
  ShoppingBag,
  GraduationCap,
  Activity,
  Users,
  Briefcase,
  Cpu,
};

export function SolutionCard({ solution, index = 0 }) {
  const IconComponent = iconMap[solution.iconName] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="solution-card"
    >
      <div className="solution-icon-box">
        <IconComponent size={26} />
      </div>

      <span
        style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          color: 'var(--accent)',
          marginBottom: '0.35rem',
        }}
      >
        {solution.badge}
      </span>

      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{solution.title}</h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        {solution.description}
      </p>

      {solution.features && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
          {solution.features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
