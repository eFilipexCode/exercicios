//  Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
//3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
//aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
//A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
//suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
//mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
//Média de aproveitamento Conceito 

const notes = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
};

function handleNotes(note) {
    if (note >= 90)
        return notes.A
    else if (note >= 75 && note < 90)
        return notes.B
    else if (note >= 60 && note < 75)
        return notes.C
    else if (note >= 40 && note < 60)
        return notes.D
    else if (note < 40)
        return notes.C
};

const calcMedia = (a, b, c, mediaExercises) => (a + (b * 2) + (c * 3) + mediaExercises) / 7;

console.log(habdleNotes(calcMedia(1, 1, 1, 1)) === notes.E);
