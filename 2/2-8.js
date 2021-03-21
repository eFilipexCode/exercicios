// - Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
// decrescente.

function unshuffleValues(a, b, c) {
    const numbers = [];
    if (a < b < c) {
        numbers[0] = a;
        numbers[1] = b;
        numbers[2] = c;
    } else if (a < c < b) {
        numbers[0] = a;
        numbers[1] = c;
        numbers[2] = b;
    } else if (b < a < c) {
        numbers[0] = b;
        numbers[1] = a;
        numbers[2] = c;
    } else if (b < c < a) {
        numbers[0] = b;
        numbers[1] = c;
        numbers[2] = a;
    } else if (c < a < b) {
        numbers[0] = c;
        numbers[1] = a;
        numbers[2] = b;
    } else {
        numbers[0] = c;
        numbers[1] = a;
        numbers[2] = b;
    }
    return numbers;
};

console.log(unshuffleValues(1, 2, 3));
console.log(unshuffleValues(3, 2, 1));