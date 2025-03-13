const pool = require('../config/db');

const PagamentoModel = {
  criarPagamento: async (dados) => {
    const { aluno_id, valor, data_pagamento, metodo } = dados;
    const query = `
      INSERT INTO pagamentos (aluno_id, valor, data_pagamento, metodo)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const valores = [aluno_id, valor, data_pagamento, metodo];
    const resultado = await pool.query(query, valores);
    return resultado.rows[0];
  },

  listarPagamentos: async () => {
    const resultado = await pool.query('SELECT * FROM pagamentos');
    return resultado.rows;
  },

  buscarPagamentoPorId: async (id) => {
    const resultado = await pool.query('SELECT * FROM pagamentos WHERE id = $1', [id]);
    return resultado.rows[0];
  },

  deletarPagamento: async (id) => {
    await pool.query('DELETE FROM pagamentos WHERE id = $1', [id]);
    return { message: 'Pagamento deletado com sucesso' };
  }
};

module.exports = PagamentoModel;
