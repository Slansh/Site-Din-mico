# 🚀 Site Dinâmico com React e PokeAPI

Este projeto é uma aplicação web dinâmica desenvolvida com **React**, **HTML**, **CSS (Tailwind CSS)** e **JavaScript**.  
O objetivo principal é criar uma plataforma interativa, demonstrando:

- Uso de **componentes**
- **Gestão de estado**
- **Navegação entre páginas**
- Integração com uma **API externa** para dados dinâmicos

---

## ✨ Funcionalidades

- **Página Inicial (Início)**  
  Uma introdução acolhedora ao site.

- **Pesquisa de Pokémon (Detalhes API)**  
  - Campo de pesquisa interativo  
  - Exibição de **nome**, **ID**, **imagem**, **tipos** e **habilidades**  
  - Indicadores de carregamento e mensagens de erro

- **Página de Formulário (Contacto)**  
  Um formulário simples para demonstração de recolha de dados e gestão de estado.

- **Página "Sobre"**  
  Informações sobre o projeto e as tecnologias utilizadas.

- **💻 Design Responsivo**  
  Interface adaptável a diferentes tamanhos de ecrã (desktop, tablet, mobile), graças ao **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca JavaScript para construção de interfaces
- 💡 **JavaScript (ES6+)** – Linguagem principal
- 🧱 **HTML5** – Estrutura da página
- 🎨 **CSS3** – Estilização
- 🌬️ **Tailwind CSS** – Framework utilitária para design rápido e responsivo
- 🧩 **Lucide React** – Biblioteca de ícones para React
- 🔗 **PokeAPI** – API RESTful de dados sobre Pokémon

---

## 🧪 Como Configurar e Executar o Projeto

### ✅ Pré-requisitos

- Ter o **Node.js** (que inclui o **npm**) instalado.

### 📦 Instalação

Clone o repositório:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd seu-site-dinamico

Instale as dependências:

bash
Copy
Edit
npm install
Instale o pacote de ícones lucide-react:

bash
Copy
Edit
npm install lucide-react
Se estiver usando Vite ou não tiver o Tailwind configurado via build, adicione o CDN no seu public/index.html:

html
Copy
Edit
<!-- No <head> -->
<script src="https://cdn.tailwindcss.com"></script>
▶️ Executar o Projeto
bash
Copy
Edit
npm start
# Ou, se usou Vite:
npm run dev
```

## 🔍 Como Usar a Pesquisa de Pokémon

1. Vá até a página **"Pesquisar Pokémon"**
2. No campo de texto, digite o nome de um Pokémon  
   _Exemplo:_ `pikachu`, `charmander`, `ditto`
3. Clique em **Pesquisar** ou pressione **Enter**
4. Os detalhes do Pokémon aparecerão abaixo

---

## 🎯 Próximos Passos e Melhorias

- ✅ Implementar roteamento real com `react-router-dom`
- 🎨 Adicionar mais detalhes visuais à exibição dos Pokémon
- 🛡️ Melhorar validação de formulário
- 📄 Criar paginação ou pesquisa por lista de Pokémon
- ⚙️ Explorar o uso de **Context API** ou outras bibliotecas de gestão de estado
