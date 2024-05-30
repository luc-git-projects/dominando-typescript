interface Categoria{
    nome: string;
    id: number;
    categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
    nome: "Front-end",
    id: 1
}

const backEnd: Categoria = {
    nome: "Back-end",
    id: 2,
}

interface Menu{
    categorias: Categoria[];
}

let menu: Menu = {
    categorias: [frontEnd, backEnd]
};

interface Todo{
    [indice:number]: string;
}

let minhasTarefas: Todo;
minhasTarefas = ["Estudar TypeScript", "Estudar JavaScript", "Estudar PHP 8"];
console.log(minhasTarefas[0])

