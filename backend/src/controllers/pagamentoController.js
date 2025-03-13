const PagamentoModel = require('../models/pagamentoModel');

const PagamentoController = {
  criarPagamento: async (req, res) => {
    try {
      const novoPagamento = await PagamentoModel.criarPagamento(req.body);
      res.status(201).json(novoPagamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pagamento' });
    }
  },

  listarPagamentos: async (req, res) => {
    try {
      const pagamentos = await PagamentoModel.listarPagamentos();
      res.status(200).json(pagamentos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pagamentos' });
    }
  },

  buscarPagamentoPorId: async (req, res) => {
    try {
      const pagamento = await PagamentoModel.buscarPagamentoPorId(req.params.id);
      if (!pagamento) return res.status(404).json({ error: 'Pagamento não encontrado' });
      res.status(200).json(pagamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
  },

  deletarPagamento: async (req, res) => {
    try {
      await PagamentoModel.deletarPagamento(req.params.id);
      res.status(200).json({ message: 'Pagamento deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar pagamento' });
    }
  }
};

module.exports = PagamentoController;
