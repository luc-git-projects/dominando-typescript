import Notificacao from "./notificacao/classes/Notificacao";

interface IEmailV2{
    nome: string;
    email: string;
}

interface ItelefoneV2{
    numero: string;
}

interface INotificacaoV2{
    enviar(usuario: UsuarioV2): boolean;
}

interface UsuarioV2{
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string
}

abstract class NotificacaoV2{
    
    abstract enviar(): boolean;
}

class EmailV2 extends Notificacao implements INotificacaoV2, IEmailV2{

    nome: string;
    email: string;

    constructor(usuario:UsuarioV2){
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar(p0: { nome: string; email: string; telefone: string; }): boolean {
        console.log(`Eviando e-mail para o usuario ${this.email}`);
        return true;
    }
    
}


class SMSV2 extends Notificacao implements INotificacaoV2, ItelefoneV2{
    numero: string;

    constructor(usuario:UsuarioV2){
        super();
        this.numero = usuario.telefone;
    }
    enviar(p0: { nome: string; email: string; telefone: string; }): boolean {
        console.log(`Eviando SMS para o usuario ${this.numero}...`);
        return true;
    }
    
}

let usuarioV2: UsuarioV2 = {
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    telefone: "983839421"
}
const notificacao3 = new EmailV2(usuarioV2);
notificacao3.enviar({
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    telefone: "983839421"
});

const notificacao4 = new SMSV2(usuarioV2);
notificacao4.enviar({
    nome: "Otávia",
    email: "otavia@hcode.com.br",
    telefone: "98426584526"
});