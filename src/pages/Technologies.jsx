import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Code2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { technologies } from '../data/technologies';
import { useSEO } from '../hooks/useSEO';

const thirdPartyIntegrations = [
  { name: 'Payment Gateways', list: ['Stripe', 'Razorpay', 'PayPal', 'UPI / IMPS Rails', 'Augmont Bullion'] },
  { name: 'Communications & Video', list: ['Twilio', 'SendGrid', 'Zoom SDK', 'Agora RTC', 'WhatsApp Business API'] },
  { name: 'Auth & Identity', list: ['OAuth2 / OpenID', 'Auth0', 'Firebase Auth', 'SAML SSO', 'DigiLocker KYC'] },
  { name: 'Analytics & Observability', list: ['Sentry', 'Datadog', 'PostHog', 'Mixpanel', 'Prometheus / Grafana'] },
];

export function Technologies() {
  useSEO({
    title: 'Technologies | AIOIN Tech Ecosystem & Stack',
    description: 'Explore the modern technology stack utilized by AIOIN including React, Python, Django, Node.js, PostgreSQL, AWS, Docker, and AI/ML pipelines.',
  });

  return (
    <>
      {/* Technologies Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Full Technology Ecosystem</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Battle-Tested Technologies for <span className="text-gradient">Modern Scale</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              We select modern, enterprise-proven tools that provide maximum velocity, developer ergonomics, long-term maintainability, and zero vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {technologies.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>{cat.category}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{cat.description}</p>
                  </div>
                  <span className="badge">{cat.skills.length} Core Technologies</span>
                </div>

                <div className="cards-grid-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.25rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{skill.name}</strong>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', background: 'var(--grad-badge)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Ecosystem */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Third-Party Integrations"
            title="Enterprise API & Vendor Integration Hub"
            subtitle="Secure, hardened connector modules bridging your core application with premier industry APIs."
          />

          <div className="cards-grid-4">
            {thirdPartyIntegrations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{item.name}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.list.map((api, aIdx) => (
                    <li key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--secondary)' }} />
                      <span>{api}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
