// XXXVI - 36. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário,
// calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.

function calcSalario(salarioPago, salarioMinimo) {
    const medidaSalario = salarioPago / salarioMinimo;  
    return medidaSalario;
};

console.log(calcSalario(2000, 1000) === 2);
console.log(calcSalario(500, 1000) === 0.5);
console.log(calcSalario(4500, 1500) === 3);

console.log(calcSalario(4500, 1500) !== 3.5);
console.log(calcSalario(4500, 1500) !== 1);
console.log(calcSalario(4500, 1000) !== 4);
