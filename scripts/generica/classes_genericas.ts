abstract class Entidade{
    constructor(protected _id: number, protected _createdAt: Date, protected _updatedAt: Date ){
    }

    get id(): number{
        return this._id;
    }

    get createdAt(): Date{
        return this._createdAt;
    }

    get updateAt(): Date{
        return this._updatedAt;
    }

    set id(id: number){
        this._id = id;
    }

    set createdAt(createdAt: Date){
        this._createdAt = createdAt;
    }
    
    set updateAt(updateAt: Date){
        this._updatedAt = updateAt;
    }

    toString(): string{
        return `ID: ${this._id}, 
        Criado em: ${this._createdAt.getUTCDay()}/${this._createdAt.getUTCMonth() + 1}/${this._createdAt.getUTCFullYear()}, 
        Atualizado em: ${this._updatedAt.getUTCDay()}/${this._updatedAt.getUTCMonth() + 1}/${this._updatedAt.getUTCFullYear()}`;
    }
}

class Usuario extends Entidade{ 

    constructor(protected _id: number, protected _createdAt: Date, protected _updatedAt: Date, private _nome: string, private _email: string, private _senha: string){
        super(_id, _createdAt, _updatedAt);
    }

    get nome(): string{
        return this._nome;
    }

    get email(): string{
        return this._email;
    }

    get senha(): string{
        return this._senha;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    set email(email: string){
        this._email = email;
    }

    set senha(senha: string){
        this._senha = senha;
    }

    toString(): string {
        return `${super.toString()}, Nome: ${this._nome}, E-mail: ${this._email}, Senha: ${this._senha}`;
    }
    
}

class Categoria extends Entidade{
    constructor(protected _id: number, protected _createdAt: Date, protected _updatedAt: Date, private _nome: string){
        super(_id, _createdAt, _updatedAt);
    }

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    toString(): string {
        return `${super.toString()}, Nome; ${this._nome}`;
    }
}

class GenericRepository<E>{

    salvar(dados: E): E{
        console.log("Criando um registro");
        return dados;
    }

    pesquisar(id: number): E{
        console.log(`Dados do registro de ID ${id}`);
        return {} as E;
    }

    alterar(id: number, dadosAtualizacao: E): E{
        console.log(`Editando dados do ID ${id}`);
        return dadosAtualizacao;
    }

    excluir(id: number): boolean{
        console.log(`Excluindo redistro do  ID ${id}`)
        return true;
    }
}

class UsuarioRepository extends GenericRepository<Usuario>{

}

class CategoriaRepository extends GenericRepository<Categoria>{

}

const usuario = new Usuario(12, new Date("2016-07-21"), new Date("2021-04-13"), "Luciano", "luc.otavio@gmail.com", "4896547");
const usuarioRepository = new UsuarioRepository();
const usuarioCadastrado: Usuario = usuarioRepository.salvar(usuario);

console.log(usuarioCadastrado.toString());


const categoria: Categoria = new Categoria(87, new Date("2021-04-11"), new Date("2023-11-21"), "Eletrodomestico");
const categoriaRepository = new CategoriaRepository();
const categoriaCadastrada: Categoria = categoriaRepository.salvar(categoria);

console.log(categoriaCadastrada.toString());


