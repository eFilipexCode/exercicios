// XXIX - 29. Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço,
//sabendo-se que este sofreu um desconto de 10%.

function desconto(preco) {
    const percentual = 0.1;
    const desconto = preco * percentual;
    const valorFinal = preco - desconto;
    return valorFinal;
};

console.log(desconto(100) === 90);
console.log(desconto(600) === 540);
console.log(desconto(1234) === 1110.6);