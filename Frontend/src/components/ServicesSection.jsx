// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaAndroid,
  FaChartPie,
  FaSearch,
  FaShieldAlt,
  FaEnvelope,
  FaCloud,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-white text-3xl" />,
    title: 'Custom Software Development',
    desc: 'Build secure and scalable applications customized to your unique business goals.',
  },
  {
    icon: <FaAndroid className="text-white text-3xl" />,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps built for performance, UX, and engagement.',
  },
  {
    icon: <FaChartPie className="text-white text-3xl" />,
    title: 'Web App Development',
    desc: 'Full-stack web applications designed for speed, security, and scalability.',
  },
  {
    icon: <FaCloud className="text-white text-3xl" />,
    title: 'Cloud Integration & Hosting',
    desc: 'Deploy, host, and scale your apps using AWS, Azure, or custom cloud solutions.',
  },
  {
    icon: <FaShieldAlt className="text-white text-3xl" />,
    title: 'Maintenance & Support',
    desc: 'Ensure uptime, updates, backups, and long-term reliability for your platforms.',
  },
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: 'SEO Optimization',
    desc: 'Improve your search visibility with metadata, speed fixes, structured data, and more.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-blue-600 text-lg uppercase font-semibold tracking-wide"
        >
          Our Services
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mt-3"
        >
          Full-Spectrum Development & Optimization Services
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative group overflow-hidden rounded-xl bg-white p-[2px] shadow-lg hover:shadow-xl transition-all duration-500"
          >
            {/* Animated Gradient Glow */}
            <div className="absolute inset-0 z-0 blur-xl opacity-70 group-hover:animate-spin-slow bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500" />

            {/* Card Content */}
            <div className="relative z-10 bg-white rounded-xl p-6 flex flex-col items-center text-center h-full">
              <div className="bg-blue-600 text-white rounded-full p-4 mb-4 shadow-md">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Contact */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24 max-w-5xl mx-auto bg-blue-600 text-white rounded-2xl p-10 text-center shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-4">Contact us via email</h3>
        <p className="mb-6 text-lg">
          Let’s collaborate on powerful solutions for your digital success. We’re ready to help!
        </p>
        <div className="flex justify-center items-center gap-4">
          <FaEnvelope className="text-2xl" />
          <span className="text-xl font-semibold">info@scstechnologies.in</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
