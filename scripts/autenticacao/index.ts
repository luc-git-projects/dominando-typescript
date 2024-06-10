namespace Autenticacao{

    export interface IUsuario{
        email: string;
        senha: string
    }

    export interface ICadastro{
        nome: string;
        email: string;
        senha: string;
        dataNascimento: Date;
    }
    
    export class LoginRegistro{
        login(usuario: IUsuario): IUsuario{
            return usuario;
        }

        registro(novoUsuario: ICadastro): ICadastro{
            return novoUsuario;
        }
    }

    export class Recuperacao{
        
        recuperarSenha(): string{
            return "Enviando e-mail para recuperação de senha";
        }

        recuperarUsuario(){
            return "Enviando e-mail para recuperação de nome de usuario";
        }
    }
}