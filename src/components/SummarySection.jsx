import React from 'react';
import FeaturedApps from './FeaturedApps';

export default function SummarySection() {
  return (
    <section id="summary" className="bg-purple-600 text-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-6xl font-bold mb-12 text-neon-yellow text-center">
          Transform Your Ideas Into Apps
        </h3>
        <p className="text-2xl text-center leading-relaxed max-w-5xl mx-auto mb-16">
          Create fully-functional applications in minutes — no technical knowledge needed.<br />
          ZAPT handles everything from code to deployment, making app development effortless and accessible.
        </p>
        <FeaturedApps />
      </div>
    </section>
  );
}
