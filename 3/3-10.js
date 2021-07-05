// Escreva um programa para verificar a validade de uma data. O programa pergunta o dia, mês e ano de
// uma data (separadamente em três variáveis inteiras) e imprime uma mensagem indicando se a data é
// válida ou não (devem ser considerados os anos bissextos).


function isValidDate(day, month, year) {
    // Referência de um ano bissexto
    const referenceYearForLeapYear = 1988;
    // Checa se é bissexto
    const isLeapYear = Math.abs(year - referenceYearForLeapYear) % 4 === 0;

    if (day > 31)
        return false;
    if (month > 12)
        return false;
    // Checa se há mais dias no fevereiro em um ano não bissexto
    if (day > 28 && month === 2 && !isLeapYear)
        return false;

    return true;
};

console.log(isValidDate(30, 02, 1988));
console.log(isValidDate(01, 01, 2000));
console.log(isValidDate(23, 12, 2012));
console.log(isValidDate(29, 2, 2012));
console.log(!isValidDate(32, 13, 2002));
console.log(!isValidDate(29, 2, 2021));
