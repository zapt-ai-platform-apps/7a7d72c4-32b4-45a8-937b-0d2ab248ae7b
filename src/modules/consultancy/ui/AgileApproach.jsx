import React from 'react';
import { FaCheckCircle, FaCreditCard, FaCode, FaEdit, FaRocket } from 'react-icons/fa';

export default function AgileApproach() {
  return (
    <section className="py-20 bg-charcoal-gray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
          How We Work Together
        </h2>

        {/* Main Feature-Delivery-Payment Cycle - Highlighted and Simplified */}
        <div className="mb-16 bg-purple-custom/20 p-10 rounded-xl border-2 border-neon-yellow shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-neon-yellow">
            The Feature Request → Delivery → Payment Cycle
          </h3>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex-1 text-center p-6 bg-deep-space rounded-xl border border-purple-custom">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaEdit size={32} className="text-dark-navy" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neon-yellow">Feature Request</h3>
              <p className="text-light-gray text-lg">You request a specific feature with clear requirements</p>
            </div>
            
            <div className="hidden md:block">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z" fill="#CBFF2E"/>
              </svg>
            </div>
            
            <div className="flex-1 text-center p-6 bg-deep-space rounded-xl border border-purple-custom">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaCode size={32} className="text-dark-navy" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neon-yellow">Delivery</h3>
              <p className="text-light-gray text-lg">We build and deliver the feature exactly as specified</p>
            </div>
            
            <div className="hidden md:block">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z" fill="#CBFF2E"/>
              </svg>
            </div>
            
            <div className="flex-1 text-center p-6 bg-deep-space rounded-xl border border-purple-custom">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaCreditCard size={32} className="text-dark-navy" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neon-yellow">Payment</h3>
              <p className="text-light-gray text-lg">You pay only after approving the completed feature</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-xl text-light-gray">
              This simple cycle repeats for each feature, giving you full control over development and costs.
            </p>
          </div>
        </div>
        
        {/* Simplified Benefits Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Pay Only for What's Approved</h4>
              <p className="text-light-gray">No upfront costs or long-term commitments</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Complete Transparency</h4>
              <p className="text-light-gray">Clear pricing for each feature before work begins</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Flexible Development Path</h4>
              <p className="text-light-gray">Change priorities as your business needs evolve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}