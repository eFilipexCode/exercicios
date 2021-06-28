// Escreva um programa que leia três valores inteiros diferentes e:
// a) determine e imprima o menor entre eles;
// b) determine e imprima o maior número entre eles.

let greater,
    least; 

function setGreaterAndLeastValues(a, b, c) {
    if (a > b) {
        greater = b > c ? a : (a > c ? a : c);
        least = b > c ? c : b;
        return true;
    };
    return false;
};

function handleValues(a, b, c) {
    setGreaterAndLeastValues(a, b, c) || setGreaterAndLeastValues(c, b, a) || setGreaterAndLeastValues(b, a, c);
    return {
        greater,
        least
    }
};

console.log(handleValues(1, 2, 3).greater === 3 && handleValues().least === 1);
console.log(handleValues(4, 2, 3).least === 2 && handleValues(4, 2, 3).greater === 4);
console.log(handleValues(1, 100, 1000).least === 1 && handleValues(1, 100, 1000).greater === 1000);
