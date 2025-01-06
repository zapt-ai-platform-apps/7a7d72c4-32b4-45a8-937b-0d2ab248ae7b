import React from 'react';
import FeaturedApps from './FeaturedApps';

export default function SummarySection() {
  return (
    <section id="summary" className="bg-purple-custom text-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-6xl font-bold mb-12 text-dark-navy text-center">
          Build Apps Like This <span className="text-neon-yellow">Now</span>
        </h3>
        <FeaturedApps />
      </div>
    </section>
  );
}
