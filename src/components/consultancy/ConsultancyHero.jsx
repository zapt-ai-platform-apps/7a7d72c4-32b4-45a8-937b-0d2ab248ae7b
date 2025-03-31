import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultancyHero() {
  return (
    <div className="relative pt-20 pb-32 bg-gradient-to-b from-dark-navy to-charcoal-gray">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Hand-Held App Development
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-light-gray">
          Our expert team guides you through every step of building your custom app with a transparent, 
          feature-by-feature approach that gives you complete control.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="#contact" 
            className="bg-neon-yellow text-dark-navy font-bold py-4 px-8 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
          >
            Request a Consultation
          </a>
          <Link 
            to="/" 
            className="bg-transparent border-2 border-neon-yellow text-neon-yellow font-bold py-4 px-8 rounded-full hover:bg-neon-yellow hover:text-dark-navy transition-colors cursor-pointer"
          >
            Explore Self-Serve Platform
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-charcoal-gray to-transparent"></div>
    </div>
  );
}