interface IBancoDedados{
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BancoDeDados{

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySql";
    static TIPO_SQLSERVER = "SQL Server";
    

    constructor(private ip: string, private usuario: string, private senha: string, private tipoBanco: string){
    }

    static factory(parametros: IBancoDedados){

        if([BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)){
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco );
    }
}

const conexaoBanco = BancoDeDados.factory({
    ip: BancoDeDados.TIPO_MYSQL,
    usuario: "root",
    senha: "123",
    tipoBanco: BancoDeDados.TIPO_MYSQL
});

console.log(conexaoBanco)