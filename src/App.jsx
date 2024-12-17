import { createSignal } from 'solid-js';

export default function App() {
  return (
    <div class="min-h-screen bg-dark-navy text-white font-poppins flex flex-col">
      <header class="flex items-center justify-between p-6">
        <h1 class="text-4xl font-semibold text-neon-yellow">ZAPT.AI</h1>
        <nav>
          <a
            href="https://home.zapt.ai/"
            class="text-white hover:text-neon-yellow transition-colors cursor-pointer"
            onClick={() => console.log('Login / Sign Up link clicked')}
          >
            Login / Sign Up
          </a>
        </nav>
      </header>

      <main class="flex flex-col items-center justify-center flex-grow px-6 bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
        <h2 class="text-5xl font-semibold text-center mb-6">
          Turn ideas into real tech products without coding
        </h2>
        <p class="text-xl text-center max-w-2xl mb-8">
          Using AI, our platform lets users create apps just by describing their ideas in plain English. Users simply tell ZAPT what they want to create, and our platform handles all the technical complexity automatically - like databases, user accounts, and payment systems. We use the latest AI models and we give it the entire codebase every time the user requests an update.
        </p>
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