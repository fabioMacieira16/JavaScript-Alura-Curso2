export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticar(autenticavel)){

            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticar(autenticavel){
        return "autenticar" in autenticavel && 
           autenticavel.autenticar instanceof Function
    }
}