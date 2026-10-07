import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './Button';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <AlertTriangle size={32} />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Something Went Wrong</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: '2rem' }}>
            An unexpected error occurred while rendering this view. Our engineering team has been notified.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" icon={RefreshCw} onClick={this.handleReload}>
              Reload Page
            </Button>
            <Button to="/" variant="secondary" icon={Home}>
              Return Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
