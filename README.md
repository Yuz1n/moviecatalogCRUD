<h1 align="center">Movie Catalog API</h1>

## 📕 Descrição

Este projeto é uma API RESTful para um catálogo de filmes, desenvolvida com NestJS, TypeORM, PostgreSQL, Redis, e autenticada com JWT. A API permite operações CRUD (Create, Read, Update, Delete) em filmes e usuários. Apenas usuários autenticados podem acessar os endpoints de filmes e usuários.


## 💻 Tecnologias Utilizadas
- TypeScript
- NestJS
- TypeORM
- PostgreSQL
- Redis
- JWT (JSON Web Tokens)
- Swagger


## ⚒️ Requisitos
- Docker e Docker Compose
- Node.js e npm

## 📁 Configuração do Projeto
````bash
# CLONE O PROJETO E INSTALE SUAS DEPENDÊNCIAS
 $ git clone https://github.com/Yuz1n/moviecatalogapi

 $ cd movie-catolog

 $ npm install

# CRIE UM ARQUIVO ENV NA RAIZ DO PROJETO COM O SEGUINTE CONTEÚDO
  POSTGRES_HOST=localhost
  POSTGRES_PORT=5433
  POSTGRES_USER=root
  POSTGRES_PASSWORD=root
  POSTGRES_DB=movie_catalog
  JWT_SECRET=your_jwt_secret
  REDIS_HOST=localhost
  REDIS_PORT=6380

# SUBA OS CONTAINERS DO POSTGRESQL E REDIS UTILIZANDO DOCKER COMPOSE

  $ docker-compose up -d

# EXECUTE A APLICAÇÃO

  $ npm run start:dev

# A APLICAÇÃO ESTARÁ DISPONIVEL EM http://localhost:3000/api

 ````

 ## 🧑🏻‍💻 Endpoints
  ### Autenticação
  - POST /auth/register: Registra um novo usuário.
  - POST /auth/login: Autentica um usuário e retorna um token JWT.
  ### Usuários
  - GET /users: Retorna todos os usuários. (Autenticado)
  - GET /users/:id: Retorna um usuário por ID. (Autenticado)
  - PUT /users/:id: Atualiza um usuário por ID. (Autenticado)
  - DELETE /users/:id: Deleta um usuário por ID. (Autenticado)
  ### Filmes
  - POST /movies: Cria um novo filme. (Autenticado)
  - GET /movies: Retorna todos os filmes. (Autenticado)
  - GET /movies/:id: Retorna um filme por ID. (Autenticado)
  - PUT /movies/:id: Atualiza um filme por ID. (Autenticado)
  - DELETE /movies/:id: Deleta um filme por ID. (Autenticado)

  ## Considerações finais sobre o Projeto
  Foi um projeto desafiador e meu primeiro feito após a conclusão da minha pós de desenvolvimento full stack pelo descomplica. Tive algumas dificuldades com as configurações do projeto para subir a aplicação, e também para realizar a autenticação usando o JWT, mas foram tudo superados com pesquisas nas documentações e vendo exemplos em fóruns/videos na internet.

   Acredito que tive essas dificuldades pois como mencionei, o tempo de experiência em  NestJS,TypeORM,PostgreSQL,Redis,JWT,Swagger e Docker ser apenas acadêmico. O que me senti mais confortável foi por ser em TypeScript juntamente com Node.js, pois já tenho prática em ambos (+2 anos).