// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center">
  <img src="/img/logo.png" alt="logo" className="w-12 h-12 object-contain" />
  <div className="ml-3 text-2xl font-extrabold tracking-tight text-blue-600">
    SCS <span className="text-gray-800">Technologies</span>
  </div>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 text-sm">
          <li><Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 transition-colors duration-200">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
          <li><Link to="/courses" className="hover:text-blue-600 transition-colors duration-200">Courses</Link></li>
          <li><Link to="/traning" className="hover:text-blue-600 transition-colors duration-200"> Training</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors duration-200">About Us</Link></li>
        </ul>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-6 py-4 space-y-3 text-gray-800 font-medium shadow-xl rounded-b-md"
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
          <li><Link to="/traning" onClick={() => setMenuOpen(false)}>Traning Program</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
