import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';
import { validateFAQ } from '../validators';

export default function ConsultancyFAQ() {
  // Get only the most important FAQs (first 3)
  const faqsData = api.getFAQs().slice(0, 3);
  
  // Validate FAQs
  const faqs = faqsData.map(faq => {
    try {
      return validateFAQ(faq, {
        actionName: 'renderFAQs',
        location: 'ConsultancyFAQ.jsx',
        direction: 'incoming',
        moduleFrom: 'api',
        moduleTo: 'ui'
      });
    } catch (error) {
      console.error('Invalid FAQ:', error);
      return null;
    }
  }).filter(Boolean);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    
    if (newIndex !== null) {
      eventBus.publish(events.FAQ_EXPANDED, { 
        index: newIndex,
        question: faqs[newIndex].question
      });
    }
  };

  return (
    <section className="py-20 bg-dark-navy">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Common Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-charcoal-gray rounded-lg overflow-hidden border border-purple-custom/50"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-neon-yellow flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-neon-yellow flex-shrink-0" />
                )}
              </button>
              
              <div className={`px-6 pb-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-light-gray">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-block bg-transparent border-2 border-neon-yellow text-neon-yellow font-bold py-3 px-8 rounded-full hover:bg-neon-yellow hover:text-dark-navy transition-colors cursor-pointer">
            Have More Questions? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}