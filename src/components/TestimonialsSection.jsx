import { For } from 'solid-js';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div class="bg-dark-navy text-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 text-center">What Our Users Say</h3>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <For each={testimonials}>
            {(testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}