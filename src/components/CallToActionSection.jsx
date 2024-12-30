import React from 'react';

export default function CallToActionSection() {
  return (
    <section className="bg-dark-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
        <p className="text-xl mb-8">
          Transform your ideas into powerful applications effortlessly, without any coding required.
        </p>
        <a
          href="https://v2.zapt.ai/"
          className="bg-neon-yellow text-dark-navy font-semibold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}