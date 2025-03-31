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

  // Select only the top 3 benefits to show
  const topBenefits = benefits.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-gray to-dark-navy">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Why Choose Our Consultancy
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-light-gray">
          Our consultancy service provides expert guidance and technical expertise for your app development journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-deep-space rounded-xl shadow-xl border-t border-purple-custom hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neon-yellow">{benefit.title}</h3>
              <p className="text-light-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-neon-yellow text-dark-navy font-bold py-3 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer">
            Learn More About Our Approach
          </a>
        </div>
      </div>
    </section>
  );
}