/**
 * Landing module public API
 */

export const api = {
  /**
   * Get landing page feature list
   * @returns {Array} List of features
   */
  getFeatures() {
    return [
      {
        icon: 'FaMagic',
        title: 'Smart AI That Understands You',
        description: 'Describe your app in plain English - our AI handles all the technical complexity behind the scenes'
      },
      {
        icon: 'FaShieldAlt',
        title: 'Built-In Protection & Reliability',
        description: 'Automatic error monitoring and backups keep your app running smoothly 24/7'
      },
      {
        icon: 'FaUserFriends',
        title: 'Designed for Everyone',
        description: 'Create professional apps through our simple interface - no technical skills needed'
      },
      {
        icon: 'FaPuzzlePiece',
        title: 'Everything Included',
        description: 'Get databases, user logins, payments, and analytics ready-to-use in your app'
      },
      {
        icon: 'FaCoins',
        title: 'Only Pay for What You Use',
        description: 'No subscriptions or hidden fees - simple pricing based on your actual usage'
      },
      {
        icon: 'FaRocket',
        title: 'Launch Faster',
        description: 'Go from idea to live app in hours instead of months with our AI-powered platform'
      }
    ];
  },
  
  /**
   * Get featured apps list
   * @returns {Array} List of featured apps
   */
  getFeaturedApps() {
    return [
      {
        name: 'Risk Assist',
        description: 'AI-driven platform for risk identification and mitigation',
        url: 'https://riskassist.org/'
      },
      {
        name: 'Parking Disputer',
        description: 'Fight Unfair Parking Tickets with AI Assistance',
        url: 'https://parkingdisputer.zapt.app'
      },
      {
        name: 'Administrate',
        description: 'A tool to help you manage your tasks efficiently',
        url: 'https://www.administrate.co.uk/'
      },
      {
        name: 'Football Subs',
        description: 'A tool for managing a kids football team',
        url: 'https://footballsubs.com/'
      },
      {
        name: 'Construction Careers',
        description: 'Explore construction industry roles matching your skills',
        url: 'https://construct-career.zapt.app/'
      },
      {
        name: 'StatusPros',
        description: 'Professional Availability Made Simple',
        url: 'https://statuspros.zapt.app'
      }
    ];
  },
  
  /**
   * Get how it works steps
   * @returns {Array} List of steps
   */
  getHowItWorksSteps() {
    return [
      {
        icon: 'FaEdit',
        title: "1. Describe Your Update",
        description: "Provide the details of the features or changes you want in your app using our intuitive interface."
      },
      {
        icon: 'FaRobot',
        title: "2. AI Creates Your App",
        description: "Our advanced AI processes your request and generates the updated code seamlessly."
      },
      {
        icon: 'FaRocket',
        title: "3. Launch with Confidence",
        description: "Deploy your app effortlessly with all updates integrated and ready for use."
      }
    ];
  }
};