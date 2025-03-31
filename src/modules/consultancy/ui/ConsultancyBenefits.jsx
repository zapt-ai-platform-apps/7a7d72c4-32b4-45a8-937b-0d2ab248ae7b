import React from 'react';
import {
  FaHandshake,
  FaLightbulb,
  FaTools,
  FaShieldAlt,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';
import { api } from '../api';
import { validateBenefit } from '../validators';

export default function ConsultancyBenefits() {
  const benefitsData = api.getBenefits();
  
  // Map icons to components
  const iconMap = {
    'FaHandshake': <FaHandshake size={40} className="text-neon-yellow" />,
    'FaLightbulb': <FaLightbulb size={40} className="text-neon-yellow" />,
    'FaTools': <FaTools size={40} className="text-neon-yellow" />,
    'FaShieldAlt': <FaShieldAlt size={40} className="text-neon-yellow" />,
    'FaChartLine': <FaChartLine size={40} className="text-neon-yellow" />,
    'FaUsers': <FaUsers size={40} className="text-neon-yellow" />
  };
  
  // Validate and prepare benefits
  const benefits = benefitsData.map(benefit => {
    try {
      const validatedBenefit = validateBenefit(benefit, {
        actionName: 'renderBenefits',
        location: 'ConsultancyBenefits.jsx',
        direction: 'incoming',
        moduleFrom: 'api',
        moduleTo: 'ui'
      });
      
      return {
        ...validatedBenefit,
        icon: iconMap[validatedBenefit.icon]
      };
    } catch (error) {
      console.error('Invalid benefit:', error);
      return null;
    }
  }).filter(Boolean);

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-gray to-dark-navy">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Why Choose Our Consultancy
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-light-gray">
          Our hand-held consultancy service provides the perfect balance of guidance and control, 
          giving you a custom-built app without the technical headaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-deep-space rounded-xl shadow-xl border-t border-purple-custom hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neon-yellow">{benefit.title}</h3>
              <p className="text-light-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-purple-custom/20 rounded-xl border border-purple-custom">
          <h3 className="text-3xl font-bold mb-6 text-center text-white">When to Choose Consultancy vs. Self-Serve</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-navy p-6 rounded-lg">
              <h4 className="text-2xl font-bold mb-4 text-center text-neon-yellow">Choose Consultancy When:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You need complex custom functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You want expert input on app architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>Your app requires integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You prefer hands-off development with verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You need a long-term development partner</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-navy p-6 rounded-lg">
              <h4 className="text-2xl font-bold mb-4 text-center text-neon-yellow">Choose Self-Serve When:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You want to build simple apps quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You prefer a hands-on approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>Your app needs are straightforward</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You want the lowest cost option</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">✓</span>
                  <span>You enjoy learning as you build</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}