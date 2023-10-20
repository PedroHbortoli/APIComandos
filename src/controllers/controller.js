function listarDados(request, response) {
        response.send('Retorno de lista de informações do bando de dados');
        console.log('get');
}

module.exports = {
    listarDados
}