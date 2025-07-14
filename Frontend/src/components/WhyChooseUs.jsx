// src/components/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAward,
  FaUsers,
  FaTools,
  FaClock,
  FaHandshake,
  FaShieldAlt,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaAward />,
    title: 'Proven Experience',
    desc: 'Delivered scalable products across industries.',
  },
  {
    icon: <FaUsers />,
    title: 'Client Collaboration',
    desc: 'We work alongside your team at every step.',
  },
  {
    icon: <FaTools />,
    title: 'Full-Stack Dev',
    desc: 'Frontend, backend, APIs — all under one roof.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    desc: 'Agile & rapid dev cycles with clarity.',
  },
  {
    icon: <FaHandshake />,
    title: 'Reliable Partner',
    desc: 'Post-launch support & scaling included.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure Systems',
    desc: 'Built with best security practices.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="roadmap" className="bg-white py-24 px-6 md:px-12">
      <div className="text-center mb-20">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-600 uppercase tracking-widest font-semibold mb-2"
        >
          Our Roadmap
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          Journey to Your Growth
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-blue-200">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`relative w-full md:w-1/2 px-6 py-8 ${
              index % 2 === 0 ? 'md:pl-0 md:pr-12 ml-auto' : 'md:pr-0 md:pl-12 mr-auto'
            }`}
          >
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
              {React.cloneElement(step.icon, { className: 'text-white text-lg' })}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <div className="text-xs text-blue-500 font-bold tracking-wider mb-1">
                STEP {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
