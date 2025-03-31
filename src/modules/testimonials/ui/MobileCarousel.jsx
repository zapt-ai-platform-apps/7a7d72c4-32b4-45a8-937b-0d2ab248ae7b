import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';
import { validateTestimonial } from '../validators';

export default function MobileCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Validate testimonials
  const validTestimonials = testimonials.map(testimonial => {
    try {
      return validateTestimonial(testimonial, {
        actionName: 'renderMobileCarousel',
        location: 'MobileCarousel.jsx',
        direction: 'incoming',
        moduleFrom: 'parent',
        moduleTo: 'testimonials'
      });
    } catch (error) {
      console.error('Invalid testimonial:', error);
      return null;
    }
  }).filter(Boolean);
  
  const totalTestimonials = validTestimonials.length;

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % totalTestimonials;
    setCurrentIndex(newIndex);
    eventBus.publish(events.TESTIMONIAL_CAROUSEL_MOVED, { 
      direction: 'next', 
      newIndex,
      testimonial: validTestimonials[newIndex]
    });
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    setCurrentIndex(newIndex);
    eventBus.publish(events.TESTIMONIAL_CAROUSEL_MOVED, { 
      direction: 'prev', 
      newIndex,
      testimonial: validTestimonials[newIndex]
    });
  };

  if (validTestimonials.length === 0) {
    return null;
  }

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
            <p className="text-xl font-semibold">{validTestimonials[currentIndex].name}</p>
            <p className="text-sm text-neon-yellow">{validTestimonials[currentIndex].position}</p>
          </div>
          <p className="italic">"{validTestimonials[currentIndex].quote}"</p>
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