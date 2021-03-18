// Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada
//ponto é um par ordenado (x,y).

function calcPar(x1, y1, x2, y2) {
    const diferencaX = Math.pow((x2 - x1), 2);
    const diferencaY = Math.pow((y2 - y1), 2);

    const resultado = Math.sqrt((diferencaX + diferencaY));
    return Number(resultado.toFixed(2));
};

console.log(calcPar(2, 1, 3, 2) === 1.41);
console.log(calcPar(9, -2, 2, 6) === 10.63);
console.log(calcPar(6, -1, 5, 5) === 6.08);

console.log(calcPar(1, 2, 3, 4) !== 2.83);
console.log(calcPar(4, 7, 9, 2) !== 7.07);
console.log(calcPar(0, 3, 4, 7) !== 5.66);