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
## Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm install' sempre que fazer um clone do gitHub

## Criar o arquivo .env e o .env.example

```
touch .env
```
* Criar arquivo para salvar as variáveis nescessárias do aplicação sem os valores
```
touch .env.example
```

* Criar pasta routes
```
mkdir routes
```
* Criar arquivo crudRouter.js dentro da pasta routes
```
nano crudRouter.js
```
## Comando do nano
### Ctrl + O = Salva o arquivo
### Enter = Confirmar nome do arquivo 
### Ctrl + X = Fechar arquivo

* Digitar o código no arquivo criado
```
// Importar pacote do express
const { Router } = require('express');

// Instanciar o Router na na variavel router
const router = Router();

router.get('/api', (request, response) => {
    response.send('Retorno de lista de informações do bando de dados');
    console.log('get');
});

router.post('/api', (request, responde) =>{
    responde.send('Metodo utilizado para salvar informações');
    console.log('post');
    console.log(request);
});

router.put('/api/:id', (request, responde) =>{
    responde.send('Metodo utilizado para editar informações');
    console.log('put');
    console.log('id:', request.params.id);
});

router.delete('/api/:id', (request, responde) =>{
    responde.send('Metodo utilizado para deletar informações');
    console.log('delete');
    console.log('id:', request.params.id);
});

module.exports = router;
```
