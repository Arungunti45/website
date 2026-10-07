import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Search, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { useSEO } from '../hooks/useSEO';

export function NotFound() {
  useSEO({
    title: '404 - Page Not Found | AIOIN',
    description: 'The page you are looking for does not exist.',
  });

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 650 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              fontSize: 'clamp(5rem, 12vw, 9rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1,
              marginBottom: '1rem',
              letterSpacing: '-0.04em',
            }}
            className="text-gradient"
          >
            404
          </div>

          <div className="badge" style={{ marginBottom: '1.25rem' }}>
            <Search size={14} />
            <span>Endpoint Missing</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>Page Not Found</h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.25rem' }}>
            The page you requested may have been moved, renamed, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary" size="lg" icon={Home}>
              Return Home
            </Button>
            <Button to="/portfolio" variant="secondary" size="lg" icon={Briefcase}>
              Explore Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
