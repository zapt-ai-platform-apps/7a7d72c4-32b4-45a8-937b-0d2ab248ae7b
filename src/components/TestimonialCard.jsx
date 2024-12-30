import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-charcoal-gray rounded-lg p-8 shadow-md transform transition duration-300 hover:-translate-y-1">
      <FaQuoteLeft size={32} className="text-neon-yellow mb-4" />
      <p className="italic mb-4 text-light-gray">"{testimonial.quote}"</p>
      <div className="text-right">
        <p className="text-xl font-semibold text-white">- {testimonial.name}</p>
        <p className="text-sm text-neon-yellow">{testimonial.position}</p>
      </div>
    </div>
  );
}