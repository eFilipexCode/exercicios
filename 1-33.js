// XXXIII - Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior +
//base menor)* altura)/2 ; 

function calcAreaTrapezio(baseMaior, baseMenor, altura) {
    const bases = baseMaior + baseMenor;
    const produtoBaseAltura = bases * altura;
    const area = produtoBaseAltura / 2;
    return area;
};

console.log(calcAreaTrapezio(8, 3, 5) === 27.5);
console.log(calcAreaTrapezio(6, 9, 4) === 30);