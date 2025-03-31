import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsultancyPage from './pages/ConsultancyPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
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