interface IEmailV2{
    nome: string;
    email: string;
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

abstract class NotificacaoV2 implements INotificacaoV2{
    
    abstract enviar(usuario: Usuario2): boolean;
}

class EmailV2 extends Notificacao{
    enviar(usuario: Usuario2): boolean {
        console.log(`Eviando e-mail para o usuario ${usuario.email}`);
        return true;
    }
    
}


class SMSV2 extends Notificacao{
    enviar(usuario: Usuario2): boolean {
        console.log(`Eviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
    
}

const notificacao3 = new EmailV2();
notificacao1.enviar({
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    telefone: "983839421"
});

const notificacao4 = new SMSV2();
notificacao2.enviar({
    nome: "Otávia",
    email: "otavia@hcode.com.br",
    telefone: "98426584526"
});