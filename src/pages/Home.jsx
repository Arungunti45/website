import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
  Code2,
  TrendingUp,
  Award,
  Users,
  Lock,
  Compass,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { SolutionCard } from '../components/SolutionCard';
import { TechnologyCard } from '../components/TechnologyCard';
import { IndustryCard } from '../components/IndustryCard';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { services } from '../data/services';
import { solutions } from '../data/solutions';
import { technologies } from '../data/technologies';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';

const workflowSteps = [
  { num: '01', title: 'Discover', desc: 'Understanding your business goals, target audience, and operational constraints.' },
  { num: '02', title: 'Strategy', desc: 'Architecting solution blueprints, data pipelines, tech stacks, and delivery roadmaps.' },
  { num: '03', title: 'Design', desc: 'Crafting user-centric UI/UX design systems and interactive high-fidelity prototypes.' },
  { num: '04', title: 'Development', desc: 'Writing clean, scalable, and modular full-stack code backed by continuous integration.' },
  { num: '05', title: 'Testing', desc: 'Automated test suites, penetration checks, load simulation, and QA validation.' },
  { num: '06', title: 'Deployment', desc: 'Zero-downtime containerized production releases on high-availability cloud.' },
  { num: '07', title: 'Support', desc: '24/7 telemetry monitoring, SLA-backed maintenance, and iterative enhancements.' },
];

const whyAioinPoints = [
  {
    icon: Sparkles,
    title: 'Innovation-First Mindset',
    desc: 'We integrate practical AI, automation, and modern full-stack architectures that create unfair competitive advantages.',
  },
  {
    icon: Layers,
    title: 'Engineered for Scalability',
    desc: 'From day one, systems are structured with microservices or clean modular monoliths that effortlessly handle 10x traffic spikes.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    desc: 'Zero-trust design, end-to-end data encryption, strict RBAC, and SOC-2 / ISO compliance best practices.',
  },
  {
    icon: Zap,
    title: 'High-Performance SLAs',
    desc: 'Sub-second API latency, optimized database queries, and lightweight frontend bundles maximizing Core Web Vitals.',
  },
  {
    icon: Compass,
    title: 'Radical Transparency',
    desc: 'Agile sprints, direct Slack channels with engineers, live staging environments, and weekly milestone demos.',
  },
  {
    icon: Award,
    title: 'Long-Term Partnership',
    desc: 'We operate as your dedicated technology arm, supporting your product roadmap long after initial deployment.',
  },
];

const filterCategories = ['All', 'Web', 'Mobile', 'AI', 'FinTech', 'Enterprise'];

