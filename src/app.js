// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();

//Importar as rotas para serem executadas na aplicação
const router = require('./router/crudRouter');

// Importar pacote dotenv
const dotenv = require('dotenv').config();

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configuraçãoes do app para outros arquivos acessar
module.exports = app;