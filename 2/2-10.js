// O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
//umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
// com a tabela abaixo. 

const stats = [
    'Abaixo do peso',
    'Peso normal',
    'Acima do peso',
    'Obeso'
];

function calcImc(weight, height) {
    const squaredHeight = Math.pow(height, 2);
    const imc = weight / squaredHeight;

    return imc.toFixed(2);
};

function printStats(statsIndex) {
    return console.log(stats[statsIndex]);
};

function handleInfo(weight, height) {
    const imc = calcImc(weight, height);
    let statsIndex;
    if (imc < 18.5)
        statsIndex = 0;
    else if (imc >= 18.5 && imc < 25)
        statsIndex = 1;
    else if (imc >= 25 && imc < 30) 
        statsIndex = 2;
    else if (imc >= 30)
        statsIndex = 3;

    return printStats(statsIndex);
};

console.log(handleInfo(65, 1.75));
console.log(handleInfo(65, 1.75) == stats[1]);
console.log(handleInfo(65, 1.95) == stats[0]);