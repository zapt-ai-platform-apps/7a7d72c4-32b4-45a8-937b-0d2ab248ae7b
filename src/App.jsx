import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DetailsSection from './components/DetailsSection';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div class="min-h-screen flex flex-col font-poppins text-light-gray">
      <HeroSection />
      <FeaturesSection />
      <DetailsSection />
      <Promotion />
      <Footer />
    </div>
  );
}