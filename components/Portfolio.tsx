
import React from 'react';
import { MapPinIcon } from './icons/Icons';
import { usePortfolio } from '../contexts/PortfolioContext';

interface ProjectItemProps {
  imgSrc: string;
  title: string;
  category: string;
  location: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imgSrc, title, category, location }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
    <div className="relative h-64 overflow-hidden bg-slate-200">
      <img 
        src={imgSrc} 
        alt={title} 
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-1">{category}</p>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
    <div className="p-4 border-t border-slate-100 flex-grow flex items-center bg-white">
      <div className="flex items-center text-slate-500 text-sm font-medium">
        <div className="mr-2 text-amber-500">
          <MapPinIcon />
        </div>
        {location}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const { projects } = usePortfolio();

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Portfólio Completo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mt-2 mb-4">Nossas Obras Realizadas</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uma seleção dos projetos executados pela <span className="font-bold text-sky-700">Engenproj</span>. 
            Qualidade técnica comprovada em instalações residenciais, comerciais e grandes usinas de solo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectItem 
              key={project.id} 
              imgSrc={project.imgSrc}
              title={project.title}
              category={project.category}
              location={project.location}
            />
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="text-center py-12 bg-white rounded shadow text-slate-500">
            Nenhum projeto visível no momento.
          </div>
        )}

        <div className="mt-12 text-center">
             <a href="#contato" className="inline-block bg-sky-800 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition-all duration-300">
                Quero um projeto como estes
             </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
