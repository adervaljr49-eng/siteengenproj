
import React from 'react';
import { ZapIcon, SunIcon, ShieldCheckIcon, WrenchScrewdriverIcon, LightBulbIcon, BuildingOfficeIcon } from './icons/Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="mx-auto bg-sky-100 text-sky-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const electricServices = [
    { icon: <LightBulbIcon />, title: 'Projetos Elétricos', description: 'Desenvolvimento de projetos elétricos residenciais, comerciais e industriais.' },
    { icon: <BuildingOfficeIcon />, title: 'Instalações Elétricas', description: 'Execução de instalações completas com os mais altos padrões de qualidade e segurança.' },
    { icon: <WrenchScrewdriverIcon />, title: 'Manutenção Preventiva', description: 'Serviços de manutenção para garantir a eficiência e segurança de suas instalações.' },
  ];

  const solarServices = [
    { icon: <SunIcon />, title: 'Sistemas Fotovoltaicos', description: 'Projeto e instalação de sistemas de energia solar para economia e sustentabilidade.' },
    { icon: <ZapIcon />, title: 'Homologação de Projetos', description: 'Cuidamos de toda a burocracia para conectar seu sistema à rede da concessionária.' },
    { icon: <ShieldCheckIcon />, title: 'Monitoramento e Suporte', description: 'Acompanhamento do desempenho do seu sistema solar e suporte técnico especializado.' },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Soluções completas e personalizadas para atender às suas necessidades energéticas.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-700 mb-8 text-center md:text-left">Engenharia Elétrica</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {electricServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-700 mb-8 text-center md:text-left">Energia Solar</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {solarServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
