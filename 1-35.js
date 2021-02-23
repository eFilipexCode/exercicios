// XXXV - Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A =
//(diagonal_maior * diagonal_menor)/2; 

function areaLosango(diagonalMenor, diagonalMaior) {
    const produtoDiagonais = diagonalMaior * diagonalMenor;
    return produtoDiagonais / 2;
};

console.log(areaLosango(1, 6) === 3);
console.log(areaLosango(3, 6) === 9);