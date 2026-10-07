import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { useSEO } from '../hooks/useSEO';

export function Contact() {
  useSEO({
    title: 'Contact Us | Start Your Project with AIOIN',
    description: 'Get in touch with AIOIN engineering team. Request a proposal, estimate, or technical consultation for your software project.',
  });

  return (
    <>
      {/* Contact Hero */}
      <section className="hero-section" style={{ paddingBottom: '3rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Initiate Collaboration</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
              Have an upcoming product or need to scale existing software? Share your requirements and our solutions architects will prepare a comprehensive technical proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section section-bg-subtle" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Info */}
            <div className="contact-info-panel">
              <div className="contact-card-info">
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Direct Inquiries</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Our engineering and business development teams typically reply within 24 business hours.
                </p>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Email Inquiries
                    </div>
                    <a href="mailto:contact@aioin.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      contact@aioin.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Phone & WhatsApp
                    </div>
                    <a href="tel:+18005552464" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      +1 (800) 555-AIOIN
                    </a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Development Hubs
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      Global Technology Delivery Centers
                    </div>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Response Commitment
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      Under 24 Hours SLA
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Box */}
              <div
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={22} style={{ color: 'var(--emerald-accent)' }} />
                  <h4 style={{ fontSize: '1.1rem' }}>Confidentiality Guarantee</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Your IP, product blueprints, and ideas are safe with us. We gladly execute mutual Non-Disclosure Agreements (NDAs) prior to detailed architecture discussions.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
