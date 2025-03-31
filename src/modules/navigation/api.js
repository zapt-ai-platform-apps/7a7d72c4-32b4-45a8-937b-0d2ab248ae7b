/**
 * Navigation module public API
 */

export const api = {
  /**
   * Get navigation items
   * @returns {Array} List of navigation items
   */
  getNavigationItems() {
    return [
      {
        text: 'Home',
        path: '/',
        external: false
      },
      {
        text: 'Guided Development',
        path: '/development',
        external: false
      },
      {
        text: 'Login',
        path: 'https://v2.zapt.ai/',
        external: true,
        highlight: true
      }
    ];
  }
};