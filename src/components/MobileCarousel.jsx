import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MobileCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <div className="md:hidden relative w-full flex items-center">
      <button
        className="absolute left-0 p-2 focus:outline-none cursor-pointer"
        onClick={prevTestimonial}
        aria-label="Previous Testimonial"
      >
        <FaChevronLeft size={24} className="text-neon-yellow" />
      </button>
      <div className="w-full px-6">
        <div className="bg-charcoal-gray rounded-lg p-6 shadow-md">
          <div className="mb-4">
            <p className="text-xl font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-neon-yellow">{testimonials[currentIndex].position}</p>
          </div>
          <p className="italic">"{testimonials[currentIndex].quote}"</p>
        </div>
      </div>
      <button
        className="absolute right-0 p-2 focus:outline-none cursor-pointer"
        onClick={nextTestimonial}
        aria-label="Next Testimonial"
      >
        <FaChevronRight size={24} className="text-neon-yellow" />
      </button>
    </div>
  );
}
