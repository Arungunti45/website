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
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { solutions } from '../data/solutions';
import { useSEO } from '../hooks/useSEO';

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

export function Solutions() {
  useSEO({
    title: 'Solutions | AIOIN Industry Platforms & Domain Architectures',
    description: 'Discover AIOIN industry solutions spanning FinTech, Digital Gold, Healthcare, EdTech, Recruitment, and AI platforms.',
  });

  return (
    <>
      {/* Solutions Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Tailored Ecosystems</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Enterprise Solutions Engineered for <span className="text-gradient">High-Stakes Domains</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              We design and deploy purpose-built digital architectures that address the regulatory, security, and operational demands of specialized industries.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Discuss Your Solution
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="cards-grid-2">
            {solutions.map((sol, idx) => {
              const Icon = iconMap[sol.iconName] || Cpu;

              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: (idx % 2) * 0.1 }}
                  style={{
                    background: 'var(--surface-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(124, 58, 237, 0.12)',
                          color: 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={26} />
                      </div>
                      <span className="badge">{sol.badge}</span>
                    </div>

                    <h2 style={{ fontSize: '1.55rem', marginBottom: '0.75rem' }}>{sol.title}</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {sol.description}
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                        Architectural Features
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                        {sol.features.map((f, fIdx) => (
                          <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      <strong>Domain Impact:</strong> {sol.impact}
                    </div>
                    <Button to="/contact" variant="ghost" size="sm" icon={ArrowRight}>
                      Consult
                    </Button>
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
