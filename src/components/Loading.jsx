import React from 'react';

export function Loading({ message = 'Loading intelligent solutions...' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        padding: '3rem',
        gap: '1.25rem',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          border: '3px solid var(--border)',
          borderTopColor: 'var(--secondary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 500 }}>
        {message}
      </p>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)' }} />
      <div className="skeleton" style={{ width: '60%', height: 24 }} />
      <div className="skeleton" style={{ width: '100%', height: 16 }} />
      <div className="skeleton" style={{ width: '85%', height: 16 }} />
    </div>
  );
}
