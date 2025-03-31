import { initializeCore } from './core/internal/initialize';
import { initializeNavigation } from './navigation/internal/initialize';
import { initializeLanding } from './landing/internal/initialize';
import { initializeTestimonials } from './testimonials/internal/initialize';
import { initializeFooter } from './footer/internal/initialize';
import { initializeConsultancy } from './consultancy/internal/initialize';

// Export core public API for easy access
import { api as coreApi } from './core/api';

export { coreApi };

/**
 * Initialize all modules
 * @returns {Promise<boolean>} True if initialization was successful
 */
export async function initializeModules() {
  console.log('Initializing all modules');
  
  try {
    // Initialize modules in parallel
    const results = await Promise.all([
      initializeCore(),
      initializeNavigation(),
      initializeLanding(),
      initializeTestimonials(),
      initializeFooter(),
      initializeConsultancy()
    ]);
    
    // Check if all modules initialized successfully
    const allSuccessful = results.every(result => result.success);
    
    if (allSuccessful) {
      console.log('All modules initialized successfully');
    } else {
      console.error('Some modules failed to initialize:', 
        results.filter(result => !result.success));
    }
    
    return allSuccessful;
  } catch (error) {
    console.error('Error initializing modules:', error);
    return false;
  }
}