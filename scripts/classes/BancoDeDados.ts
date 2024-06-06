interface IBancoDedados{
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

export class BancoDeDados{

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySql";
    static TIPO_SQLSERVER = "SQL Server";
    

    constructor(private ip: string, private usuario: string, private senha: string, private tipoBanco: string){
    }

    static factory(parametros: IBancoDedados){

        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco );
    }
}