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