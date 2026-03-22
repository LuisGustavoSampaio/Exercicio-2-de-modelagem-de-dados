function criarConta() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;

    fetch("http://localhost:5000/criar_conta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = data.mensagem;
    });
}