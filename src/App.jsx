import { createSignal } from 'solid-js';
import NavigationMenu from './components/NavigationMenu';

export default function App() {
  return (
    <div class="min-h-screen bg-dark-navy text-white font-poppins flex flex-col bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
      <NavigationMenu />

      <main class="flex flex-col items-center justify-center flex-grow px-6">
        <h2 class="text-5xl font-semibold text-center mb-6">
          Create apps in minutes - no coding required
        </h2>
        <div class="max-w-4xl text-center grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">AI-Powered Development</h3>
            <p class="text-lg">
              Using AI, our platform lets users create apps just by describing their ideas in plain English.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4">No Technical Skills Required</h3>
            <p class="text-lg">
              Users simply tell ZAPT what they want to create, and our platform handles all the technical complexity automatically—like databases, user accounts, and payment systems.
            </p>
          </div>
        </div>
        <a
          href="https://home.zapt.ai/"
          class="bg-neon-yellow text-dark-navy font-semibold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
          onClick={() => console.log('Get Started button clicked')}
        >
          Get Started
        </a>
      </main>

      <footer class="p-6 text-center">
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