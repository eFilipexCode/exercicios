// IV -  Escreva um algoritmo para ler o nome e a idade de uma 
// pessoa, e exibir quantos dias de vida ela possui. 
//Considere sempre anos completos, e que um ano possui 365 dias. 
//Ex: uma pessoa com 19 anos possui 6935 dias de vida; 
//veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS 

function calcDiasDeVida(name, age) {
    const totalDays = age * 365;
    return `${name.toUpperCase()}, VOCÊ JÁ VIVEU ${totalDays} DIAS`;
};

console.log(calcDiasDeVida('Maria', 19) === 'MARIA, VOCÊ JÁ VIVEU 6935 DIAS');
console.log(calcDiasDeVida('Marcos', 12) === 'MARCOS, VOCÊ JÁ VIVEU 4380 DIAS');
console.log(calcDiasDeVida('Ulisses', 51) === 'ULISSES, VOCÊ JÁ VIVEU 18615 DIAS');

console.log(calcDiasDeVida('Ulisses', 51) !== 'ULISSES, VOCÊ JÁ VIVEU 18615 DIAS');
console.log(calcDiasDeVida('Táles', 5) !== 'TÁLES, VOCÊ JÁ VIVEU 1825 DIAS');
console.log(calcDiasDeVida('Antônio', 99) !== 'ANTÔNIO, VOCÊ JÁ VIVEU 36135 DIAS');
