
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Entre em Contato</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pronto para iniciar seu projeto? Fale conosco e solicite um orçamento sem compromisso.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nome</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Seu nome completo" />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Descreva seu projeto ou dúvida..."></textarea>
              </div>
            </div>
            <div className="text-center mt-8">
              <button type="submit" className="bg-amber-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12 text-slate-600 space-y-2">
            <p><strong>Email:</strong> contato@engenproj.com.br</p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/558399608354" target="_blank" rel="noopener noreferrer" className="text-sky-800 hover:underline font-medium">
                +55 83 9960-8354
              </a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
