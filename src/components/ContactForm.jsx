import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { validateContactForm } from '../utils/validation';
import { contactService } from '../services/contactService';
import { useToast } from '../hooks/useToast';

const serviceOptions = [
  'Web Application Development',
  'Mobile Application Development',
  'AI & Automation Solutions',
  'Custom Software Development',
  'UI/UX Product Design',
  'Cloud & DevOps Engineering',
  'API & Backend Architecture',
  'Enterprise Maintenance & Support',
];

const budgetOptions = ['< $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'];

export function ContactForm() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: serviceOptions[0],
    budget: budgetOptions[1],
    message: '',
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

  const handleBudgetSelect = (b) => {
    setFormData((prev) => ({ ...prev, budget: b }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      addToast({
        title: 'Validation Notice',
        message: 'Please resolve the highlighted form fields before submitting.',
        type: 'error',
      });
      return;
    }

    setLoading(true);

    try {
      const res = await contactService.submitInquiry(formData);
      setLoading(false);
      setSubmitted(true);
      addToast({
        title: 'Inquiry Received',
        message: res.message,
        type: 'success',
      });
    } catch (err) {
      setLoading(false);
      addToast({
        title: 'Submission Issue',
        message: 'An error occurred while saving your inquiry. Please try again.',
        type: 'error',
      });
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="form-wrapper"
        style={{ textAlign: 'center', padding: '3.5rem 2rem' }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.12)',
            color: 'var(--emerald-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Inquiry Received!</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 450, margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Thank you! Your project inquiry has been received. Our team will contact you within 24 business hours.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              company: '',
              service: serviceOptions[0],
              budget: budgetOptions[1],
              message: '',
            });
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`form-input ${errors.fullName ? 'error' : ''}`}
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="form-error-msg">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="company">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="form-input"
            placeholder="Acme Corp"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="service">
            Interested Service *
          </label>
          <select
            id="service"
            name="service"
            className="form-select"
            value={formData.service}
            onChange={handleChange}
          >
            {serviceOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label className="form-label">Estimated Budget (USD)</label>
          <div className="budget-options-grid">
            {budgetOptions.map((b, idx) => (
              <button
                key={idx}
                type="button"
                className={`budget-option-btn ${formData.budget === b ? 'selected' : ''}`}
                onClick={() => handleBudgetSelect(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="message">
            Project Description & Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Describe your project vision, target timeline, and technology preferences..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="form-error-msg">{errors.message}</span>}
        </div>

        <div className="form-group full-width" style={{ marginTop: '0.5rem' }}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            icon={Send}
            style={{ width: '100%' }}
          >
            Submit Project Inquiry
          </Button>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
            We respect your confidentiality. An NDA is available upon request.
          </p>
        </div>
      </div>
    </form>
  );
}
