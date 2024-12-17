import { createSignal } from 'solid-js';
import NavigationMenu from './components/NavigationMenu';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

export default function App() {
  return (
    <div class="min-h-screen flex flex-col font-poppins text-white">
      <NavigationMenu />

      <HeroSection />

      <FeaturesSection />

      <footer class="p-6 text-center bg-dark-navy">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-neon-yellow transition-colors"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}