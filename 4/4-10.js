// Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

function calculateFactorial(n) {
    let i = result = 1;
    while(i <= n) {
        result = result * i;
        i++;
    };

    return result;
};

console.log(calculateFactorial(5) === 120);
console.log(calculateFactorial(0) === 1);
console.log(calculateFactorial(10) === 3628800)