import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="bg-charcoal-gray border border-purple-custom rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-neon-yellow rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl font-bold mb-4 text-center text-white">{title}</h4>
      <p className="text-center text-lg text-light-gray">{description}</p>
    </div>
  );
}