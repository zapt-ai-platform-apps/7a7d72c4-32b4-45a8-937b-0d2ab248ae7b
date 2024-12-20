import MobileCarousel from './MobileCarousel';
import DesktopGrid from './DesktopGrid';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'ZAPT made it incredibly easy to bring my app idea to life without any coding.',
      name: 'John Doe',
      position: 'Entrepreneur',
      company: 'Startup Inc.',
      avatar: 'PLACEHOLDER',
      'data-image-request': 'Portrait photo of John Doe, Entrepreneur at Startup Inc.',
    },
    {
      quote: 'The AI-powered development is a game-changer. I got my app up and running in minutes!',
      name: 'Jane Smith',
      position: 'Product Manager',
      company: 'Tech Solutions',
      avatar: 'PLACEHOLDER',
      'data-image-request': 'Portrait photo of Jane Smith, Product Manager at Tech Solutions',
    },
    {
      quote: 'I was able to focus on my ideas while ZAPT handled all the technical details.',
      name: 'Mike Johnson',
      position: 'Freelancer',
      company: 'Independent',
      avatar: 'PLACEHOLDER',
      'data-image-request': 'Portrait photo of Mike Johnson, Freelancer',
    },
    // Add more testimonials as needed
  ];

  return (
    <div class="bg-gradient-to-r from-purple-custom to-dark-navy text-light-gray py-16 px-6">
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <h3 class="text-4xl font-semibold mb-4 text-center">What Our Users Say</h3>
        <p class="text-lg text-center mb-12">
          Hear from our satisfied users who have transformed their ideas into powerful applications with ZAPT.AI.
        </p>
        <MobileCarousel testimonials={testimonials} />
        <DesktopGrid testimonials={testimonials} />
      </div>
    </div>
  );
}