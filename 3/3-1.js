// Escreva um programa que pergunte dois números e indique se são iguais ou diferentes. Caso sejam
// diferentes, mostre o maior e o menor, nesta ordem.

function checkNumbers(val1, val2) {
    if (val1 !== val2) {
        return val1 > val2 ? [val1, val2] : [val2, val1];
    };

    return val1 === val2;
};

console.log(checkNumbers(1, 1) === true);
console.log(checkNumbers(1, 0)[0] === 1);
console.log(checkNumbers(0, 1)[0] === 1);

console.log(checkNumbers(1, 1) === false);
console.log(checkNumbers(1, 0)[0] === 0);
console.log(checkNumbers(0, 1)[0] === 0);