// XXII - Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu
//poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total
//economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda
//moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. 

function calcularValor(moeda1, moeda5, moeda10, moeda25, moeda50, moeda1000) {
    const valorMoeda1 = moeda1 * 0.01;
    const valorMoeda5 = moeda5 * 0.05;
    const valorMoeda10 = moeda10 * 0.10;
    const valorMoeda25 = moeda25 * 0.25;
    const valorMoeda50 = moeda50 * 0.50;
    const valorTotal = valorMoeda1 + valorMoeda5 + valorMoeda10 + valorMoeda25 + valorMoeda50 + moeda1000;
    return `R$ ${valorTotal.toFixed(2)}`;
};

console.log(calcularValor(1, 1, 1, 1, 1, 1) === 'R$ 1.91');
console.log(calcularValor(2, 2, 2, 2, 2, 2) === 'R$ 3.82');
console.log(calcularValor(2, 5, 2, 6, 7, 0) === 'R$ 5.47');