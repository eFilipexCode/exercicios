// XXIII - Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu
//poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total
//economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda
//moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. 

function teoremaTales(sombraPredio, sombraPessoa, alturaPessoa) {
    const razaoSombras = sombraPredio / sombraPessoa;
    const alturaPredio = alturaPessoa * razaoSombras;
    return Number(alturaPredio.toFixed(2));
};

console.log(teoremaTales(20, 4, 1.50) === 7.5);
console.log(teoremaTales(40, 4, 2) === 20);
console.log(teoremaTales(16, 5, 1.75) === 5.6);