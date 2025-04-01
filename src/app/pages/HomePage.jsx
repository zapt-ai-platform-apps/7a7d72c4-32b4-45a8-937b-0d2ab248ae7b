import React, { useEffect } from 'react';
import HeroSection from '@/modules/landing/ui/HeroSection';
import VideoSection from '@/modules/landing/ui/VideoSection';
import SummarySection from '@/modules/landing/ui/SummarySection';
import FeaturesSection from '@/modules/landing/ui/FeaturesSection';
import HowItWorksSection from '@/modules/landing/ui/HowItWorksSection';
import TestimonialsSection from '@/modules/testimonials/ui/TestimonialsSection';
import CallToActionSection from '@/modules/landing/ui/CallToActionSection';
import Promotion from '@/modules/landing/ui/Promotion';
import { coreApi } from '@/modules/index';

export default function HomePage() {
  useEffect(() => {
    // Track page view
    coreApi.trackPageView('home');
  }, []);

  return (
    <>
      <HeroSection />
      <VideoSection />
      <SummarySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Promotion />
    </>
  );
}