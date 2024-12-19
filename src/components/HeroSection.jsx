export default function HeroSection() {
  return (
    <div class="relative min-h-screen flex flex-col justify-center bg-dark-navy bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
      <div class="absolute top-0 left-0 w-full p-6 flex items-center justify-between">
        <img
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
          alt="ZAPT Logo"
          class="h-16 cursor-pointer"
        />
        <a
          href="https://home.zapt.ai/"
          class="bg-neon-yellow text-dark-navy font-semibold py-2 px-4 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
          onClick={() => console.log('Login / Sign Up button clicked')}
        >
          Login / Sign Up
        </a>
      </div>
      <div class="text-center px-6">
        <h2 class="text-5xl font-semibold text-center mb-6 text-light-gray">
          Create apps in minutes - no coding required
        </h2>
        <a
          href="https://home.zapt.ai/"
          class="mt-4 bg-neon-yellow text-dark-navy font-semibold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer inline-block"
          onClick={() => console.log('Get Started button clicked')}
        >
          Get Started
        </a>
      </div>
      <div class="absolute bottom-6 w-full flex justify-center">
        <a href="#features" class="text-light-gray hover:text-neon-yellow transition-colors cursor-pointer">
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}