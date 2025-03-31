import React from 'react';
import FooterInfo from './FooterInfo';
import FooterNavigation from './FooterNavigation';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-navy py-16">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <FooterInfo />
          <FooterNavigation />
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="made-on-zapt"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </footer>
  );
}