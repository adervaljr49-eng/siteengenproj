
import React from 'react';
import { UsersIcon, CpuChipIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon } from './icons/Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-amber-100 text-amber-600 w-12 h-12 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600 mt-1">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: <UsersIcon />, title: 'Profissionais Qualificados', description: 'Nossa equipe é formada por engenheiros experientes e certificados.' },
    { icon: <CpuChipIcon />, title: 'Tecnologia de Ponta', description: 'Utilizamos os melhores equipamentos e softwares do mercado para garantir a precisão.' },
    { icon: <ShieldCheckIcon />, title: 'Segurança em Primeiro Lugar', description: 'Seguimos rigorosamente todas as normas técnicas e de segurança (NR-10).' },
    { icon: <ChatBubbleLeftRightIcon />, title: 'Atendimento Personalizado', description: 'Entendemos suas necessidades para oferecer a solução ideal para seu projeto.' },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Por Que Escolher a Engenproj?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Compromisso com a excelência em cada etapa do seu projeto.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
