import React from 'react';
import { FaEdit, FaRobot, FaRocket } from 'react-icons/fa';
import { api } from '../api';
import HowItWorksDetails from './HowItWorksDetails';
import HowItWorksSteps from './HowItWorksSteps';

export default function HowItWorksSection() {
  const stepsData = api.getHowItWorksSteps();
  
  // Map icons to components
  const iconMap = {
    'FaEdit': <FaEdit size={40} className="text-purple-custom" />,
    'FaRobot': <FaRobot size={40} className="text-purple-custom" />,
    'FaRocket': <FaRocket size={40} className="text-purple-custom" />
  };
  
  const steps = stepsData.map(step => ({
    ...step,
    icon: iconMap[step.icon]
  }));

  return (
    <section id="how-it-works" className="bg-dark-navy text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-16 text-center">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center cursor-pointer">
              <div className="flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-4">{step.title}</h4>
              <p className="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* The components are now properly imported and can be used here if needed */}
        <div className="sr-only">
          <HowItWorksSteps />
          <HowItWorksDetails />
        </div>
      </div>
    </section>
  );
}