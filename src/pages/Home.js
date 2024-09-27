import React from 'react';
import Carousel from '../components/Carousel';
import AboutUs from './sections/About';
import ContactUs from './sections/ContactUs';
import Brands from './sections/Brands';

const Home = () => {
  return (
    <div className="text-center">
      <Carousel />
      <AboutUs />
      <Brands/>
      <ContactUs/>
    </div>
  );
};

export default Home;
