// VIII - Faça um algoritmo para ler três notas de um aluno em uma 
// disciplina e imprimir a sua média ponderada 
// (as notas tem pesos respectivos de 1, 2 e 3).

function calcMedia(x, y, z) {
    const dividendo = (x * 1) + (y * 2) + (z * 3);
    const divisor = 1 + 2 + 3;
    const media = (dividendo / divisor).toFixed(2);
    return Number(media);
};

console.log(calcMedia(1, 2, 3) === 2.33);
console.log(calcMedia(6, 7, 9) === 7.83);
console.log(calcMedia(10, 3, 7) === 6.17);

console.log(calcMedia(5, 4, 8) !== 6.17);
console.log(calcMedia(2, 3, 5) !== 3.83);
console.log(calcMedia(6, 2, 9) !== 6.17);