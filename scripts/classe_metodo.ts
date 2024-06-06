class Professor{
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string{
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha matéria é ${this.materia}`;
    }

    dizerNotas(...notas: number[]): number{
        const notasTotal = notas.reduce((total, nota)=> total + nota, 0);
        return notasTotal / notas.length;
    }
}

const gluacio = new Professor("Glaucio Daniel", 45, "DBA");
console.log(gluacio.seApresentar());

const joaoRangel = new Professor("João Rangel", 25, "typeSccript");
console.log(joaoRangel.seApresentar());
console.log(joaoRangel.dizerNotas(8, 10, 5.5, 7.7));
