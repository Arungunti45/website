import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { IndustryCard } from '../components/IndustryCard';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { industries } from '../data/industries';
import { useSEO } from '../hooks/useSEO';

export function Industries() {
  useSEO({
    title: 'Industries | AIOIN Domain Expertise & Verticals',
    description: 'Explore industries served by AIOIN including FinTech, Healthcare, Education, E-Commerce, Wealth Management, and SaaS platforms.',
  });

  return (
    <>
      {/* Industries Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Domain Expertise</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Specialized Software Engineering for <span className="text-gradient">Diverse Industries</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              Every industry has distinct regulatory requirements, user behavioral patterns, and performance demands. We bring deep vertical knowledge to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="cards-grid-3">
            {industries.map((ind, idx) => (
              <IndustryCard key={ind.id} industry={ind} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
