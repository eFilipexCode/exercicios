// XVIII -  A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra.
// Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado
//funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de
//impostos. 

function calcSalario(horas) {
    // 160 horas p/ mês
    if (horas <= 160) {
        const salario = horas * 10;
        const liquido = salario - (salario * 0.1);
        return `BRUTO = ${salario} LIQUIDO = ${liquido}`;
    } else {
        const horasExtras = horas - 160;
        const dinheiroExtra = horasExtras * 15;
        const bruto = 1600 + dinheiroExtra;
        const liquido = bruto - (bruto * 0.1);
        return `BRUTO = ${bruto} LIQUIDO = ${liquido}`;
    };
};

console.log(calcSalario(160) === 'BRUTO = 1600 LIQUIDO = 1440');
console.log(calcSalario(170) === 'BRUTO = 1750 LIQUIDO = 1575');