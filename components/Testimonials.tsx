
import React from 'react';
import { StarIcon, QuoteIcon } from './icons/Icons';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
}

const Rating: React.FC = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, role }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg relative h-full flex flex-col">
    <div className="absolute top-0 left-0 -mt-3 ml-6">
        <QuoteIcon />
    </div>
    <p className="text-slate-600 mb-6 italic flex-grow">"{text}"</p>
    <div className="mt-auto">
        <div className="flex items-center justify-between">
            <div>
                <p className="font-bold text-slate-800">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
            <div className="text-amber-400">
                <Rating />
            </div>
        </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: 'A equipe da Engenproj foi excepcional do início ao fim. O projeto de energia solar para nossa residência superou as expectativas e a economia na conta de luz é real. Profissionalismo nota 10!',
      name: 'Mariana Costa',
      role: 'Cliente Residencial',
    },
    {
      text: 'Contratamos a Engenproj para a reestruturação elétrica do nosso galpão industrial. O serviço foi executado com máxima segurança e eficiência, dentro do prazo e do orçamento. Recomendo fortemente.',
      name: 'Carlos Almeida',
      role: 'Gerente Industrial',
    },
    {
      text: 'Desde a consultoria até a instalação do sistema fotovoltaico em nosso comércio, a Engenproj demonstrou total competência e um atendimento personalizado. Estamos muito satisfeitos com o resultado.',
      name: 'Fernanda Lima',
      role: 'Proprietária de Comércio',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">A satisfação de quem confia em nosso trabalho é a nossa maior conquista.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
