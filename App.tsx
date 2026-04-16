
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Admin from './components/Admin';
import { PortfolioProvider } from './contexts/PortfolioContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'admin'>('home');

  // Verifica se a URL tem ?admin=true para abrir direto no admin (atalho opcional)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setCurrentView('admin');
    }
  }, []);

  // Função para navegar (passada via props ou events)
  const navigateToAdmin = () => setCurrentView('admin');
  const navigateToHome = () => {
    setCurrentView('home');
    // Limpa a URL se tiver query params
    window.history.replaceState({}, document.title, "/");
  };

  return (
    <PortfolioProvider>
      {currentView === 'admin' ? (
        <Admin onExit={navigateToHome} />
      ) : (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>
          {/* Passamos a função de navegação para o Footer para criar o link de acesso */}
          <Footer onAdminClick={navigateToAdmin} />
          <WhatsAppButton />
        </div>
      )}
    </PortfolioProvider>
  );
};

export default App;
