import React, { useState } from 'react';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';
import { validateContactForm } from '../validators';

export default function ConsultancyContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validate form data
      const validatedData = validateContactForm(formData, {
        actionName: 'submitConsultationRequest',
        location: 'ConsultancyContactCTA.jsx',
        direction: 'outgoing',
        moduleFrom: 'ui',
        moduleTo: 'api'
      });
      
      // First, submit to API for local processing
      const result = await api.submitConsultationRequest(validatedData);
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }
      
      // Then, send email via our email API
      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });
      
      const emailResult = await emailResponse.json();
      
      if (!emailResponse.ok) {
        throw new Error(emailResult.error || 'Failed to send email');
      }
      
      // If both operations succeed, show success message
      setSubmitted(true);
      eventBus.publish(events.FORM_SUBMITTED, { 
        status: 'success',
        data: validatedData
      });
      
    } catch (error) {
      setError(error.message);
      eventBus.publish(events.FORM_SUBMITTED, { 
        status: 'error',
        error: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-navy to-charcoal-gray">
      <div className="max-w-6xl mx-auto px-6">
        {!submitted ? (
          <>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              Start Your Consultancy Journey
            </h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-light-gray">
              Fill out the form below to schedule a free consultation. We'll discuss your app idea 
              and how our consultancy service can bring it to life.
            </p>
            
            <div className="bg-deep-space p-8 md:p-12 rounded-xl shadow-xl border border-purple-custom max-w-3xl mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-white">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 bg-dark-navy border border-purple-custom rounded-lg focus:border-neon-yellow focus:outline-none transition-colors text-white box-border"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-white">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 bg-dark-navy border border-purple-custom rounded-lg focus:border-neon-yellow focus:outline-none transition-colors text-white box-border"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 text-white">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full p-3 bg-dark-navy border border-purple-custom rounded-lg focus:border-neon-yellow focus:outline-none transition-colors text-white box-border"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="description" className="block mb-2 text-white">Brief App Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    className="w-full p-3 bg-dark-navy border border-purple-custom rounded-lg focus:border-neon-yellow focus:outline-none transition-colors text-white box-border resize-none"
                    placeholder="Tell us about your app idea and what you're looking to build..."
                    required
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-yellow text-dark-navy font-bold py-4 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Request a Consultation'
                  )}
                </button>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-center">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </>
        ) : (
          <div className="bg-deep-space p-12 rounded-xl shadow-xl border border-green-500 max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dark-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
            <p className="text-xl mb-8 text-light-gray">
              We've received your consultation request and will contact you within 1-2 business days to discuss your project.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-neon-yellow text-dark-navy font-bold py-3 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}