//I - A imobiliária Imóbilis vende apenas terrenos retangulares. 
//Faça um algoritmo para ler as dimensões 
//de um terreno e depois exibir a área do terreno. 

function calcArea(height, width) {
    const area = height * width;
    return area;
};

console.log(calcArea(3, 4) === 12);
console.log(calcArea(6, 4) === 24); 
console.log(calcArea(12, 5) === 60);

console.log(calcArea(3, 4) !== 10);
console.log(calcArea(3, 4) !== 112);
console.log(calcArea(3, 4) !== 1.4);