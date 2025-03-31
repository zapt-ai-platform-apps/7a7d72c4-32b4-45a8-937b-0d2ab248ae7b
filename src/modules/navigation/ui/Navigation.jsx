import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';
import { validateNavigationItem } from '../validators';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  
  const navItems = api.getNavigationItems().map(item => {
    try {
      return validateNavigationItem(item, {
        actionName: 'renderNavigation',
        location: 'Navigation.jsx',
        direction: 'incoming',
        moduleFrom: 'api',
        moduleTo: 'ui'
      });
    } catch (error) {
      console.error('Invalid navigation item:', error);
      return null;
    }
  }).filter(Boolean);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      eventBus.publish(events.SCROLL_POSITION_CHANGED, { 
        isScrolled: scrolled,
        scrollY: window.scrollY
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (item) => {
    eventBus.publish(events.NAVIGATION_ITEM_CLICKED, { 
      item: item.text,
      path: item.path
    });
    setIsMobileMenuOpen(false);
  };

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-dark-navy py-2 md:py-3 shadow-lg'
      : 'bg-transparent py-3 md:py-6'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="z-10">
          <img
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
            alt="ZAPT Logo"
            className="h-8 md:h-12 cursor-pointer"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            if (item.external) {
              return (
                <a
                  key={index}
                  href={item.path}
                  className={item.highlight 
                    ? "bg-neon-yellow text-dark-navy font-bold py-2 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
                    : "text-light-gray hover:text-neon-yellow transition-colors"
                  }
                  onClick={() => handleNavClick(item)}
                >
                  {item.text}
                </a>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={item.highlight 
                    ? "bg-neon-yellow text-dark-navy font-bold py-2 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
                    : "text-light-gray hover:text-neon-yellow transition-colors"
                  }
                  onClick={() => handleNavClick(item)}
                >
                  {item.text}
                </Link>
              );
            }
          })}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden z-10 text-light-gray focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            // X icon for close
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-0 bg-dark-navy bg-opacity-95 z-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
            {navItems.map((item, index) => {
              const baseClasses = item.highlight 
                ? "bg-neon-yellow text-dark-navy font-bold py-2 px-4 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
                : "text-light-gray hover:text-neon-yellow transition-colors";
              
              if (item.external) {
                return (
                  <a
                    key={index}
                    href={item.path}
                    className={`${baseClasses} block w-full text-center py-3`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.text}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`${baseClasses} block w-full text-center py-3`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.text}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}