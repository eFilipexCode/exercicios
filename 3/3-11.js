// Escreva um programa que solicite duas datas pelo teclado e imprima quantos dias se passaram entre
// elas. As datas podem ser digitadas em qualquer ordem.
// Para simplificar, considere que todos os meses possuem 30 dias.

function calculateDaysBetweenDates(date1, date2) {
    const day1 = date1[0];
    const month1 = date1[1];
    const year1 = date1[2];

    const day2 = date2[0];
    const month2 = date2[1];
    const year2 = date2[2];
    
    const yearsBetween = Math.abs(year1 - year2) * 365;
    const monthsBetween = Math.abs(month1 - month2) * 30;
    const daysBetween = Math.abs(day1 - day2);

    return daysBetween + monthsBetween + yearsBetween;
};

console.log(calculateDaysBetweenDates([1, 1, 1960], [1, 1, 1960]) === 0);
console.log(calculateDaysBetweenDates([1, 1, 1960], [02, 1, 1960]) === 1);
console.log(calculateDaysBetweenDates([23, 12, 2002], [27, 06, 2002]) === 184)
console.log(calculateDaysBetweenDates([23, 12, 2003], [23, 12, 2002]) === 365);