import React from 'react';
import { FaRobot, FaBolt, FaChartLine } from 'react-icons/fa';
import { ImCog } from 'react-icons/im';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <ImCog size={40} className="text-purple-custom" />,
      title: "1. Request an Update",
      description: "Submit a request to update your app using our intuitive interface.",
    },
    {
      icon: <FaRobot size={40} className="text-purple-custom" />,
      title: "2. AI Generates Code",
      description: "Our advanced AI processes your request and generates the updated code seamlessly.",
    },
    {
      icon: <FaBolt size={40} className="text-purple-custom" />,
      title: "3. Integrations Added Automatically",
      description: "Error monitoring and web analytics are automatically integrated into your app without any code.",
    },
    {
      icon: <FaChartLine size={40} className="text-purple-custom" />,
      title: "4. Monitor and Analyze Performance",
      description: "Use error monitoring and web analytics to track your app's performance and traction over time.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-dark-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
              <p className="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}