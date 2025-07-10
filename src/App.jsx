import React, { useState, useEffect } from 'react';
import { Home, Info, FormInput, BookOpen, Search } from 'lucide-react'; // Adicionado ícone Search

// Componente principal da aplicação
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  // Função para renderizar o conteúdo da página com base no estado 'currentPage'
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'detail':
        return <DetailPage />; // DetailPage agora gerencia seu próprio estado de API
      case 'form':
        return <FormPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Barra de Navegação */}
      <nav className="bg-white shadow-md p-4 rounded-b-xl">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4 sm:mb-0">Meu Site Dinâmico</h1>
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === 'home' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'}`}
              >
                <Home className="mr-2" size={20} /> Início
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('detail')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === 'detail' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'}`}
              >
                <BookOpen className="mr-2" size={20} /> Pesquisar Pokémon
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('form')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === 'form' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'}`}
              >
                <FormInput className="mr-2" size={20} /> Formulário
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === 'about' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'}`}
              >
                <Info className="mr-2" size={20} /> Sobre
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="container mx-auto p-6 mt-8">
        {renderPage()}
      </main>
    </div>
  );
};

// Componente da Página Inicial
const HomePage = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">Bem-vindo ao Nosso Site Dinâmico!</h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      Este é um exemplo de site construído com React, utilizando rotas para navegação entre as páginas e um placeholder para integração com API.
      Explore as diferentes seções usando a barra de navegação acima.
    </p>
    <div className="mt-8 flex justify-center">
      <img
        src="https://placehold.co/600x300/e0e7ff/4338ca?text=Site+Din%C3%A2mico"
        alt="Imagem de boas-vindas"
        className="rounded-lg shadow-md max-w-full h-auto"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/e0e7ff/4338ca?text=Erro+ao+Carregar+Imagem"; }}
      />
    </div>
  </div>
);

// Componente da Página de Detalhes (com integração de API para Pokémon)
const DetailPage = () => {
  const [pokemonName, setPokemonName] = useState(''); // Estado para o nome do Pokémon a ser pesquisado
  const [pokemonData, setPokemonData] = useState(null); // Estado para armazenar dados do Pokémon
  const [loading, setLoading] = useState(false); // Estado para indicar carregamento
  const [error, setError] = useState(null); // Estado para erros

  // Função para buscar dados do Pokémon
  const fetchPokemonData = async () => {
    if (!pokemonName.trim()) {
      setError('Por favor, digite o nome de um Pokémon.');
      setPokemonData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setPokemonData(null); // Limpa dados anteriores

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Pokémon "${pokemonName}" não encontrado. Verifique a grafia.`);
        }
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchPokemonData();
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Pesquisar Pokémon</h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite o nome do Pokémon (ex: ditto)"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg max-w-md"
        />
        <button
          onClick={fetchPokemonData}
          className="inline-flex items-center justify-center py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Search className="mr-2" size={20} /> Pesquisar
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
          <p className="ml-4 text-xl text-indigo-600">Carregando dados do Pokémon...</p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erro:</strong>
          <span className="block sm:inline"> {error}</span>
          <p className="text-sm mt-2">Por favor, tente novamente.</p>
        </div>
      )}
      {pokemonData && !loading && !error && (
        <div className="border border-indigo-200 rounded-lg p-6 bg-indigo-50 text-center">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-4 capitalize">{pokemonData.name}</h3>
          <p className="text-xl text-gray-700 mb-4">ID: #{pokemonData.id}</p>
          <div className="flex justify-center mb-6">
            <img
              src={pokemonData.sprites.front_default || "https://placehold.co/200x200/cccccc/333333?text=Sem+Imagem"}
              alt={`Imagem de ${pokemonData.name}`}
              className="w-48 h-48 object-contain rounded-lg shadow-md bg-white p-2"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/cccccc/333333?text=Sem+Imagem"; }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="text-xl font-medium text-indigo-700 mb-2">Tipos:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {pokemonData.types.map((typeInfo) => (
                  <li key={typeInfo.slot} className="capitalize">{typeInfo.type.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-indigo-700 mb-2">Habilidades:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {pokemonData.abilities.map((abilityInfo) => (
                  <li key={abilityInfo.ability.name} className="capitalize">{abilityInfo.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-sm">
            Dados obtidos da PokeAPI. Experimente pesquisar outros Pokémon!
          </p>
        </div>
      )}
      {!pokemonData && !loading && !error && (
        <p className="text-center text-gray-600 text-lg">
          Use a barra de pesquisa acima para encontrar informações sobre um Pokémon.
        </p>
      )}
    </div>
  );
};

// Componente da Página de Formulário
const FormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você enviaria os dados do formulário para uma API ou faria alguma validação
    console.log('Dados do formulário enviados:', formData);
    setSubmitted(true);
    // Em um cenário real, você resetaria o formulário após o envio bem-sucedido
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Entre em Contato</h2>
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center" role="alert">
          <strong className="font-bold">Sucesso!</strong>
          <span className="block sm:inline"> Sua mensagem foi enviada. Entraremos em contato em breve.</span>
          <p className="mt-2 text-sm">Nome: {formData.name}</p>
          <p className="text-sm">Email: {formData.email}</p>
          <p className="text-sm">Mensagem: {formData.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

// Componente da Página Sobre
const AboutPage = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Sobre Nós</h2>
    <div className="prose max-w-none text-gray-700 leading-relaxed">
      <p>
        Este site foi criado como um projeto de demonstração para ilustrar a construção de uma aplicação web dinâmica
        usando **React**. Ele incorpora conceitos essenciais como:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Componentes Reutilizáveis: </strong>A arquitetura baseada em componentes do React permite um desenvolvimento modular e eficiente.
        </li>
        <li>
          <strong>Gerenciamento de Estado:</strong> Utilização de <strong>useState</strong> para gerenciar o estado dos componentes e <strong>useEffect</strong> para efeitos colaterais.
        </li>
        <li>
          <strong>Roteamento:</strong> Simulação de roteamento com base no estado para navegar entre diferentes <strong>páginas</strong> da aplicação.
        </li>
        <li>
          <strong>Integração com API:</strong> Demonstração de como buscar dados de uma API externa e exibi-los na interface do usuário.
        </li>
        <li>
          <strong>Estilização Responsiva:</strong> Uso do <strong>Tailwind CSS</strong> para criar uma interface moderna e que se adapta a diferentes tamanhos de tela (desktop, tablet, mobile).
        </li>
      </ul>
      <p className="mt-6">
        Tenho o prazer de apresentar a minha mais recente aplicação web, desenvolvida como parte do meu percurso de aprendizagem em desenvolvimento front-end. 
        Este projeto é um <strong>site dinâmico</strong>, onde você pode pesquisar diferentes tipos de pokémons construído com <strong>React, JavaScript, HTML e CSS</strong>, e já inclui a <strong>integração com uma API</strong> para dados externos.
      </p>
    </div>
  </div>
);

export default App;
