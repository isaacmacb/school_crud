const express = require('express');
const alunoController = require('../../src/controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.getAll);
router.get('/:id', alunoController.getById);
router.post('/', alunoController.create);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);

module.exports = router;
