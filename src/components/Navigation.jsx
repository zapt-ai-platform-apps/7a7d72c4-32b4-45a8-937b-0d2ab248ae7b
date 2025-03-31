import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-dark-navy py-3 shadow-lg'
      : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <img
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
            alt="ZAPT Logo"
            className="h-12 cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/consultancy" className="text-light-gray hover:text-neon-yellow transition-colors">
            Consultancy
          </Link>
          <a
            href="https://v2.zapt.ai/"
            className="bg-neon-yellow text-dark-navy font-bold py-2 px-6 rounded-full hover:bg-purple-custom hover:text-white transition-colors cursor-pointer"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}