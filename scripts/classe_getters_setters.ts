class Permissao{

    constructor(private _nome: string, private _nivel: number){

    }

    get nome(): string{
        return this._nome.toUpperCase();
    }

    set nome(nome: string){

        if(nome.length < 5){
            throw new Error("O nome da permissão deve ter no mínimo 5  letras");
        }

        this._nome = nome;
    }

    get nivel(): number{
        return this._nivel;
    }

    set nivel(nivel){
        this._nivel = nivel;
    }
}

const permissao = new Permissao("Administrador", 1);
console.log(permissao.nome);


try {
    permissao.nome = "Adm";
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else {
        console.log("An error occurred");
    }
}

