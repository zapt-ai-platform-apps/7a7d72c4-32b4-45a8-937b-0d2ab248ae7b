import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsultancyPage from './pages/ConsultancyPage';
import Navigation from '@/modules/navigation/ui/Navigation';
import Footer from '@/modules/footer/ui/Footer';
import { initializeModules } from '@/modules/index';
import { coreApi } from '@/modules/index';

export default function App() {
  useEffect(() => {
    // Initialize all modules
    initializeModules()
      .then(success => {
        if (success) {
          console.log('App initialized successfully');
        }
      })
      .catch(error => {
        coreApi.logError(error, { context: 'app_initialization' });
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-poppins text-light-gray">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}