import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { validateCareerForm } from '../utils/validation';
import { careerService } from '../services/careerService';
import { useToast } from '../hooks/useToast';

export function CareerCard({ job, index = 0 }) {
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: job.experience,
    portfolioUrl: '',
    resumeSummary: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    const validation = validateCareerForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      addToast({
        title: 'Validation Notice',
        message: 'Please fill in the required application fields.',
        type: 'error',
      });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        jobId: job.id,
        jobTitle: job.title,
        ...formData,
      };
      const res = await careerService.submitApplication(payload);
      setLoading(false);
      setSubmitted(true);
      addToast({
        title: 'Application Received',
        message: res.message,
        type: 'success',
      });
    } catch (err) {
      setLoading(false);
      addToast({
        title: 'Error',
        message: 'Failed to submit application. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="career-card"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="badge">{job.department}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>{job.type}</span>
          </div>

          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{job.title}</h3>

          <div className="career-meta-strip">
            <div className="career-meta-item">
              <Clock size={15} />
              <span>{job.experience}</span>
            </div>
            <div className="career-meta-item">
              <MapPin size={15} />
              <span>{job.location}</span>
            </div>
          </div>

          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            {job.description}
          </p>
        </div>

        <div>
          <div className="service-tech-tags" style={{ marginBottom: '1.5rem' }}>
            {job.skills.map((skill, sIdx) => (
              <span key={sIdx} className="tech-tag">
                {skill}
              </span>
            ))}
          </div>

          <Button
            variant="secondary"
            size="md"
            icon={ArrowRight}
            style={{ width: '100%' }}
            onClick={() => setModalOpen(true)}
          >
            Apply for Position
          </Button>
        </div>
      </motion.div>

      {/* Application Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="modal-content-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="badge" style={{ marginBottom: '0.5rem' }}>
                    Job Application
                  </span>
                  <h3 style={{ fontSize: '1.4rem' }}>{job.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {job.location} • {job.type}
                  </p>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: 'var(--emerald-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Application Submitted!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you for applying to AIOIN. Our talent team will evaluate your background and reach out soon.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setModalOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} noValidate>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cand-fullName">
                        Full Name *
                      </label>
                      <input
                        id="cand-fullName"
                        name="fullName"
                        type="text"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cand-email">
                        Email Address *
                      </label>
                      <input
                        id="cand-email"
                        name="email"
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cand-phone">
                        Phone Number *
                      </label>
                      <input
                        id="cand-phone"
                        name="phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+1 555-0199"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cand-exp">
                        Years of Experience *
                      </label>
                      <input
                        id="cand-exp"
                        name="experience"
                        type="text"
                        className={`form-input ${errors.experience ? 'error' : ''}`}
                        placeholder="e.g. 4 years"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="cand-portfolio">
                        Portfolio / GitHub / LinkedIn URL
                      </label>
                      <input
                        id="cand-portfolio"
                        name="portfolioUrl"
                        type="url"
                        className="form-input"
                        placeholder="https://linkedin.com/in/username or https://github.com/username"
                        value={formData.portfolioUrl}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="cand-summary">
                        Candidate Summary / Cover Note *
                      </label>
                      <textarea
                        id="cand-summary"
                        name="resumeSummary"
                        rows={3}
                        className={`form-textarea ${errors.resumeSummary ? 'error' : ''}`}
                        placeholder="Tell us about your core technical highlights and key achievements..."
                        value={formData.resumeSummary}
                        onChange={handleChange}
                      />
                      {errors.resumeSummary && (
                        <span className="form-error-msg">{errors.resumeSummary}</span>
                      )}
                    </div>

                    <div className="form-group full-width" style={{ marginTop: '0.75rem' }}>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        loading={loading}
                        style={{ width: '100%' }}
                      >
                        Submit Application
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
