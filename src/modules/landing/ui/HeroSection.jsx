import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function HeroSection() {
  const handleGetStartedClick = () => {
    eventBus.publish(events.CTA_CLICKED, { eventName: 'hero_get_started' });
  };

  const handleConsultancyClick = () => {
    eventBus.publish(events.CTA_CLICKED, { eventName: 'hero_consultancy' });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-dark-navy dark:bg-light-gray bg-[url('https://supabase.zapt.ai/storage/v1/object/public/zapt-branding/zapt_hero_background.png')] bg-cover bg-center">
      {/* Removed duplicate navigation bar from here */}
      <div className="text-center px-6 pt-20 md:pt-6 pb-6 bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-8 text-light-gray dark:text-charcoal-gray text-stroke leading-tight">
          Bring Your Ideas to Life
        </h1>
        <p className="text-2xl mb-8">Create Apps in Minutes. No Coding Required</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://v2.zapt.ai/"
            className="mt-8 bg-neon-yellow text-dark-navy font-bold py-4 px-16 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer inline-block dark:bg-purple-custom dark:text-white"
            onClick={handleGetStartedClick}
          >
            Get Started
          </a>
          <Link
            to="/consultancy"
            className="mt-4 md:mt-8 bg-transparent border-2 border-neon-yellow text-neon-yellow font-bold py-4 px-10 rounded-full hover:bg-neon-yellow hover:text-dark-navy transition-colors cursor-pointer inline-block"
            onClick={handleConsultancyClick}
          >
            Guided Development
          </Link>
        </div>
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