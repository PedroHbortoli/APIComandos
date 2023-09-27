// Importar pacote do express
const express = require('express');
// Instanciar o Router na na variavel router
const router = express.Router();

router.get('/api', (request, response) => (
    response.send('Retorno de lista de informações do bando de dados')
));

router.post('/api', (request, responde) =>(
    responde.send('Metodo utilizado para salvar informações')
));

router.put('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para editar informações')
));

router.delete('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para deletar informações')
));

module.exports = router;