import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div class="min-h-screen flex flex-col font-poppins text-light-gray">
      <HeroSection />
      <SummarySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Promotion />
      <Footer />
    </div>
  );
}