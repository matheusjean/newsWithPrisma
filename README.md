<h3 align="center">
🚧 Bem Vindo a o Repositório da API para criação de notícias | Em Construção 🚧
</h3>

<p align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
</p>

## 🚀 Sobre o Projeto

Projeto consiste em uma api para que possa ser gerenciado as notícias criadas pelo mesmo.

## 🔨 Tecnologias:

- **[NodeJS](https://nodejs.org/en/docs/)**
- **[Express](https://expressjs.com/)**
- **[Postgres](https://www.postgresql.org/)**
- **[Docker](https://www.docker.com/)**

## 🔎 Comandos

- `dev`: Executa a aplicação em desenvolvimento `localhost:3333`

## 🚀 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com), [NodeJs](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) Instalado em seu computador.

### 🔃 Requisitos e versões:

    Consulte a seção "engines" no package.json.

    NodeJs: >=16.15.0
    Yarn: >=1.22.18

### 🌀 Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/matheusjean/news-api.git

```

### 🎲 Rodando a Aplicação

```bash
# Instale as dependências
$ yarn install

# Execute a Aplicação em Desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

### ✳️ Verificando as end-points

```bash
# Acesse http://localhost:3333/api-docs

```

### 🏦 Rodando a Aplicação Docker

```bash
# Docker em desenvolvimento
$ docker-compose up -d

# O servidor inciará na porta:3333

```
### 🏦 Rodando as Migrations

```bash
# Typeorm em desenvolvimento
$ yarn typeorm migration:run

# >>> Criar o banco "noticias" antes de rodar as migrations

```
