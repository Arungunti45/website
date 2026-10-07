import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  Code,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  ShoppingCart,
  Star,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { services } from '../data/services';
import { useSEO } from '../hooks/useSEO';

const iconMap = {
  Globe,
  Smartphone,
  Bot,
  Code,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
};

export function Services() {
  useSEO({
    title: 'Services | AIOIN Software & AI Solutions',
    description: 'Explore AIOIN full-stack web, mobile, AI, custom software, UI/UX, cloud DevOps, API backend and support services.',
  });

  return (
    <>
      {/* Services Hero */}
      <section className="hero-section" style={{ paddingBottom: '3.5rem' }}>
        <div className="hero-backdrop-glow" />
        <div className="container">
          <div style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>Premium Services Catalog</span>
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
              Explore Our <span className="text-gradient">Digital Products</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
              Browse our handcrafted, high-quality engineering services structured just like a product catalog. Find the perfect solution for your business needs and add it to your project.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="section section-bg-subtle">
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
            {services.map((srv, idx) => {
              const Icon = iconMap[srv.iconName] || Globe;
              
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="product-card"
                  style={{
                    background: 'var(--surface-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Product Image */}
                  <div style={{
                    height: '220px',
                    backgroundImage: `url(${srv.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid var(--border)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8rem',
                      color: '#FFD700'
                    }}>
                      <Star size={12} fill="#FFD700" />
                      <span>5.0</span>
                    </div>
                    {/* Add a subtle dark overlay for better icon visibility */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
                    <Icon size={70} color="white" style={{ position: 'relative', zIndex: 2, dropShadow: '0 4px 10px rgba(0,0,0,0.5)' }} opacity={0.9} />
                  </div>

                  {/* Product Details */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Service • #{srv.num}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                      {srv.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {srv.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} style={{
                          fontSize: '0.75rem',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          color: 'var(--text-muted)'
                        }}>
                          {tech}
                        </span>
                      ))}
                      {srv.technologies.length > 3 && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '2px 4px' }}>+{srv.technologies.length - 3} more</span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px dashed var(--border)' }}>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Starting at</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Custom Quote</span>
                      </div>
                      
                      <Button to={`/contact?service=${srv.id}`} variant="primary" size="sm" icon={ShoppingCart}>
                        Add to Project
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
