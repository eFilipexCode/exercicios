//  Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
//3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
//aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
//A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
//suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
//mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
//Média de aproveitamento Conceito 

const notes = [
    'A',
    'B',
    'C',
    'D',
    'E',
];

function handleNotes(note) {
    if (note >= 90)
        return 0
    else if (note >= 75 && note < 90)
        return 1
    else if (note >= 60 && note < 75)
        return 2
    else if (note >= 40 && note < 60)
        return 3
    else if (note < 40)
        return 4
};

const calcMedia = (a, b, c, mediaExercises) => (a + (b * 2) + (c * 3) + mediaExercises) / 7;

function printMessage(id, a, b, c, mediaExercises, calcMedia, handleNotes) {
    const value = calcMedia(a, b, c, mediaExercises);
    const status = handleNotes(value);

    console.log(`${id} - ${a} ${b} ${c}. Media: ${mediaExercises}. Media de Aproveitamento: ${value}. Conceito: ${notes[status]}`)
};

printMessage(1, 1, 2, 3, 2,calcMedia, handleNotes);