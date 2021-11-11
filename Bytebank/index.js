import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente();
  cliente.nome = "Fabio Macieira";
  cliente.cpf = 9991112222;

console.log(cliente);

const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 1001;

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);

console.log("valor sacado: " + contaCorrente.sacar(50));

console.log(contaCorrente);



