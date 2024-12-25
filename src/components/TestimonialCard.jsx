import { FaSolidQuoteLeft } from 'solid-icons/fa';

export default function TestimonialCard(props) {
  const { testimonial } = props;
  return (
    <div class="bg-charcoal-gray rounded-lg p-8 shadow-md transform transition duration-300 hover:-translate-y-1">
      <FaSolidQuoteLeft size={32} class="text-neon-yellow mb-4" />
      <p class="italic mb-4 text-light-gray">"{testimonial.quote}"</p>
      <div class="text-right">
        <p class="text-xl font-semibold text-white">- {testimonial.name}</p>
        <p class="text-sm text-neon-yellow">{testimonial.position}</p>
      </div>
    </div>
  );
}