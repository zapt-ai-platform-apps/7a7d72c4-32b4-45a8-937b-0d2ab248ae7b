import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div class="min-h-screen flex flex-col font-poppins text-light-gray">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection /> {/* New How It Works Section */}
      <TestimonialsSection />
      <Promotion />
      <Footer />
    </div>
  );
}