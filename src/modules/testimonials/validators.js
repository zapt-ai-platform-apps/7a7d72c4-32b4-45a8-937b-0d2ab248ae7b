import { createValidator } from '@/modules/core/validators';

/**
 * Testimonial schema
 */
export const testimonialSchema = {
  quote: { required: true, type: 'string' },
  name: { required: true, type: 'string' },
  position: { required: true, type: 'string' }
};

/**
 * Create validator
 */
export const validateTestimonial = createValidator(testimonialSchema, 'Testimonial');