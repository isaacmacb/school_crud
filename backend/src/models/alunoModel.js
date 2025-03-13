const pool = require('../config/db');

class Aluno {
  static async getAll() {
    const result = await pool.query('SELECT * FROM alunos');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM alunos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(nome, nome, data_nascimento, serie) {
    const result = await pool.query(
      'INSERT INTO alunos (nome, data_nascimento, serie) VALUES ($1, $2, $3) RETURNING *',
      [nome, data_nascimento, serie]
    );
    return result.rows[0];
  }

  static async update(id, nome, data_nascimento, serie) {
    const result = await pool.query(
      'UPDATE alunos SET nome = $1, idade = $2, turma = $3 WHERE id = $4 RETURNING *',
      [nome, data_nascimento, serie, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM alunos WHERE id = $1', [id]);
    return { message: 'Aluno deletado com sucesso' };
  }
}

module.exports = Aluno;
