interface Modelo{
    id: number;
    created_at: number;
    updateAt: number
}

interface IPessoa extends Modelo{
    id:number;
    idade?: number;
}

interface Usuario extends IPessoa{
    nome: string;
    email: string;
    senha: string;
    id: number;
}

const joao: Usuario = {
    id: 1,
    nome: "João",
    email: "email",
    senha: "senha",
    idade: 20,
    created_at: new Date().getTime(),
    updateAt: new Date().getTime()
}

