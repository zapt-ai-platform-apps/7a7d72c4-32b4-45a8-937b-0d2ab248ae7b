import React from 'react';
import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section id="why-zapt" className="relative bg-gradient-to-b from-dark-navy to-charcoal-gray py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}