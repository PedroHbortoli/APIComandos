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
