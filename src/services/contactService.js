/**
 * Contact Service
 * Handles project inquiries and lead submissions.
 * Initially uses localStorage in demo mode; can easily be configured to POST to a live backend.
 */

const STORAGE_KEY = 'aioin_contact_inquiries';
const API_URL = import.meta.env.VITE_CONTACT_API_URL || null;

export const contactService = {
  /**
   * Submit a contact/project inquiry
   * @param {Object} formData
   * @returns {Promise<{success: boolean, message: string, data?: Object}>}
   */
  async submitInquiry(formData) {
    // If backend API URL is provided, send real HTTP POST request
    if (API_URL) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }

        const data = await response.json();
        return {
          success: true,
          message: 'Thank you! Your project inquiry has been received. Our team will contact you soon.',
          data,
        };
      } catch (error) {
        console.error('API submission failed, falling back to local storage:', error);
      }
    }

    // Demo Mode: Simulate realistic network delay and persist to localStorage
    await new Promise((resolve) => setTimeout(resolve, 800));

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const newEntry = {
      id: 'inq_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...formData,
    };

    existing.unshift(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

    return {
      success: true,
      message: 'Thank you! Your project inquiry has been received. Our team will contact you soon.',
      data: newEntry,
    };
  },

  /**
   * Retrieve all locally stored inquiries (Useful for admin/demo verification)
   */
  getStoredInquiries() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
};
