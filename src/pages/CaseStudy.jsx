import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudySection } from '../components/CaseStudySection';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';

export function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug || p.id === slug);

  useSEO({
    title: project ? `${project.title} Case Study | AIOIN Portfolio` : 'Case Study Not Found | AIOIN',
    description: project ? project.summary : 'Detailed case study and system architecture analysis.',
  });

  if (!project) {
    return (
      <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
            }}
          >
            <AlertCircle size={28} />
          </div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Case Study Not Found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            The requested project slug "{slug}" does not exist or has been relocated.
          </p>
          <Button to="/portfolio" variant="primary" icon={ArrowLeft}>
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 1. Project Hero */}
      <CaseStudyHero project={project} />

      {/* 2. Complete Case Study Details */}
      <CaseStudySection project={project} />

      {/* 3. CTA */}
      <CTASection
        title={`Ready to Build a Platform Like ${project.title}?`}
        subtitle="Contact our solutions architects today for a technical roadmap and estimation."
        buttonText="Schedule Technical Consultation"
      />
    </>
  );
}
