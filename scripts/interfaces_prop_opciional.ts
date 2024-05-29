interface IProduto{
    nome: string;
    preco: number;
    // propriedade opcional
    descricao?: string;
    dataValidade: Date;
}

const notebook: IProduto = {
    nome: "Notebook",
    preco: 2000,
    descricao: "mmeu notebook superpotente",
    dataValidade: new Date(2022, 11, 1)
}

const videoGame: IProduto = {
    nome: "Playstation 5 ",
    preco: 5000,
    dataValidade: new Date(2023, 7, 14)
}