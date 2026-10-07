import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Server, Cpu, Database, Cloud } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-backdrop-glow" />
      <div className="hero-backdrop-glow-left" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            <div className="badge">
              <Sparkles size={15} />
              <span>Next-Generation Digital Engineering</span>
            </div>

            <h1 className="hero-title">
              Building <span className="text-gradient">Intelligent Digital Solutions</span> for a Smarter Future.
            </h1>

            <p className="hero-description">
              AIOIN helps businesses transform ideas into scalable digital products through modern software engineering, AI, cloud technologies, and powerful digital experiences.
            </p>

            <div className="hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                Explore Our Work
              </Button>
            </div>

            <div className="hero-badges-strip">
              <div className="hero-feature-pill">
                <ShieldCheck size={18} />
                <span>Enterprise Security</span>
              </div>
              <div className="hero-feature-pill">
                <Zap size={18} />
                <span>High Performance</span>
              </div>
              <div className="hero-feature-pill">
                <Cpu size={18} />
                <span>AI-Powered Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Tech & AI Sphere Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual-wrapper"
          >
            <div className="tech-globe-container">
              {/* Outer Orbit Rings */}
              <div className="orbit-ring orbit-1" />
              <div className="orbit-ring orbit-2" />

              {/* Core AI Sphere */}
              <div className="tech-core-sphere" style={{ overflow: 'hidden', padding: 0, border: '2px solid rgba(255,255,255,0.1)' }}>
                <img src="/icon.jpeg" alt="AIOIN Core Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Floating Technology Feature Cards */}
              <div className="floating-card floating-card-1">
                <div className="float-icon blue">
                  <Cpu size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Intelligence</div>
                  <div>AI & Machine Learning</div>
                </div>
              </div>

              <div className="floating-card floating-card-2">
                <div className="float-icon purple">
                  <Cloud size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Architecture</div>
                  <div>Cloud Native & DevOps</div>
                </div>
              </div>

              <div className="floating-card floating-card-3">
                <div className="float-icon cyan">
                  <Database size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Reliability</div>
                  <div>99.99% Uptime SLA</div>
                </div>
              </div>

              <div className="floating-card floating-card-4">
                <div className="float-icon green">
                  <Server size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Scale</div>
                  <div>10K+ Req / Second</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
