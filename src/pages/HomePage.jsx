import React from 'react';
import HeroSection from '../components/HeroSection';
import SummarySection from '../components/SummarySection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Promotion from '../components/Promotion';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SummarySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Promotion />
    </>
  );
}