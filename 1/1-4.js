// IV -  Escreva um algoritmo para ler o nome e a idade de uma 
// pessoa, e exibir quantos dias de vida ela possui. 
//Considere sempre anos completos, e que um ano possui 365 dias. 
//Ex: uma pessoa com 19 anos possui 6935 dias de vida; 
//veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS 

function calcDiasDeVida(name, age) {
    const totalDays = age * 365;
    return { name, totalDays };
};

function showTotalDays(name, days) {
    return `'${name.toUppercase()}, VOCÊ JÁ VIVEU ${days} DIAS'`;
}

console.log(calcDiasDeVida('Maria', 19).totalDays === 6935);
console.log(calcDiasDeVida('Marcos', 12).totalDays === 4380);
console.log(calcDiasDeVida('Ulisses', 51).totalDays === 18615);

console.log(calcDiasDeVida('Ulisses', 51).totalDays !== 18615);
console.log(calcDiasDeVida('Táles', 5).totalDays !== 1825);
console.log(calcDiasDeVida('Antônio', 99).totalDays !== 36135);
