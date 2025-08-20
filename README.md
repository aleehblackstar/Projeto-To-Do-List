# 📝 To Do List - Aplicação React

Aplicação web simples para gerenciamento de tarefas usando React e TailwindCSS.Adicione, conclua, remova e filtre tarefas de forma intuitiva.

# 🚀 Objetivo

Criar uma aplicação funcional para prática de conceitos fundamentais do React e estilização moderna com TailwindCSS.

# 📋 Funcionalidades

- **Adicionar Tarefas**
  - Input controlado para criar novas tarefas.
  - Botão ou Enter para enviar.
  - Validação para evitar tarefas vazias.
  - Limpar input após adicionar.

- **Exibir Lista de Tarefas**
  - Mostrar título e status (pendente/concluída).
  - Mensagem amigável se a lista estiver vazia.

- **Marcar como Concluída**
  - Toggle de status via checkbox ou botão.
  - Feedback visual (texto riscado, cor diferente).

- **Remover Tarefas**
  - Botão de delete para cada tarefa.
  - Remover do estado/lista.
  - Confirmação opcional antes de deletar.

- **Filtrar Tarefas**
  - Filtros: “Todas”, “Pendentes” ou “Concluídas”.

- **Contador de Tarefas**
  - Total de tarefas.
  - Quantidade de tarefas pendentes e concluídas.

- **Interface Responsiva**
  - Design mobile-first.
  - Layout adaptativo para desktop, tablet e celular.

---


🏗 Estrutura do Projeto

````
todo-list-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskInput.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
````

⚙️ Configuração e Uso
Pré-requisitos

Node.js (v16+)

npm ou yarn

Navegador moderno

Editor de código (VS Code recomendado)

Instalação
# Clonar repositório
git clone <URL_DO_REPOSITORIO>
cd todo-list-react

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev


A aplicação estará disponível em: http://localhost:5173

💻 Tecnologias Utilizadas

React - Biblioteca para interfaces.

TailwindCSS - Estilização moderna e responsiva.

Vite - Bundler rápido para desenvolvimento.

📌 Observações

Projeto focado em aprendizado e prática dos conceitos do React.

Estrutura simples, modular e escalável.

Futuras melhorias podem incluir:

Persistência via localStorage

Animações e microinterações

Filtros avançados e categorias de tarefas