export function Home() {
  useSEO({
    title: 'AIOIN | Intelligent Digital Solutions & Software Development',
    description: 'AIOIN builds scalable web, mobile, AI, cloud and custom software solutions for modern businesses worldwide.',
    keywords: 'AIOIN, Software Development, AI Solutions, Web Development, Mobile Apps, Cloud Engineering',
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects.slice(0, 3)
      : projects.filter((p) => p.filterCategory === activeFilter || p.category === activeFilter);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section */}
      <Stats />

      {/* 3. About Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge" style={{ marginBottom: '1rem' }}>
                About AIOIN
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Technology That Solves <span className="text-gradient">Real Business Problems</span>
              </h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                AIOIN transforms complex business challenges into intuitive, high-performance digital products. We combine strategic design thinking with resilient engineering to help companies outpace their competitors.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Whether you need a high-concurrency fintech platform, a predictive AI-driven campus system, or an enterprise ERP suite, we deliver reliable, compliant, and scalable software.
              </p>

              <ul className="feature-list" style={{ marginBottom: '2rem' }}>
                <li className="feature-list-item">
                  <div className="feature-icon-wrapper">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Full-Stack Innovation:</strong> Modern React frontends, robust Python & Node backends, and AI pipelines.
                  </div>
                </li>
                <li className="feature-list-item">
                  <div className="feature-icon-wrapper">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Architectural Integrity:</strong> Cloud-native architectures deployed on AWS with automated CI/CD.
                  </div>
                </li>
                <li className="feature-list-item">
                  <div className="feature-icon-wrapper">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Tangible Business Impact:</strong> Digital solutions engineered to reduce operational overhead and drive revenue.
                  </div>
                </li>
              </ul>

              <Button to="/about" variant="primary" icon={ArrowRight}>
                Discover AIOIN
              </Button>
            </motion.div>

            {/* Right: Technology Grid Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>
                  AIOIN Core Engine v3.4
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <Cpu size={22} style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>AI Orchestration</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>LLMs, Predictive Models & Automation</div>
                </div>

                <div style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <Layers size={22} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>Microservices</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>High-speed REST & WebSocket Channels</div>
                </div>

                <div style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <ShieldCheck size={22} style={{ color: 'var(--emerald-accent)', marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>Zero-Trust Vault</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>AES-256 & Multi-factor Guardrails</div>
                </div>

                <div style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <Zap size={22} style={{ color: 'var(--amber-accent)', marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>Real-Time Feeds</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Sub-50ms Pub/Sub Rate Streams</div>
                </div>
              </div>

              <div style={{ background: 'var(--grad-mesh)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>Active Architecture Status:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--emerald-accent)', fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald-accent)', display: 'inline-block' }} />
                  99.99% Operational
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="What We Build"
            title="Comprehensive Technology Services"
            subtitle="End-to-end software development, AI solutions, and cloud architecture built to propel business growth."
          />

          <div className="cards-grid-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              View All Services & Methodology
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Solutions Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Industry Solutions"
            title="Engineered for High-Impact Domains"
            subtitle="Tailored digital solutions solving complex sector-specific operational bottlenecks."
          />

          <div className="cards-grid-4">
            {solutions.slice(0, 8).map((solution, idx) => (
              <SolutionCard key={solution.id} solution={solution} index={idx} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/solutions" variant="secondary" size="lg" icon={ArrowRight}>
              Explore All Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Technologies Section */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="Our Tech Stack"
            title="Modern Engineering Ecosystem"
            subtitle="We utilize proven, enterprise-grade frameworks, databases, and cloud platforms."
          />

          <div className="cards-grid-3">
            {technologies.map((cat, idx) => (
              <TechnologyCard key={idx} categoryData={cat} index={idx} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/technologies" variant="outline" size="lg" icon={ArrowRight}>
              Deep Dive into Technologies
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Featured Portfolio Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Selected Works"
            title="Featured Case Studies"
            subtitle="Explore how AIOIN built custom fintech, wellness, recruitment, and AI systems."
          />

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--secondary)' : 'var(--border)',
                  background: activeFilter === cat ? 'var(--secondary)' : 'var(--surface-card)',
                  color: activeFilter === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cards-grid-3">
            {filteredProjects.map((proj, idx) => (
              <ProjectCard key={proj.id} project={proj} index={idx} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/portfolio" variant="primary" size="lg" icon={ArrowRight}>
              View All {projects.length} Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Process Section: From Idea to Impact */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="Delivery Methodology"
            title="From Idea to Impact"
            subtitle="Our systematic, 7-step engineering process designed for on-time, bug-free execution."
          />

          <div className="process-grid">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="process-card"
              >
                <div className="process-step-num">{step.num}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industries Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Sectors"
            title="Industries We Empower"
            subtitle="Deep domain experience across regulated fintech, healthcare, education, retail, and enterprise ERP."
          />

          <div className="cards-grid-3">
            {industries.slice(0, 6).map((ind, idx) => (
              <IndustryCard key={ind.id} industry={ind} index={idx} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/industries" variant="secondary" size="lg" icon={ArrowRight}>
              View All Industries
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Why AIOIN Section */}
      <section className="section section-bg-subtle">
        <div className="container">
          <SectionHeading
            badge="The AIOIN Advantage"
            title="Why Leading Businesses Choose AIOIN"
            subtitle="We don't just build software — we engineer dependable, scalable digital assets that fuel company growth."
          />

          <div className="cards-grid-3">
            {whyAioinPoints.map((item, idx) => {
              const Icon = item.icon;
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
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <CTASection />
    </>
  );
}
