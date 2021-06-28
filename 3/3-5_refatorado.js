// Escreva um programa que leia três valores inteiros diferentes e:
// a) determine e imprima o menor entre eles;
// b) determine e imprima o maior número entre eles.

const getMin = (a, b) => a < b ? a : b;
const getMax = (a, b) => a > b ? a : b;

function handleValues(a, b, c) {
    return {
        least: getMin(getMin(a, b), c),
        greater: getMax(getMax(a, b), c)
    }
};

// testes da refatoracao
console.log(handleValues(1, 2 ,3).least === 1)
console.log(handleValues(1, 2 ,3).greater === 3)

console.log(handleValues(-1, 0, 1).least === -1)
console.log(handleValues(-1, 0, 1).greater === 1)

console.log(handleValues(10, 100, 1000).least === 10)
console.log(handleValues(10, 100, 1000).greater === 1000)

console.log(handleValues(10, 100, 1000).least === 1000)
console.log(handleValues(10, 100, 1000).greater === 100)

// testes anteriores
console.log(handleValues(1, 2, 3).greater === 3 && handleValues(1, 2, 3).least === 1);
console.log(handleValues(4, 2, 3).least === 2 && handleValues(4, 2, 3).greater === 4);
console.log(handleValues(1, 100, 1000).least === 1 && handleValues(1, 100, 1000).greater === 1000)
