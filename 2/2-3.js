// - Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar

function isEven(integer) {
    const resto = integer % 2;

    if (resto === 0) 
        return true;
    else  
        return false;
};

console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(454634685468454856784870));

console.log(isEven(3));
console.log(isEven(77))
console.log(isEven(403));