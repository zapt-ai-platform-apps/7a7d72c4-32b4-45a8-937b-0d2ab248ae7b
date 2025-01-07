import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-dark-navy dark:bg-light-gray bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between">
        <img
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
          alt="ZAPT Logo"
          className="h-20 cursor-pointer"
        />
        <a
          href="https://v2.zapt.ai/"
          className="bg-neon-yellow text-dark-navy font-bold py-3 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer dark:bg-purple-custom dark:text-white"
        >
          Login
        </a>
      </div>
      <div className="text-center px-6 pt-20 md:pt-0 bg-black bg-opacity-50">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-8 text-light-gray dark:text-charcoal-gray text-stroke leading-tight">
          Bring Your Ideas to Life
        </h2>
        <p className="text-2xl mb-8">Create Apps in Minutes, No Coding Required</p>
        <a
          href="https://v2.zapt.ai/"
          className="mt-8 bg-neon-yellow text-dark-navy font-bold py-4 px-16 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer inline-block dark:bg-purple-custom dark:text-white"
        >
          Get Started
        </a>
      </div>
      <div className="absolute bottom-6 w-full flex justify-center">
        <span className="text-light-gray dark:text-charcoal-gray transition-colors">
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </div>
  );
}