/**
 * Footer module public API
 */

export const api = {
  /**
   * Get social links
   * @returns {Array} List of social links
   */
  getSocialLinks() {
    return [
      {
        name: 'LinkedIn',
        icon: 'FaLinkedinIn',
        url: 'https://www.linkedin.com/company/zapt-ai/'
      },
      {
        name: 'Twitter',
        icon: 'FaTwitter',
        url: 'https://twitter.com/zapt_ai'
      }
    ];
  },
  
  /**
   * Get footer links
   * @returns {Array} List of footer links
   */
  getFooterLinks() {
    return [
      {
        text: 'Contact',
        url: 'mailto:info@zapt.ai'
      },
      {
        text: 'Terms and Conditions',
        url: 'https://www.iubenda.com/terms-and-conditions/25363091'
      },
      {
        text: 'Privacy Policy',
        url: 'https://www.iubenda.com/privacy-policy/25363091'
      }
    ];
  }
};