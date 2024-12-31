import React from 'react';
import { testimonials } from '../data/testimonials';
import DesktopGrid from './DesktopGrid';
import MobileCarousel from './MobileCarousel';

export default function TestimonialsSection() {
  return (
    <div className="bg-dark-navy text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-16 text-center">What Our Users Say</h3>
        <DesktopGrid testimonials={testimonials} />
        <MobileCarousel testimonials={testimonials} />
      </div>
    </div>
  );
}