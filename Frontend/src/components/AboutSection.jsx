// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-full"
        >
          <img
            src="/img/about.jpg"
            alt="About SCS"
            className="rounded-2xl shadow-2xl object-cover w-full h-full max-h-[640px]"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-10"
        >
          <motion.h5
            variants={fadeUp}
            custom={1}
            className="text-blue-600 text-xl uppercase tracking-widest font-bold"
          >
            About Us
          </motion.h5>

          <motion.h2
            variants={fadeUp}
            custom={2}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug"
          >
            Your Vision, Our Innovation
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-2xl leading-relaxed"
          >
            At <strong>SCS Technologies</strong>, we deliver powerful, high-performance digital solutions tailored to your
            business goals — from branding to backend systems.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-xl text-gray-600 leading-relaxed"
          >
            With deep expertise in full-stack dev, cloud services, and UI/UX, we create systems that scale,
            engage, and evolve. We’re not just tech builders — we’re growth partners.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            custom={5}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-xl font-semibold mt-4"
          >
            <li>✔ Tailored Web Solutions</li>
            <li>✔ Secure Cloud Deployment</li>
            <li>✔ Agile Tech Stack</li>
            <li>✔ Long-Term Support</li>
          </motion.ul>

          <motion.div
            variants={fadeUp}
            custom={6}
            className="mt-10 flex items-center gap-6"
          >
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-base">Let's connect</p>
              <p className="text-blue-600 font-bold text-xl">
                info@scstechnologies.in
              </p>
            </div>
          </motion.div>


          <motion.div
            variants={fadeUp}
            custom={7}
            viewport={{ once: false, amount: 0.3 }}
            animate={{
              boxShadow: [
                '0 0 10px rgba(37,99,235,0.4)',
                '0 0 20px rgba(37,99,235,0.6)',
                '0 0 30px rgba(37,99,235,0.8)',
                '0 0 20px rgba(37,99,235,0.6)',
                '0 0 10px rgba(37,99,235,0.4)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            whileHover={{ scale: 1.05 }}
            className="relative inline-block mt-8 rounded-full overflow-hidden z-10 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #2563eb, #06b6d4)',
            }}
          >
            <Link
              to="/contact"
              className="block px-8 py-4 text-lg font-bold text-white"
            >
              Get Started Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
