import React from 'react';
import FeaturedApps from './FeaturedApps';

export default function SummarySection() {
  return (
    <section id="summary" className="bg-purple-custom text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Build Apps Like These
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover what's possible with ZAPT - from productivity tools to AI-powered solutions
          </p>
        </div>
        <FeaturedApps />
      </div>
    </section>
  );
}