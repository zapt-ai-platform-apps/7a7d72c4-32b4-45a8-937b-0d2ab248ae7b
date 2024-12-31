import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-neon-yellow bg-charcoal-gray text-white shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 p-8">
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-neon-yellow rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-center">{title}</h4>
      <p className="text-center text-lg text-light-gray">{description}</p>
    </div>
  );
}