# Como subir para o git

Usar o:
```
git add .
```

Comentar o que esta subindo com o:
```
git commit -m '(descrição do que esta subindo)
```

Subir para o Git com:
```
git push
```

# Como apagar a pasta via git bash

sair da pasta com:
```
cd ..
```

apagar com:
```
rm - rf (nome da pasta)
```

# Como clonar o repositorio

pegar o link do git hub que quer clonar, e usar o:
```
git clone (link do git)
```
* no git bash

Abrir pasta:
```
cd (nome da pasta)
```

baixar arquivos com:
```
npm i
```

criar posta .env
```
touch .env
```

abrir vs code
```
code .
```

# Documentação para contrução da API com NodeJs
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
* Criar o arquivo package.json para gerenciar os pacotes da aplicação

# Intalar pacotes da API.
```
npm i express nodemon dotenv mysql2
```
* express: será o servidor da API.
* nodemon: atualizar os arquivos alterados sem parar o 
servidor.
* dotenv: gerenciador de variaveis do ambiente.
* mysql2: integrar aplicação com o banco de dados 

Criar no VSCode o arquivo .gitignore: arquivos e pastas que não vão ao git hub.
```
touch .gitignore
```
* Arquivo responsavel por ignorar arquivos e pastas no git hub, ou seja não serão visiveis no repositório remoto

Criar arquivo .env: armazernar as variaveis do ambiente.
```
touch .env
```

Criar arquivo .env.example
```
touch .env.example
```
* Arquivo responsavel por definir as variáveis de ambiente sem os valores

Colar as variaveis no arquivo '.env.example
```
# DEFINIÇÂO DA PORTA DO SErVIDor EXPRESS
PORT =

#VARIÁVEIS DE CENEXÃO COM BANCO
DB_HOST = 
DB_USER =
DB_PASSWORD =
DB_DATABASE =
DB_PORT =
```

* Por padrão o pacote mysql2, espera a conexão com banco na porta 3306
* Se o MySQL não esteja instalado na porta 3306, precisamos informar a porta do MySQL no aquivo '.env' e recuperar no arquivo "db.js" para o banco
* Caso a porta do MySQL não esteja como 3306, colocar no .env 'DB_PORT', e colocar a porta que esta no MySQL detro da porta criada 


Informar arquivos  e pastas no .gitignore.
```
node_modules
.env
```
Criar pasta src para estrutura do projeto.
```
mkdir src
```
* Pasta responsável por organizar a estrutura da aplicação

Criar o arquivo server.js na pasta src.
```
touch src/server.js
```
* Arquivo responsável por rodar a aplicação

Colar o código de configuração no arquivo server.js
```
// Importar o arquivo se configuração(app.js)
const app = require('./app');

// Importar a porta do servidor 
const PORT = app.get('port');

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
```

Criar o arquivo app.js na pasta src.
```
touch src/app.js
```
* Arquivo responsável por configurar a aplicação

Colar o código de configuração mo arquivo 'app.js'
```
// Importar pacote do express
const express = require('express');

// Instanciar o express na variavel app
const app = express();
app.use(express.json());

//Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');
//Importar as rotas para serem executadas na aplicação
const alunosRouter = require('./routes/alunosRouter');

// Importar pacote dotenv
const dotenv = require('dotenv').config();

// Habilitar a utilização do crudRauter
app.use('/api',crudRouter);
// Habilitar a utilização do crudRauter
app.use('/api',alunosRouter);

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configuraçãoes do app para outros arquivos acessar
module.exports = app;
```

Criar comando para rodar o servidor no arquivo 'package.jsor'.
```
"start":"nodemon src/server.js"
```
* Substituiro o comando "test" dentro da chave scripts pelo comando acima
* Este comando é responsável por rodar a API

<img src ="./imagens/package_json.png">

Após esta configuração o arquivo 'package.json' deve estar conforme a imagem abaixo

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

// Importar funções do controller para a rota acessar as funções
const { listarDados, 
        gravarDados,
        atualizarDados,
        deletarDados
        } = require('../controllers/controller');

router.get('/listar', listarDados);

router.post('/gravar',gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
```
### CRIAÇÃO DE CONTROLLERS
* Arquivos para processar as requisições das rotas 

<hr> 

### Criar pasta controllers
```
mkdir src/controller
```

### Criar aquivo controller.js
```
touch src/controller/countroller.js
```

### Criar funções  para processar as requisições da rotas
```
function listarDados(request, response) {
        response.send('Retorno de lista de informações do bando de dados');
        console.log('get');
}

function gravarDados(request, response){
    response.send('Metodo utilizado para salvar informações');
}

function atualizarDados(request, response){
    response.send('Metodo utilizado para editar informações');
}

function deletarDados(request, response){
    response.send('Metodo utilizado para deletar informações');
}
module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
}
```

<hr>

## Configurar estrutura de conecção com o banco de dados

### Criar pasta 'config' dentro da pasta 'src'
```
mkdir src/config
```
### Criar arquivo 'db.js' dentro da pasta 'config'
```
touch src/config/db.js
```
### Colar o codigo no arquivo 'db.js'
```
// Importando o pacote de conexão com banco de dados
const mysql = require('mysql2');

// Importar variaveis de conexão do banco
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) =>{
    if (err) {
        console.log('Error de conexaõ: ' +err);
    } else {
        console.log('Mysql Connected!');
    }
});

module.exports = connection;
```

## Criar banco de dados

* Criar database
* Dar um use na database criada
* Criar tabelas

### Crair database
```
create database NOME_DATABESE;
```
* CTRL + Enter para executar o comando 

### Selecionar a database
```
use NOME_DATABASE
```

### Criar tabela alunos
```
create table alunos(
    id int not null auto_increment,
    nome varchar(120) not null,
    dt_nascimento date not null,
    primary key(id)
);
```

### Criar tabela users
```
create table users(
    id int not null auto_increment,
    ds_nome varchar(120) not null,
    primary key(id)
);
```
