import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  Award,
  BookOpen,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { Stats } from '../components/Stats';
import { useSEO } from '../hooks/useSEO';

const coreValues = [
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'Continuously adopting modern frameworks, AI automations, and architectural paradigms to solve complex challenges.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Transparent timelines, clear pricing, and uncompromised security standards in every line of code we ship.',
  },
  {
    icon: HeartHandshake,
    title: 'Collaboration',
    desc: 'Operating as a direct extension of your internal product team with constant communication and joint problem-solving.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'Rigorous automated testing, clean code conventions, and high-performance design standards without shortcuts.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'Aligning every technical decision with real business outcomes, user satisfaction, and tangible ROI.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Fostering a culture of relentless curiosity, experimentation, and mastery of emerging technologies.',
  },
];

const developmentApproaches = [
  {
    title: 'Agile & Iterative',
    desc: 'Bi-weekly sprint cycles with frequent deliverable milestones and immediate feedback incorporation.',
  },
  {
    title: 'Security-by-Design',
    desc: 'Embedded threat modeling, encrypted data at rest and transit, and OWASP compliance.',
  },
  {
    title: 'Cloud-Native & Modular',
    desc: 'Containerized microservices and modular architectures engineered for horizontal cloud elasticity.',
  },
  {
    title: 'Design-Led Engineering',
    desc: 'Ensuring technical robustness is paired with intuitive, accessible, and delightful user experiences.',
  },
];

export function About() {
  useSEO({
    title: 'About Us | AIOIN Intelligent Digital Solutions',
    description: 'Learn about AIOIN mission, vision, engineering culture, core values, and our commitment to building high-impact software products.',
  });

  return (
    <>
      {/* 1. About Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Who We Are</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Engineering the Future of <span className="text-gradient">Intelligent Software</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              AIOIN is a modern software, AI, and digital solutions company dedicated to transforming business visions into scalable, secure, and intuitive digital platforms.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Partner With Us
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* 2. Company Story & Origins */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>Our Story</span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Born Out of a Passion for Engineering Excellence
              </h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                AIOIN was founded with a singular conviction: technology should simplify complex business operations, empower end-users, and deliver undeniable value.
              </p>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Over the years, we have grown from a tight-knit group of full-stack engineers into a full-scale digital engineering studio building enterprise platforms, AI-driven automation pipelines, and high-concurrency fintech ecosystems.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                Our team blends deep architectural mastery with design sensibility, ensuring every web portal, mobile app, and backend system is built for longevity and massive scale.
              </p>
            </div>

            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Our Strategic Purpose
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--grad-badge)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Our Mission</h4>
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      To build technology solutions that solve meaningful business problems and drive sustainable competitive advantages.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(124, 58, 237, 0.12)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Compass size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Our Vision</h4>
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      To become a globally trusted technology partner for visionary businesses creating next-generation digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="Culture & Principles"
            title="Values That Guide Every Sprint"
            subtitle="The fundamental principles shaping our engineering decisions and client relationships."
          />

          <div className="cards-grid-3">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                  style={{
                    background: 'var(--surface-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--grad-badge)',
                      color: 'var(--secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Development Approach */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Our Standards"
            title="Our Development Approach"
            subtitle="How we consistently deliver production-quality software on schedule."
          />

          <div className="cards-grid-4">
            {developmentApproaches.map((appr, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{appr.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {appr.desc}
                </p>
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
