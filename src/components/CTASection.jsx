import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from './Button';

export function CTASection({
  title = "Ready to Build Your Next Intelligent Solution?",
  subtitle = "Partner with AIOIN to engineer high-performance web, mobile, and AI software that scales your enterprise.",
  buttonText = "Start a Project",
  buttonTo = "/contact",
}) {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="cta-banner"
        >
          <div className="cta-banner-content">
            <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#93C5FD', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Let's Collaborate</span>
            </div>

            <h2>{title}</h2>
            <p>{subtitle}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button to={buttonTo} variant="glow" size="lg" icon={ArrowRight}>
                {buttonText}
              </Button>
              <Button to="/services" variant="outline" size="lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                Explore Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
