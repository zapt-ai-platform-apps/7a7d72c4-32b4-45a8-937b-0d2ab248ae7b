import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ConsultancyFAQ() {
  const faqs = [
    {
      question: "How much does the consultancy service cost?",
      answer: "Our consultancy service follows a feature-by-feature pricing model rather than a fixed upfront cost. Each feature is quoted individually based on complexity and development time. This approach allows you to maintain budget control and pay only for completed work that meets your requirements."
    },
    {
      question: "How does the feature-by-feature process work?",
      answer: "First, we discuss your app needs and prioritize features. Then, for each feature, we provide a specific quote. Once approved, we develop that feature, you verify it meets requirements, and you pay for the completed work. This process repeats for each feature, allowing you to adjust priorities as needed."
    },
    {
      question: "How long does it take to develop an app with the consultancy service?",
      answer: "Development timelines vary based on app complexity and feature scope. With our feature-by-feature approach, you'll see functional pieces of your app delivered regularly rather than waiting for a complete build. Most features take between 1-4 weeks to develop, and you can launch with a minimal viable product once core features are complete."
    },
    {
      question: "Can I switch between self-serve and consultancy services?",
      answer: "Yes, many clients use a hybrid approach. You might start with consultancy for complex core features, then use the self-serve platform for simple updates. We can recommend the best approach based on your specific needs and technical comfort level."
    },
    {
      question: "What happens if I'm not satisfied with a developed feature?",
      answer: "If a feature doesn't meet the agreed-upon requirements, we'll revise it until it does. We verify requirements before development begins and provide regular updates during the process to prevent misalignment. This approach ensures you only pay for features that meet your needs."
    },
    {
      question: "Do I own the code and intellectual property?",
      answer: "Yes, you own all intellectual property rights to the custom code developed specifically for your application. We provide full transparency and access to your app's codebase."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dark-navy">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Frequently Asked Questions
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
      </div>
    </section>
  );
}