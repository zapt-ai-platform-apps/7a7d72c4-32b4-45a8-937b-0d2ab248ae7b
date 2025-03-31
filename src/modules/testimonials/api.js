/**
 * Testimonials module public API
 */

import { getTestimonials } from './internal/services';

export const api = {
  /**
   * Get all testimonials
   * @returns {Array} List of testimonials
   */
  getTestimonials() {
    return getTestimonials();
  }
};