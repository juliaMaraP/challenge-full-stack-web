📐 Arquitetura da Solução
O projeto foi dividido em três camadas principais:

Frontend (Vue.js + Vuetify)

SPA com roteamento via vue-router

Interface limpa e responsiva com Vuetify, seguindo o Material Design

Separação por componentes reutilizáveis

Comunicação com backend via axios

Backend (Node.js + Express)

API RESTful organizada em rotas, controllers e serviços

Autenticação com JWT protegendo as rotas de alunos

Integração com MySQL via Sequelize como ORM

Banco de Dados (MySQL)

Executado em container Docker

Tabelas bem definidas para alunos

Persistência robusta com Sequelize Models

Extra: Ambiente dockerizado com docker-compose para fácil configuração do banco MySQL.

📦 Bibliotecas e Tecnologias Utilizadas
Frontend
vue

vue-router

vuetify

axios

jwt-decode

Backend
express

cors

dotenv

jsonwebtoken

mysql2

sequelize

DevOps
docker

✅ Requisitos entregues
 Cadastro de aluno (com validação de campos obrigatórios)

 Edição de aluno (campos editáveis: nome e email)

 Exclusão de aluno com modal de confirmação

 Listagem de alunos com ações de editar/excluir

 Login com autenticação via JWT

 Roteamento protegido por autenticação

 Layout responsivo com Vuetify

 Separação de camadas no backend

 Integração com banco de dados MySQL


🧠 Melhorias futuras (com mais tempo)
🔐 Implementar logout e expiração segura de token

📧 Validação mais robusta de e-mail e CPF no backend

🔁 Adicionar paginação na listagem de alunos

🔄 Adicionar Refresh Token para sessões persistentes

🧪 Implementar testes automatizados (Jest, Vitest, etc.)

📄 Gerar documentação da API (Swagger ou similar)

🚨 Melhorar tratamento de erros para feedback mais claro

🧑‍💻 Tela de login com validação visual + lembrete de sessão

🧹 Melhor organização das mensagens e estados no frontend

❌ Requisitos não entregues
 Testes automatizados

 Validação formal do CPF (regex ou biblioteca)

 Funcionalidade de logout com botão no frontend