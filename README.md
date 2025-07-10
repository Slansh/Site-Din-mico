🚀 Site Dinâmico com React e PokeAPI
Este projeto é uma aplicação web dinâmica desenvolvida com React, HTML, CSS (com Tailwind CSS) e JavaScript. O objetivo principal foi criar uma plataforma interativa, demonstrando o uso de componentes, gestão de estado, navegação entre "páginas" e, mais importante, a integração com uma API externa para dados dinâmicos.

✨ Funcionalidades
Página Inicial (Início): Uma introdução acolhedora ao site.

Pesquisa de Pokémon (Detalhes API): Permite pesquisar informações detalhadas de Pokémon utilizando a PokeAPI.

Campo de pesquisa interativo.

Exibição de nome, ID, imagem, tipos e habilidades do Pokémon.

Indicadores de carregamento e mensagens de erro.

Página de Formulário (Contacto): Um formulário simples para demonstração de recolha de dados e gestão de estado.

Página "Sobre": Informações sobre o projeto e as tecnologias utilizadas.

Design Responsivo: A interface adapta-se a diferentes tamanhos de ecrã (desktop, tablet, telemóvel) graças ao Tailwind CSS.

🛠️ Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de utilizador.

JavaScript (ES6+): Linguagem de programação principal.

HTML5: Estrutura da página web.

CSS3: Estilização da aplicação.

Tailwind CSS: Framework CSS utilitário para um design rápido e responsivo.

Lucide React: Biblioteca de ícones para React.

PokeAPI: API RESTful para dados de Pokémon.

🚀 Como Configurar e Executar o Projeto
Siga os passos abaixo para ter o projeto a correr na sua máquina local.

Pré-requisitos
Certifique-se de que tem o Node.js (que inclui o npm) instalado no seu sistema.

Instalação
Clone o repositório (se estiver a usar Git):

git clone <URL_DO_SEU_REPOSITORIO>
cd seu-site-dinamico

Ou, se não estiver a usar Git, navegue para a pasta do seu projeto.

Instale as dependências do projeto:

npm install

Instale o pacote de ícones lucide-react:

npm install lucide-react

Adicione o CDN do Tailwind CSS (se não estiver configurado via build):
Certifique-se de que a seguinte linha está no <head> do seu ficheiro public/index.html (ou index.html se estiver a usar Vite):

<script src="https://cdn.tailwindcss.com"></script>

Executar a Aplicação
Para iniciar o servidor de desenvolvimento:

npm start
# Ou, se usou Vite para criar o projeto:
# npm run dev

A aplicação será aberta automaticamente no seu navegador padrão, geralmente em http://localhost:3000/ (para Create React App) ou http://localhost:5173/ (para Vite).

💡 Como Usar a Pesquisa de Pokémon
Navegue para a página "Pesquisar Pokémon" através do menu de navegação.

No campo de texto, digite o nome de um Pokémon (ex: pikachu, charmander, ditto).

Clique no botão "Pesquisar" ou pressione Enter.

Os detalhes do Pokémon serão exibidos abaixo.

🎯 Próximos Passos e Melhorias
Implementar um roteamento "real" com react-router-dom para URLs amigáveis.

Adicionar mais detalhes e estilização à exibição dos dados do Pokémon.

Implementar validação de formulário mais robusta.

Adicionar funcionalidade de paginação ou pesquisa de lista de Pokémon.

Explorar o uso de Context API ou outras bibliotecas de gestão de estado para aplicações maiores.
