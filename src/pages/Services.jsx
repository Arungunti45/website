import React from 'react';
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
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { services } from '../data/services';
import { useSEO } from '../hooks/useSEO';

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

export function Services() {
  useSEO({
    title: 'Services | AIOIN Software & AI Solutions',
    description: 'Explore AIOIN full-stack web, mobile, AI, custom software, UI/UX, cloud DevOps, API backend and support services.',
  });

  return (
    <>
      {/* Services Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Full-Stack Engineering</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Specialized Services for <span className="text-gradient">Modern Digital Products</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              From initial architectural blueprints to high-load production environments, we provide end-to-end engineering excellence across the entire software development lifecycle.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {services.map((srv, idx) => {
              const Icon = iconMap[srv.iconName] || Globe;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  id={srv.id}
                  style={{
                    background: 'var(--surface-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '3rem',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
                    {/* Left: Info */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--grad-badge)',
                            color: 'var(--secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={28} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--muted)', fontFamily: 'var(--font-heading)' }}>
                            SERVICE #{srv.num}
                          </span>
                          <h2 style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>{srv.title}</h2>
                        </div>
                      </div>

                      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                        {srv.fullDesc}
                      </p>

                      <div style={{ marginBottom: '1.75rem' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                          Key Business Benefits
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {srv.benefits.map((b, bIdx) => (
                            <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                              <CheckCircle2 size={17} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '3px' }} />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                        Inquire About {srv.title}
                      </Button>
                    </div>

                    {/* Right: Technologies & Process */}
                    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                      <div style={{ marginBottom: '1.75rem' }}>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Core Technologies</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {srv.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                background: 'var(--surface-card)',
                                border: '1px solid var(--border)',
                                padding: '0.45rem 0.9rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.86rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Development Lifecycle</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {srv.process.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 0.85rem',
                                background: 'var(--surface-card)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border)',
                                fontSize: '0.88rem',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              <span style={{ fontWeight: 800, color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>
                                0{sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
