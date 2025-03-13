const AlunoModel = require('../models/alunoModel'); // Importa o modelo de aluno

// Função para criar um novo aluno
const criarAluno = async (req, res) => {
  try {
    const { nome, matricula, data_nascimento } = req.body; // Dados que vêm no corpo da requisição
    const aluno = await AlunoModel.criarAluno({ nome, matricula, data_nascimento });
    res.status(201).json(aluno); // Retorna o aluno criado
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar aluno', error: err.message });
  }
};

// Função para listar todos os alunos
const listarAlunos = async (req, res) => {
  try {
    const alunos = await AlunoModel.listarAlunos();
    res.status(200).json(alunos); // Retorna a lista de alunos
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar alunos', error: err.message });
  }
};

// Função para buscar um aluno pelo ID
const buscarAlunoPorId = async (req, res) => {
  try {
    const { id } = req.params; // Pega o id da URL
    const aluno = await AlunoModel.buscarAlunoPorId(id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(aluno); // Retorna o aluno encontrado
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar aluno', error: err.message });
  }
};

// Função para atualizar um aluno
const atualizarAluno = async (req, res) => {
  try {
    const { id } = req.params; // Pega o id da URL
    const { nome, matricula, data_nascimento } = req.body; // Dados que vêm no corpo da requisição
    const alunoAtualizado = await AlunoModel.atualizarAluno(id, { nome, matricula, data_nascimento });
    if (!alunoAtualizado) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(alunoAtualizado); // Retorna o aluno atualizado
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar aluno', error: err.message });
  }
};

// Função para deletar um aluno
const deletarAluno = async (req, res) => {
  try {
    const { id } = req.params; // Pega o id da URL
    await AlunoModel.deletarAluno(id);
    res.status(200).json({ message: 'Aluno deletado com sucesso' }); // Retorna sucesso na exclusão
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar aluno', error: err.message });
  }
};

module.exports = {
  criarAluno,
  listarAlunos,
  buscarAlunoPorId,
  atualizarAluno,
  deletarAluno,
};
