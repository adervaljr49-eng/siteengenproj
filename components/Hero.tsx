import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-sky-900 bg-opacity-70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Inovação em Engenharia Elétrica e Energia Solar
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Projetos eficientes e sustentáveis para um futuro mais iluminado. Qualidade e segurança em cada detalhe.
        </p>
        <a href="#servicos" className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
          Conheça Nossos Serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;