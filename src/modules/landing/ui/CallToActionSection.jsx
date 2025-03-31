import React from 'react';
import Button from './Button';

export default function CallToActionSection() {
  return (
    <section className="bg-dark-navy text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Ready to Get Started?</h3>
        <p className="text-xl mb-12">
          Transform your ideas into powerful applications effortlessly, without any coding required.
        </p>
        <Button 
          href="https://v2.zapt.ai/" 
          eventName="cta_get_started"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}