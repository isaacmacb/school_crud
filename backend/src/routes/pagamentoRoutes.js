const express = require('express');
const PagamentoController = require('../controllers/pagamentoController');

const router = express.Router();

router.post('/pagamentos', PagamentoController.criarPagamento);
router.get('/pagamentos', PagamentoController.listarPagamentos);
router.get('/pagamentos/:id', PagamentoController.buscarPagamentoPorId);
router.delete('/pagamentos/:id', PagamentoController.deletarPagamento);

module.exports = router;
