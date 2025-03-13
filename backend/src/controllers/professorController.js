const ProfessorModel = require('../models/professorModel');

const ProfessorController = {
  criarProfessor: async (req, res) => {
    try {
      const novoProfessor = await ProfessorModel.criarProfessor(req.body);
      res.status(201).json(novoProfessor);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar professor' });
    }
  },

  listarProfessores: async (req, res) => {
    try {
      const professores = await ProfessorModel.listarProfessores();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar professores' });
    }
  },

  buscarProfessorPorId: async (req, res) => {
    try {
      const professor = await ProfessorModel.buscarProfessorPorId(req.params.id);
      if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar professor' });
    }
  },

  atualizarProfessor: async (req, res) => {
    try {
      const professorAtualizado = await ProfessorModel.atualizarProfessor(req.params.id, req.body);
      if (!professorAtualizado) return res.status(404).json({ error: 'Professor não encontrado' });
      res.status(200).json(professorAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar professor' });
    }
  },

  deletarProfessor: async (req, res) => {
    try {
      await ProfessorModel.deletarProfessor(req.params.id);
      res.status(200).json({ message: 'Professor deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar professor' });
    }
  }
};

module.exports = ProfessorController;
