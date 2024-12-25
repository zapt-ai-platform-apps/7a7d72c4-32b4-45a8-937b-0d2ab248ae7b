import { For } from 'solid-js';
import { FaSolidQuoteLeft } from 'solid-icons/fa';

export default function DesktopGrid(props) {
  return (
    <div class="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
      <For each={props.testimonials}>
        {(testimonial) => (
          <div class="bg-charcoal-gray rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105">
            <div class="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} Avatar`}
                class="w-16 h-16 rounded-full mr-4 box-border"
                data-image-request={testimonial['data-image-request']}
              />
              <div>
                <p class="text-xl font-semibold">{testimonial.name}</p>
                <p class="text-sm text-neon-yellow">
                  {testimonial.position}
                </p>
              </div>
            </div>
            <FaSolidQuoteLeft size={32} class="text-neon-yellow mb-4" />
            <p class="italic">"{testimonial.quote}"</p>
          </div>
        )}
      </For>
    </div>
  );
}