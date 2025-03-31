import React from 'react';
import { FaCheckCircle, FaCreditCard, FaCode, FaUserClock, FaRocket } from 'react-icons/fa';

export default function AgileApproach() {
  return (
    <section className="py-20 bg-charcoal-gray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Our Agile Development Approach
        </h2>
        
        <div className="mb-16 bg-dark-navy/50 backdrop-blur-sm p-8 rounded-xl border border-purple-custom">
          <p className="text-xl text-center mb-8 text-light-gray">
            Rather than quoting one large price upfront for your entire app (which often leads to misaligned expectations), 
            we use a feature-by-feature development process that gives you more control and transparency:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-deep-space rounded-lg border border-purple-custom hover:border-neon-yellow transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaCheckCircle size={24} className="text-dark-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-yellow">Clear Requirements</h3>
              <p className="text-light-gray">You request a specific feature with detailed specifications</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-deep-space rounded-lg border border-purple-custom hover:border-neon-yellow transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaCode size={24} className="text-dark-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-yellow">Focused Development</h3>
              <p className="text-light-gray">We develop that feature exactly to your specifications</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-deep-space rounded-lg border border-purple-custom hover:border-neon-yellow transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaUserClock size={24} className="text-dark-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-yellow">Your Verification</h3>
              <p className="text-light-gray">You verify the feature works exactly as expected</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-deep-space rounded-lg border border-purple-custom hover:border-neon-yellow transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaCreditCard size={24} className="text-dark-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-yellow">Pay Per Feature</h3>
              <p className="text-light-gray">You pay only for completed features that meet your needs</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-deep-space rounded-lg border border-purple-custom hover:border-neon-yellow transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-custom rounded-full mb-4">
                <FaRocket size={24} className="text-dark-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-yellow">Iterative Progress</h3>
              <p className="text-light-gray">We move to the next feature on your priority list</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">The Benefits to You:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Pay Only for What's Delivered</h4>
              <p className="text-light-gray">No large upfront commitments required</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Maintain Budget Control</h4>
              <p className="text-light-gray">Proceed at your own pace with full financial visibility</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Prioritize Flexibly</h4>
              <p className="text-light-gray">Change direction as your needs evolve</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">See Tangible Progress</h4>
              <p className="text-light-gray">Get working features faster with regular releases</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Reduce Risk</h4>
              <p className="text-light-gray">If a feature doesn't meet needs, you're not locked in</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-custom/30 to-dark-navy rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-neon-yellow">Direct Communication</h4>
              <p className="text-light-gray">Work directly with our development team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}