
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-sky-800">
          Engenproj
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-sky-800 transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="hidden md:inline-block bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
          Orçamento
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-sky-800 transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-all duration-300">
              Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
