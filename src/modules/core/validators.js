import * as Sentry from '@sentry/browser';

/**
 * Creates a validator function for the given schema
 * @param {Object} schema - Schema to validate against
 * @param {string} contextName - Name of what's being validated
 * @returns {function} - Enhanced validator function 
 */
export const createValidator = (schema, contextName) => {
  /**
   * Validates data against the schema
   * @param {any} data - Data to validate
   * @param {Object} options - Additional validation context
   * @returns {any} - The validated data
   */
  return (data, options = {}) => {
    const {
      actionName = 'unknown',
      location = 'unknown',
      direction = 'unknown',
      moduleFrom = 'unknown',
      moduleTo = 'unknown'
    } = options;

    try {
      // Basic validation for now since we're not using Zod
      const validated = {};
      
      for (const [key, config] of Object.entries(schema)) {
        // Check required fields
        if (config.required && (data[key] === undefined || data[key] === null)) {
          throw new Error(`Required field '${key}' is missing`);
        }
        
        // Validate type
        if (data[key] !== undefined && config.type && typeof data[key] !== config.type) {
          throw new Error(`Field '${key}' should be of type '${config.type}'`);
        }
        
        // Apply validation function if provided
        if (config.validate && !config.validate(data[key])) {
          throw new Error(`Validation failed for field '${key}'`);
        }
        
        if (data[key] !== undefined) {
          validated[key] = data[key];
        }
      }
      
      return validated;
    } catch (error) {
      // Create full context for error reporting
      const validationContext = {
        type: contextName,
        action: actionName,
        location,
        direction,
        flow: `${moduleFrom} → ${moduleTo}`,
        timestamp: new Date().toISOString()
      };
      
      // Safe version of data for logging
      const safeData = typeof data === 'object' ? 
        JSON.stringify(data, (key, value) => 
          ['password', 'token', 'secret'].includes(key) ? '[REDACTED]' : value
        ) : String(data);
      
      // Format validation errors
      const errorMessage = `Validation failed in ${validationContext.action} (${validationContext.flow})
Context: ${contextName} (${direction})
Location: ${location}
Error: ${error.message}`;
      
      // Log to console with detailed info
      console.error(errorMessage, '\nReceived:', safeData);
      
      // Send to Sentry with full context
      Sentry.captureException(error, {
        extra: {
          ...validationContext,
          receivedData: safeData,
          validationError: error.message
        },
        tags: {
          validationType: contextName,
          validationAction: actionName,
          validationDirection: direction,
          moduleFlow: `${moduleFrom}-to-${moduleTo}`
        }
      });
      
      // Throw with improved message
      throw new Error(errorMessage);
    }
  };
};