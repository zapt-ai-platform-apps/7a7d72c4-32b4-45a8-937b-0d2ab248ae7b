import React from 'react';
import FeaturedApps from './FeaturedApps';

export default function SummarySection() {
  return (
    <section id="summary" className="bg-purple-custom text-white py-24 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-6xl mb-12 text-center leading-tight">
          Build apps like these
        </h3>
        <p className="text-2xl mb-6 text-center">
          Here are some of the ideas our users are bringing to life with ZAPT
        </p>
        <FeaturedApps />
      </div>
    </section>
  );
}
