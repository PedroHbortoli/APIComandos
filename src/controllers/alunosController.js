// Importar a conexão com o banco de dados
const connection = require('../config/db');

// Função sync: realiza uma requisição de forma paralelaao sistema
// request: nesta variavel recuperamos os dados enviados na requisição
// response: tem a respondsabilidade de retornar as informações para quem requisitou
async function listarUsuarios(request, response) {
    // variável para executar a consulata no banco
    const query = 'SELECT *FROM alunos;';

    // err: retorna erros na execução
    // results: retorna a ação realizada com sucesso
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    massage: "Susseso! Lista de alunos",
                    data: results
                });
        } else {
            response
            .status(400)
            .json({
                success: false,
                massage: "Ooops ! não foi possível listar as informações solicitadas!",
                data: results
            });
        }
    });
}

async function cadastrarAluno(request, response) {
    // 1º passo: recuperar variáveis
    // 2º passo: montar a query para inserir os dados
    // 3º passo: tentar executar a ação no banco
    // 4º passo: definir retornos da requisição
console.log(request.body);
    // Recuperando dados da requisição
    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao
    );

    const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(201)
                .json({
                    success: true,
                    massage: "Sucesso ! Aluno cadastrado",
                    data: results
                })
        }
    })
}

async function update (request,response) {
    // Comando sqp
    const quary = "UPDATE alunos nome = ?, dt_nascimento = ?, time_do_coracao =  ? WHERE id = ?; ";

    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query (query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    massage: "Aluno atualizado com sucesso!",
                    data: results
                })
        }
    })
}

module.exports = {
    listarUsuarios,
    cadastrarAluno,
    update
};
