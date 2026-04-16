
import React, { useState, useEffect } from 'react';
import { usePortfolio, Project } from '../contexts/PortfolioContext';

interface AdminProps {
  onExit: () => void;
}

const Admin: React.FC<AdminProps> = ({ onExit }) => {
  const { projects, addProject, updateProject, removeProject, resetToDefaults, loadBackup } = usePortfolio();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Edit State
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form States
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [uploadMode, setUploadMode] = useState<'url' | 'file'>('url');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setCategory(project.category);
    setLocation(project.location);
    setImgUrl(project.imgSrc);
    
    // Rola para o topo para ver o formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setCategory('');
    setLocation('');
    setImgUrl('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category || !location || !imgUrl) {
      alert('Preencha todos os campos!');
      return;
    }

    if (editingId) {
      // Atualizar Existente
      updateProject(editingId, {
        title,
        category,
        location,
        imgSrc: imgUrl
      });
      cancelEdit();
      alert('Projeto atualizado com sucesso!');
    } else {
      // Criar Novo
      addProject({
        title,
        category,
        location,
        imgSrc: imgUrl
      });
      // Limpar form
      setTitle('');
      setCategory('');
      setLocation('');
      setImgUrl('');
      alert('Projeto adicionado com sucesso!');
    }
  };

  // Funções de Backup
  const handleExportBackup = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `engenproj-backup-${new Date().toISOString().slice(0,10)}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
            if (window.confirm(`ATENÇÃO: Restaurar o backup substituirá TODOS os ${projects.length} projetos atuais pelos ${json.length} projetos do arquivo. Deseja continuar?`)) {
                loadBackup(json);
                alert('Backup restaurado com sucesso!');
            }
        } else {
            alert('Arquivo inválido. O backup deve conter uma lista de projetos.');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao processar o arquivo. Verifique se é um arquivo JSON válido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-sky-800 mb-6">Área Administrativa</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-slate-700 mb-2">Senha de Acesso</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="Digite a senha (admin123)"
              />
            </div>
            <button type="submit" className="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-700 transition">
              Entrar
            </button>
            <button type="button" onClick={onExit} className="w-full text-slate-500 py-2 hover:underline">
              Voltar ao Site
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-sky-800">Gerenciar Portfólio</h1>
          <button onClick={onExit} className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300">
            Sair / Voltar ao Site
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna da Esquerda: Formulário e Backup */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Formulário de Adição/Edição */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-600">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-700">
                  {editingId ? 'Editar Projeto' : 'Adicionar Novo Projeto'}
                </h2>
                {editingId && (
                  <button onClick={cancelEdit} className="text-xs text-red-500 underline">Cancelar Edição</button>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Título do Projeto</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded mt-1"
                    placeholder="Ex: Instalação Residencial"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700">Categoria (ex: KWp)</label>
                  <input 
                    type="text" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded mt-1"
                    placeholder="Ex: 8,36 KWp - Residencial"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Localização</label>
                  <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded mt-1"
                    placeholder="Ex: João Pessoa, PB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Imagem do Projeto</label>
                  <div className="flex space-x-2 mb-2">
                    <button 
                      type="button"
                      onClick={() => setUploadMode('url')}
                      className={`flex-1 py-1 text-xs rounded ${uploadMode === 'url' ? 'bg-sky-100 text-sky-800 font-bold' : 'bg-slate-100'}`}
                    >
                      Link (URL)
                    </button>
                    <button 
                      type="button"
                      onClick={() => setUploadMode('file')}
                      className={`flex-1 py-1 text-xs rounded ${uploadMode === 'file' ? 'bg-sky-100 text-sky-800 font-bold' : 'bg-slate-100'}`}
                    >
                      Upload (Arquivo)
                    </button>
                  </div>

                  {uploadMode === 'url' ? (
                    <input 
                      type="text" 
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                      placeholder="https://..."
                    />
                  ) : (
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                    />
                  )}
                  <p className="text-xs text-slate-400 mt-1">
                    {uploadMode === 'url' ? 'Cole o link direto da imagem.' : 'Selecione uma foto do seu computador.'}
                  </p>
                </div>

                {imgUrl && (
                  <div className="mt-2">
                    <p className="text-xs text-slate-500 mb-1">Pré-visualização:</p>
                    <img src={imgUrl} alt="Preview" className="w-full h-32 object-cover rounded border" />
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`w-full text-white py-2 rounded font-bold transition ${editingId ? 'bg-amber-500 hover:bg-amber-600' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {editingId ? 'Atualizar Projeto' : 'Salvar Projeto'}
                </button>
              </form>
            </div>

            {/* Seção de Backup */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-slate-700 mb-2">Backup e Restauração</h2>
              <p className="text-sm text-slate-500 mb-4">
                Salve todos os seus dados em um arquivo seguro ou restaure de um backup anterior.
              </p>
              
              <button 
                onClick={handleExportBackup}
                className="w-full bg-slate-700 text-white py-2 rounded font-bold hover:bg-slate-800 transition mb-4 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Baixar Backup Completo
              </button>

              <div className="border-t border-slate-200 pt-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">Restaurar Backup (Arquivo .json)</label>
                <input 
                    type="file" 
                    accept=".json"
                    onChange={handleImportBackup}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-sky-50 file:text-sky-700
                    hover:file:bg-sky-100 cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Lista de Projetos */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md h-fit">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-700">Projetos Atuais ({projects.length})</h2>
              <button onClick={resetToDefaults} className="text-xs text-red-500 underline font-bold">Restaurar Padrões de Fábrica</button>
            </div>
            
            <div className="overflow-auto max-h-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-600 text-sm">
                    <th className="p-3">Imagem</th>
                    <th className="p-3">Detalhes</th>
                    <th className="p-3">Local</th>
                    <th className="p-3 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj) => (
                    <tr key={proj.id} className={`border-b border-slate-100 hover:bg-slate-50 ${editingId === proj.id ? 'bg-sky-50' : ''}`}>
                      <td className="p-3">
                        <img src={proj.imgSrc} alt={proj.title} className="w-12 h-12 object-cover rounded" />
                      </td>
                      <td className="p-3">
                        <p className="font-medium text-slate-800">{proj.title}</p>
                        <p className="text-xs text-slate-500">{proj.category}</p>
                      </td>
                      <td className="p-3 text-sm text-slate-600">{proj.location}</td>
                      <td className="p-3 text-right space-x-2">
                         <button 
                          onClick={() => handleEdit(proj)}
                          className="text-sky-600 hover:text-sky-800 text-sm font-bold"
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => removeProject(proj.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                  {projects.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-500">
                        Nenhum projeto cadastrado. Clique em "Restaurar Padrões de Fábrica" para carregar a lista inicial.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
