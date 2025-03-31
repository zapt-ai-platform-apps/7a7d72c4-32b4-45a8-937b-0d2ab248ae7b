import { initializeCore } from './core/internal/initialize';
import { initializeLanding } from './landing/internal/initialize';
import { initializeTestimonials } from './testimonials/internal/initialize';
import { initializeConsultancy } from './consultancy/internal/initialize';
import { initializeNavigation } from './navigation/internal/initialize';
import { initializeFooter } from './footer/internal/initialize';

/**
 * Initialize all modules
 */
export async function initializeModules() {
  console.log('Initializing modules...');
  
  try {
    // Initialize core module first
    await initializeCore();
    
    // Initialize other modules in parallel
    await Promise.all([
      initializeLanding(),
      initializeTestimonials(),
      initializeConsultancy(),
      initializeNavigation(),
      initializeFooter()
    ]);
    
    console.log('All modules initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing modules:', error);
    return false;
  }
}

// Export module APIs
export { api as coreApi } from './core/api';
export { api as landingApi } from './landing/api';
export { api as testimonialsApi } from './testimonials/api';
export { api as consultancyApi } from './consultancy/api';
export { api as navigationApi } from './navigation/api';
export { api as footerApi } from './footer/api';

// Export events
export { events as coreEvents } from './core/events';
export { events as landingEvents } from './landing/events';
export { events as testimonialsEvents } from './testimonials/events';
export { events as consultancyEvents } from './consultancy/events';
export { events as navigationEvents } from './navigation/events';
export { events as footerEvents } from './footer/events';

// Export event bus
export { eventBus } from './core/events';