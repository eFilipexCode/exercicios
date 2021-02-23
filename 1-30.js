// XXX - 30. Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um
//algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a
//comissão e o salário final do funcionário

function calcComissao(salarioFixo, valorEmVendas) {
    const percentual = 0.04;
    const comissao = valorEmVendas * percentual;
    const salarioFinal = comissao + salarioFixo;
    return `SALARIO FINAL = ${salarioFinal} COMISSAO = ${comissao}`;
};

console.log(calcComissao(1075, 9000) === `SALARIO FINAL = 1435 COMISSAO = 360`);
console.log(calcComissao(2000, 645) === `SALARIO FINAL = 2025.8 COMISSAO = 25.8`);