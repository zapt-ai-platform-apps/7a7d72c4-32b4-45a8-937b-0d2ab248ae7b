import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function FooterNavigation() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/company/zapt-ai/"
          target="_blank"
          className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} className="text-current" />
        </a>
        <a
          href="https://twitter.com/zapt_ai"
          target="_blank"
          className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} className="text-current" />
        </a>
      </div>
      <a
        href="mailto:info@zapt.ai"
        target="_blank"
        className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
        rel="noopener noreferrer"
      >
        info@zapt.ai
      </a>
      <a
        href="https://www.iubenda.com/terms-and-conditions/25363091"
        target="_blank"
        className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
        rel="noopener noreferrer"
      >
        Terms and Conditions
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/25363091"
        target="_blank"
        className="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </div>
  );
}