import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Heart,
  Globe2,
  TrendingUp,
  Award,
  Coffee,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CareerCard } from '../components/CareerCard';
import { CTASection } from '../components/CTASection';
import { careers } from '../data/careers';
import { useSEO } from '../hooks/useSEO';

const perks = [
  {
    icon: Globe2,
    title: 'Remote-First Flexibility',
    desc: 'Work from where you are happiest and most productive with flexible schedule options.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech Stack',
    desc: 'Work with modern tools like React 19, Python, LLMs, Docker, and AWS without legacy technical debt.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning Budget',
    desc: 'Generous annual allowance for books, technical certifications, and engineering conferences.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Health & Wellness',
    desc: 'Premium health insurance coverage and mindfulness perks to keep you thriving.',
  },
];

export function Careers() {
  useSEO({
    title: 'Careers | Join the AIOIN Engineering Team',
    description: 'Build the future of software and AI with AIOIN. Explore open roles across frontend, backend, mobile, AI/ML, and cloud engineering.',
  });

  return (
    <>
      {/* Careers Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>We Are Hiring</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Build the Future With <span className="text-gradient">AIOIN</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              Join a team of driven software engineers, UI/UX designers, and AI specialists building high-impact platforms for leading international clients.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="Why Join Us"
            title="Life at AIOIN"
            subtitle="We foster an empowering, high-trust engineering culture focused on craft, autonomy, and continuous growth."
          />

          <div className="cards-grid-4">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
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
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{perk.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="section" id="openings">
        <div className="container">
          <SectionHeading
            badge="Current Opportunities"
            title="Open Engineering & Design Positions"
            subtitle={`We have ${careers.length} active openings. Click apply on any role to submit your profile.`}
          />

          <div className="cards-grid-2">
            {careers.map((job, idx) => (
              <CareerCard key={job.id} job={job} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Don't See the Exact Role for You?"
        subtitle="We are always eager to meet outstanding developers and designers. Send us your resume anyway."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
