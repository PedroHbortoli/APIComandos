const connection = require('../config/db');

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