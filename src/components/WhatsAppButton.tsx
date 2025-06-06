'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/917015246158', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </button>
  );
};

export default WhatsAppButton; 