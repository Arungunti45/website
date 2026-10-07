import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';

const filterTabs = ['All', 'Web', 'Mobile', 'AI', 'FinTech', 'Enterprise'];

export function Portfolio() {
  useSEO({
    title: 'Portfolio & Case Studies | AIOIN Built Platforms',
    description: 'Explore verified case studies of enterprise and consumer applications built by AIOIN across FinTech, Mobile, AI, and ERP.',
  });

  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === activeTab || p.category === activeTab);

  return (
    <>
      {/* Portfolio Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Proven Track Record</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Engineering That Drives <span className="text-gradient">Measurable Impact</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2.5rem auto', fontSize: '1.15rem' }}>
              Explore deep architectural case studies of digital platforms engineered by AIOIN for food delivery networks, labor ecosystems, universities, and enterprises.
            </p>

            {/* Filter Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.6rem',
              }}
            >
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    border: '1px solid',
                    borderColor: activeTab === tab ? 'var(--secondary)' : 'var(--border)',
                    background: activeTab === tab ? 'var(--secondary)' : 'var(--surface-card)',
                    color: activeTab === tab ? '#FFFFFF' : 'var(--text-secondary)',
                    boxShadow: activeTab === tab ? 'var(--shadow-md)' : 'none',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          <motion.div layout className="cards-grid-3">
            <AnimatePresence>
              {filteredProjects.map((proj, idx) => (
                <ProjectCard key={proj.id} project={proj} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                No case studies found for category "{activeTab}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Complex Product in Mind?"
        subtitle="Let's engineer an architecture that stands the test of massive scale."
        buttonText="Discuss Your Project"
      />
    </>
  );
}
