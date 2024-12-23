import { For } from 'solid-js';
import { FaSolidQuoteLeft } from 'solid-icons/fa';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'ZAPT made it incredibly easy to bring my app idea to life without any coding.',
      role: 'Entrepreneur',
    },
    {
      quote: 'The AI-powered development is a game-changer. I got my app up and running in minutes!',
      role: 'Product Manager',
    },
    {
      quote: 'I was able to focus on my ideas while ZAPT handled all the technical details.',
      role: 'Freelancer',
    },
    // Add more testimonials as needed
  ];

  return (
    <div class="bg-purple-custom text-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 text-center">What Our Users Say</h3>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <For each={testimonials}>
            {(testimonial) => (
              <div class="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:-translate-y-1">
                <FaSolidQuoteLeft size={32} class="text-purple-custom mb-4" />
                <p class="italic mb-4 text-gray-700">"{testimonial.quote}"</p>
                <p class="text-xl font-semibold text-dark-navy text-right">- {testimonial.role}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}