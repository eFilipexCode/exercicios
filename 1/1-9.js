// IX - Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo
//vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a
//quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina
// informe quanto será o valor arrecadado. 

function calcValor(qtdP, qtdM, qtdG) {
    const valorP = qtdP * 10;
    const valorM = qtdM * 12;
    const valorG = qtdG * 15;

    const valorFinal = valorP + valorM + valorG;
    return valorFinal;
};

console.log(calcValor(1, 1, 1) === 37);
console.log(calcValor(3, 4, 5) === 153);
console.log(calcValor(9, 14, 26) === 648);

console.log(calcValor(3, 7, 12) !== 294);
console.log(calcValor(1, 2, 3) !== 79);
console.log(calcValor(3, 2, 1) !== 69);