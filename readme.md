# Documentação da API 
* Escolher local do computador para criar a pasta do projeto.
* Abrir o gitbash na pasta criada.
```
mkdir NOME_PROJETO
```
Acessar a pasta do projeto.
```
cd NOME_PROJETO
```
Abrir a pasta no VSCode.
```
code . 
```
Iniciar o gerenciador de pacotes node.
```
npm init -y
```
Criar no VSCode o arquivo .gitignore: arquivos e pastas que não vão ao git hub.
```
touch .gitignore
```
Criar arquivo .env: armazernar as variaveis do ambiente.
```
touch .env
```
Intalar pacotes da API.
```
npm i express nodemon dotenv
```
* express: será o servidor da API.
* nodemon: atualizar os arquivos alterados sem parar o 
servidor.
* dotenv: gerenciador de variaveis do ambiente.

Informar arquivos  e pastas no .gitignore.
```
node_modules
.env
```
Criar pasta src para estrutura do projeto.
```
mkdir src
```
Criar o arquivo server.js na pasta src.
```
touch src/server.js
```
Configurar o servidor.
```
// importar pacote do express
const express = require('express');
// instanciar o express na variavel app
const app = express();
// importar pacote dotenv
const dotenv = require('dotenv').config();
// definir a porta do servidor 
const PORT = process.env.PORT || 3001;

// testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
```
Criar comando para rodar o servidor.
```
"start":"nodemon src/server.js"
```
Rodar o comando no terminal.
```
npm run start
```
