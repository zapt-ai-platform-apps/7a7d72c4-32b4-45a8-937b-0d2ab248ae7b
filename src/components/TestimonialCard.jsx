import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-charcoal-gray rounded-lg p-10 shadow-md transform transition duration-300 hover:-translate-y-1">
      <FaQuoteLeft size={32} className="text-neon-yellow mb-6" />
      <p className="italic mb-6 text-light-gray text-lg leading-relaxed">"{testimonial.quote}"</p>
      <div className="text-right">
        <p className="text-2xl font-semibold text-white">- {testimonial.name}</p>
        <p className="text-md text-neon-yellow">{testimonial.position}</p>
      </div>
    </div>
  );
}