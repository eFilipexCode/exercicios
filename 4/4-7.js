// Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.

function multiplicationTable(n) {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i * n;
    };

    return {
        test: sum
    };
};

console.log(multiplicationTable(0).test === 0);
console.log(multiplicationTable(1).test === 55);
console.log(multiplicationTable(10).test === 550);