import React from 'react';
import FeaturesHeader from './FeaturesHeader';
import FeaturesList from './FeaturesList';

export default function FeaturesSection() {
  return (
    <section id="why-zapt" className="bg-dark-navy text-white py-24">
      <div className="max-w-6xl mx-auto px-12">
        <FeaturesHeader />
        <FeaturesList />
      </div>
    </section>
  );
}