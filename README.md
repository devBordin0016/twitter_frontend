# Twitter Clone - Front-end

Interface do usuário para um clone do Twitter, desenvolvido com React e TypeScript. Permite login, criação de tweets, seguir usuários e visualizar um feed personalizado.

## Tecnologias

- React (Vite)
- TypeScript
- Styled-Components
- Redux Toolkit + RTK Query
- Formik + Yup
- JWT (armazenado no localStorage)

## Funcionalidades

- Login e registro de usuários  
- Listagem de tweets  
- Criação de tweets  
- Seguir e deixar de seguir outros usuários  
- Feed com tweets de usuários seguidos  
- Sugestão de perfis  
- Decodificação do JWT para manter estado do usuário  

## Integração com API

A aplicação consome uma API RESTful desenvolvida com Django REST Framework, utilizando autenticação via JWT. Toda a comunicação com o back-end é feita com RTK Query, que também gerencia o cache e estado global da aplicação.

## Layout

- Sidebar esquerda com informações do perfil  
- Área central com os tweets  
- Sidebar direita com sugestões de perfis  

## Instalação

```bash
# Clone o repositório
git clone https://github.com/VitorBri/twitter_front.git
cd twitter_front

# Instale as dependências
npm install

# Rode o projeto
npm run dev
