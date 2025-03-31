/**
 * Consultancy module public API
 */

export const api = {
  /**
   * Get consultancy benefits list
   * @returns {Array} List of benefits
   */
  getBenefits() {
    return [
      {
        icon: 'FaHandshake',
        title: "Expert Guidance",
        description: "Work directly with our seasoned development team who understands your business needs and technical requirements."
      },
      {
        icon: 'FaLightbulb',
        title: "Strategic Insights",
        description: "Receive expert recommendations on app architecture, features, and technology to maximize your app's impact."
      },
      {
        icon: 'FaTools',
        title: "Custom Solutions",
        description: "Get tailor-made features designed specifically for your unique business challenges and opportunities."
      },
      {
        icon: 'FaShieldAlt',
        title: "Quality Assurance",
        description: "Benefit from professional testing and QA processes ensuring your app is stable and reliable."
      },
      {
        icon: 'FaChartLine',
        title: "Scaling Support",
        description: "Receive guidance on growth strategies and technical scalability as your user base expands."
      },
      {
        icon: 'FaUsers',
        title: "Ongoing Partnership",
        description: "Establish a long-term relationship with a team that understands your evolving business needs."
      }
    ];
  },
  
  /**
   * Get FAQs for consultancy
   * @returns {Array} List of FAQs
   */
  getFAQs() {
    return [
      {
        question: "How much does the guided development service cost?",
        answer: "Our guided development service follows a feature-by-feature pricing model rather than a fixed upfront cost. Each feature is quoted individually based on complexity and development time. This approach allows you to maintain budget control and pay only for completed work that meets your requirements."
      },
      {
        question: "How does the feature-by-feature process work?",
        answer: "First, we discuss your app needs and prioritize features. Then, for each feature, we provide a specific quote. Once approved, we develop that feature, you verify it meets requirements, and you pay for the completed work. This process repeats for each feature, allowing you to adjust priorities as needed."
      },
      {
        question: "How long does it take to develop an app with the guided development service?",
        answer: "Development timelines vary based on app complexity and feature scope. With our feature-by-feature approach, you'll see functional pieces of your app delivered regularly rather than waiting for a complete build. When doing guided development, we try and keep the features small and regular, and you can launch with a minimal viable product once core features are complete."
      },
      {
        question: "Can I switch between self-serve and guided development services?",
        answer: "Yes, many clients use a hybrid approach. You might start with guided development for complex core features, then use the self-serve platform for simple updates. We can recommend the best approach based on your specific needs and technical comfort level."
      },
      {
        question: "What happens if I'm not satisfied with a developed feature?",
        answer: "If a feature doesn't meet the agreed-upon requirements, we'll revise it until it does. We verify requirements before development begins and provide regular updates during the process to prevent misalignment. This approach ensures you only pay for features that meet your needs."
      },
      {
        question: "Do I own the code and intellectual property?",
        answer: "Yes, you own all intellectual property rights to the custom code developed specifically for your application. We provide full transparency and access to your app's codebase."
      }
    ];
  },
  
  /**
   * Submit a consultation request
   * @param {Object} formData - Form data for the consultation request
   * @returns {Promise} Promise with submission result
   */
  async submitConsultationRequest(formData) {
    // This would normally send the request to a backend API
    // For now, we'll simulate a successful submission after a delay
    console.log('Submitting consultation request:', formData);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Consultation request submitted successfully'
        });
      }, 1500);
    });
  }
};