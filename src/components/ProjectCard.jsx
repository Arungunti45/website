import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="project-card"
    >
      <div className="project-thumbnail" style={{ background: project.heroImageColor }}>
        <div className="project-thumbnail-visual">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'auto' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            </div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#CBD5E1' }}>
              {project.category}
            </span>
          </div>

          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {project.title}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#93C5FD', marginTop: '2px' }}>
              {project.tagline}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#CBD5E1' }}>
            <span>Architecture: Enterprise</span>
            <span>AIOIN Verified</span>
          </div>
        </div>
      </div>

      <div className="project-card-body">
        <div>
          <div className="project-category-badge">{project.badge || project.category}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>

        <div>
          <div className="service-tech-tags" style={{ marginBottom: '1.25rem' }}>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <Link to={`/portfolio/${project.slug}`} className="card-link-arrow" style={{ fontSize: '0.98rem' }}>
            <span>View Full Case Study</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
