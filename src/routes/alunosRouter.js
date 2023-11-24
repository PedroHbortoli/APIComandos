//
const { Router } = require('express');
const router     = Router();

// Importar funções para as rotas 
const {
    listarUsuarios,
    cadastrarAluno,
    update,
    deleteAluno,
    listarEspecifico
} = require('../controllers/alunosController')

router.get('/alunos', listarUsuarios);
router.post('/alunos/create', cadastrarAluno);
router.put('/alunos/update/:id', update);
router.delete('/alunos/delete/:id', deleteAluno);
router.get('/alunos/:id', listarEspecifico)

module.exports = router;