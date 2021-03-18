// XXV - Calcule o volume de uma caixa d'água cilíndrica. 

function volumeCilindro(raio, altura) {
    const pi = 3.14;
    const volume = pi * (Math.pow(raio, 2) * altura);
    return Number(volume.toFixed(2));
};

console.log(volumeCilindro(3, 5) === 141.3);
console.log(volumeCilindro(12, 9) === 4069.44);
console.log(volumeCilindro(6, 18) === 2034.72);