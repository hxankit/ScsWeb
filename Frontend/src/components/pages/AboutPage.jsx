import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';
import Navbar from '../Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CultureAndCareers = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white text-gray-800 py-24 px-6 md:px-16">
    
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Culture Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 text-center"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold">
            Our Culture
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-3xl mx-auto text-gray-600">
            At <strong>SCS Technologies</strong>, we foster a culture of curiosity, creativity, and collaboration. Every team member is encouraged to innovate, experiment, and grow without boundaries.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10"
          >
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-4xl text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold">Inclusive Environment</h4>
              <p className="text-gray-600 text-sm mt-2">We value diversity and create space for everyone to shine, share ideas, and make an impact.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold">Continuous Learning</h4>
              <p className="text-gray-600 text-sm mt-2">From workshops to hackathons, our learning culture supports personal and professional growth.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLaptopCode className="text-4xl text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold">Tech-First Mindset</h4>
              <p className="text-gray-600 text-sm mt-2">We embrace modern tools, agile workflows, and open innovation in everything we build.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Careers Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 text-center"
        >
          <motion.h2 variants={fadeUp} custom={4} className="text-4xl md:text-5xl font-extrabold">
            Careers at SCS
          </motion.h2>
          <motion.p variants={fadeUp} custom={5} className="text-lg max-w-3xl mx-auto text-gray-600">
            Want to build next-gen tech with passionate people? Join our growing team of developers, designers, and problem solvers.
          </motion.p>

          <motion.div variants={fadeUp} custom={6}>
            <a
              href="mailto:hr@scstechnologies.in"
              className="inline-block mt-4 px-8 py-4 text-white font-semibold rounded-full shadow-md"
              style={{ background: 'linear-gradient(to right, #2563eb, #06b6d4)' }}
              whileHover={{ scale: 1.05 }}
            >
              Send Your Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default CultureAndCareers;
