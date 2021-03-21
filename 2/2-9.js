// - Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
//calcule seu peso ideal, utilizando as seguintes fórmulas: 

function handleSexInput(sex, height) {
    let weight;
    if (sex.toUpperCase() === 'M') 
        weight = menFormula(height);
    else
        weight = womenFormula(height);

    return weight;
};

function menFormula(height) {
    const coeficient = 72.7;
    const constant = 58;

    const weight = (coeficient * height).toFixed(2) - constant;
    return weight;
};

function womenFormula(height) {
    const coeficient = 62.1;
    const constant = 44.7;

    const weight = (coeficient * height) - constant;
    return weight;
};

console.log(handleSexInput('m', 1.70) === 65.59);
console.log(handleSexInput('f', 1.80) === 67.08);
console.log(handleSexInput('m', 1.90) === 80.13);