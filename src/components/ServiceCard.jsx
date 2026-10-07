import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  Code,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Bot,
  Code,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
};

export function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="service-card"
    >
      <div>
        <div className="service-card-header">
          <div className="service-icon-box">
            <IconComponent size={26} />
          </div>
          <span className="service-num">{service.num}</span>
        </div>

        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.shortDesc || service.fullDesc}</p>
      </div>

      <div>
        {service.technologies && service.technologies.length > 0 && (
          <div className="service-tech-tags">
            {service.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link to="/services" className="card-link-arrow">
          <span>Explore Service</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
