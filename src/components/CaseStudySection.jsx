import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Cpu, Database, Server, Layers, ArrowRight, Zap, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function CaseStudySection({ project }) {
  return (
    <div className="case-study-details">
      {/* 1. Challenge & Solution Two Column */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                borderLeft: '4px solid #EF4444',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                The Business Challenge
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Problem Statement & Complexities</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Our Engineered Solution
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>AIOIN Architectural Strategy</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Features Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="Engineering Capabilities"
            title="Core Functional Modules"
            subtitle={`Explore the custom features engineered for ${project.title}.`}
          />

          <div className="cards-grid-3">
            {project.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  <h4 style={{ fontSize: '1.15rem' }}>{feat.title}</h4>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. User Journey Workflow */}
      {project.userJourney && (
        <section className="section">
          <div className="container">
            <SectionHeading
              badge="User Experience"
              title="End-to-End User Journey"
              subtitle="Step-by-step user interaction flow from initial entry to value realization."
            />

            <div className="process-grid">
              {project.userJourney.map((step, idx) => (
                <div key={idx} className="process-card">
                  <div className="process-step-num">0{step.step}</div>
                  <h4 className="process-card-title">{step.title}</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Tech Stack & Architecture Deep Dive */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>Technology Ecosystem</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Applied Technologies</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Carefully selected frameworks, databases, and third-party integrations delivering zero downtime and sub-second latencies.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--surface-card)',
                      border: '1px solid var(--border)',
                      padding: '0.6rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.adminFeatures && (
                <div style={{ background: 'var(--surface-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    Enterprise Admin Capabilities
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.adminFeatures.map((af, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <ShieldCheck size={16} style={{ color: 'var(--secondary)' }} />
                        <span>{af}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Cpu size={26} style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontSize: '1.4rem' }}>{project.architecture.type}</h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                System-level architectural paradigms engineered to ensure horizontal scalability and fault-tolerant operations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.architecture.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                    <Zap size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Metrics & Outcomes */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Performance Benchmarks"
            title="Measured Impact & Results"
            subtitle="Demonstrated technical and operational achievements recorded during validation."
          />

          <div className="stats-grid">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-number text-gradient">{metric.value}</div>
                <div className="stat-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
