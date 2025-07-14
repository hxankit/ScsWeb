// src/components/IndustriesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHospital,
  FaGraduationCap,
  FaShoppingCart,
  FaBuilding,
  FaTools,
  FaChartLine,
} from 'react-icons/fa';

const industries = [
  { icon: <FaHospital />, title: 'Healthcare' },
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaShoppingCart />, title: 'E-Commerce' },
  { icon: <FaBuilding />, title: 'Real Estate' },
  { icon: <FaTools />, title: 'Manufacturing' },
  { icon: <FaChartLine />, title: 'Finance' },
];

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      className="bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f8fafc] py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-blue-600 text-lg uppercase font-semibold tracking-wide"
        >
          Industries We Serve
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mt-3"
        >
          Empowering Diverse Sectors With Technology
        </motion.h2>
      </div>

      <div className="space-y-16 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 md:gap-20`}
          >
            <div className="bg-blue-600 text-white rounded-full p-6 shadow-lg">
              {React.cloneElement(item.icon, { className: 'text-4xl' })}
            </div>
            <div className="text-center md:text-left max-w-md">
              <h4 className="text-2xl font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mt-2">
                We offer tailor-made digital solutions for the {item.title.toLowerCase()} sector — from robust platforms to seamless user experiences.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
