import React from 'react';

export default function WhyZaptSection() {
  const reasons = [
    {
      title: "Built for Everyone, Not Just Developers",
      description: "Create professional apps through our easy-to-use platform - no coding or technical skills required.",
    },
    {
      title: "Production-Ready from Day One",
      description: "Every app comes with built-in error monitoring, analytics, database management, and essential integrations.",
    },
  ];

  return (
    <section id="why-zapt" className="bg-dark-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Why ZAPT?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-charcoal-gray p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer">
              <h4 className="text-2xl font-semibold mb-4">{reason.title}</h4>
              <p className="text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}