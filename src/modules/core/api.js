/**
 * Core module public API
 */

import { eventBus, events } from './events';
import * as Sentry from '@sentry/browser';

export const api = {
  /**
   * Log an error to Sentry and console
   * @param {Error} error - The error to log
   * @param {Object} context - Additional context for the error
   */
  logError(error, context = {}) {
    console.error('Error:', error);
    Sentry.captureException(error, { extra: context });
    eventBus.publish(events.ERROR_OCCURRED, { error, context });
  },
  
  /**
   * Track a page view
   * @param {string} pageName - Name of the page
   * @param {Object} metadata - Additional metadata
   */
  trackPageView(pageName, metadata = {}) {
    eventBus.publish(events.PAGE_VIEW, { pageName, metadata });
  }
};