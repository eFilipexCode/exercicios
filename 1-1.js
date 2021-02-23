//I - A imobiliária Imóbilis vende apenas terrenos retangulares. 
//Faça um algoritmo para ler as dimensões 
//de um terreno e depois exibir a área do terreno. 

function calcArea(height, width) {
    const area = height * width;
    return area;
};

console.log(calcArea(3, 4) === 12 ? true : false);
console.log(calcArea(6, 4) === 24 ? true : false); 
console.log(calcArea(12, 5) === 60 ? true : false);

console.log(calcArea(3, 4) === 10 ? true : false);
console.log(calcArea(3, 4) === 112 ? true : false);
console.log(calcArea(3, 4) === 1.4 ? true : false);