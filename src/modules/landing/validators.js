import { createValidator } from '@/modules/core/validators';

/**
 * Feature item schema
 */
export const featureSchema = {
  icon: { required: true, type: 'string' },
  title: { required: true, type: 'string' },
  description: { required: true, type: 'string' }
};

/**
 * Featured app schema
 */
export const featuredAppSchema = {
  name: { required: true, type: 'string' },
  description: { required: true, type: 'string' },
  url: { required: true, type: 'string', validate: url => url.startsWith('http') }
};

/**
 * How it works step schema
 */
export const howItWorksStepSchema = {
  icon: { required: true, type: 'string' },
  title: { required: true, type: 'string' },
  description: { required: true, type: 'string' }
};

// Create validators
export const validateFeature = createValidator(featureSchema, 'Feature');
export const validateFeaturedApp = createValidator(featuredAppSchema, 'FeaturedApp');
export const validateHowItWorksStep = createValidator(howItWorksStepSchema, 'HowItWorksStep');