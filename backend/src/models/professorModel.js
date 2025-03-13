const pool = require('../config/db');

const ProfessorModel = {
  criarProfessor: async (dados) => {
    try {
      console.log("Dados recebidos para inserção:", dados); // Para depuração
  
      let { nome, disciplina, email, telefone, salario } = dados;
      
      // Se salário for undefined ou null, definir como 0
      salario = salario ?? 0;  
  
      const query = `
        INSERT INTO professores (nome, disciplina, email, telefone, salario)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
      `;
  
      const valores = [nome, disciplina, email, telefone, salario];
  
      console.log("Query SQL:", query);
      console.log("Valores a serem inseridos:", valores);
  
      const resultado = await pool.query(query, valores);
      return resultado.rows[0];
    } catch (error) {
      console.error("Erro ao inserir professor no banco:", error);
      throw new Error("Erro ao criar professor: " + error.message);
    }
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
    const { nome, disciplina, email, telefone, salario } = dados;
    const query = `
      UPDATE professores
      SET nome = $1, disciplina = $2, email = $3, telefone = $4, salario = $5
      WHERE id = $6 RETURNING *;
    `;
    const valores = [nome, disciplina, email, telefone, salario, id];
    const resultado = await pool.query(query, valores);
    return resultado.rows[0];
  },

  deletarProfessor: async (id) => {
    await pool.query('DELETE FROM professores WHERE id = $1', [id]);
    return { message: 'Professor deletado com sucesso' };
  }
};

module.exports = ProfessorModel;
