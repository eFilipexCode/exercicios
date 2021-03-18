// V -. Um motorista deseja colocar no seu tanque X reais de gasolina. 
//Escreva um algoritmo para ler o preço do litro da gasolina e o 
// valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque. 

function calcGasolina(price, money) {
    const gasolina = money / price;
    return Number(gasolina.toFixed(2));
}; 


console.log(calcGasolina(5, 20) === 4);
console.log(calcGasolina(4.5, 40) === 8.89);
console.log(calcGasolina(3.5, 75) === 21.43);

console.log(calcGasolina(3, 15) !== 5);
console.log(calcGasolina(3, 45) !== 15);
console.log(calcGasolina(5, 15) !== 3);