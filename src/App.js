import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Sales from './pages/Sales';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/buy" element={<Sales/>} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
