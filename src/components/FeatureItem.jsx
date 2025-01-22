import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="rounded-xl border-2 border-purple-custom bg-deep-space text-white shadow-feature-card hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] py-8 px-6 cursor-pointer group">
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-custom to-soft-teal rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl font-bold mb-4 text-center text-neon-yellow">{title}</h4>
      <p className="text-center text-lg text-light-gray leading-relaxed">{description}</p>
    </div>
  );
}