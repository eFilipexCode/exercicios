// Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.A. contendo 10 valores.

function calculateArithmeticProgression(initial, r) {
    let paSequence = [];
    let aux = initial;
    for (let i = 0; i < 10; i++) {
        paSequence[i] = aux;
        aux = aux + r;
    };

    return {
        paSequence,
        lastValueForTesting: paSequence[paSequence.length - 1]
    }
};

console.log(calculateArithmeticProgression(1, 1).lastValueForTesting === 10);
console.log(calculateArithmeticProgression(3, 2).lastValueForTesting === 21);
console.log(calculateArithmeticProgression(1, 4).lastValueForTesting === 37);