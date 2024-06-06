interface Usuario2{
    nome: string;
    email: string;
    telefone: string;
}

abstract class Notificacao{
    
    abstract enviar(usuario: Usuario2): boolean;
}

class Email extends Notificacao{
    enviar(usuario: Usuario2): boolean {
        console.log(`Eviando e-mail para o usuario ${usuario.email}`);
        return true;
    }
    
}


class SMS extends Notificacao{
    enviar(usuario: Usuario2): boolean {
        console.log(`Eviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
    
}

const notificacao1 = new Email();
notificacao1.enviar({
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    telefone: "983839421"
});

const notificacao2 = new SMS();
notificacao2.enviar({
    nome: "Otávia",
    email: "otavia@hcode.com.br",
    telefone: "98426584526"
});