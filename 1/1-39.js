function calcSalary(money, c1, c2) {
    const contaEMulta1 = c1 + (c1 * 0.02);
    const contaEMulta2 = c2 + (c2 * 0.02);
    const restante = money - contaEMulta1 - contaEMulta2;

    return restante;
}

console.log(calcSalary(1200, 200, 120) == 873.6);
console.log(calcSalary(1300, 200, 120) == 973.6);
console.log(calcSalary(1200, 150, 120) == 924.6);

console.log(calcSalary(1200, 150, 150) == 900);
console.log(calcSalary(1200, 120, 120) == 950);
console.log(calcSalary(1300, 150, 120) == 1030);