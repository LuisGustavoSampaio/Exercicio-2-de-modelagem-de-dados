class BancoService:
    def __init__(self, banco_dados):
        self.banco_dados = banco_dados

    def criar_conta(self, cliente, conta):
        self.banco_dados.adicionar_conta(conta)

    def depositar(self, numero_conta, valor):
        conta = self.banco_dados.buscar_conta(numero_conta)
        if conta:
            conta.depositar(valor)

    def sacar(self, numero_conta, valor):
        conta = self.banco_dados.buscar_conta(numero_conta)
        if conta:
            conta.sacar(valor)

    def historico(self, numero_conta):
        conta = self.banco_dados.buscar_conta(numero_conta)
        if conta:
            return conta.historico.transacoes