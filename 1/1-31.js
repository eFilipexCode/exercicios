// XXXI - Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
//a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
//b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado.

function calcularPeso(peso) {
    const pesoA = peso + (peso * 0.15);
    const pesoB = peso - (peso * 0.2);
    return `A = ${pesoA}kg B = ${pesoB}kg`;
};

console.log(calcularPeso(60) === 'A = 69kg B = 48kg');
console.log(calcularPeso(75) === 'A = 86.25kg B = 60kg');