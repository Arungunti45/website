import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Zap, Clock, UserCheck } from 'lucide-react';
import { Button } from './Button';

export function CaseStudyHero({ project }) {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--navbar-height) + 2.5rem)', background: 'var(--surface)' }}>
      <div className="container">
        <Link
          to="/portfolio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--muted)',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              {project.badge || project.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem', lineHeight: 1.15 }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: 600, marginBottom: '1.25rem' }}>
              {project.tagline}
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {project.summary || project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Client</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.client}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Timeline</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.timeline}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Domain</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.category}</div>
              </div>
            </div>
          </div>

          <div>
            {/* Visual Screen Mockup */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                background: project.heroImageColor,
                padding: '2rem',
                color: 'white',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
                </div>
                <span style={{ fontSize: '0.8rem', opacity: 0.8, letterSpacing: '0.1em' }}>PRODUCTION ARCHITECTURE</span>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '1.5rem', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>{project.title} System Core</div>
                <p style={{ fontSize: '0.88rem', opacity: 0.9, lineHeight: 1.6 }}>{project.overview}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)', padding: '0.85rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>{m.value}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.85 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
