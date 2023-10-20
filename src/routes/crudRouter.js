// Importar pacote do express
const { Router } = require('express');

// Instanciar o Router na na variavel router
const router = Router();

// Importar funções do controller para a rota acessar as funções
const { listarDados } = require('../controllers/controller');

router.get('/api', listarDados);

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
