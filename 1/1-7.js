// VII -  Entrar com o dia e o mês de uma data e informar quantos dias se passaram 
//desde o início do ano. Esqueça a questão dos anos bissextos e considere sempre 
//que um mês possui 30 dias. 

function calcDias(day, month) {
    // const daysPreviousMonths = (month - 1) * 30;
    // const total = daysPreviousMonths + day;
    // return total;

    return (month + 1) * 30 - day;
};

console.log(calcDias(30, 1) === 30);
console.log(calcDias(3, 4) === 93);
console.log(calcDias(5, 1) === 5);
console.log(calcDias(30, 9) === 270);

console.log(calcDias(20, 12) !== 350);
console.log(calcDias(1, 6) !== 151);
console.log(calcDias(1, 2) !== 31);