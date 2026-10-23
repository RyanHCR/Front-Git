# 🚀 GitHub Explorer

O **GitHub Explorer** é uma aplicação web desenvolvida em React com TypeScript e SCSS que permite pesquisar usuários da plataforma GitHub e explorar seus repositórios públicos por meio de uma interface simples, intuitiva e responsiva.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca principal para construção da interface de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida para desenvolvimento web.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e prevenção de erros.
- **[SCSS / Sass](https://sass-lang.com/)**: Pré-processador CSS com suporte a CSS Modules para estilização escopada.
- **[GitHub REST API](https://docs.github.com/pt/rest)**: Consumo de dados públicos de usuários e repositórios.

---

## ✨ Funcionalidades

- [x] **Pesquisa de Usuários:** Permite pesquisar qualquer usuário do GitHub através de seu *username*.
- [x] **Exibição de Perfil:** Apresenta foto de perfil (avatar), nome de usuário, nome completo, biografia, localização e estatísticas de seguidores/seguindo e repositórios.
- [x] **Listagem de Repositórios:** Exibe os repositórios públicos com nome, descrição, linguagem principal, quantidade de estrelas e forks.
- [x] **Link para GitHub:** Acesso direto ao perfil e repositórios originais no GitHub.
- [x] **Busca Interna:** Permite filtrar a lista de repositórios exibida pelo nome.
- [x] **Paginação:** Navegação paginada para limitar o número de itens exibidos por página.
- [x] **Persistência de Dados:** Armazena o último usuário pesquisado no `localStorage` do navegador para restaurá-lo em acessos futuros.
- [x] **Tratamento de Erros e Estados:** Exibe feedbacks visuais para estados de carregamento (*loading*), usuário não encontrado ou erros de requisição.

---

## 📁 Estrutura do Projeto

```text
src/
├── components/          # Componentes reutilizáveis da aplicação
│   ├── SearchBar/       # Componente de pesquisa de usuário
│   ├── UserProfile/     # Componente de exibição do perfil
│   └── RepositoryList/  # Componente de listagem e filtro de repositórios
├── services/            # Configuração e chamadas de API (GitHub API)
├── styles/              # Estilos globais em SCSS
├── types/               # Definições de tipos TypeScript (User, Repository)
├── App.tsx              # Componente principal e gerenciador de estado
└── main.tsx             # Ponto de entrada da aplicação
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **[Node.js](https://nodejs.org/)** (versão 18 ou superior) instalado em sua máquina.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/github-explorer.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd github-explorer
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Executar a aplicação em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar no navegador:**
   Abra o endereço indicado no terminal (normalmente `http://localhost:5173/`).

---

## 📄 Licença

Este projeto foi desenvolvido com fins educativos para avaliação técnica frontend.