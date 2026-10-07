import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';
import { Button } from './Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const { scrolled } = useScroll(30);
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="AIOIN Home">
            <div className="logo-icon">
              <Sparkles size={20} />
            </div>
            <span>
              AIO<span className="logo-text-accent">IN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links-desktop">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-item-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Theme Toggle + CTA + Hamburger */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <div className="desktop-cta-btn" style={{ display: 'none' }}>
              {/* Fallback container */}
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="desktop-only-btn"
              style={{ display: 'inline-flex' }}
            >
              Start a Project
            </Button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-drawer-overlay"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="mobile-drawer"
            >
              <div>
                <div className="mobile-drawer-header">
                  <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
                    <div className="logo-icon">
                      <Sparkles size={20} />
                    </div>
                    <span>
                      AIO<span className="logo-text-accent">IN</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="theme-toggle-btn"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <ul className="mobile-nav-links">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `mobile-nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowRight size={16} opacity={0.6} />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mobile-drawer-footer">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Theme Mode</span>
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                    aria-label="Toggle Theme"
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
