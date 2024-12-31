import React from 'react';

export default function DesktopGrid({ testimonials }) {
  return (
    <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-2 w-full">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-charcoal-gray rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105">
          <div className="flex items-center mb-4">
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name} Avatar`}
              className="w-16 h-16 rounded-full mr-4 box-border"
              data-image-request={testimonial['data-image-request']}
            />
            <div>
              <p className="text-xl font-semibold">{testimonial.name}</p>
              <p className="text-sm text-neon-yellow">
                {testimonial.position}
              </p>
            </div>
          </div>
          <p className="italic">"{testimonial.quote}"</p>
        </div>
      ))}
    </div>
  );
}