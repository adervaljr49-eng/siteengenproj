import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop" 
              alt="Equipe Engenproj" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">Sobre a Engenproj</h2>
            <p className="text-slate-600 mb-4 text-lg">
              A Engenproj nasceu da paixão por engenharia e da visão de um futuro mais sustentável. Somos uma equipe de engenheiros eletricistas dedicados a fornecer soluções inovadoras e de alta qualidade, que aliam tecnologia de ponta com segurança e eficiência energética.
            </p>
            <p className="text-slate-600 text-lg">
              Nossa missão é transformar a maneira como nossos clientes consomem energia, oferecendo projetos personalizados que geram economia e contribuem para o meio ambiente. Comprometimento, excelência técnica e satisfação do cliente são os pilares que guiam nosso trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;