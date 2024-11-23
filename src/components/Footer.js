import React, { useEffect } from 'react';

const Footer = () => {

  useEffect(()=>{
    if (window.location.href.indexOf("/service") != -1) {
      var x = 0
      var myVar = setInterval(function () {
        if (x == 0) {
          if (
            document.querySelector(".bg-white.p-4.rounded.shadow-lg") &&
            document
              .querySelector(".bg-white.p-4.rounded.shadow-lg")
              .innerText.includes("Successfully")
          ) {
            window.gtag("event", "conversion", {
              send_to: "AW-16635587622/H81bCLL46OIZEKbYu_w9",
            })

            clearInterval(myVar)
            x = 1
          }
        }
      }, 1000)
    }
  },[])

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p>&copy; 2024 JFT Rentals All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
