// Carousel.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: './carousel-rentals.jpg',
      text: 'Heavy Equipment Rental',
      subtext: 'Equipment for any terrain or projects',
      buttonText: 'Explore Rentals',
      navLink: '/rentals'
    },
    {
      image: './carousel-sales.jpg',
      text: 'Eqipment Sales',
      subtext: 'Buy top-tier used equipment',
      buttonText: 'Know More',
      navLink: '/buy'
    },
    {
      image: './carousel-service.avif',
      text: 'Equipment Service',
      subtext: 'Expert service and repair technicians',
      buttonText: 'Learn More',
      navLink: '/service'
    }
    // Add more slides as needed
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden">
      <img 
        src={slides[currentIndex].image} 
        alt="Carousel Background" 
        className="w-full object-cover opacity-75 h-96 md:h-[600px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
        <h2 className="text-3xl font-bold mb-2">{slides[currentIndex].text}</h2>
        <p className="text-lg mb-4">{slides[currentIndex].subtext}</p>
        <Link to={slides[currentIndex].navLink}>
        <button className="bg-yellow-500 hover:bg-white hover:bg-white text-black font-bold py-2 px-4 rounded">
          {slides[currentIndex].buttonText}
        </button>
        </Link>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#9664;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
