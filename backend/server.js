const express = require('express');
const pool = require('./src/config/db'); // Importa a conexão
const alunoRoutes = require('./src/routes/alunoRoutes');
const pagamentoRoutes = require('./src/routes/pagamentoRoutes');
const professorRoutes = require('./src/routes/professorRoutes'); // Importação das rotas de professores
const cors = require('cors');

const app = express();  // Inicialize o app primeiro

app.use(cors());  // Agora você pode usar o CORS

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de gestão escolar');
});

app.use('/api', pagamentoRoutes);
app.use('/api', professorRoutes); // Adicionando as rotas de professores

// Rota para alunos
app.use('/api/alunos', alunoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});
