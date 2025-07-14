import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection';
import ServicesSection from '../ServicesSection';
import IndustriesSection from '../IndustriesSection';
import WhyChooseUs from '../WhyChooseUs';

import Footer from '../Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <WhyChooseUs/>
      {/* <ClientTestimonials/> */}
      <Footer/>

    </div>
  );
}

export default Home;
