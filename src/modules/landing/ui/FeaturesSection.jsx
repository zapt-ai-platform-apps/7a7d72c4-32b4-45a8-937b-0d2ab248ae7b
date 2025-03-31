import React from 'react';
import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section className="bg-charcoal-gray py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}