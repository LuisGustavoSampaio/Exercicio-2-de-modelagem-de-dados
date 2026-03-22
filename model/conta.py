from model.historico import Historico

class Conta:
    def __init__(self, cliente, numero):
        self.saldo = 0
        self.numero = numero
        self.agencia = "0001"
        self.cliente = cliente
        self.historico = Historico()

    def sacar(self, valor):
        if valor > self.saldo:
            print("Saldo insuficiente")
            return False

        self.saldo -= valor
        self.historico.adicionar_transacao(f"Saque: {valor}")
        return True

    def depositar(self, valor):
        self.saldo += valor
        self.historico.adicionar_transacao(f"Deposito: {valor}")
        return True


class ContaCorrente(Conta):
    def __init__(self, cliente, numero, limite=500):
        super().__init__(cliente, numero)
        self.limite = limite