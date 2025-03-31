import React, { useEffect } from 'react';
import DesktopGrid from './DesktopGrid';
import MobileCarousel from './MobileCarousel';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function TestimonialsSection() {
  const testimonials = api.getTestimonials();
  
  useEffect(() => {
    // Publish event when testimonials section is viewed
    eventBus.publish(events.TESTIMONIAL_VIEWED, { count: testimonials.length });
  }, [testimonials.length]);

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