// II - 2. Faça um algoritmo para calcular quantas ferraduras 
//são necessárias para equipar todos os
// cavalos comprados para um haras. 

function calcFerraduras(qtd) {
    const ferraduras = qtd * 4;
    return ferraduras;
};

console.log(calcFerraduras(10) === 40 ? true : false);
console.log(calcFerraduras(4) === 16 ? true : false);
console.log(calcFerraduras(24) === 96 ? true : false);

console.log(calcFerraduras(24) === 90 ? true : false);
console.log(calcFerraduras(9) === 40 ? true : false);
console.log(calcFerraduras(2) === 12 ? true : false);