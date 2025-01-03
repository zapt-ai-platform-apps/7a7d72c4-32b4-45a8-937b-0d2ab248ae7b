import React from 'react';
import FooterInfo from './FooterInfo';
import FooterNavigation from './FooterNavigation';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <FooterInfo />
          <FooterNavigation />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-yellow transition-colors underline cursor-pointer"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </footer>
  );
}