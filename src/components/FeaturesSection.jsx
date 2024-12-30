import React from 'react';
import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section id="why-zapt" className="bg-dark-navy text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}