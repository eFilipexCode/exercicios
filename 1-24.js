// XXIV - Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá.
//Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X
//litros de refresco (informados pelo usuário). 

function litros(litros) {
    const agua = litros / 8;
    const suco = litros / 2;
    return `AGUA = ${agua}L SUCO = ${suco}L`;
};

console.log(litros(24) === `AGUA = 3L SUCO = 12L`);