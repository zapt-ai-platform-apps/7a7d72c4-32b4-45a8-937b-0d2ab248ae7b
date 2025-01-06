import React from 'react';
import FeaturedApps from './FeaturedApps';

export default function SummarySection() {
  return (
    <section id="summary" className="bg-purple-custom text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-5xl font-bold mb-8 text-neon-yellow text-center">
          Transform Your Ideas Into Apps
        </h3>
        <p className="text-xl text-center leading-relaxed max-w-4xl mx-auto mb-12">
          Create fully-functional applications in minutes — no technical knowledge needed. <br />
          ZAPT handles everything from code to deployment, making app development effortless and accessible.
        </p>
        <FeaturedApps />
      </div>
    </section>
  );
}