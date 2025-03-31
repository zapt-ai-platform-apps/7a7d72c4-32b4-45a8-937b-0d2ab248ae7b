import { createValidator } from '@/modules/core/validators';

/**
 * Navigation item schema
 */
export const navigationItemSchema = {
  text: { required: true, type: 'string' },
  path: { required: true, type: 'string' },
  external: { required: true, type: 'boolean' },
  highlight: { required: false, type: 'boolean' }
};

/**
 * Create validator
 */
export const validateNavigationItem = createValidator(navigationItemSchema, 'NavigationItem');