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