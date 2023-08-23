
# Case Processo Seletivo MindConsulting Group

Case desenvolvido para o processo seletivo na Mind Consulting Group.

### Objetivo do Case:

- Desenvolver uma plataforma consistente, segura e prática ao usuário final;
- Realizar operações de dados;
- utilizar git para versionamento;

### Funcionalidades do Case:

- Usuário deve conseguir se cadastrar e fazer login na plataforma;
- Usuário deve conseguir registrar cursos;
- Usuário deve conseguir visualizar/editar/desativar/filtrar e buscar cursos;
- Usuário deverá conseguir realizar logout;

### Macro-Funcionalidades:

- Sistema de login e autenticação com criptografia de senha e verificação de email;
- CRUD completo e semântico (com suporte a upload de arquivos);

### Stack utilizada:

![Stack](https://img.shields.io/badge/reactjs-61DAFB?logo=react&logoColor=black&style=for-the-badge) ![Stack](https://img.shields.io/badge/css3-blue?logo=css3&logoColor=white&style=for-the-badge)

![Stack](https://img.shields.io/badge/nodejs-green?logo=node.js&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/express-black?logo=express&logoColor=white&style=for-the-badge)

![Stack](https://img.shields.io/badge/postgresql-blue?logo=postgresql&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/prisma-black?logo=prisma&logoColor=white&style=for-the-badge) 

![Stack](https://img.shields.io/badge/typescript-yellow?logo=typescript&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/git-red?logo=git&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/Vite-AD6AE5?logo=vite&logoColor=white&style=for-the-badge)


## Instalação

Para realizar a instalação, primeiro, clone o repositório em sua máquina:

```
$ https://github.com/PauloHenriqueOliveiradeAlmeida/processo-seletivo-mind-consulting.git caseMindConsulting 
```

acesse a pasta:

```
$ cd caseMindConsulting
```

Esta é a pasta raiz do projeto, a pasta ```view``` é responsável pelo frontend, enquanto a pasta ```api``` é responsável pelo backend.

### Configurando o Frontend

Agora, acesse a pasta ```view``` e faça o download dos pacotes:

- com Yarn:
```
$ cd view
$ yarn install

```
- com NPM:
```
$ cd view
$ npm install

```

Pronto! agora para "rodar" o projeto, é só executá-lo:


- com Yarn:
```
$ yarn run dev

```
- com NPM:
```
$ npm run dev

```

### Configurando o Backend

#### Fazendo o Download dos pacotes:

A partir da pasta raiz, acesse a pasta ```api``` e faça o download dos pacotes:

- com Yarn:
```
$ cd api
$ yarn install

```
- com NPM:
```
$ cd api
$ npm install

```

#### importando Banco de Dados:

Acesse o arquivo ```dump.sql``` presente na raiz do projeto e importe no seu servidor PostgreSQL, em seguida, copie sua URL de conexão.

#### Definindo as variáveis de ambiente:

Crie um arquivo ```.env``` e defina as variáveis de ambiente com suas próprias credenciais:

```env
PORT=3000
DATABASE_URL=url de conexão do DB
```

Pronto! agora para "rodar" o projeto, é só executá-lo:

- com Yarn:
```
$ yarn run dev

```
- com NPM:
```
$ npm run dev

```

## Fluxograma e relação de telas

## Endpoints API


## Deploy Web

Você também pode testar o Case pela web, sem ter que fazer a instalação, acessando: https://processo-seletivo-mind.vercel.app/.

