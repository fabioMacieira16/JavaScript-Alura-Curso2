export class ContaCorrente {
    agencia;
    
    _saldo = 0;
  
    sacar(valor){
      this._saldo >= valor ? this._saldo -= valor : "Não há saldo"; 
      return valor;
    }
  
    depositar(valor){
      if(valor > 0 ) {
        this._saldo += valor;
      }
    }
  }