import React from 'react';
import { useSEO } from '../hooks/useSEO';

export function Terms() {
  useSEO({
    title: 'Terms of Service | AIOIN',
    description: 'Terms and conditions governing the use of the AIOIN website and service inquiries.',
  });

  return (
    <section className="section" style={{ paddingTop: 'calc(var(--navbar-height) + 3rem)' }}>
      <div className="container" style={{ maxWidth: 850 }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Terms & Conditions
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Last updated: October 2026</p>
        </div>

        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (aioin.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. Intellectual Property Rights
            </h2>
            <p>
              All trademarks, logos, brand names, visual interfaces, website designs, text, and source code on this website are the intellectual property of AIOIN and are protected by international copyright and intellectual property laws.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Scope of Services & Engagements
            </h2>
            <p>
              The content provided on this website is for informational and promotional purposes. Formal software development engagements, deliverables, milestones, and warranties are governed exclusively by executed Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. User Responsibilities
            </h2>
            <p>
              You agree not to misuse this website, introduce malicious software, probe vulnerabilities without written authorization, or submit fraudulent or defamatory content via our inquiry forms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              5. Third-Party Links & Resources
            </h2>
            <p>
              This website may contain links to external third-party platforms or documentation. AIOIN does not endorse or assume liability for third-party practices, content, or availability.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, AIOIN shall not be held liable for any indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to revise these Terms of Service at any time. Continued use of the website following any modifications constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              8. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms, please contact:
              <br />
              <strong>Email:</strong> legal@aioin.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
