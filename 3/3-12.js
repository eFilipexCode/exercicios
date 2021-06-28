// Escreva um programa que converta uma data em um valor inteiro que indica o número de dias
// existentes do dia 01/01/1960 até a data informada.

function convertDays(dateString, splitCharacter = '/') {
    const timeUnities = dateString.split(splitCharacter);
    
    const daysPassed = Number(timeUnities[0]) - 1;
    const monthsPassed = Number(timeUnities[1]) - 1;
    const yearsPassed = Number(timeUnities[2]) - 1960;

    return daysPassed + (monthsPassed * 30) + (yearsPassed * 365);
};

console.log(convertDays('02/01/1960', '/') === 1);
console.log(convertDays('02-02-1960', '-') === 31);
console.log(convertDays('02/02/1961') === 396);