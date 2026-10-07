/**
 * Validation utilities for form inputs
 */

export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  // Allows 10-15 digits with optional +, spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  return phoneRegex.test(cleaned);
}

export function validateContactForm(values) {
  const errors = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!values.email) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (values.phone && !isValidPhone(values.phone)) {
    errors.phone = 'Please provide a valid phone number (min 7 digits).';
  }

  if (!values.service) {
    errors.service = 'Please select a service.';
  }

  if (!values.message || values.message.trim().length < 15) {
    errors.message = 'Project description must be at least 15 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCareerForm(values) {
  const errors = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required.';
  }

  if (!values.email || !isValidEmail(values.email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!values.phone || !isValidPhone(values.phone)) {
    errors.phone = 'A valid phone number is required.';
  }

  if (!values.experience) {
    errors.experience = 'Please specify your years of experience.';
  }

  if (!values.portfolioUrl && !values.resumeSummary) {
    errors.resumeSummary = 'Please provide a portfolio/LinkedIn link or a brief summary.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
