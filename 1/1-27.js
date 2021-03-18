// XXVII - 27. Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número
//pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se
//preocupar com validações. 

function divisao(x, y) {
    const quot = x / y;
    return Number(quot.toFixed(2));
};

console.log(divisao(5, 2) === 2.5);
console.log(divisao(4, 3) === 1.33);
console.log(divisao(123456, 77) === 1603.32);