// XII - Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento,
//desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final.

function calcSalario(salario) {
    const aumento = salario + (salario * 0.15);
    const desconto = aumento - (aumento * 0.08);
    return `${salario}, ${aumento}, ${desconto.toFixed(2)}`;
};

console.log(calcSalario(100) === '100, 115, 105.80');
console.log(calcSalario(1250) === '1250, 1437.5, 1322.50');
console.log(calcSalario(35839) === '35839, 41214.85, 37917.66');
console.log(calcSalario(35839));
