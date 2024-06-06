class Cadastro{

    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date){
        this.nome = nome;
        this.nascimento = nascimento;
    }

    toString(): string{
        return `Nome: ${this.nome}, Nascimento: ${this.nascimento}`;
    }
}

class Cliente extends Cadastro{

    email: string;
    empresa: string

    constructor(nome: string, nascimento: Date, email: string, empresa: string){
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }

    toString(): string{
        return `${super.toString()}, Email: ${this.email}, Empresa: ${this.empresa}`;
    }
}

const clienteJoao = new Cliente("João", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao.toString());