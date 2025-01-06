import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="rounded-xl border-4 border-neon-yellow bg-charcoal-gray text-white shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-1 p-10">
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 h-24 bg-neon-yellow rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h4 className="text-3xl font-bold mb-6 text-center">{title}</h4>
      <p className="text-center text-xl text-light-gray">{description}</p>
    </div>
  );
}