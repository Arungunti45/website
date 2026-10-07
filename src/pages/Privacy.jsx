import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ShieldCheck } from 'lucide-react';

export function Privacy() {
  useSEO({
    title: 'Privacy Policy | AIOIN',
    description: 'Privacy policy for AIOIN website and digital engineering services.',
  });

  return (
    <section className="section" style={{ paddingTop: 'calc(var(--navbar-height) + 3rem)' }}>
      <div className="container" style={{ maxWidth: 850 }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Legal Transparency
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Privacy Policy</h1>
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
              1. Information We Collect
            </h2>
            <p>
              When you visit AIOIN website, submit a project inquiry, or apply for career openings, we may collect the following categories of information:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Contact Information:</strong> Name, business email address, telephone number, and company name.</li>
              <li><strong>Project Data:</strong> Technical requirements, budget ranges, and project descriptions shared via our forms.</li>
              <li><strong>Candidate Data:</strong> Resumes, employment histories, portfolio URLs, and cover notes.</li>
              <li><strong>Technical Log Data:</strong> IP addresses, browser types, device identifiers, and anonymized site interaction telemetry.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. How We Use Your Information
            </h2>
            <p>We use collected data strictly for legitimate business objectives, including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Responding to project inquiries and delivering customized architecture proposals.</li>
              <li>Evaluating candidate suitability for open engineering and design positions.</li>
              <li>Maintaining and improving the performance, security, and accessibility of our website.</li>
              <li>Complying with applicable legal, fiscal, and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              We use essential cookies and lightweight local storage solely to remember user theme preferences (light/dark mode) and maintain secure session state. We do not sell your personal data or utilize intrusive third-party behavioral ad trackers.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. Data Protection & Security
            </h2>
            <p>
              AIOIN enforces industry-standard technical and organizational security controls (including TLS encryption at transit, hashed credentials, and role-based access restrictions) to protect your personal data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              5. Third-Party Service Providers
            </h2>
            <p>
              We may utilize vetted cloud infrastructure providers (such as AWS and Cloudflare) solely for hosting and delivering our services under strict confidentiality and data protection agreements.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              6. Your Privacy Rights
            </h2>
            <p>
              Depending on your location (such as under GDPR or CCPA), you may have the right to request access to, correction of, or deletion of your personal data stored with us.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              7. Contact Our Privacy Officer
            </h2>
            <p>
              For any questions regarding this Privacy Policy or data requests, please reach out to:
              <br />
              <strong>Email:</strong> privacy@aioin.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
