import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const ComingSoon = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-6"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-blue-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We’re working hard to bring something amazing. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
    </>
  );
};

export default ComingSoon;
