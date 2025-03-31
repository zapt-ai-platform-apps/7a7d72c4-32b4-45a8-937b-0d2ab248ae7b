import React from 'react';
import ConsultancyHero from '../components/consultancy/ConsultancyHero';
import AgileApproach from '../components/consultancy/AgileApproach';
import ConsultancyBenefits from '../components/consultancy/ConsultancyBenefits';
import ConsultancyFAQ from '../components/consultancy/ConsultancyFAQ';
import ConsultancyContactCTA from '../components/consultancy/ConsultancyContactCTA';

export default function ConsultancyPage() {
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