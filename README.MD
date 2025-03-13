# School_Crud

Este repositório contém um sistema CRUD desenvolvido para escolas, permitindo o gerenciamento eficiente de alunos, professores e disciplinas.

## Objetivo

O objetivo do Schoo CRUD é oferecer uma solução simples e eficaz para a administração de instituições de ensino, possibilitando:

-Cadastro, edição e remoção de alunos, -professores e disciplinas.
-Consulta de registros de forma organizada.
-Autenticação e controle de acesso (opcional).

Integração com bancos de dados para armazenamento seguro das informações.

## Tecnologias Utilizadas

1. Back-end

-Node.js com Express para criação da API.
-PostgreSQL para gerenciamento do banco de dados.
-Sequelize para ORM e migração de dados.

2. Front-end

-HTML, CSS e JavaScript para estilização e interatividade.


### Estrutura do Projeto**
- **A organização do código segue a estrutura:**: 

/schoo_crud
│-- /backend
│   ├── models/          # Modelos do banco de dados
│   ├── controllers/     # Lógica dos endpoints
│   ├── routes/         # Definição das rotas
│   ├── config/         # Configuração do banco de dados
│   └── server.js       # Inicialização do servidor
│-- /frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── index.js
│-- .env
│-- README.md