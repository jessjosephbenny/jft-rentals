import React, { useEffect } from "react";

const Success = ({ message, onClose }) => {
  useEffect(() => {
    window.gtag('event', 'conversion', {'send_to': 'AW-16635587622/H81bCLL46OIZEKbYu_w9'});
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Success;
