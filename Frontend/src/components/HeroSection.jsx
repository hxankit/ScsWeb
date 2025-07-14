// src/components/HeroSlider.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../assets/css/HeroSection.css';

const slides = [
  {
    bg: '/img/1.jpg',
    title: 'Launch Your Digital Future',
    desc: 'We craft scalable websites, apps, and branding strategies that accelerate your growth — built to convert.',
    cta: 'Let’s Launch Your Vision',
  },
  {
    bg: '/img/2.jpg',
    title: 'Engineering Growth-Driven Solutions',
    desc: 'From code to conversion, we deliver high-performance digital experiences that engage and scale.',
    cta: 'Book a Free Strategy Call',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="h-screen w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Overlay and glows */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-2xl animate-pulse" />

            {/* Text Content */}
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 md:px-12 max-w-4xl mx-auto"
            >
              <motion.h2
                variants={textVariants}
                custom={1}
                className="text-sm md:text-base uppercase tracking-wider text-cyan-300 mb-4 md:mb-6"
              >
                SCS Technologies
              </motion.h2>

              <motion.h1
                variants={textVariants}
                custom={2}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-xl mb-6"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                variants={textVariants}
                custom={3}
                className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-10"
              >
                {slide.desc}
              </motion.p>

              <motion.div
                variants={textVariants}
                custom={4}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 text-lg md:text-xl rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
