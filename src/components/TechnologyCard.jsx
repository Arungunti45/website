import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Database, Cloud, Cpu, Code2 } from 'lucide-react';

const iconMap = {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
};

export function TechnologyCard({ categoryData, index = 0 }) {
  const IconComponent = iconMap[categoryData.iconName] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="tech-category-box"
    >
      <div className="tech-category-title">
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 'var(--radius-sm)',
            background: 'var(--grad-badge)',
            color: 'var(--secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconComponent size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem' }}>{categoryData.category}</h3>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.25rem' }}>
        {categoryData.description}
      </p>

      <div className="tech-items-grid">
        {categoryData.skills.map((skill, sIdx) => (
          <div key={sIdx} className="tech-item-chip" title={skill.desc}>
            <Code2 size={16} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
