const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/cadastroUsuarioController.js');
const controllerTarefa = require('../controllers/cadastroTarefeasController.js');

router.get('/usuarios', controllerUsuario.listaDeUsuarios);
router.post('/cadastrar-usuario', controllerUsuario.cadastrarUsuario);
router.get('/tarefas', controllerTarefa.listaTarefas);
router.post('/cadastrar-tarefa', controllerTarefa.cadastrarTarefa);
router.put('/editar-tarefa/:id', controllerTarefa.editarTarefa);
router.delete('/remover-tarefa/:id', controllerTarefa.removerTarefa);

module.exports = router;
