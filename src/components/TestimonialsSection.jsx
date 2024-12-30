import React from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div className="bg-dark-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}