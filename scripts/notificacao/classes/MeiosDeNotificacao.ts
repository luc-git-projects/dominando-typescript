import MeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export class Email extends Notificacao{
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Eviando E-mail para o usuario ${usuario.email}`);
        return true;
    }
    
}


export class SMS extends Notificacao{
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Eviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
    
}

export class Android extends Notificacao{
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando notificação para o usuario ${usuario.idAndroid}...`);
        return true;
    }
}