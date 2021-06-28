// Escreva um programa que pergunte dois números e indique se são iguais ou diferentes. Caso sejam
// diferentes, mostre o maior e o menor, nesta ordem.

function checkNumbers(val1, val2) {
    if (val1 != val2)
        return [val1, val2].sort((a , b) => b - a);

    return [val1];
};

console.log(checkNumbers(1, 1)[0] === 1);
console.log(checkNumbers(1, 0)[0]=== 1);
console.log(checkNumbers(2, 1)[0] === 2);

console.log(checkNumbers(9, 1)[0] === 1);
console.log(checkNumbers(-1, 1)[0] === -1);
console.log(checkNumbers(0, 1)[0] === 0);