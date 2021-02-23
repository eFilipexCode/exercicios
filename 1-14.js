// XIV - Calcule a área de uma pizza que possui um raio R (pi=3.14). 

function calcArea(raio) {
    const pi = 3.14;
    const area = pi * Math.pow(raio, 2);
    return area.toFixed(2);
};

console.log(calcArea(3) == 28.26);
console.log(calcArea(5.5) == 94.98);
console.log(calcArea(23) == 1661.06);