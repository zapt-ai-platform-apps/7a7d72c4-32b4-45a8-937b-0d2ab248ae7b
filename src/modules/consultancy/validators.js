import { createValidator } from '@/modules/core/validators';

/**
 * Contact form schema
 */
export const contactFormSchema = {
  name: { required: true, type: 'string' },
  email: { 
    required: true, 
    type: 'string',
    validate: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  },
  company: { required: false, type: 'string' },
  description: { required: true, type: 'string' }
};

/**
 * Benefit schema
 */
export const benefitSchema = {
  icon: { required: true, type: 'string' },
  title: { required: true, type: 'string' },
  description: { required: true, type: 'string' }
};

/**
 * FAQ schema
 */
export const faqSchema = {
  question: { required: true, type: 'string' },
  answer: { required: true, type: 'string' }
};

// Create validators
export const validateContactForm = createValidator(contactFormSchema, 'ContactForm');
export const validateBenefit = createValidator(benefitSchema, 'Benefit');
export const validateFAQ = createValidator(faqSchema, 'FAQ');