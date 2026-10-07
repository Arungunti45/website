import React from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  TrendingUp,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Users,
  Gem,
  Sprout,
  Truck,
  Building2,
  Layers,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Landmark,
  TrendingUp,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Users,
  Gem,
  Sprout,
  Truck,
  Building2,
  Layers,
};

export function IndustryCard({ industry, index = 0 }) {
  const IconComponent = iconMap[industry.iconName] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="industry-card"
    >
      <div className="industry-icon-box">
        <IconComponent size={24} />
      </div>

      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{industry.title}</h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
          {industry.description}
        </p>
      </div>

      {industry.useCases && (
        <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            Domain Applications
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {industry.useCases.map((uc, idx) => (
              <span key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                • {uc}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
