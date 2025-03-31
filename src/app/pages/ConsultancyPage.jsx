import React, { useEffect } from 'react';
import ConsultancyHero from '@/modules/consultancy/ui/ConsultancyHero';
import AgileApproach from '@/modules/consultancy/ui/AgileApproach';
import ConsultancyBenefits from '@/modules/consultancy/ui/ConsultancyBenefits';
import ConsultancyFAQ from '@/modules/consultancy/ui/ConsultancyFAQ';
import ConsultancyContactCTA from '@/modules/consultancy/ui/ConsultancyContactCTA';
import { coreApi } from '@/modules/index';

export default function ConsultancyPage() {
  useEffect(() => {
    // Track page view
    coreApi.trackPageView('guided_development');
  }, []);

  return (
    <div className="pt-20">
      <ConsultancyHero />
      <AgileApproach />
      <ConsultancyBenefits />
      <ConsultancyFAQ />
      <ConsultancyContactCTA />
    </div>
  );
}