import { createValidator } from '@/modules/core/validators';

/**
 * Social link schema
 */
export const socialLinkSchema = {
  name: { required: true, type: 'string' },
  icon: { required: true, type: 'string' },
  url: { required: true, type: 'string', validate: url => url.startsWith('http') }
};

/**
 * Footer link schema
 */
export const footerLinkSchema = {
  text: { required: true, type: 'string' },
  url: { required: true, type: 'string' }
};

/**
 * Create validators
 */
export const validateSocialLink = createValidator(socialLinkSchema, 'SocialLink');
export const validateFooterLink = createValidator(footerLinkSchema, 'FooterLink');