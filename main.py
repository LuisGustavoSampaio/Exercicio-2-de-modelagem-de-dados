from model.cliente import Cliente
from model.conta import ContaCorrente
from repository.banco_dados import BancoDados
from service.banco_service import BancoService

banco_dados = BancoDados()
service = BancoService(banco_dados)

cliente = Cliente("Gustavo", "12345678900", "Rua A")
conta = ContaCorrente(cliente, 1)

service.criar_conta(cliente, conta)
service.depositar(1, 100)
service.sacar(1, 50)

print(service.historico(1))