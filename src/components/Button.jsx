import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses = 'aioin-btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const combinedClass = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <span className="btn-spinner" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="btn-icon" size={18} />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="btn-icon" size={18} />}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled || loading}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}

// Add embedded button styling in globals or component styles
