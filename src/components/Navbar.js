import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up when component unmounts or menu closes
    };
  }, [isOpen]);

  return (
    <nav className="text-black md:px-5 navbar">
      <div className="container flex mx-auto justify-between items-center">
        <Link to="/" >
          <img src='./logo.png' alt='logo' className='logo' />
        </Link>

        {/* Hamburger Icon */}
        <div className="p-7 md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className='hidden md:flex flex-col'>
          <div className="hidden md:flex items-center justify-end space-x-4">
            <img src='./phone-call.png' alt='phone' className='w-5' />
            <span className='ms-2 text-base font-bold'>+1 519-437-0979</span>
            <button className='ms-2 bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black transition-all duration-300'>français</button>
          </div>
          {/* Nav items for large screens */}
          <ul className="hidden md:flex space-x-4 mt-2">
            <li>
              <Link to="/" className="text-lg hover:bg-white hover:text-black rounded p-2 transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link to="/rentals" className="text-lg hover:bg-white rounded p-2 transition-all duration-300">Rentals</Link>
            </li>
            <li>
              <Link to="/buy" className="text-lg hover:bg-white rounded p-2 transition-all duration-300">Buy</Link>
            </li>
            <li>
              <Link to="/service" className="text-lg hover:bg-white rounded p-2 transition-all duration-300">Service</Link>
            </li>
          </ul>

        </div>
      </div>

      {/* Side Menu for small/medium screens */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 right-0 w-full bg-[#FFCC00] text-black z-50 py-5 overflow-y-auto" style={{ background: '#FFCC00' }}>
          <div className="flex justify-between items-center mb-4 px-4">
            {/* Logo inside mobile menu */}
            <Link to="/" onClick={toggleMenu}>
              <img src='./logo.png' alt='logo' className='w-24' />
            </Link>

            {/* Close button */}
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src='./phone-call.png' alt='phone' className='w-5' />
            <span className='ms-2 text-base font-bold'>+1 519-437-0979</span>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <button className='ms-2 bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black transition-all duration-300'>français</button>
          </div>
          <ul className="flex flex-col items-center space-y-3">
            <span className="bg-black h-0.5 w-full"></span>
            <li>
              <Link to="/" className="block text-black font-bold hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            </li>
            <span className="bg-black h-0.5 w-full"></span>
            <li>
              <Link to="/rentals" className="block text-black font-bold hover:text-gray-300" onClick={toggleMenu}>Rentals</Link>
            </li>
            <span className="bg-black h-0.5 w-full"></span>
            <li>
              <Link to="/buy" className="block text-black font-bold hover:text-gray-300" onClick={toggleMenu}>Buy</Link>
            </li>
            <span className="bg-black h-0.5 w-full"></span>
            <li>
              <Link to="/service" className="block text-black font-bold hover:text-gray-300" onClick={toggleMenu}>Service</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
