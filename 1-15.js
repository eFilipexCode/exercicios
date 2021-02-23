// XV - Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um
//algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que
//Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para
//Carlos, R$33,00 para André e R$35,53 para Felipe. 

function racharConta(valor) {
    const parcela = valor / 3;
    const centavos = parcela.toFixed(2) - (parcela.toFixed(0) - 1);
    const valorDeFelipe = parcela + (centavos.toFixed(2) * 2);
    return `CARLOS = ${parcela.toFixed(0) - 1} ANDRE = ${parcela.toFixed(0) - 1} FELIPE = ${valorDeFelipe.toFixed(2)}`;
};

console.log(racharConta(101.53) === `CARLOS = 33 ANDRE = 33 FELIPE = 35.52`);
console.log(racharConta(94.63) === `CARLOS = 31 ANDRE = 31 FELIPE = 32.62`);