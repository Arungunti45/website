import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export function Toast() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="toast-container" aria-live="polite">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            className={`toast-item ${toast.type}`}
          >
            {toast.type === 'success' && (
              <CheckCircle size={20} style={{ color: 'var(--emerald-accent)', flexShrink: 0 }} />
            )}
            {toast.type === 'error' && (
              <AlertCircle size={20} style={{ color: '#EF4444', flexShrink: 0 }} />
            )}
            {toast.type === 'info' && (
              <Info size={20} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
            )}

            <div style={{ flex: 1 }}>
              {toast.title && (
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                  {toast.title}
                </div>
              )}
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{toast.message}</div>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              style={{ color: 'var(--muted)', padding: '2px', borderRadius: '4px' }}
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
