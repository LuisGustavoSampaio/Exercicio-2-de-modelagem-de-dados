let contas = [];

function criarConta() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;

    let conta = {
        numero: contas.length + 1,
        nome: nome,
        cpf: cpf,
        saldo: 0,
        historico: []
    };

    contas.push(conta);

    document.getElementById("resultado").innerHTML =
        "Conta criada número: " + conta.numero;
}

function depositar() {
    let num = document.getElementById("contaDeposito").value;
    let valor = parseFloat(document.getElementById("valorDeposito").value);

    let conta = contas[num - 1];
    conta.saldo += valor;
    conta.historico.push("Depósito: " + valor);

    document.getElementById("resultado").innerHTML =
        "Depósito realizado. Saldo: " + conta.saldo;
}

function sacar() {
    let num = document.getElementById("contaSaque").value;
    let valor = parseFloat(document.getElementById("valorSaque").value);

    let conta = contas[num - 1];

    if (valor > conta.saldo) {
        document.getElementById("resultado").innerHTML = "Saldo insuficiente";
        return;
    }

    conta.saldo -= valor;
    conta.historico.push("Saque: " + valor);

    document.getElementById("resultado").innerHTML =
        "Saque realizado. Saldo: " + conta.saldo;
}

function historico() {
    let num = document.getElementById("contaHistorico").value;
    let conta = contas[num - 1];

    document.getElementById("resultado").innerHTML =
        conta.historico.join("<br>");
}