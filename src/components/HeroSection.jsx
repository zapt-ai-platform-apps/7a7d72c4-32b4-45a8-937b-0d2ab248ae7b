export default function HeroSection() {
  return (
    <div class="flex flex-col items-center justify-center flex-grow px-6 bg-dark-navy bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
      <h2 class="text-5xl font-semibold text-center mb-6">
        Create apps in minutes - no coding required
      </h2>
      <a
        href="https://home.zapt.ai/"
        class="mt-4 bg-neon-yellow text-dark-navy font-semibold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
        onClick={() => console.log('Get Started button clicked')}
      >
        Get Started
      </a>
    </div>
  );
}