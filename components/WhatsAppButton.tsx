
import React from 'react';
import { WhatsAppIcon } from './icons/Icons';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '558399608354';
  const message = 'Olá! Gostaria de fazer um orçamento com a Engenproj.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transform hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
