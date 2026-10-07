import React from 'react';
import { motion } from 'framer-motion';

export const statsData = [
  { value: '50+', label: 'Delivered Projects', desc: 'Across web, mobile, and AI ecosystems' },
  { value: '25+', label: 'Technology Solutions', desc: 'Custom enterprise architectures' },
  { value: '15+', label: 'Industries Served', desc: 'From FinTech to Smart Campuses' },
  { value: '10+', label: 'Technology Specialists', desc: 'Senior engineers & solution architects' },
];

export function Stats() {
  return (
    <section className="section-sm section-bg-subtle">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stat-box"
            >
              <div className="stat-number text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p style={{ fontSize: '0.82rem', marginTop: '0.35rem', color: 'var(--muted)' }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
