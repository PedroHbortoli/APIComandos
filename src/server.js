// importar pacote do express
const express = require('express');
// instanciar o express na variavel app
const app = express();
// importar pacote dotenv
const dotenv = require('dotenv').config();
// definir a porta do servidor 
const PORT = process.env.PORT || 3001;

app.get('/api', (request, response) => (
    response.send('Retorno de lista de informações do bando de dados')
));

app.post('/api', (request, responde) =>(
    responde.send('Metodo utilizado para salvar informações')
));

app.put('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para editar informações')
));

app.delete('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para deletar informações')
));

// testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))