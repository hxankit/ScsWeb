import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/components/pages/HomePage';
import ContactSection from './components/pages/ContactUs';
import NotFoundPage from './components/pages/NotFound';
import AboutSection from './components/pages/AboutPage';
import ServicesPage from './components/pages/Services';
import ComingSoon from './components/pages/CommingSoon';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/courses" element={<ComingSoon />} />
        <Route path="/traning" element={<ComingSoon />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
