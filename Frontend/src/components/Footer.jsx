// src/components/Footer.jsx
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 pt-20 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Glowing Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 md:grid-cols-4 sm:grid-cols-2">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">SCS Technologies</h2>
          <p className="text-sm leading-relaxed mb-4">
            Transforming your business with modern tech, branding, and secure development.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition-all"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400 transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300 transition-all"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#roadmap" className="hover:text-cyan-400">Why Us</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-cyan-400">Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">App Development</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">SEO Optimization</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">Web Development</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><FaMapMarkerAlt /> Ghaziabad, UP, India</li>
            <li className="flex items-center gap-3"><FaPhoneAlt /> +91 7599828342</li>
            <li className="flex items-center gap-3"><FaEnvelope /> info@scstechnologies.in</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SCS Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
