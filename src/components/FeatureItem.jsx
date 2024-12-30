import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-gray-700 bg-charcoal-gray text-white shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 p-6">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 bg-neon-yellow rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
      <p className="text-center text-lg text-light-gray">{description}</p>
    </div>
  );
}