const express = require('express');
const ProfessorController = require('../controllers/professorController');

const router = express.Router();

router.post('/professores', ProfessorController.criarProfessor);
router.get('/professores', ProfessorController.listarProfessores);
router.get('/professores/:id', ProfessorController.buscarProfessorPorId);
router.put('/professores/:id', ProfessorController.atualizarProfessor);
router.delete('/professores/:id', ProfessorController.deletarProfessor);

module.exports = router;
