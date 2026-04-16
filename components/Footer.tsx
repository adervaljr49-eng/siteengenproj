
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/Icons';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-bold text-xl mb-2">Engenproj</p>
        <p className="text-slate-300">&copy; {new Date().getFullYear()} Engenproj. Todos os direitos reservados.</p>
        
        <div className="flex justify-center space-x-6 mt-4 mb-4">
          <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-white transition-colors">
            <TwitterIcon />
          </a>
          <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
            <LinkedInIcon />
          </a>
        </div>

        {onAdminClick && (
          <button 
            onClick={onAdminClick}
            className="text-xs text-sky-700 hover:text-sky-500 mt-4 transition-colors"
          >
            Área Administrativa
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
