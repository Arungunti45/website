import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { scrollToTop } from '../utils/helpers';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand-logo" onClick={scrollToTop}>
              <div className="logo-icon">
                <Sparkles size={20} />
              </div>
              <span>
                AIO<span className="logo-text-accent">IN</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Building Intelligent Digital Solutions for a Smarter Future. We engineer high-performance web, mobile, AI, and enterprise applications for visionary organizations.
            </p>
            <div className="footer-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link" onClick={scrollToTop}>
                  About AIOIN
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link" onClick={scrollToTop}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link" onClick={scrollToTop}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-column-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollToTop}>
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="footer-column-title">Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollToTop}>
                  FinTech & Banking
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollToTop}>
                  Digital Gold & Wealth
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollToTop}>
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollToTop}>
                  Smart Campus & AI
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollToTop}>
                  Enterprise ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-column-title">Get in Touch</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ marginTop: '3px', color: '#60A5FA', flexShrink: 0 }} />
                <span>contact@aioin.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.9rem' }}>
                <Phone size={16} style={{ marginTop: '3px', color: '#60A5FA', flexShrink: 0 }} />
                <span>+1 (800) 555-AIOIN</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ marginTop: '3px', color: '#60A5FA', flexShrink: 0 }} />
                <span>Global Tech Delivery Centers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} AIOIN. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={scrollToTop}>
              Terms of Service
            </Link>
            <Link to="/sitemap.xml" target="_blank">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
