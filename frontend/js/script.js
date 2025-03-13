const apiUrl = "http://localhost:3000/api/professores";

// Função para carregar professores
async function carregarProfessores() {
    const response = await fetch(apiUrl);
    const professores = await response.json();

    const lista = document.getElementById("professor-list");
    lista.innerHTML = "";

    professores.forEach(professor => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${professor.nome}</td>
            <td>${professor.disciplina}</td>
            <td>${professor.email}</td>
            <td>${professor.telefone}</td>
            <td><button class="delete-btn" onclick="deletarProfessor(${professor.id})">Excluir</button></td>
        `;
        lista.appendChild(row);
    });
}

// Função para cadastrar professor
document.getElementById("professor-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, disciplina, email, telefone })
    });

    if (response.ok) {
        document.getElementById("professor-form").reset();
        carregarProfessores();
    } else {
        alert("Erro ao cadastrar professor.");
    }
});

// Função para deletar professor
async function deletarProfessor(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        carregarProfessores();
    } else {
        alert("Erro ao deletar professor.");
    }
}

// Carregar professores ao iniciar a página
carregarProfessores();
