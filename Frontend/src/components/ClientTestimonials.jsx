// src/components/ClientTestimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Founder, Craftico',
    image: '/img/client1.jpg',
    feedback:
      'SCS Technologies helped us scale our brand online. Their team truly understands user experience and delivered on time!',
  },
  {
    name: 'Ravi Mehta',
    role: 'CTO, EduX',
    image: '/img/client2.jpg',
    feedback:
      'From frontend design to backend APIs, they handled everything seamlessly. Highly recommended for full-stack projects.',
  },
  {
    name: 'Pooja Nair',
    role: 'Marketing Head, VibeBuzz',
    image: '/img/client3.jpg',
    feedback:
      'They transformed our website into a high-converting platform. Reliable, creative, and super professional!',
  },
];

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-600 uppercase tracking-widest font-semibold mb-2"
        >
          Testimonials
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((client, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all h-full flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-14 h-14 object-cover rounded-full border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{client.name}</h4>
                  <p className="text-sm text-gray-500">{client.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{client.feedback}”
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientTestimonials;
