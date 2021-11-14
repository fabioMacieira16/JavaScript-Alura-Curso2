import { Cliente } from "./Funcionario/Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Fabio Macieira", 10000, 123456789);
diretor.cadatraSenha("123456");
const gerente = new Gerente("Vitor Macieira", 70000, 789456123);
gerente.cadatraSenha("123");



const cliente = new Cliente("Lais",44455852, "123");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente, "123");


console.log(gerenteLogado, diretorLogado, clienteLogado);

