import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaMobileAlt, FaPalette, FaLock, FaTools } from 'react-icons/fa';
import Navbar from '../Navbar';

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-4xl text-blue-600" />,
    description: "Robust, responsive websites and web applications using modern tech stacks like React, Node.js, and MongoDB."
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-4xl text-blue-600" />,
    description: "Deploy, scale, and manage your infrastructure using AWS, Azure, and cloud-native best practices."
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-4xl text-blue-600" />,
    description: "Build seamless cross-platform mobile apps with React Native and Flutter for Android & iOS."
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette className="text-4xl text-blue-600" />,
    description: "Create elegant and intuitive user experiences through smart design and smooth interfaces."
  },
  {
    title: "Cybersecurity",
    icon: <FaLock className="text-4xl text-blue-600" />,
    description: "Secure your digital presence with audits, compliance, and proactive defense strategies."
  },
  {
    title: "Custom Software",
    icon: <FaTools className="text-4xl text-blue-600" />,
    description: "We build tailored ERP, CRM, and automation systems that perfectly fit your business processes."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-24 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-800"
            >
              Our Services
            </motion.h2>
            <p className="text-gray-600 text-lg mt-4">
              SCS Technologies delivers innovative digital solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
