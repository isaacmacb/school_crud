const pool = require('../config/db');

const ProfessorModel = {
  criarProfessor: async (dados) => {
    const { nome, disciplina, email, telefone } = dados;
    const query = `
      INSERT INTO professores (nome, disciplina, email, telefone)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const valores = [nome, disciplina, email, telefone];
    const resultado = await pool.query(query, valores);
    return resultado.rows[0];
  },

  listarProfessores: async () => {
    const resultado = await pool.query('SELECT * FROM professores');
    return resultado.rows;
  },

  buscarProfessorPorId: async (id) => {
    const resultado = await pool.query('SELECT * FROM professores WHERE id = $1', [id]);
    return resultado.rows[0];
  },

  atualizarProfessor: async (id, dados) => {
    const { nome, disciplina, email, telefone } = dados;
    const query = `
      UPDATE professores
      SET nome = $1, disciplina = $2, email = $3, telefone = $4
      WHERE id = $5 RETURNING *;
    `;
    const valores = [nome, disciplina, email, telefone, id];
    const resultado = await pool.query(query, valores);
    return resultado.rows[0];
  },

  deletarProfessor: async (id) => {
    await pool.query('DELETE FROM professores WHERE id = $1', [id]);
    return { message: 'Professor deletado com sucesso' };
  }
};

module.exports = ProfessorModel;
