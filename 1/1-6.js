// VI -  O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo 
// de refeição. Escreva um algoritmo que leia o peso do prato montado 
// pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato. 

function calcPrato(kg) {
    const preco = kg * 12;
    return preco;
};

console.log(calcPrato(0.5) === 6);
console.log(calcPrato(2) === 24);
console.log(calcPrato(5) === 60);

console.log(calcPrato(0.5) !== 6);
console.log(calcPrato(3) !== 36);
console.log(calcPrato(10) !== 120);