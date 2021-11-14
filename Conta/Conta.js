//Classe abstrata - não pode ser instânciada sómente herdada 
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
           throw new Error("voce não pode instanciar um objeto do tipo conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Metodo abstrato: meto que tem que ser sobrescrito
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}