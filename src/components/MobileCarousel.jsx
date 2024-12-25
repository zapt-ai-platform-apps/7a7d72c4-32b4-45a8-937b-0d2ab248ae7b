import { createSignal } from 'solid-js';
import { FaSolidQuoteLeft, FaSolidChevronLeft, FaSolidChevronRight } from 'solid-icons/fa';

export default function MobileCarousel(props) {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const totalTestimonials = props.testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex() + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex() - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <div class="md:hidden relative w-full flex items-center">
      <button
        class="absolute left-0 p-2 focus:outline-none cursor-pointer"
        onClick={prevTestimonial}
        aria-label="Previous Testimonial"
      >
        <FaSolidChevronLeft size={24} class="text-neon-yellow" />
      </button>
      <div class="w-full px-8">
        <div class="bg-charcoal-gray rounded-lg p-8 shadow-md">
          <div class="flex items-center mb-4">
            <img
              src={props.testimonials[currentIndex()].avatar}
              alt={`${props.testimonials[currentIndex()].name} Avatar`}
              class="w-16 h-16 rounded-full mr-4 box-border"
              data-image-request={props.testimonials[currentIndex()]['data-image-request']}
            />
            <div>
              <p class="text-xl font-semibold">{props.testimonials[currentIndex()].name}</p>
              <p class="text-sm text-neon-yellow">
                {props.testimonials[currentIndex()].position}
              </p>
            </div>
          </div>
          <FaSolidQuoteLeft size={32} class="text-neon-yellow mb-4" />
          <p class="italic">"{props.testimonials[currentIndex()].quote}"</p>
        </div>
      </div>
      <button
        class="absolute right-0 p-2 focus:outline-none cursor-pointer"
        onClick={nextTestimonial}
        aria-label="Next Testimonial"
      >
        <FaSolidChevronRight size={24} class="text-neon-yellow" />
      </button>
    </div>
  );
}