// XXVIII - 28. Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas,
// considerando peso 2 para a primeira nota e peso 3 para a segunda nota.

function media(notaX, notaY) {
    const notaPesoX = notaX * 2;
    const notaPesoY = notaY * 3;
    const media = (notaPesoX + notaPesoY) / 5;
    return Number(media.toFixed(2));
};

console.log(media(3, 3) === 3);
console.log(media(9, 7) === 7.8);
console.log(media(10, 6) === 7.6);