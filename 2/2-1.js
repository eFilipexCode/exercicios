// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor 
//que C

function checkNumbers(a, b, c) {
    if (a + b < c) {
        printNumber(`${a} + ${b} < ${c}`);
        return true;
    } else {
        return false;
    }
};

function printNumber(string) {
    console.log(string);
};

console.log(!!checkNumbers(2, 3, 6));
console.log(!!checkNumbers(6, 9, 18));
console.log(!!checkNumbers(123, 400, 960));

console.log(!!checkNumbers(3, 4, 2));
console.log(!!checkNumbers(3, 5, 1));
console.log(!!checkNumbers(0, 4, 2));