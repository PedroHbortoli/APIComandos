// Importar o arquivo se configuração
const app = require('./app');
// Importar a porta do servidor 
const PORT = app.get('port');

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

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))