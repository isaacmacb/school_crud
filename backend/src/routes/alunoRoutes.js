const express = require('express');
const alunoController = require('../../src/controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.listarAlunos);  // Alterado de getAll para listarAlunos
router.get('/:id', alunoController.buscarAlunoPorId);  // Alterado de getById para buscarAlunoPorId
router.post('/', alunoController.criarAluno);  // Alterado de create para criarAluno
router.put('/:id', alunoController.atualizarAluno);  // Alterado de update para atualizarAluno
router.delete('/:id', alunoController.deletarAluno);  // Alterado de delete para deletarAluno

module.exports = router;
