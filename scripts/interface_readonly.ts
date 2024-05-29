interface ICurso{

    readonly titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

/**
 * Da erro porque a propriedade titulo é readonly
 * curso.titulo = "PHP 8";
 */


console.log(curso);