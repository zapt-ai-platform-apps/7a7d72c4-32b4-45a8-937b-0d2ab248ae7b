import React from 'react';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import WhyZaptSection from './components/WhyZaptSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-poppins text-light-gray">
      <HeroSection />
      <SummarySection />
      <WhyZaptSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Promotion />
      <Footer />
    </div>
  );
}