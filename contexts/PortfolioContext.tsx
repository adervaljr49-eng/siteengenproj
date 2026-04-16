
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface Project {
  id: string;
  imgSrc: string;
  title: string;
  category: string;
  location: string;
}

interface PortfolioContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updatedData: Omit<Project, 'id'>) => void;
  removeProject: (id: string) => void;
  resetToDefaults: () => void;
  loadBackup: (projects: Project[]) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Imagem placeholder para projetos sem foto definida
const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop';

// Dados padrão extraídos das imagens fornecidas pelo cliente
const defaultProjects: Project[] = [
    { id: '1', title: 'Aderval Diniz', category: '8,36 KWp - Residencial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '2', title: 'Amikão Pets', category: '4,4 KWp - Comercial', location: 'João Pessoa-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '3', title: 'Cent. Velorios Maratana', category: '4,4 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '4', title: 'Ceramica da Barra', category: '104,72 KWp - Industrial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '5', title: 'Churrascaria Bilosão', category: '19,5 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '6', title: 'Escritorio Contabilizar', category: '8,1 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '7', title: 'Jr. do Espetinho', category: '7,92 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '8', title: 'Maria de Fatima', category: '4,84 KWp - Residencial', location: 'Natal-RN', imgSrc: PLACEHOLDER_IMG },
    { id: '9', title: 'Mercadinho Esmerino', category: '7,48 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '10', title: 'Panificadora Bela Vista', category: '22,68 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '11', title: 'Panif. Cheiro do Pão', category: '8,25 KWp - Comercial', location: 'Soledade-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '12', title: 'Fazenda Real', category: '112,32 KWp - Rural', location: 'Taperoá-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '13', title: 'Manoel Vasconcelos', category: '18,48 KWp - Residencial', location: 'Tenório-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '14', title: 'Toinho da Carne de Sol', category: '6,3 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '15', title: 'Dra Kiara Costa', category: '6,16 KWp - Residencial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '16', title: 'Reci-k', category: '5,72 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '17', title: 'Posto Diesel São José', category: '110,7 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '18', title: 'Sup. Pague Menos', category: '112,32 KWp - Comercial', location: 'Taperoá-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '19', title: 'Lanchonete Gostosuras', category: '7,92 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '20', title: 'Residencial Portal do Sul', category: '27 KWp - Predial', location: 'João Pessoa-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '21', title: 'Sr. Pedro Casa de Praia', category: '4,86 KWp - Residencial', location: 'Jacumã-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '22', title: 'Fernando Cadete', category: '8,36 KWp - Residencial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '23', title: 'Real Gesso', category: '4,84 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '24', title: 'Farmácia Maranata', category: '8,36 KWp - Comercial', location: 'Bayeux-PB', imgSrc: PLACEHOLDER_IMG },
    { id: '25', title: 'Petiscaria da Janete', category: '12,32 KWp - Comercial', location: 'Juazeirinho-PB', imgSrc: PLACEHOLDER_IMG },
];

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Carregar do LocalStorage ao iniciar
  useEffect(() => {
    const storedProjects = localStorage.getItem('engenproj_portfolio');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  // Salvar no LocalStorage sempre que mudar
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('engenproj_portfolio', JSON.stringify(projects));
    }
  }, [projects]);

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject = { ...projectData, id: Date.now().toString() };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updatedData: Omit<Project, 'id'>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...updatedData, id } : p));
  };

  const removeProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const resetToDefaults = () => {
    if (window.confirm('Isso substituirá sua lista atual pelos projetos padrão extraídos das imagens (Aderval, Amikão, etc). Deseja continuar?')) {
      setProjects(defaultProjects);
    }
  };

  const loadBackup = (newProjects: Project[]) => {
    setProjects(newProjects);
  };

  return (
    <PortfolioContext.Provider value={{ projects, addProject, updateProject, removeProject, resetToDefaults, loadBackup }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio deve ser usado dentro de um PortfolioProvider');
  }
  return context;
};
