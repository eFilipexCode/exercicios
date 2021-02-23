// 13. Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
//CENTENA = x
//DEZENA = x
//UNIDADE = x

function numberDecomposer(number) {
    const numberInString = String(number);
    const centena = numberInString[0];
    const dezena = numberInString[1];
    const unidade = numberInString[2];
    return `CENTENA = ${centena} DEZENA = ${dezena} UNIDADE = ${unidade}`;
};

console.log(numberDecomposer(471) === 'CENTENA = 4 DEZENA = 7 UNIDADE = 1');
console.log(numberDecomposer(205) === 'CENTENA = 2 DEZENA = 0 UNIDADE = 5');
console.log(numberDecomposer(357) === 'CENTENA = 3 DEZENA = 5 UNIDADE = 7');

console.log(numberDecomposer(450) !== 'CENTENA = 4 DEZENA = 5 UNIDADE = 0');
console.log(numberDecomposer(205) !== 'CENTENA = 2 DEZENA = 0 UNIDADE = 5');
console.log(numberDecomposer(604) !== 'CENTENA = 6 DEZENA = 0 UNIDADE = 4');