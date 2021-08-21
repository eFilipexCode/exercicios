// Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.

function calculateGeometricProgression(initial, r) {
    const pgSequence = [];
    let aux = initial;
    for (let i = 0; i < 10; i++) {
        pgSequence[i] = aux;
        aux = aux * r;
    };
    return {
        pgSequence,
        lastValueForTesting: pgSequence[pgSequence.length - 1],
    };
};

console.log(calculateGeometricProgression(1, 1).lastValueForTesting === 1);
console.log(calculateGeometricProgression(2, 2).lastValueForTesting === 1024);
console.log(calculateGeometricProgression(9, 1).lastValueForTesting === 9);