# Twitter Clone - Front-end

Interface do usuário para um clone do Twitter, desenvolvido com **React** e **TypeScript**. Permite login, criação de tweets, seguir usuários, visualizar um feed personalizado e editar informações do perfil.

## 🔧 Tecnologias

- **React (Vite)**
- **TypeScript**
- **Styled-Components**
- **Redux Toolkit + RTK Query**
- **Formik + Yup**
- **JWT (armazenado no localStorage)**

## 🚀 Funcionalidades

- Login e registro de usuários  
- Listagem e criação de tweets  
- Curtir e comentar tweets  
- Seguir e deixar de seguir usuários  
- Feed com tweets de usuários seguidos  
- Sugestão de perfis para seguir  
- Decodificação do JWT para manter estado do usuário logado  
- Edição de perfil (renomear e trocar senha)  

## 🌐 Integração com API

A aplicação consome uma **API RESTful** desenvolvida com Django REST Framework.  
A autenticação é feita via **JWT**, e toda a comunicação com o back-end é gerenciada com **RTK Query**, que também controla cache e estado global.

## 🖼️ Layout

- **BarLeft**: menu de navegação e informações do usuário  
- **MainContainer**: feed principal com tweets e comentários  
- **BarRight**: sugestões de perfis e funcionalidades futuras  

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/VitorBri/twitter_front.git
cd twitter_front

# Instale as dependências
npm install

# Rode o projeto
npm run dev

