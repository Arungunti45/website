/**
 * Career Application Service
 * Handles candidate job applications and resume details.
 * Initially uses localStorage in demo mode; can easily be configured to POST to a live backend.
 */

const STORAGE_KEY = 'aioin_career_applications';
const API_URL = import.meta.env.VITE_CAREER_API_URL || null;

export const careerService = {
  /**
   * Submit a job application
   * @param {Object} applicationData
   * @returns {Promise<{success: boolean, message: string, data?: Object}>}
   */
  async submitApplication(applicationData) {
    if (API_URL) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(applicationData),
        });

        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }

        const data = await response.json();
        return {
          success: true,
          message: 'Application submitted successfully! Our talent acquisition team will review your profile.',
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
      id: 'app_' + Date.now(),
      submittedAt: new Date().toISOString(),
      ...applicationData,
    };

    existing.unshift(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

    return {
      success: true,
      message: 'Application submitted successfully! Our talent acquisition team will review your profile.',
      data: newEntry,
    };
  },

  /**
   * Retrieve all locally stored applications
   */
  getStoredApplications() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
};
