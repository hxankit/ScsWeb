import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection';
import ServicesSection from '../ServicesSection';
import IndustriesSection from '../IndustriesSection';
import WhyChooseUs from '../WhyChooseUs';

import Footer from '../Footer';
import HotProductsAndStats from '../hotproductsAndstatcts';
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <HotProductsAndStats/>
      <WhyChooseUs/>
      {/* <ClientTestimonials/> */}
      <Footer/>

    </div>
  );
}

export default Home;
