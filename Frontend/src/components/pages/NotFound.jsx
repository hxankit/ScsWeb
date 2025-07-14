import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-7xl font-extrabold text-blue-600"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="text-2xl font-semibold text-gray-800 mt-4"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="text-gray-600 mt-2 max-w-md"
      >
        Sorry, the page you’re looking for doesn’t exist. It may have been moved or deleted.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
        >
          Go to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
