import React from 'react';
import { validateTestimonial } from '../validators';

export default function DesktopGrid({ testimonials }) {
  // Validate testimonials
  const validTestimonials = testimonials.map(testimonial => {
    try {
      return validateTestimonial(testimonial, {
        actionName: 'renderDesktopGrid',
        location: 'DesktopGrid.jsx',
        direction: 'incoming',
        moduleFrom: 'parent',
        moduleTo: 'testimonials'
      });
    } catch (error) {
      console.error('Invalid testimonial:', error);
      return null;
    }
  }).filter(Boolean);

  return (
    <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-2 w-full">
      {validTestimonials.map((testimonial, index) => (
        <div key={index} className="bg-charcoal-gray rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105">
          <div className="mb-4">
            <p className="text-xl font-semibold">{testimonial.name}</p>
            <p className="text-sm text-neon-yellow">
              {testimonial.position}
            </p>
          </div>
          <p className="italic">"{testimonial.quote}"</p>
        </div>
      ))}
    </div>
  );
}